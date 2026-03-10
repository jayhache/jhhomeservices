import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

export type QuotePayload = {
  name: string;
  email: string;
  phone: string;
  city: string;
  serviceType: string;
  details: string;
  preferredTiming?: string;
  budget?: string;
};

export async function generateQuotePdf(
  payload: QuotePayload
): Promise<Buffer> {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4 in points

  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const margin = 50;
  let y = 800;

  const drawText = (
    text: string,
    options: { bold?: boolean; size?: number; color?: [number, number, number] } = {}
  ) => {
    const size = options.size ?? 11;
    const font = options.bold ? fontBold : fontRegular;
    const color = options.color ? rgb(...options.color) : rgb(0, 0, 0);

    const textWidth = font.widthOfTextAtSize(text, size);
    const maxWidth = page.getWidth() - margin * 2;

    if (textWidth <= maxWidth) {
      page.drawText(text, { x: margin, y, size, font, color });
      y -= size + 4;
    } else {
      const words = text.split(" ");
      let line = "";
      for (const word of words) {
        const testLine = line ? `${line} ${word}` : word;
        const testWidth = font.widthOfTextAtSize(testLine, size);
        if (testWidth > maxWidth) {
          page.drawText(line, { x: margin, y, size, font, color });
          y -= size + 4;
          line = word;
        } else {
          line = testLine;
        }
      }
      if (line) {
        page.drawText(line, { x: margin, y, size, font, color });
        y -= size + 4;
      }
    }
  };

  // Header
  drawText("John Henry Home Services LLC", {
    bold: true,
    size: 18,
    color: [0.118, 0.227, 0.541]
  });
  drawText("Fully insured handyman, painting & small projects", {
    size: 10,
    color: [0.267, 0.267, 0.267]
  });
  drawText("Serving Somerville, Medford, Cambridge & nearby towns in MA", {
    size: 10,
    color: [0.267, 0.267, 0.267]
  });

  y -= 10;
  drawText("Quote Request Summary", { bold: true, size: 12 });

  y -= 4;
  drawText(`Name: ${payload.name}`, { size: 10 });
  drawText(`Email: ${payload.email}`, { size: 10 });
  drawText(`Phone: ${payload.phone}`, { size: 10 });
  drawText(`City: ${payload.city}`, { size: 10 });
  drawText(`Service type: ${payload.serviceType}`, { size: 10 });
  drawText(
    `Preferred timing: ${payload.preferredTiming || "Not specified"}`,
    { size: 10 }
  );
  drawText(`Budget: ${payload.budget || "Not specified"}`, { size: 10 });

  y -= 6;
  drawText("Project details:", { bold: true, size: 11 });
  drawText(payload.details, { size: 10 });

  y -= 6;
  drawText("Estimate notes:", { bold: true, size: 11 });
  drawText(
    "This PDF is a draft template for your internal use. No pricing has been set yet. " +
      "After reviewing the project details and, if needed, visiting the property, " +
      "you will send the client a formal written estimate with pricing and terms.",
    { size: 9, color: [0.333, 0.333, 0.333] }
  );

  y -= 6;
  drawText("Internal checklist:", { bold: true, size: 10 });
  drawText("• Visit site / confirm scope", { size: 9 });
  drawText("• Confirm materials & lead time", { size: 9 });
  drawText("• Prepare and send written estimate", { size: 9 });

  const pdfBytes = await pdfDoc.save();
  return Buffer.from(pdfBytes);
}

