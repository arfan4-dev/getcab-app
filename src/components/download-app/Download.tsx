import { images } from "@/assets";

const DownloadApp = () => {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat bg-fixe text-white py-20"
            style={{ backgroundImage: `url(${images.dBuilding2})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 bg-opacity-60"></div>

            <div className="relative z-10 flex  flex-col md:flex-row items-center justify-evenly   px-4 py-20 gap-10">
                {/* Left Content */}
                <div className="w-[90%] sm:w-2xl px-14 py-20  space-y-4 bg-black/40 ">
                    <p className="text-yellow-500 font-semibold tracking-widest  uppercase">Download For Free</p>
                    <h2 className="text-[36px] lg:text-5xl font-bold">Download the App</h2>
                    <p className="text-gray-200">
                        Upload our own taxi application to your smartphone and discover just how easy booking a taxi can be. With this application, you can order a taxi quickly.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col md:flex-row md:items-center gap-4 mt-6">
                        <img src={images.appleImage} alt="Google Play" className="w-42 cursor-pointer" />
                        <img src={images.appleImage2} alt="App Store" className="w-42 cursor-pointer" />
                    </div>
                </div>

                {/* Right Image */}
                <div className="w-full md:w-96">
                    {/* <img src={appScreen} alt="GetCab App on Phone" className="w-full object-contain" /> */}
                    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, doloribus. */}
                </div>
            </div>
        </section>
    );
};

export default DownloadApp;
