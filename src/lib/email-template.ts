const LOGO_URL = "https://safed-site.vercel.app/flogo.png"

type ContatoEmailData = {
  nome: string
  telefone: string
  email: string
  mensagem: string
  origemLabel: string
  origemPath: string
}

export function buildContatoEmailHtml({ nome, telefone, email, mensagem, origemLabel, origemPath }: ContatoEmailData) {
  return `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Novo contato pelo site</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e5e7eb;">

          <!-- Top accent bar -->
          <tr>
            <td style="height:6px;background-color:#dc2626;"></td>
          </tr>

          <!-- Logo -->
          <tr>
            <td align="center" style="padding:36px 40px 8px 40px;">
              <img src="${LOGO_URL}" alt="SafeD" width="160" style="display:block;max-width:160px;height:auto;" />
            </td>
          </tr>

          <!-- Heading -->
          <tr>
            <td align="center" style="padding:8px 40px 4px 40px;">
              <h1 style="margin:0;font-size:22px;line-height:28px;color:#111827;font-weight:700;">Novo contato pelo site</h1>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding:0 40px 28px 40px;">
              <p style="margin:0;font-size:13px;color:#6b7280;">Recebido através do formulário em safed.com.br</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:0 40px;">
              <p style="margin:0 0 20px 0;font-size:15px;line-height:24px;color:#374151;">
                Olá, você recebeu uma nova mensagem pelo site da SafeD. Os dados de contato estão abaixo:
              </p>
            </td>
          </tr>

          <!-- Info card -->
          <tr>
            <td style="padding:0 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f9fafb;border:1px solid #eef0f2;border-radius:12px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:4px 0;font-size:13px;color:#9ca3af;width:110px;vertical-align:top;">Nome</td>
                        <td style="padding:4px 0;font-size:14px;color:#111827;font-weight:600;">${escapeHtml(nome)}</td>
                      </tr>
                      <tr>
                        <td style="padding:4px 0;font-size:13px;color:#9ca3af;vertical-align:top;">Telefone</td>
                        <td style="padding:4px 0;font-size:14px;color:#111827;">${escapeHtml(telefone || "não informado")}</td>
                      </tr>
                      <tr>
                        <td style="padding:4px 0;font-size:13px;color:#9ca3af;vertical-align:top;">E-mail</td>
                        <td style="padding:4px 0;font-size:14px;color:#111827;">${escapeHtml(email)}</td>
                      </tr>
                      <tr>
                        <td style="padding:4px 0;font-size:13px;color:#9ca3af;vertical-align:top;">Origem</td>
                        <td style="padding:4px 0;font-size:14px;color:#111827;">${escapeHtml(origemLabel)} <span style="color:#9ca3af;">(${escapeHtml(origemPath)})</span></td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding:24px 40px 0 40px;">
              <p style="margin:0 0 6px 0;font-size:13px;color:#9ca3af;font-weight:600;text-transform:uppercase;letter-spacing:0.04em;">Mensagem</p>
              <p style="margin:0;font-size:15px;line-height:24px;color:#374151;white-space:pre-wrap;">${escapeHtml(mensagem)}</p>
            </td>
          </tr>

          <!-- CTA button -->
          <tr>
            <td align="center" style="padding:32px 40px 8px 40px;">
              <a href="mailto:${encodeURIComponent(email)}" style="display:inline-block;background-color:#dc2626;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;padding:14px 28px;border-radius:10px;">
                Responder por e-mail
              </a>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:32px 40px 0 40px;">
              <div style="border-top:1px solid #e5e7eb;"></div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px 36px 40px;">
              <p style="margin:0 0 4px 0;font-size:12px;color:#9ca3af;">SafeD Cursos e Eventos</p>
              <p style="margin:0;font-size:12px;color:#9ca3af;">
                (11) 94212-0232 &nbsp;·&nbsp; safed@safed.com.br
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

export function buildContatoEmailText({ nome, telefone, email, mensagem, origemLabel, origemPath }: ContatoEmailData) {
  return `Nome: ${nome}\nTelefone: ${telefone || "não informado"}\nE-mail: ${email}\nPágina de origem: ${origemLabel} (${origemPath})\n\n${mensagem}`
}

function escapeHtml(value: string) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}
