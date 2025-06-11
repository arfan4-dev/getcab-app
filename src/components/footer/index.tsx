import { Mail, ArrowRight, Instagram, Facebook } from "lucide-react";
import QRCode from "react-qr-code";
import "aos/dist/aos.css";
import { navLinks } from "@/constant";

const Footer = () => {
    return (
        <footer id="contact" className="bg-[#111] text-gray-300 py-12 px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12 text-[18px]">
                {/* Kontor Info */}
                <div data-aos="fade-up">
                    <h4 className="text-white font-semibold mb-4">Kontor</h4>
                    <p>Sverige<br />Almqvistgatan 13,<br />754 30 Uppsala</p>
                    <p className="mt-3">driveuppsala@gmail.com</p>
                    <p>+0735 735 005</p>
                </div>

                {/* Länkar */}
                <div data-aos="fade-up" data-aos-delay="100">
                    <h4 className="text-white font-semibold mb-4">Länkar</h4>
                    <ul className="space-y-1">
                        {navLinks.map(({ label, href }, i) => (
                            <li key={i}>
                                <a href={href} className="hover:text-white">{label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Sociala Medier */}
                <div data-aos="fade-up" data-aos-delay="200">
                    <h4 className="text-white font-semibold mb-4">Sociala medier</h4>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                            <Facebook color="white" size={18} />
                            <a href="https://www.facebook.com/profile.php?id=61570145375023" target="_blank" className="hover:text-white">Facebook</a>
                        </li>
                        <li className="flex items-center gap-2">
                            <Instagram color="white" size={18} />
                            <a href="https://www.instagram.com/drive.uppsala" target="_blank" className="hover:text-white">Instagram</a>
                        </li>
                    </ul>

                    {/* WhatsApp QR */}
                    <div className="mt-4 bg-white p-2 rounded w-fit">
                        <h4 className="text-black text-sm font-semibold mb-1">Skanna WhatsApp QR</h4>
                        <QRCode value="https://wa.me/46735735005" size={80} />
                    </div>
                </div>

                {/* Nyhetsbrev */}
                <div data-aos="fade-up" data-aos-delay="300">
                    <h4 className="text-white font-semibold mb-4">Nyhetsbrev</h4>
                    <div className="flex">
                        <div className="flex items-center bg-gray-200 px-3 w-full">
                            <Mail className="text-black mr-2" size={16} />
                            <input
                                type="email"
                                placeholder="Ange din e-postadress"
                                className="bg-transparent w-full text-black text-sm py-2 outline-none"
                            />
                        </div>
                        <button className="bg-[#fdb813] px-4 py-2">
                            <ArrowRight className="text-white" size={18} />
                        </button>
                    </div>
                    <label className="text-sm mt-2 inline-block text-gray-400">
                        <input type="checkbox" className="mr-2 mt-3" />
                        Jag godkänner <a href="#" className="underline">integritetspolicyn</a>.
                    </label>
                </div>
            </div>

            {/* Bottenrad */}
            <div className="border-t border-gray-700 pt-6  text-gray-400 text-center" data-aos="fade-up" data-aos-delay="400">
                Drive Upsala 2025 – Alla rättigheter förbehållna. Webbplatsen är designad av{" "}
                <a className="underline" href="https://borkowskaprojektuje.pl" target="_blank" rel="noreferrer">
                    borkowskaprojektuje.pl
                </a>
            </div>
        </footer>
    );
};

export default Footer;
