export default function Home() {
  return (
    <section className="py-16 px-6 bg-gray-50 text-center">
      <h1 className="max-w-3xl mx-auto text-gray-700 mb-12">Homeeee</h1>

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
