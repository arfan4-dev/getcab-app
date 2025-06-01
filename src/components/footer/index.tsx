import { Mail, ArrowRight, Instagram, Twitter, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#111] text-gray-300 py-12 px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
                {/* Office Info */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Office</h4>
                    <p>Sweden<br />Almqvistgatan 13,<br />754 30 Uppsala</p>
                    <p className="mt-3">gizelataxi@gmail.com</p>
                    <p>+46 72 927 23 89</p>
                </div>

                {/* Links */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Links</h4>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:text-white">Home</a></li>
                        <li><a href="#" className="hover:text-white">Order a taxi now</a></li>
                        <li><a href="#" className="hover:text-white">Plan your trip</a></li>
                        <li><a href="#" className="hover:text-white">My account</a></li>
                        <li><a href="#" className="hover:text-white">Work with us</a></li>
                        <li><a href="#" className="hover:text-white">Contact</a></li>
                        <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Social media</h4>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                            <Facebook color="white" size={18} />
                            <a href="#" className="hover:text-white">Facebook</a>
                        </li>
                        <li className="flex items-center gap-2">
                            <Instagram color="white" size={18} />
                            <a href="#" className="hover:text-white">Instagram</a>
                        </li>
                        <li className="flex items-center gap-2">
                            <Twitter color="white" size={18} />
                            <a href="#" className="hover:text-white">Twitter X</a>
                        </li>
                        <li className="flex items-center gap-2">
                            <Linkedin color="white" size={18} />
                            <a href="#" className="hover:text-white">LinkedIn</a>
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Newsletter</h4>
                    <div className="flex">
                        <div className="flex items-center bg-gray-200 px-3 w-full">
                            <Mail className="text-black mr-2" size={16} />
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="bg-transparent w-full text-black text-sm py-2 outline-none"
                            />
                        </div>
                        <button className="bg-[#fdb813] px-4 py-2">
                            <ArrowRight className="text-white" size={18} />
                        </button>
                    </div>
                    <label className="text-xs mt-2 inline-block text-gray-400">
                        <input type="checkbox" className="mr-2 mt-3" />
                        I agree to the <a href="#" className="underline">privacy policy</a>.
                    </label>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-gray-700 pt-6 text-sm text-gray-400 text-center">
                GizelaTaxi 2025 – All rights reserved. Website designed by{" "}
                <a className="underline" href="https://borkowskaprojektuje.pl" target="_blank" rel="noreferrer">
                    borkowskaprojektuje.pl
                </a>
            </div>
        </footer>
    );
};

export default Footer;
