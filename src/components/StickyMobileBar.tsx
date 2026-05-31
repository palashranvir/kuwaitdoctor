import { Phone, MessageCircle } from "lucide-react";
import { clinic } from "@/lib/clinic";

export function StickyMobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-border bg-background/95 shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.15)] backdrop-blur lg:hidden">
      <a
        href={`tel:${clinic.phoneRaw}`}
        className="flex flex-1 items-center justify-center gap-2 py-3.5 text-sm font-semibold text-primary"
      >
        <Phone className="size-4" /> Call Clinic
      </a>
      <div className="w-px bg-border" />
      <a
        href={`https://wa.me/${clinic.whatsappRaw}`}
        target="_blank"
        rel="noreferrer"
        className="flex flex-1 items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white"
        style={{ backgroundColor: "#25D366" }}
      >
        <MessageCircle className="size-4" /> WhatsApp
      </a>
    </div>
  );
}
