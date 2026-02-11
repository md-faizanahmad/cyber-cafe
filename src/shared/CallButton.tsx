interface CallButtonProps {
  phone: string;
}

export default function CallButton({ phone }: CallButtonProps) {
  return (
    <a
      href={`tel:${phone}`}
      className="w-full sm:w-auto rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90 text-center"
    >
      📞 अभी कॉल करें
    </a>
  );
}
