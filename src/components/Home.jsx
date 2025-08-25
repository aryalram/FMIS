import HeroSection from "./HeroSection";
import ResearchCards from "./ResearchCards";
import AboutUs from "./AboutUs";

export default function Home() {
    return (
        <div>
            {/* Hero Section */}
            <HeroSection />

            {/* Latest Research */}
            <section className="py-16 px-6 bg-white text-center">
                <h2 className="text-2xl font-bold mb-8">Latest Research</h2>
                <ResearchCards />
            </section>

            {/* Who We Are */}
            <section className="py-16 px-6 bg-gray-50 text-center">
                <AboutUs />
            </section>

            {/* Exploring Te Rā */}
            <section className="py-16 px-6 bg-white text-center">
                <h2 className="text-2xl font-bold mb-8">Exploring Te Rā</h2>
                <div className="max-w-5xl mx-auto">
                    <img
                        src="/src/assets/exploring.jpg" // 替换成你们项目里的实际图片
                        alt="Exploring Te Rā"
                        className="w-full rounded-md shadow-md mb-6"
                    />
                    <p className="text-gray-700 text-lg">
                        Woven from harakeke likely over 200 years ago, Te Rā is the only known customary Māori sail in existence.
                    </p>
                </div>
            </section>

            {/* News & Events */}
            <section className="py-16 px-6 bg-gray-50 text-center">
                <h2 className="text-2xl font-bold mb-8">News And Events</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {[
                        {
                            title: "Te Rā: Navigating history",
                            desc: "An exhibition celebrating the unique Māori sail at the National Museum.",
                            img: "/src/assets/news1.jpg",
                        },
                        {
                            title: "Te Rā: the soul, lost at its kind",
                            desc: "Panel discussion about the cultural significance of Te Rā.",
                            img: "/src/assets/news2.jpg",
                        },
                        {
                            title: "Getting sail for Te Rā",
                            desc: "A hands-on workshop exploring the techniques used in Te Rā.",
                            img: "/src/assets/news3.jpg",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-white shadow-md rounded-md p-4 max-w-xs hover:shadow-lg transition"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="rounded-md w-full h-40 object-cover mb-4"
                            />
                            <h3 className="font-semibold text-lg">{item.title}</h3>
                            <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}


