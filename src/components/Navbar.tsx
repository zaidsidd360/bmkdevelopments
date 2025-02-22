import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, Menu, X, Phone } from "lucide-react";
import Logo from "../assets/logo.png";
import { services } from "../helper";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll();
	const [isServicesOpen, setIsServicesOpen] = useState(false);

	const navLinks = [
		{ name: "Home", path: "/" },
		{ name: "About", path: "/about" },
		// { name: "Services", path: "/services" },
		{ name: "Contact", path: "/contact" },
	];

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};

		const handleClickOutside = (event: MouseEvent) => {
			if (
				menuRef.current &&
				!menuRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<nav
			className={`fixed top-0 w-full h-20 md:h-24 z-50 transition-all duration-300 backdrop-blur-md ${
				isScrolled ? "bg-black/80 shadow-lg" : "bg-black"
			}`}
		>
			<div className="container mx-auto px-4 h-full">
				<div className="flex items-center justify-between h-full">
					{/* Logo */}
					<Link to="/" className="flex-shrink-0">
						<img
							src={Logo}
							alt="Logo"
							className="h-12 md:h-16 w-auto"
						/>
					</Link>

					{/* Desktop Menu - Centered */}
					<div className="hidden md:flex items-center justify-center flex-1">
						{navLinks.map((link) => (
							<Link
								key={link.name}
								to={link.path}
								className="relative text-white text-lg hover:text-[#0d83ed] transition-colors duration-300 py-1 group mx-6"
							>
								{link.name}
								<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0d83ed] transition-all duration-300 group-hover:w-full" />
							</Link>
						))}
						<div
							className="relative mx-6"
							onMouseEnter={() => setIsServicesOpen(true)}
							onMouseLeave={() => setIsServicesOpen(false)}
						>
							<button
								className={`flex items-center text-lg gap-1 text-white hover:text-[#0d83ed] transition-colors py-2`}
							>
								Services
								{isServicesOpen ? (
									<ChevronUp className="w-4 h-4" />
								) : (
									<ChevronDown className="w-4 h-4" />
								)}
							</button>

							<AnimatePresence>
								{isServicesOpen && (
									<motion.div
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: 10 }}
										className="absolute top-[90%] left-0 transform mt-2 w-52 z-40 bg-black backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden"
									>
										{services.map((service) => (
											<Link
												key={service.name}
												to={`/services/${service.name
													.toLowerCase()
													.replace(/\s+/g, "-")
													.replace(/\//g, "")}`}
												onClick={() =>
													setIsServicesOpen(false)
												}
												className={`block px-4 py-3 text-white hover:bg-[#0d83ed]/20 transition-colors ${
													location.pathname ===
													`/services/${service.name
														.toLowerCase()
														.replace(/\s+/g, "-")
														.replace(/\//g, "")}`
														? "bg-[#0d83ed]/20 text-[#0d83ed]"
														: ""
												}`}
											>
												{service.name}
											</Link>
										))}
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					</div>

					{/* Contact CTA Button */}
					<div className="hidden md:flex items-center">
						<Link
							to="/contact"
							className="flex items-center gap-2 bg-[#0d83ed] hover:bg-[#0d83ed]/90 text-white px-6 py-2.5 rounded-lg transition-all duration-300 transform hover:scale-105"
						>
							<Phone className="w-4 h-4" />
							<span>Contact Us</span>
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<div
						className={`md:hidden ${isOpen ? "z-[60]" : "z-auto"}`}
					>
						<button
							onClick={() => setIsOpen(!isOpen)}
							className={`text-white p-2`}
						>
							{isOpen ? (
								<X className="w-8 h-8" />
							) : (
								<Menu className="w-8 h-8" />
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isOpen && (
					<>
						{/* Backdrop */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="fixed inset-0 bg-black/50 z-50 md:hidden"
							onClick={() => setIsOpen(false)}
						/>

						{/* Sliding Menu */}
						<motion.div
							ref={menuRef}
							initial={{ x: "100%" }}
							animate={{ x: "0%" }}
							exit={{ x: "100%" }}
							transition={{ type: "tween", duration: 0.3 }}
							className="fixed top-0 right-0 w-[60vw] h-screen bg-black/90 z-50 md:hidden"
						>
							<div className="mt-20">
								{navLinks.map((link) => (
									<Link
										key={link.name}
										to={link.path}
										className={`block py-3 px-4 text-white border-b border-white/10 hover:bg-[#0d83ed]/20 transition-colors `}
										onClick={() => setIsOpen(false)}
									>
										{link.name}
									</Link>
								))}

								<div>
									<button
										onClick={() =>
											setIsServicesOpen(!isServicesOpen)
										}
										className={`w-full py-3 px-4 flex items-center justify-between text-white border-b border-white/10 hover:bg-[#0d83ed]/20 transition-colors `}
									>
										Services
										{isServicesOpen ? (
											<ChevronUp className="w-4 h-4" />
										) : (
											<ChevronDown className="w-4 h-4" />
										)}
									</button>

									<AnimatePresence>
										{isServicesOpen && (
											<motion.div
												initial={{
													opacity: 0,
													height: 0,
												}}
												animate={{
													opacity: 1,
													height: "auto",
												}}
												exit={{ opacity: 0, height: 0 }}
												className="pl-4"
											>
												{services.map((service) => (
													<Link
														key={service.name}
														to={`/services/${service.name
															.toLowerCase()
															.replace(
																/\s+/g,
																"-"
															)
															.replace(
																/\//g,
																""
															)}`}
														className={`block py-3 px-4 text-white border-b border-white/10 hover:bg-[#0d83ed]/20 transition-colors ${
															location.pathname ===
															`/services/${service.name
																.toLowerCase()
																.replace(
																	/\s+/g,
																	"-"
																)}`
																? "bg-[#0d83ed]/20 text-[#0d83ed]"
																: ""
														}`}
														onClick={() => {
															setIsOpen(false);
															setIsServicesOpen(
																false
															);
														}}
													>
														{service.name}
													</Link>
												))}
											</motion.div>
										)}
									</AnimatePresence>
								</div>
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
			<motion.div
				id="scroll-indicator"
				className="bg-[#0d83ed]"
				style={{
					scaleX: scrollYProgress,
					position: "fixed",
					bottom: 0,
					left: 0,
					right: 0,
					height: 1,
					originX: 0,
					// backgroundColor: "bg-[#0d83ed]",
				}}
			/>
		</nav>
	);
};

export default Navbar;
