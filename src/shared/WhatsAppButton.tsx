interface WhatsAppButtonProps {
  phone: string;
}

export default function WhatsAppButton({ phone }: WhatsAppButtonProps) {
  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full sm:w-auto rounded-lg bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition hover:opacity-90 text-center"
    >
      💬 व्हाट्सएप करें
    </a>
  );
}
