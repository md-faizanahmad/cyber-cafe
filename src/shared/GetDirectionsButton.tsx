import { MapPin } from "lucide-react";

export default function GetDirections() {
  return (
    <section aria-label="School Location Map" className="w-full space-y-4">
      {/* MAP WRAPPER */}

      {/* DIRECTION BUTTON */}
      <a
        href={`https://maps.app.goo.gl/coYBQ9Lw1rG9u1kHA`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get directions to Hansraj Public School, Gaya"
        className="inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-accent/90 transition-all"
      >
        <MapPin size={18} />
        Get Directions
      </a>

      {/* Helper text for parents */}
      <p className="text-xs text-slate-500">
        Tap the button to open Google Maps for live directions from your
        location.
      </p>
    </section>
  );
}
