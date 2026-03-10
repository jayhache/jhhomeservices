import PDFDocument from "pdfkit";
import type { Readable } from "stream";

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
  const doc = new PDFDocument({ margin: 50 });
  const chunks: Buffer[] = [];

  return new Promise((resolve, reject) => {
    doc.on("data", (chunk: Buffer) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    doc
      .fontSize(20)
      .fillColor("#1E3A8A")
      .text("John Henry Home Services LLC", { align: "left" });

    doc
      .moveDown(0.5)
      .fontSize(10)
      .fillColor("#444")
      .text("Fully insured handyman, painting & small projects", {
        align: "left"
      })
      .text("Serving Somerville, Medford, Cambridge & nearby towns in MA");

    doc
      .moveDown()
      .fontSize(12)
      .fillColor("#000")
      .text("Quote Request Summary", { underline: true });

    doc
      .moveDown()
      .fontSize(10)
      .text(`Name: ${payload.name}`)
      .text(`Email: ${payload.email}`)
      .text(`Phone: ${payload.phone}`)
      .text(`City: ${payload.city}`)
      .text(`Service type: ${payload.serviceType}`)
      .text(
        `Preferred timing: ${
          payload.preferredTiming || "Not specified"
        }`
      )
      .text(`Budget: ${payload.budget || "Not specified"}`);

    doc.moveDown().fontSize(11).text("Project details:", { underline: true });
    doc.moveDown().fontSize(10).text(payload.details, {
      width: 500
    });

    doc.moveDown().fontSize(11).text("Estimate notes:", { underline: true });
    doc
      .moveDown(0.5)
      .fontSize(9)
      .fillColor("#555")
      .text(
        "This PDF is a draft template for your internal use. No pricing has been set yet. " +
          "After reviewing the project details and, if needed, visiting the property, " +
          "you will send the client a formal written estimate with pricing and terms.",
        { width: 500 }
      );

    doc.moveDown().fontSize(9).text("Internal checklist:", { underline: true });
    doc
      .moveDown(0.5)
      .circle(60, doc.y + 4, 2)
      .fill("#1E3A8A")
      .fillColor("#000")
      .text(" Visit site / confirm scope", 70, doc.y - 4);

    doc
      .moveDown(0.5)
      .circle(60, doc.y + 4, 2)
      .fill("#1E3A8A")
      .fillColor("#000")
      .text(" Confirm materials & lead time", 70, doc.y - 4);

    doc
      .moveDown(0.5)
      .circle(60, doc.y + 4, 2)
      .fill("#1E3A8A")
      .fillColor("#000")
      .text(" Prepare and send written estimate", 70, doc.y - 4);

    doc.end();
  });
}

