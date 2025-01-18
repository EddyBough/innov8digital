export function AnalyticsSection() {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Analytics Showcase
      </h1>

      {/* Downloads Section */}
      <div className="mb-12 p-6 border rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Downloads</h2>
        <div className="text-4xl font-bold">101.9K</div>
        <p className="text-green-500">+0.23%</p>
      </div>

      {/* Usage Section */}
      <div className="mb-12 p-6 border rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>
        <div className="text-lg">
          <p>Web: 80%</p>
          <p>Mobile: 65%</p>
          <p>Tablet: 40%</p>
        </div>
        <p className="text-green-500 mt-2">+24.1% (Last 6 months)</p>
      </div>

      {/* Subscriptions Section */}
      <div className="p-6 border rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Subscriptions</h2>
        <div className="text-4xl font-bold text-red-500">67.9K</div>
        <p className="text-green-500">+16.6%</p>
      </div>
    </section>
  );
}
