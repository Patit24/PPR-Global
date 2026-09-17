export function getWhatsAppNumber() {
  const raw =
    process.env.WHATSAPP_PHONE_NUMBER ||
    process.env.NEXT_PUBLIC_WHATSAPP_PHONE_NUMBER ||
    "919609079663";
  return raw.replace(/[^0-9]/g, "");
}

export function whatsappLink(message: string) {
  return `https://wa.me/${getWhatsAppNumber()}?text=${encodeURIComponent(message)}`;
}

