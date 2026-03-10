# John Henry Home Services Website

Modern marketing site for John Henry Home Services LLC built with Next.js (App Router), TypeScript, Tailwind CSS, and server-side email + PDF generation.

## Tech stack

- Next.js 14 (App Router) with TypeScript
- Tailwind CSS for styling
- Nodemailer for sending emails via your SMTP server
- pdfkit for generating a branded internal quote PDF

## Getting started

1. Install Node.js (v18+ recommended).
2. Install dependencies:

```bash
npm install
```

3. Copy `.env.example` to `.env.local` and fill in the SMTP credentials for `mailserver.businessidentity.llc`:

```bash
cp .env.example .env.local
```

4. Run the development server:

```bash
npm run dev
```

Visit http://localhost:3000 to see the site.

## Quote form behaviour

- Homepage quote form collects contact + project details.
- On submit:
  - Sends an email with all details **and a PDF attachment** to `OWNER_EMAIL` (you).
  - Sends a separate confirmation / thank-you email to the client (no PDF).
- The PDF contains project details and internal checklist only, with **no prices** so you can prepare the estimate manually.

