import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import {
  Phone,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Users,
  Sparkles,
  Languages,
  Calendar,
  ArrowRight,
  ArrowUpRight,
  Stethoscope,
  HeartPulse,
  Activity,
  Microscope,
  Syringe,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/SiteLayout";
import { LuxuryScrollFeatures } from "@/components/LuxuryScrollFeatures";
import { clinic, services, testimonials } from "@/lib/clinic";
import heroImg from "@/assets/clinic-hero.jpg";
import doctorImg from "@/assets/doctor.jpg";

const iconMap = {
  Stethoscope,
  HeartPulse,
  Activity,
  Microscope,
  Syringe,
  ShieldCheck,
} as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: `${clinic.clinicName} — ${clinic.specialty} in ${clinic.location}`,
      },
      {
        name: "description",
        content: `${clinic.doctorName}, ${clinic.specialty} in ${clinic.location}. Trusted, patient-centered care. Book your appointment online or via WhatsApp.`,
      },
      {
        property: "og:title",
        content: `${clinic.clinicName} — Private Medical Care in Kuwait`,
      },
      {
        property: "og:description",
        content: `Modern private clinic in ${clinic.location} offering compassionate, multilingual care.`,
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const maxScroll = Math.max(
        1,
        document.body.scrollHeight - window.innerHeight,
      );
      const pageProgress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      const heroProgress = Math.min(
        1,
        Math.max(0, window.scrollY / Math.max(1, window.innerHeight)),
      );

      page.style.setProperty("--page-progress", pageProgress.toFixed(4));
      page.style.setProperty("--hero-progress", heroProgress.toFixed(4));
      page.style.setProperty("--hero-lift", `${heroProgress * -90}px`);
      page.style.setProperty("--hero-tilt", `${-7 + heroProgress * 16}deg`);
      page.style.setProperty("--hero-spin", `${heroProgress * 18}deg`);
      page.style.setProperty("--hero-depth", `${heroProgress * 90}px`);
    };

    const scheduleUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  return (
    <SiteLayout>
      <div ref={pageRef} className="scroll-cinema">
        {/* ──────────────  HERO  ────────────── */}
        <section
          className="hero-luxury relative isolate overflow-hidden bg-navy-deep text-ivory"
          style={{ backgroundColor: "var(--navy-deep)", color: "var(--ivory)" }}
        >
          {/* Subtle background image */}
          <img
            src={heroImg}
            alt=""
            aria-hidden
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
          />
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "linear-gradient(115deg, rgba(15,27,61,0.96) 0%, rgba(30,58,95,0.88) 60%, rgba(41,79,122,0.78) 100%)",
            }}
          />
          {/* Gold hairline accents */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-0 h-px"
            style={{
              background:
                "linear-gradient(to right, transparent, #b8924a 50%, transparent)",
            }}
          />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Top editorial bar */}
            <div
              className="flex items-center justify-between py-6 text-[11px] uppercase tracking-[0.2em] text-ivory/70"
              style={{ color: "rgba(232,237,243,0.7)" }}
            >
              <span className="flex items-center gap-2">
                <MapPin className="size-3.5" style={{ color: "#b8924a" }} />{" "}
                {clinic.location}
              </span>
              <span className="hidden sm:inline">
                Est. 2009 · Licensed by the Ministry of Health, State of Kuwait
              </span>
              <span className="font-mono">№ 01</span>
            </div>
            <div
              className="h-px"
              style={{ background: "rgba(232,237,243,0.18)" }}
            />

            <div className="hero-depth grid gap-10 py-16 md:py-20 lg:grid-cols-12 lg:gap-12 lg:py-28">
              {/* Headline */}
              <div className="lg:col-span-7">
                <p className="kicker" style={{ color: "#b8924a" }}>
                  The Practice of {clinic.doctorName.split(" ").slice(-1)}
                </p>
                <h1
                  className="mt-5 font-display text-[44px] font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-[78px]"
                  style={{ color: "var(--ivory)" }}
                >
                  A quieter, more{" "}
                  <em className="italic" style={{ color: "#d9b878" }}>
                    considered
                  </em>{" "}
                  kind of medicine.
                </h1>
                <p
                  className="hero-copy mt-7 max-w-xl text-base leading-relaxed sm:text-lg"
                  style={{ color: "rgba(232,237,243,0.82)" }}
                >
                  {clinic.doctorName} — {clinic.specialty}. A private internal
                  medicine practice in {clinic.location}, built on unhurried
                  consultations, evidence-based care, and lasting relationships
                  with the families we serve.
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="h-12 rounded-none px-7 text-sm font-semibold tracking-wide"
                    style={{ backgroundColor: "#b8924a", color: "#0f1b3d" }}
                  >
                    <Link to="/book">
                      <Calendar className="size-4" /> Book Appointment
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-12 rounded-none border-ivory/40 bg-transparent px-7 text-sm font-semibold tracking-wide text-ivory hover:bg-ivory/10 hover:text-ivory"
                    style={{
                      borderColor: "rgba(232,237,243,0.4)",
                      color: "var(--ivory)",
                    }}
                  >
                    <a href={`tel:${clinic.phoneRaw}`}>
                      <Phone className="size-4" /> Call Clinic
                    </a>
                  </Button>
                  <a
                    href={`https://wa.me/${clinic.whatsappRaw}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-12 items-center gap-2 px-5 text-sm font-medium underline-offset-4 hover:underline"
                    style={{ color: "rgba(232,237,243,0.9)" }}
                  >
                    <MessageCircle className="size-4" /> or message on WhatsApp{" "}
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </div>

              {/* Doctor plate */}
              <div className="lg:col-span-5">
                <figure className="relative">
                  <div className="hero-depth-card hero-depth-card-a">
                    <span>01</span>
                    Priority Care
                  </div>
                  <div className="hero-depth-card hero-depth-card-b">
                    <span>3D</span>
                    Scroll Visit
                  </div>
                  <div className="doctor-plate overflow-hidden">
                    <img
                      src={doctorImg}
                      alt={clinic.doctorName}
                      className="aspect-[4/5] w-full object-cover"
                    />
                  </div>
                  <div
                    className="absolute -bottom-px left-0 right-0 px-5 py-4"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(15,27,61,0.95), transparent)",
                    }}
                  >
                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <div
                          className="font-display text-lg font-bold"
                          style={{ color: "var(--ivory)" }}
                        >
                          {clinic.doctorName}
                        </div>
                        <div
                          className="text-xs tracking-wide"
                          style={{ color: "rgba(232,237,243,0.75)" }}
                        >
                          {clinic.specialty}
                        </div>
                      </div>
                      <div
                        className="text-right text-[10px] uppercase tracking-[0.2em]"
                        style={{ color: "#b8924a" }}
                      >
                        MBBS · MRCP
                        <br />
                        Plate 01
                      </div>
                    </div>
                  </div>
                </figure>
              </div>
            </div>

            {/* Stats strip */}
            <div
              className="h-px"
              style={{ background: "rgba(232,237,243,0.18)" }}
            />
            <dl className="grid grid-cols-2 gap-6 py-7 sm:grid-cols-4">
              {[
                { k: "15+", v: "Years of practice" },
                { k: "10,000+", v: "Patients served" },
                { k: "4", v: "Languages spoken" },
                { k: "98%", v: "Patient satisfaction" },
              ].map((s) => (
                <div key={s.v}>
                  <dt
                    className="font-display text-3xl font-bold"
                    style={{ color: "#b8924a" }}
                  >
                    {s.k}
                  </dt>
                  <dd
                    className="mt-1 text-[11px] uppercase tracking-[0.18em]"
                    style={{ color: "rgba(232,237,243,0.7)" }}
                  >
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ──────────────  BENEFITS / TRUST  ────────────── */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <header className="mb-12 grid gap-6 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="kicker">
                <span className="editorial-rule" />№ 02 — The Practice
              </p>
            </div>
            <div className="md:col-span-8">
              <h2 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-5xl">
                Private medicine, designed around the{" "}
                <em className="italic" style={{ color: "var(--gold)" }}>
                  patient
                </em>
                .
              </h2>
            </div>
          </header>

          <div className="hairline" />

          <div className="mt-10 grid divide-y divide-border md:grid-cols-2 md:divide-y-0 md:divide-x lg:grid-cols-4">
            {[
              {
                n: "01",
                Icon: Users,
                t: "Experienced Doctor",
                d: "Over fifteen years of internal medicine practice across Kuwait and the GCC.",
              },
              {
                n: "02",
                Icon: ShieldCheck,
                t: "Patient-Centered",
                d: "Unhurried consultations and care plans tailored to you and your family.",
              },
              {
                n: "03",
                Icon: Sparkles,
                t: "Modern Clinic",
                d: "A bright, calm, accredited facility with on-site lab and diagnostics.",
              },
              {
                n: "04",
                Icon: Languages,
                t: "Multilingual",
                d: "Care delivered fluently in Arabic, English, Hindi, and Urdu.",
              },
            ].map(({ n, Icon, t, d }) => (
              <article
                key={t}
                className="scroll-card-3d reveal-lift group px-0 py-8 md:px-7"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-xs tracking-widest text-muted-foreground">
                    {n}
                  </span>
                  <Icon
                    className="size-5 text-steel"
                    style={{ color: "var(--steel)" }}
                  />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-foreground">
                  {t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {d}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ──────────────  SERVICES  (featured + grid) ────────────── */}
        <section
          style={{ background: "var(--gradient-soft)" }}
          className="border-y border-border"
        >
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <header className="mb-12 grid gap-6 md:grid-cols-12">
              <div className="md:col-span-4">
                <p className="kicker">
                  <span className="editorial-rule" />№ 03 — Services
                </p>
                <Button
                  asChild
                  variant="ghost"
                  className="mt-4 h-auto p-0 text-sm font-semibold text-primary hover:bg-transparent hover:text-primary/80"
                >
                  <Link to="/services">
                    View the full directory <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
              <div className="md:col-span-8">
                <h2 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-5xl">
                  Comprehensive care, delivered with{" "}
                  <em className="italic" style={{ color: "var(--gold)" }}>
                    precision
                  </em>
                  .
                </h2>
              </div>
            </header>

            <div className="hairline" />

            <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-10">
              {/* Featured */}
              {(() => {
                const f = services[0];
                const Icon =
                  iconMap[f.icon as keyof typeof iconMap] ?? Stethoscope;
                return (
                  <article
                    className="premium-panel scroll-card-3d group relative flex flex-col justify-between overflow-hidden bg-card p-8 shadow-[var(--shadow-soft)] lg:col-span-5 lg:p-10"
                    style={{ minHeight: 420 }}
                  >
                    <div>
                      <p className="kicker">Featured Service</p>
                      <div className="mt-8 flex size-14 items-center justify-center bg-primary text-primary-foreground">
                        <Icon className="size-6" />
                      </div>
                      <h3 className="mt-7 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                        {f.title}
                      </h3>
                      <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                        {f.desc}
                      </p>
                    </div>
                    <Link
                      to="/book"
                      className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary underline-offset-8 hover:underline"
                    >
                      Book Consultation <ArrowUpRight className="size-4" />
                    </Link>
                    <div
                      className="absolute right-0 top-0 h-1 w-24"
                      style={{ background: "var(--gold)" }}
                    />
                  </article>
                );
              })()}

              {/* Grid of remaining */}
              <div
                className="grid gap-px bg-border lg:col-span-7"
                style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}
              >
                {services.slice(1).map((s, i) => {
                  const Icon =
                    iconMap[s.icon as keyof typeof iconMap] ?? Stethoscope;
                  return (
                    <article
                      key={s.title}
                      className="service-tile scroll-card-3d group flex flex-col justify-between bg-card p-7 transition-colors hover:bg-secondary"
                    >
                      <div>
                        <div className="flex items-baseline justify-between">
                          <span className="font-mono text-xs tracking-widest text-muted-foreground">
                            0{i + 2}
                          </span>
                          <Icon
                            className="size-5 text-steel"
                            style={{ color: "var(--steel)" }}
                          />
                        </div>
                        <h3 className="mt-6 font-display text-lg font-bold text-foreground">
                          {s.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {s.desc}
                        </p>
                      </div>
                      <Link
                        to="/book"
                        className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary underline-offset-4 hover:underline"
                      >
                        Book Consultation <ArrowRight className="size-3.5" />
                      </Link>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <LuxuryScrollFeatures />

        {/* ──────────────  TESTIMONIALS  ────────────── */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <header className="mb-12 grid gap-6 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="kicker">
                <span className="editorial-rule" />№ 05 — In Their Words
              </p>
            </div>
            <div className="md:col-span-8">
              <h2 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-5xl">
                Trusted by families across{" "}
                <em className="italic" style={{ color: "var(--gold)" }}>
                  Kuwait
                </em>
                .
              </h2>
            </div>
          </header>

          <div className="hairline" />

          <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure
                key={t.name}
                className="testimonial-panel bg-background p-8"
              >
                <Quote className="size-6" style={{ color: "var(--gold)" }} />
                <blockquote className="mt-5 font-display text-lg leading-relaxed text-foreground">
                  "{t.text}"
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      {t.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {t.role}
                    </div>
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                    0{i + 1} / 03
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ──────────────  FINAL CTA  ────────────── */}
        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div
            className="relative overflow-hidden p-10 sm:p-16 lg:p-20"
            style={{ background: "var(--gradient-hero)" }}
          >
            <div
              className="absolute right-0 top-0 h-1 w-32"
              style={{ background: "var(--gold)" }}
            />
            <div className="grid items-end gap-10 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <p className="kicker" style={{ color: "#d9b878" }}>
                  № 06 — Begin
                </p>
                <h2
                  className="mt-4 font-display text-3xl font-bold leading-tight sm:text-5xl"
                  style={{ color: "var(--ivory)" }}
                >
                  Schedule your first{" "}
                  <em className="italic" style={{ color: "#d9b878" }}>
                    consultation
                  </em>
                  .
                </h2>
                <p
                  className="mt-4 max-w-xl text-base"
                  style={{ color: "rgba(232,237,243,0.82)" }}
                >
                  Confirmed within the hour during clinic hours. Book online, by
                  phone, or on WhatsApp.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-none px-7 text-sm font-semibold tracking-wide"
                  style={{ backgroundColor: "#b8924a", color: "#0f1b3d" }}
                >
                  <Link to="/book">
                    <Calendar className="size-4" /> Book Appointment
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-none border-ivory/40 bg-transparent px-7 text-sm font-semibold tracking-wide hover:bg-ivory/10"
                  style={{
                    borderColor: "rgba(232,237,243,0.4)",
                    color: "var(--ivory)",
                  }}
                >
                  <a
                    href={`https://wa.me/${clinic.whatsappRaw}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle className="size-4" /> WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
