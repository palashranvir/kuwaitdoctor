import { createFileRoute, Link } from "@tanstack/react-router";
import { Stethoscope, HeartPulse, Activity, Microscope, Syringe, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SiteLayout } from "@/components/SiteLayout";
import { services } from "@/lib/clinic";

const iconMap = { Stethoscope, HeartPulse, Activity, Microscope, Syringe, ShieldCheck } as const;

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Medical Services — Kuwait Wellness Clinic" },
      { name: "description", content: "Internal medicine, diabetes management, cardiac screening, lab diagnostics, vaccinations, and executive health checks in Salmiya, Kuwait." },
      { property: "og:title", content: "Our Medical Services" },
      { property: "og:description", content: "Comprehensive, patient-centered medical services in Kuwait." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="bg-[var(--gradient-soft)] py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal">Our Services</div>
          <h1 className="mt-2 font-display text-4xl font-semibold text-foreground sm:text-5xl">
            Care designed around every patient
          </h1>
          <p className="mt-4 text-muted-foreground">
            From routine consultations to specialized internal medicine, every service is delivered with attention,
            clarity, and respect.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap] ?? Stethoscope;
            return (
              <Card key={s.title} className="group flex flex-col border-border/70 p-6 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]">
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-1.5 flex-1 text-sm text-muted-foreground">{s.desc}</p>
                <Button asChild className="mt-5 w-fit" size="sm">
                  <Link to="/book">Book Consultation <ArrowRight className="size-3.5" /></Link>
                </Button>
              </Card>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}
