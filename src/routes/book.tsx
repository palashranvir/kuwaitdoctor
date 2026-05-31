import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, MessageCircle, Calendar as CalendarIcon } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SiteLayout } from "@/components/SiteLayout";
import { clinic, services } from "@/lib/clinic";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book an Appointment — Kuwait Wellness Clinic" },
      { name: "description", content: "Book your appointment online with Dr. Ahmed Al-Sabah at Kuwait Wellness Clinic in Salmiya. WhatsApp booking available." },
      { property: "og:title", content: "Book an Appointment" },
      { property: "og:description", content: "Schedule your visit in under a minute." },
    ],
  }),
  component: BookPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  phone: z.string().trim().min(6, "Please enter a valid phone number").max(30),
  email: z.string().trim().email("Please enter a valid email").max(255),
  date: z.string().min(1, "Please pick a preferred date"),
  time: z.string().min(1, "Please pick a preferred time"),
  service: z.string().min(1, "Please choose a service"),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

const timeSlots = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"];

function BookPage() {
  const [submitted, setSubmitted] = useState<null | z.infer<typeof schema>>(null);
  const [form, setForm] = useState({ name: "", phone: "", email: "", date: "", time: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const first = result.error.issues[0];
      toast.error(first?.message ?? "Please check the form");
      return;
    }
    setSubmitted(result.data);
    toast.success("Appointment request received");
  };

  const whatsappLink = () => {
    const msg = `Hello ${clinic.clinicName}, I'd like to book an appointment.%0AName: ${encodeURIComponent(form.name || "—")}%0AService: ${encodeURIComponent(form.service || "—")}%0ADate: ${form.date || "—"} ${form.time || ""}`;
    return `https://wa.me/${clinic.whatsappRaw}?text=${msg}`;
  };

  if (submitted) {
    return (
      <SiteLayout>
        <section className="mx-auto max-w-2xl px-4 py-20 sm:px-6 lg:px-8">
          <Card className="border-border/70 p-10 text-center">
            <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <CheckCircle2 className="size-8" />
            </div>
            <h1 className="mt-5 font-display text-3xl font-semibold text-foreground">Thank you, {submitted.name.split(" ")[0]}!</h1>
            <p className="mt-3 text-muted-foreground">
              Your request for <span className="font-medium text-foreground">{submitted.service}</span> on{" "}
              <span className="font-medium text-foreground">{submitted.date}</span> at{" "}
              <span className="font-medium text-foreground">{submitted.time}</span> has been received.
              Our team will confirm your appointment shortly via phone or WhatsApp.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Button asChild className="text-white" style={{ backgroundColor: "#25D366" }}>
                <a href={`https://wa.me/${clinic.whatsappRaw}`} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4" /> Continue on WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link to="/">Back to Home</Link>
              </Button>
            </div>
          </Card>
        </section>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <section className="bg-[var(--gradient-soft)] py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal">Book Appointment</div>
          <h1 className="mt-2 font-display text-4xl font-semibold text-foreground sm:text-5xl">Schedule your visit</h1>
          <p className="mt-3 text-muted-foreground">
            Fill in your details and our team will confirm within an hour during working hours.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <Card className="border-border/70 p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Full Name">
                <Input id="name" required maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" />
              </Field>
              <Field id="phone" label="Phone Number">
                <Input id="phone" type="tel" required maxLength={30} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+965 ..." />
              </Field>
              <Field id="email" label="Email">
                <Input id="email" type="email" required maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
              </Field>
              <Field id="service" label="Service Needed">
                <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
                  <SelectTrigger id="service"><SelectValue placeholder="Choose a service" /></SelectTrigger>
                  <SelectContent>
                    {services.map((s) => <SelectItem key={s.title} value={s.title}>{s.title}</SelectItem>)}
                  </SelectContent>
                </Select>
              </Field>
              <Field id="date" label="Preferred Date">
                <Input id="date" type="date" required value={form.date} min={new Date().toISOString().split("T")[0]} onChange={(e) => setForm({ ...form, date: e.target.value })} />
              </Field>
              <Field id="time" label="Preferred Time">
                <Select value={form.time} onValueChange={(v) => setForm({ ...form, time: v })}>
                  <SelectTrigger id="time"><SelectValue placeholder="Pick a time" /></SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                  </SelectContent>
                </Select>
              </Field>
            </div>
            <Field id="message" label="Message (optional)">
              <Textarea id="message" maxLength={1000} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Briefly describe your concern" rows={4} />
            </Field>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Button type="submit" size="lg" className="sm:flex-1">
                <CalendarIcon className="size-4" /> Request Appointment
              </Button>
              <Button asChild type="button" size="lg" variant="outline" className="sm:flex-1 border-[#25D366] text-[#1faa53] hover:bg-[#25D366]/10 hover:text-[#1faa53]">
                <a href={whatsappLink()} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4" /> Book via WhatsApp
                </a>
              </Button>
            </div>
            <p className="text-center text-xs text-muted-foreground">
              By submitting you agree to be contacted regarding your appointment. We never share your information.
            </p>
          </form>
        </Card>
      </section>
    </SiteLayout>
  );
}

function Field({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1.5">
      <Label htmlFor={id} className="text-sm font-medium text-foreground">{label}</Label>
      {children}
    </div>
  );
}
