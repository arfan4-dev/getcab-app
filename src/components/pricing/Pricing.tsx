import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { groupedRoutes } from "@/constant";

const Pricing = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section id="price" className=" bg-white text-center px-4">
            <p className="uppercase text-[16px] tracking-widest text-[#1a1919] font-semibold mb-2">
                Fasta priser på utvalda rutter
            </p>
            <h2 className="text-[40px] lg:text-[57px] mb-6">
                Tryggt och pålitligt – till ett pris som passar dig
            </h2>

            <hr className="max-w-5xl mx-auto mb-10 border-gray-300" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto ">
                {groupedRoutes.map((group: any, index: any) => (
                    <div
                        key={index}
                        className="bg-[#222222] text-white  shadow-lg px-7 py-6 rounded-[30px]"
                        data-aos="fade-up"
                    >
                        <h3 className="text-[22px] font-semibold mb-4">{group.title}</h3>
                        {group.routes.map((r: any, i: any) => (
                            <div key={i} className="mb-4">
                                <p className="text-[16px]">{r.route}</p>
                                <p className="text-[28px] font-bold text-[#fdb813]">{r.price}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Pricing;
