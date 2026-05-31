import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, MessageCircle, AlertTriangle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SiteLayout } from "@/components/SiteLayout";
import { clinic, faqs, insurers } from "@/lib/clinic";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Location — Kuwait Wellness Clinic" },
      { name: "description", content: `Visit ${clinic.clinicName} in ${clinic.location}. Call, WhatsApp, or email us. Working hours and directions.` },
      { property: "og:title", content: `Contact ${clinic.clinicName}` },
      { property: "og:description", content: `Find us in ${clinic.location}. Multiple ways to reach our team.` },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="bg-[var(--gradient-soft)] py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal">Contact & Location</div>
          <h1 className="mt-2 font-display text-4xl font-semibold text-foreground sm:text-5xl">We're here for you</h1>
          <p className="mt-3 text-muted-foreground">
            Reach our team by phone, WhatsApp, or email — or stop by our clinic in {clinic.location}.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            {[
              { Icon: MapPin, t: "Address", d: clinic.address },
              { Icon: Phone, t: "Phone", d: clinic.phone, href: `tel:${clinic.phoneRaw}` },
              { Icon: MessageCircle, t: "WhatsApp", d: clinic.whatsapp, href: `https://wa.me/${clinic.whatsappRaw}` },
              { Icon: Mail, t: "Email", d: clinic.email, href: `mailto:${clinic.email}` },
            ].map(({ Icon, t, d, href }) => (
              <Card key={t} className="border-border/70 p-5">
                <div className="flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                    <Icon className="size-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-foreground">{t}</div>
                    {href ? (
                      <a href={href} className="mt-0.5 block text-sm text-muted-foreground hover:text-primary" target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                        {d}
                      </a>
                    ) : (
                      <div className="mt-0.5 text-sm text-muted-foreground">{d}</div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
            <Card className="border-border/70 p-5">
              <div className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Clock className="size-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Working Hours</div>
                  <ul className="mt-1.5 space-y-1 text-sm text-muted-foreground">
                    {clinic.hours.map((h) => (
                      <li key={h.day} className="flex justify-between gap-6">
                        <span>{h.day}</span><span className="text-foreground">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="border-destructive/30 bg-destructive/5 p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-0.5 size-5 shrink-0 text-destructive" />
                <div className="text-sm">
                  <div className="font-semibold text-foreground">Medical Emergency?</div>
                  <p className="mt-1 text-muted-foreground">
                    For life-threatening emergencies in Kuwait, please call <span className="font-semibold text-foreground">112</span> or go to the nearest emergency department immediately.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-soft)]">
            <iframe
              title="Kuwait Wellness Clinic location"
              src="https://www.google.com/maps?q=Salmiya%2C+Kuwait&output=embed"
              className="h-full min-h-[460px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-border/70 p-6">
            <div className="flex items-center gap-2 text-teal">
              <ShieldCheck className="size-5" />
              <span className="text-xs font-semibold uppercase tracking-wider">Credentials</span>
            </div>
            <h3 className="mt-2 font-display text-xl font-semibold">Licensed & accredited</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {clinic.clinicName} is fully licensed by the Kuwait Ministry of Health. {clinic.doctorName} is board-certified
              and a member of the Royal College of Physicians (UK).
            </p>
          </Card>
          <Card className="border-border/70 p-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-teal">Insurance Accepted</div>
            <h3 className="mt-2 font-display text-xl font-semibold">We work with leading insurers</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {insurers.map((i) => (
                <span key={i} className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">{i}</span>
              ))}
            </div>
            <p className="mt-3 text-xs text-muted-foreground">Contact us to confirm coverage for your specific plan.</p>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal">FAQ</div>
          <h2 className="mt-2 font-display text-3xl font-semibold text-foreground sm:text-4xl">Common questions</h2>
        </div>
        <Accordion type="single" collapsible className="mt-8">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-10 text-center">
          <Button asChild size="lg">
            <a href={`https://wa.me/${clinic.whatsappRaw}`} target="_blank" rel="noreferrer">
              <MessageCircle className="size-4" /> Still have a question? WhatsApp us
            </a>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
