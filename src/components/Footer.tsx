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

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: "easeOut",
			},
		},
	};

	return (
		<footer className="bg-black text-white">
			<motion.div
				className="container mx-auto px-4 md:px-8 py-16"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
			>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
					{/* Logo and About Section */}
					<motion.div variants={itemVariants} className="space-y-6">
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
					</motion.div>

					{/* Quick Links */}
					<motion.div variants={itemVariants}>
						<h3 className="text-xl font-semibold mb-6">
							Quick Links
						</h3>
						<ul className="space-y-3">
							{quickLinks.map((link, index) => (
								<motion.li
									key={link.name}
									variants={itemVariants}
									custom={index}
								>
									<Link
										to={link.path}
										className="text-gray-300 hover:text-[#0d83ed] transition-colors duration-300 flex items-center gap-2 group"
									>
										<ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
										{link.name}
									</Link>
								</motion.li>
							))}
						</ul>
					</motion.div>

					{/* Contact Info */}
					<motion.div variants={itemVariants}>
						<h3 className="text-xl font-semibold mb-6">
							Contact Us
						</h3>
						<ul className="space-y-4">
							{[
								{
									icon: (
										<MapPin className="w-5 h-5 text-[#0d83ed] flex-shrink-0 mt-1" />
									),
									text: "Sydney, NSW",
								},
								{
									icon: (
										<Phone className="w-5 h-5 text-[#0d83ed] flex-shrink-0 mt-1" />
									),
									text: "0460 006 007",
									href: "tel:0460006007",
								},
								{
									icon: (
										<Mail className="w-5 h-5 text-[#0d83ed] flex-shrink-0 mt-1" />
									),
									text: "info@bmkdevelopments.com",
									href: "mailto:info@bmkdevelopments.com",
								},
							].map((item, index) => (
								<motion.li
									key={index}
									variants={itemVariants}
									className="flex items-start gap-3"
								>
									{item.icon}
									{item.href ? (
										<a
											href={item.href}
											className="text-gray-300 hover:text-[#0d83ed] transition-colors duration-300"
										>
											{item.text}
										</a>
									) : (
										<span className="text-gray-300">
											{item.text}
										</span>
									)}
								</motion.li>
							))}
						</ul>
					</motion.div>

					{/* Free Quote Section */}
					<motion.div variants={itemVariants}>
						<h3 className="text-xl font-semibold mb-6">
							Free Quote
						</h3>
						<p className="text-gray-300 mb-6">
							Get a free quote for all your home renovations
							including Kitchen and Bathrooms, home extensions,
							alterations and much more.
						</p>
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<Link
								to="/contact"
								className="inline-block bg-[#0d83ed] hover:bg-[#0d83ed]/90 text-white px-6 py-3 rounded-lg transition-colors duration-300"
							>
								Get A Quote
							</Link>
						</motion.div>
					</motion.div>
				</div>
			</motion.div>

			{/* Bottom Bar */}
			<motion.div
				className="border-t border-gray-800"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ delay: 1 }}
			>
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
			</motion.div>
		</footer>
	);
};

export default Footer;
