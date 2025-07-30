export default function ProjectsPage() {
  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Recent Projects</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl shadow p-4">
          <h2 className="text-xl font-semibold mb-2">Ilford Roof Replacement</h2>
          <p>Replaced damaged tiles with new slate roofing on a two-story home. Project completed in 5 days with customer satisfaction guarantee.</p>
        </div>
        <div className="rounded-xl shadow p-4">
          <h2 className="text-xl font-semibold mb-2">Redbridge Driveway</h2>
          <p>Installed 45m² resin-bound driveway with drainage and edge stone design. Durable and low maintenance.</p>
        </div>
      </div>
    </main>
  );
}


