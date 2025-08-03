const research = [
  {
    title: "Identifying the Plant Materials in Te Rā",
    img: "/img1.jpg",
  },
  {
    title: "Early Observations of Sails in Aotearoa New Zealand",
    img: "/img2.jpg",
  },
  {
    title: "Imaging Te Rā at the British Museum 2020",
    img: "/img3.jpg",
  },
];

export default function ResearchCards() {
  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10">Latest Research</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {research.map((item, index) => (
          <div
            key={index}
            className="rounded-xl shadow-lg overflow-hidden w-72"
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-80 w-full object-cover"
            />
            <p className="p-4 font-medium text-left">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
