export default function HeroSection() {
  return (
    <section className="bg-[#0b1449] text-white text-center py-24 px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight">
        WHAKAARAHIA <br />
        ANŌ TE RĀ KAIHAU!
      </h1>
      <p className="mt-4 text-xl md:text-2xl">
        RAISE UP AGAIN THE BILLOWING SAIL!
      </p>
      <iframe
        src="http://10.11.4.152:8383/greenstone3/library"
        title="Digital Library"
        width="100%"
        height="2000vh"
        style={{ border: "none" }}
      />
    </section>
  );
}
