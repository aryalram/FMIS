

export default function HeroSection() {
    return (
        <section className="relative">
            {/* 背景图 */}
            <img
                src="/HeroImage.png"
                alt="Te Rā Sail"
                className="w-full h-[400px] md:h-[600px] object-cover"
            />

            {/* 文字叠加 */}
            <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16 bg-black bg-opacity-30">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white uppercase leading-tight">
                    WHAKAARAHIA <br /> ANŌ TE RĀ KAIHAU!
                </h1>
                <p className="mt-4 text-lg md:text-2xl text-white">
                    RAISE UP AGAIN THE BILLOWING SAIL!
                </p>
            </div>
        </section>
    );
}








