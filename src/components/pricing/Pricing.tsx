import { useEffect } from "react";
import { fixedRoutes } from "@/constant";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pricing = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section id="price" className="py-32 bg-white text-center px-4 relative">
            <p className="uppercase text-sm tracking-widest text-[#1a1919] font-semibold mb-2">
                Fasta priser på utvalda rutter
            </p>
            <h2 className="text-[40px] lg:text-[57px] mb-6">
                Säkert, transparent och utan dolda avgifter.
            </h2>
            <hr className="max-w-5xl mx-auto mb-10 border-gray-300" />

            <div className="relative max-w-6xl mx-auto">

                <button
                    className="hidden xl:block custom-swiper-button-prev absolute top-1/2 -translate-y-1/2 -left-6 lg:-left-12 z-10 p-2 bg-white shadow rounded-full hover:bg-yellow-400 transition"
                >
                    <ChevronLeft className="text-[#fdb813] w-6 h-6 hover:text-white cursor-pointer" />
                </button>

                <button
                    className="hidden xl:block custom-swiper-button-next absolute top-1/2 -translate-y-1/2 -right-6 lg:-right-12 z-10 p-2 bg-white shadow rounded-full hover:bg-yellow-400 transition"
                >
                    <ChevronRight className="text-[#fdb813] hover:text-white cursor-pointer w-6 h-6" />
                </button>

                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                        el: ".custom-swiper-pagination",
                        bulletClass: "swiper-pagination-bullet custom-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                    }}
                    navigation={{
                        nextEl: ".custom-swiper-button-next",
                        prevEl: ".custom-swiper-button-prev",
                    }}

                    modules={[Pagination, Navigation]}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {fixedRoutes.map((route, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="bg-[#222222] text-white rounded shadow-lg px-7 py-12 min-h-[400px] flex flex-col justify-between"
                                data-aos="fade-up"
                            >
                                <div>
                                    <h3 className="text-[24px] font-semibold">{route.route}</h3>
                                    <p className="text-[17px] text-[#FFFFFF]">Enkel resa</p>
                                    <div className="text-[57px] font-bold my-4">
                                        {route.price}
                                        <span className="text-[18px] font-normal">
                                            {route.currency}
                                        </span>
                                    </div>
                                    <p className="text-sm text-[#CCCCCC]">
                                        {route.description}
                                    </p>
                                </div>
                                <button className="mt-6 bg-[#fdb813] hover:bg-yellow-600 text-white font-semibold px-4 py-2 cursor-pointer">
                                    Boka en resa
                                </button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Dots (pagination) below Swiper */}
                <div className="custom-swiper-pagination mt-10 flex justify-center gap-2" />
            </div>
        </section>
    );
};

export default Pricing;
