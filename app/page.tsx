import Header from "@/components/Header";
import { courses } from "@/data/courses";
import Link from "next/link";

export default function Page() {
  return (
    <>
      {/* Top bar */}
      <div className="topbar text-sm">
        <div className="mx-auto max-w-6xl px-4 py-2 text-center">
          🎉 Admissions Open • 6–12 Week Cohorts • Live + Recordings • 95% Placements
        </div>
      </div>

      <Header />

      {/* Hero */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 nb-badge">
              <span className="inline-block h-2 w-2 rounded-full" style={{ background: "var(--nb-accent)" }} />
              Limited seats — apply now
            </span>
            <h1 className="text-4xl font-extrabold leading-tight">
              Become <span style={{ color: "var(--nb-accent)" }}>Job-Ready</span> with NextBoolean
            </h1>
            <p className="nb-text-muted text-lg max-w-2xl">
              Instructor-led cohorts with live sessions, recordings, coding labs and placement support.
            </p>
            <div className="flex items-center gap-3">
              <a href="#courses" className="nb-btn nb-btn--accent">Explore Courses</a>
              <a href="#contact" className="nb-btn nb-card">Free Demo</a>
            </div>
            <div className="flex items-center gap-8 pt-4 text-sm">
              <div>
                <div className="text-3xl font-extrabold text-white">95%</div>
                <div className="nb-text-muted">Placement record</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-white">10k+</div>
                <div className="nb-text-muted">Learners</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-white">200+</div>
                <div className="nb-text-muted">Hiring partners</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="nb-card p-4">
              <div className="aspect-[4/3] rounded-xl nb-card grid place-items-center">
                <div className="text-center nb-text-soft">
                  <svg className="mx-auto mb-3" width="64" height="64" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="12" rx="2" stroke="currentColor" strokeOpacity=".9" strokeWidth="1.2"/>
                    <path d="M3 17h18v2H3z" fill="currentColor" fillOpacity=".85"/>
                    <circle cx="8" cy="9" r="1" fill="currentColor" />
                    <rect x="10" y="8" width="8" height="2" fill="currentColor" />
                    <rect x="6" y="12" width="12" height="2" fill="currentColor" />
                  </svg>
                  <p className="text-sm">Live classes • Recordings • Coding labs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Popular Courses</h2>
          <p className="mb-8 nb-text-muted">6 weeks to 3 months • Online & In-person • Placement support</p>

          <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))" }}>
            {courses.map(c => (
              <article key={c.slug} className="nb-card">
                <h3 className="text-white font-semibold text-lg mb-1">{c.title}</h3>
                <p className="text-sm nb-text-muted">{c.tagline}</p>
                <div className="mt-4 flex gap-2 text-xs nb-text-soft">
                  <span className="nb-badge">{c.duration}</span>
                  <span className="nb-badge">{c.mode}</span>
                </div>
                <div className="mt-4 flex gap-3">
                  <a href={`/courses/${c.slug}`} className="nb-btn nb-btn--accent text-sm">View details</a>
                  <a href="#contact" className="nb-btn nb-card text-sm">Enroll</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid var(--nb-border)" }}>
        <div className="max-w-6xl mx-auto px-4 py-10 grid gap-6 md:grid-cols-3 items-center">
          <div className="text-sm nb-text-muted">© {new Date().getFullYear()} NextBoolean. All rights reserved.</div>
          <nav className="flex justify-center gap-6 text-sm nb-text-muted">
            <a href="#courses">Courses</a>
            <a href="#features">Features</a>
            <a href="#placements">Placements</a>
          </nav>
          <div className="flex md:justify-end gap-4 text-sm nb-text-muted">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </>
  );
}
