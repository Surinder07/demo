export default function Header() {
  return (
    <header className="sticky top-0 z-40 header-blur">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full" style={{ background: "var(--nb-accent)" }} />
          <span className="font-extrabold tracking-tight text-lg">
            <span className="text-white">Next</span>{" "}
            <span style={{ color: "var(--nb-accent)" }}>Boolean</span>
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm nb-text-muted">
          <a href="#courses">Courses</a>
          <a href="#features">Features</a>
          <a href="#placements">Placements</a>
          <a href="#contact" className="nb-btn nb-btn--accent">Enroll</a>
        </nav>
      </div>
    </header>
  );
}
