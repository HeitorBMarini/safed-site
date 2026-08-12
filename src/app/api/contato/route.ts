import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { buildContatoEmailHtml, buildContatoEmailText } from "@/lib/email-template"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const { nome, telefone, email, assunto, mensagem, origem, origemPath } = await req.json()

  if (!nome || !email || !mensagem) {
    return NextResponse.json({ error: "Campos obrigatórios ausentes." }, { status: 400 })
  }

  const origemLabel = origem || "Página inicial"
  const baseSubject = assunto ? `[SafeD] ${assunto}` : `[SafeD] Contato de ${nome}`
  const subject = origem ? `${baseSubject} — via ${origemLabel}` : baseSubject

  const emailData = { nome, telefone, email, mensagem, origemLabel, origemPath: origemPath || "/" }

  await resend.emails.send({
    from: process.env.FROM_EMAIL ?? "SafeD Site <onboarding@resend.dev>",
    to: process.env.CONTACT_EMAIL ?? "heitor.marini07@gmail.com",
    replyTo: email,
    subject,
    html: buildContatoEmailHtml(emailData),
    text: buildContatoEmailText(emailData),
  })

  return NextResponse.json({ ok: true })
}
