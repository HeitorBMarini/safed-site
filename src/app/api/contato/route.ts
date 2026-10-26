import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { buildContatoEmailHtml, buildContatoEmailText } from "@/lib/email-template"

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error("RESEND_API_KEY não configurada")
    return NextResponse.json({ error: "Serviço de e-mail indisponível." }, { status: 500 })
  }
  // Instancia dentro do handler: criar o cliente no topo do módulo quebra o build
  // quando a variável não existe (ex.: deploys de preview).
  const resend = new Resend(apiKey)

  const { nome, telefone, email, assunto, mensagem, origem, origemPath } = await req.json()

  if (!nome || !email || !mensagem) {
    return NextResponse.json({ error: "Campos obrigatórios ausentes." }, { status: 400 })
  }

  const origemLabel = origem || "Página inicial"
  const baseSubject = assunto ? `[SafeD] ${assunto}` : `[SafeD] Contato de ${nome}`
  const subject = origem ? `${baseSubject} — via ${origemLabel}` : baseSubject

  const emailData = { nome, telefone, email, mensagem, origemLabel, origemPath: origemPath || "/" }

  await resend.emails.send({
    from: process.env.FROM_EMAIL ?? "SafeD <contato@safed.com.br>",
    to: process.env.CONTACT_EMAIL ?? "safed@safed.com.br",
    replyTo: email,
    subject,
    html: buildContatoEmailHtml(emailData),
    text: buildContatoEmailText(emailData),
  })

  return NextResponse.json({ ok: true })
}
