import { getCourseBySlug, courses } from "@/data/courses";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return courses.map(c => ({ slug: c.slug }));
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = getCourseBySlug(params.slug);
  if (!course) return notFound();

  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <a href="/" className="text-sm nb-text-muted underline">← Back to courses</a>
      <h1 className="text-4xl font-extrabold mt-2">{course.title}</h1>
      <p className="mt-2 nb-text-soft">{course.tagline}</p>
      <div className="flex flex-wrap gap-2 mt-3 text-xs nb-text-soft">
        <span className="nb-badge">{course.duration}</span>
        <span className="nb-badge">{course.mode}</span>
        <span className="nb-badge">{course.level}</span>
      </div>

      <section className="grid gap-8 md:grid-cols-2 mt-8">
        <div className="nb-card">
          <h2 className="font-semibold text-lg mb-2">What you'll learn</h2>
          <ul className="list-disc list-inside nb-text-soft">
            {course.highlights.map((h, i) => <li key={i}>{h}</li>)}
          </ul>
        </div>
        <div className="nb-card">
          <h2 className="font-semibold text-lg mb-2">Syllabus</h2>
          <div className="space-y-4 nb-text-soft">
            {course.syllabus.map((s, i) => (
              <div key={i}>
                <h3 className="font-semibold">{s.title}</h3>
                <ul className="list-disc list-inside">
                  {s.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-8 flex gap-3">
        <a href="#contact" className="nb-btn nb-btn--accent">Enroll / Request a Call</a>
        <button className="nb-btn nb-card">Download syllabus</button>
      </div>
    </main>
  );
}
