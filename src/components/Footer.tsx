import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png"; // Adjust path as needed

const Footer = () => {
	const quickLinks = [
		{ name: "Home", path: "/" },
		{ name: "About", path: "/about" },
		{ name: "Services", path: "/services" },
		{ name: "Contact", path: "/contact" },
	];

	return (
		<footer className="bg-black text-white">
			<div className="container mx-auto px-4 md:px-8 py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
					{/* Logo and About Section */}
					<div className="space-y-6">
						<img
							src={Logo}
							alt="BMK Developments"
							className="h-16 w-auto"
						/>
						<p className="text-gray-300 text-sm">
							Your trusted partner in construction excellence,
							delivering quality builds and renovations across
							Sydney.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-xl font-semibold mb-6">
							Quick Links
						</h3>
						<ul className="space-y-3">
							{quickLinks.map((link) => (
								<li key={link.name}>
									<Link
										to={link.path}
										className="text-gray-300 hover:text-[#0d83ed] transition-colors duration-300 flex items-center gap-2 group"
									>
										<ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h3 className="text-xl font-semibold mb-6">
							Contact Us
						</h3>
						<ul className="space-y-4">
							<li className="flex items-start gap-3">
								<MapPin className="w-5 h-5 text-[#0d83ed] flex-shrink-0 mt-1" />
								<span className="text-gray-300">
									Sydney, NSW
								</span>
							</li>
							<li className="flex items-start gap-3">
								<Phone className="w-5 h-5 text-[#0d83ed] flex-shrink-0 mt-1" />
								<a
									href="tel:0460006007"
									className="text-gray-300 hover:text-[#0d83ed] transition-colors duration-300"
								>
									0460 006 007
								</a>
							</li>
							<li className="flex items-start gap-3">
								<Mail className="w-5 h-5 text-[#0d83ed] flex-shrink-0 mt-1" />
								<a
									href="mailto:info@bmkdevelopments.com"
									className="text-gray-300 hover:text-[#0d83ed] transition-colors duration-300"
								>
									info@bmkdevelopments.com
								</a>
							</li>
						</ul>
					</div>

					{/* Free Quote Section */}
					<div>
						<h3 className="text-xl font-semibold mb-6">
							Free Quote
						</h3>
						<p className="text-gray-300 mb-6">
							Get a free quote for all your home renovations
							including Kitchen and Bathrooms, home extensions,
							alterations and much more.
						</p>
						<Link
							to="/contact"
							className="inline-block bg-[#0d83ed] hover:bg-[#0d83ed]/90 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
						>
							Get A Quote
						</Link>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="border-t border-gray-800">
				<div className="container mx-auto px-4 md:px-8 py-6">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						<p className="text-gray-400 text-sm text-center md:text-left">
							© {new Date().getFullYear()} BMK Developments. All
							rights reserved.
						</p>
						<p className="text-gray-400 text-sm">
							Website by:{" "}
							<a
								href="https://imagynix.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-[#0d83ed] hover:text-[#0d83ed]/90 transition-colors duration-300"
							>
								Imagynix
							</a>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
