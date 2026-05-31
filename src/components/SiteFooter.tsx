import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { clinic } from "@/lib/clinic";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-[var(--gradient-soft)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div>
          <div className="font-display text-lg font-semibold text-foreground">{clinic.clinicName}</div>
          <p className="mt-2 text-sm text-muted-foreground">
            Patient-centered medical care in the heart of Kuwait. Trusted, modern, and multilingual.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground">Explore</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary">About the Doctor</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/book" className="hover:text-primary">Book Appointment</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground">Contact</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 size-4 text-teal" /> {clinic.address}</li>
            <li className="flex items-center gap-2"><Phone className="size-4 text-teal" /> {clinic.phone}</li>
            <li className="flex items-center gap-2"><Mail className="size-4 text-teal" /> {clinic.email}</li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground">Working Hours</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {clinic.hours.map((h) => (
              <li key={h.day} className="flex items-start gap-2">
                <Clock className="mt-0.5 size-4 text-teal" />
                <span><span className="text-foreground">{h.day}:</span> {h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {clinic.clinicName}. All rights reserved.</p>
          <p>Licensed by the Ministry of Health, State of Kuwait.</p>
        </div>
      </div>
    </footer>
  );
}
