import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, GraduationCap, Languages, Stethoscope, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SiteLayout } from "@/components/SiteLayout";
import { clinic } from "@/lib/clinic";
import doctorImg from "@/assets/doctor.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About ${clinic.doctorName} — ${clinic.clinicName}` },
      { name: "description", content: `Meet ${clinic.doctorName}, ${clinic.specialty} in ${clinic.location}. Qualifications, experience, and multilingual care.` },
      { property: "og:title", content: `About ${clinic.doctorName}` },
      { property: "og:description", content: `${clinic.specialty} dedicated to trusted, patient-first care in Kuwait.` },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="bg-[var(--gradient-soft)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:px-8">
          <div className="relative">
            <img
              src={doctorImg}
              alt={clinic.doctorName}
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-[var(--shadow-elevated)]"
            />
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-card p-4 shadow-[var(--shadow-soft)] ring-1 ring-border sm:block">
              <div className="font-display text-2xl font-semibold text-primary">15+</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Years of practice</div>
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-teal">About the Doctor</div>
            <h1 className="mt-2 font-display text-4xl font-semibold text-foreground sm:text-5xl">{clinic.doctorName}</h1>
            <p className="mt-3 text-lg text-muted-foreground">{clinic.specialty}</p>

            <p className="mt-6 leading-relaxed text-foreground">
              {clinic.doctorName} is a board-certified consultant in internal medicine with over fifteen years of clinical experience
              across Kuwait and the GCC. He believes that exceptional medicine begins with truly listening — taking the time to
              understand each patient's story, concerns, and goals before recommending a path forward.
            </p>
            <p className="mt-4 leading-relaxed text-foreground">
              At {clinic.clinicName}, he leads a calm, modern practice that blends evidence-based medicine with warmth and respect
              for every patient's culture and language. From chronic disease management to executive checkups, his focus is always
              the same: care that feels personal, clear, and human.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                { Icon: GraduationCap, t: "Education", d: "MBBS — Kuwait University · MRCP (UK) · Board Certified Internal Medicine" },
                { Icon: Award, t: "Memberships", d: "Royal College of Physicians, Kuwait Medical Association" },
                { Icon: Stethoscope, t: "Specialties", d: "Diabetes, hypertension, preventive care, executive health" },
                { Icon: Languages, t: "Languages", d: clinic.languages.join(" · ") },
              ].map(({ Icon, t, d }) => (
                <Card key={t} className="border-border/70 p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">{t}</div>
                      <div className="mt-0.5 text-xs text-muted-foreground">{d}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/book"><Calendar className="size-4" /> Book Appointment</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
