interface LocationButtonProps {
  url: string;
}

export default function LocationButton({ url }: LocationButtonProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full sm:w-auto rounded-lg border border-border bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:opacity-90 text-center"
    >
      📍 लोकेशन देखें
    </a>
  );
}
