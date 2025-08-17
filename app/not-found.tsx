export default function NotFound() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-24 text-center">
      <h1 className="text-4xl font-extrabold mb-2">Course not found</h1>
      <p className="nb-text-muted mb-6">The course you’re looking for doesn’t exist.</p>
      <a href="/" className="nb-btn nb-btn--accent">Back to courses</a>
    </main>
  );
}
