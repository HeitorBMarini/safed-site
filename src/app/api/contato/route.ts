import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const { nome, telefone, email, assunto, mensagem } = await req.json()

  if (!nome || !email || !mensagem) {
    return NextResponse.json({ error: "Campos obrigatórios ausentes." }, { status: 400 })
  }

  await resend.emails.send({
    from: process.env.FROM_EMAIL ?? "SafeD Site <onboarding@resend.dev>",
    to: process.env.CONTACT_EMAIL ?? "heitor.marini07@gmail.com",
    replyTo: email,
    subject: assunto ? `[SafeD] ${assunto}` : `[SafeD] Contato de ${nome}`,
    text: `Nome: ${nome}\nTelefone: ${telefone || "não informado"}\nE-mail: ${email}\n\n${mensagem}`,
  })

  return NextResponse.json({ ok: true })
}
