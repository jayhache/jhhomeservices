import { NextResponse } from "next/server";
import { sendQuoteEmails } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const city = String(formData.get("city") || "").trim();
    const serviceType = String(formData.get("serviceType") || "").trim();
    const details = String(formData.get("details") || "").trim();
    const preferredTiming = String(formData.get("preferredTiming") || "").trim();
    const budget = String(formData.get("budget") || "").trim();

    if (!name || !email || !phone || !city || !serviceType || !details) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await sendQuoteEmails({
      name,
      email,
      phone,
      city,
      serviceType,
      details,
      preferredTiming: preferredTiming || undefined,
      budget: budget || undefined
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error handling quote request:", error);
    return NextResponse.json(
      { error: "Failed to send quote request" },
      { status: 500 }
    );
  }
}

