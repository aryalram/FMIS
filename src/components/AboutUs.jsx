export default function AboutUs() {
  return (
    <section className="py-16 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
      <p className="max-w-3xl mx-auto text-gray-700 mb-12">
        Te Rā: The Māori Sail is a collaborative research initiative bringing
        together experts in Māori weaving, cultural heritage, and material
        culture...
      </p>

      <div className="flex flex-wrap justify-center gap-10">
        {["Donna Campbell", "Ranui Ngarimu", "Catherine Smith"].map(
          (name, i) => (
            <div key={i} className="text-center">
              <img
                src={`https://i.pravatar.cc/150?img=${i + 10}`}
                alt={name}
                className="rounded-full w-32 h-32 object-cover mx-auto"
              />
              <p className="mt-2 font-semibold">{name}</p>
            </div>
          )
        )}
      </div>
    </section>
  );
}
