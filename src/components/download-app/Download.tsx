import { images } from "@/assets";

const DownloadApp = () => {
    return (
        <section
            className="relative bg-no-repeat bg-fixed text-white py-20"
            style={{
                backgroundImage: `url(${images.Hero4})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 bg-opacity-60"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-evenly px-4 py-20 gap-10">
                {/* Left Content */}
                <div
                    className="w-[90%] sm:w-2xl px-14 py-20 space-y-4 bg-black/40"
                    data-aos="fade-right"
                >
                    <p className="text-yellow-500 font-semibold tracking-widest uppercase">Ladda Ner Gratis</p>
                    <h2 className="text-[36px] lg:text-5xl font-bold">Ladda Ner Appen</h2>
                    <p className="text-gray-200">
                        Ladda ner vår taxiapplikation till din smartphone och upptäck hur enkelt det är att boka en taxi. Med denna app kan du beställa taxi snabbt och smidigt.
                    </p>
                    <div className="flex flex-col md:flex-row md:items-center gap-4 mt-6">
                        <img src={images.appleImage} alt="Google Play" className="w-42 cursor-pointer" />
                        <img src={images.appleImage2} alt="App Store" className="w-42 cursor-pointer" />
                    </div>
                </div>

                <div
                    className="w-full relative flex md:w-96"
                    data-aos="zoom-in"
                >
                    <img src={images.phone8} alt="GetCab App på mobil" className="w-full object-contain" />
                </div>
            </div>
        </section>
    );
};

export default DownloadApp;
