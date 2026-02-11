import CallButton from "@/shared/CallButton";
import LocationButton from "@/shared/LocationButton";
import WhatsAppButton from "@/shared/WhatsAppButton";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl text-center">
        {/* Heading */}
        <h1 className="text-[clamp(2rem,6vw,3.5rem)] font-bold leading-tight text-primary">
          सभी ऑनलाइन सरकारी सेवाएँ
          <br />
          एक ही स्थान पर
        </h1>

        {/* Description */}
        <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          आधार कार्ड, पैन कार्ड, सरकारी फॉर्म, नौकरी आवेदन, छात्रवृत्ति और अन्य
          ऑनलाइन सेवाएँ — सही जानकारी और सुरक्षित तरीके से।
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <CallButton phone="9876543210" />
          <WhatsAppButton phone="919876543210" />
          <LocationButton url="https://maps.google.com" />
        </div>
      </div>
    </section>
  );
}
