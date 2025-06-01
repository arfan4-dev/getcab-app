import { fixedRoutes } from "@/constant";
import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
import 'swiper/swiper-bundle.css';

const Pricing = () => {
    return (
        <section className="py-32 bg-white text-center px-4">
            <p className="uppercase text-sm tracking-widest text-[#1a1919] font-semibold mb-2">
                Fixed Prices on Selected Routes
            </p>
            <h2 className="text-[40px] lg:text-[57px] mb-6">
                Safe, transparent and without hidden fees.
            </h2>
            <hr className="max-w-5xl mx-auto mb-10 border-gray-300" />

            <Swiper
                spaceBetween={30}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="max-w-6xl mx-auto"
            >
                {fixedRoutes.map((route, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="bg-[#222222] text-white rounded shadow-lg px-7 py-12 h-full flex flex-col justify-between"
                            style={{ cursor: "url('/cursor-left-right.cur') 16 16, auto" }}
                        >
                            <div>
                                <h3 className="text-[24px] font-semibold">{route.route}</h3>
                                <p className="text-[17px] text-[#FFFFFF]">One Way</p>
                                <div className="text-[57px] font-bold my-4">
                                    {route.price}
                                    <span className="text-[18px] font-normal">{route.currency}</span>
                                </div>
                                <p className="text-sm text-[#CCCCCC]">{route.description}</p>
                            </div>
                            <button className="mt-6 bg-[#fdb813] hover:bg-yellow-600 text-white font-semibold px-4 py-2 cursor-pointer">
                                Book A Trip
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Pricing;
