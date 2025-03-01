import { motion } from "framer-motion";
import {
	Mail,
	Phone,
	Send,
	Building,
	MapPin,
	Instagram,
	Award,
} from "lucide-react";
import React, { useState } from "react";
import newbuild4 from "../assets/newbuild/newbuild4.webp";

const ContactForm = () => {
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		// Add form submission logic here
		await new Promise((resolve) => setTimeout(resolve, 1000));
		setIsLoading(false);
	};

	return (
		<section className="py-12 md:py-20 bg-white">
			<div className="container mx-auto px-4 md:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
					{/* Left Column - Contact Info */}
					<motion.div
						className="space-y-4 md:space-y-8"
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
					>
						<img
							className="w-[100%] h-56 object-cover object-top md:object-center rounded-xl md:rounded-2xl shadow-xl"
							src={newbuild4}
							alt="Minarets Illustration"
						/>
						<p className="text-gray-600 text-lg">
							Feel free to reach out to us for any details about
							our services, or if you would like one of our team
							members to visit and provide a quote for your
							project.
						</p>
						<p className="text-gray-600 text-lg font-medium">
							We offer a complimentary, no-obligation quote within
							24 hours.
						</p>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div className="flex items-center gap-2">
								<Building className="w-4 h-4 text-[#0d83ed]" />
								<div>
									<span className="font-semibold">ABN:</span>{" "}
									24 679 267 111
								</div>
							</div>
							<div className="flex items-center gap-2">
								<Award className="w-4 h-4 text-[#0d83ed]" />
								<div>
									<span className="font-semibold">
										Lic Number:
									</span>{" "}
									469014C
								</div>
							</div>
							<div className="flex items-center gap-2">
								<MapPin className="w-4 h-4 text-[#0d83ed]" />
								<div>
									<span className="font-semibold">
										Address:
									</span>{" "}
									Sydney, NSW
								</div>
							</div>
							<div className="flex items-center gap-2">
								<Mail className="w-4 h-4 text-[#0d83ed]" />
								<a
									href="mailto:info@bmkdevelopments.com"
									className="hover:text-[#0d83ed] transition-colors"
								>
									info@bmkdevelopments.com
								</a>
							</div>
							<div className="flex items-center gap-2">
								<Phone className="w-4 h-4 text-[#0d83ed]" />
								<a
									href="tel:0460006007"
									className="hover:text-[#0d83ed] transition-colors"
								>
									0460 006 007
								</a>
							</div>
							<div className="flex items-center gap-2">
								<Instagram className="w-4 h-4 text-[#0d83ed]" />
								<a
									href="https://instagram.com/bmkdevelopments"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 text-gray-600 hover:text-[#0d83ed] transition-colors"
								>
									@bmkdevelopments
								</a>
							</div>
						</div>
					</motion.div>
					{/* Right Column - Form */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="bg-gray-50 p-4 md:p-8 rounded-2xl shadow-lg"
					>
						<h2 className="text-2xl font-bold mb-6">
							FREE ONLINE QUOTE
						</h2>
						<form onSubmit={handleSubmit} className="space-y-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div className="relative">
									<input
										type="text"
										required
										placeholder="First Name"
										className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 md:px-5 md:py-4 outline-none focus:border-[#0d83ed] transition-colors"
									/>
								</div>
								<div className="relative">
									<input
										type="text"
										required
										placeholder="Last Name"
										className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 md:px-5 md:py-4 outline-none focus:border-[#0d83ed] transition-colors"
									/>
								</div>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div className="relative">
									<input
										type="tel"
										required
										placeholder="Phone"
										className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 md:px-5 md:py-4 outline-none focus:border-[#0d83ed] transition-colors"
									/>
								</div>
								<div className="relative">
									<input
										type="email"
										required
										placeholder="Email"
										className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 md:px-5 md:py-4 outline-none focus:border-[#0d83ed] transition-colors"
									/>
								</div>
							</div>

							<div className="relative">
								<input
									type="text"
									placeholder="Company"
									className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 md:px-5 md:py-4 outline-none focus:border-[#0d83ed] transition-colors"
								/>
							</div>

							<div className="relative">
								<textarea
									required
									rows={4}
									placeholder="Your Message"
									className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 md:px-5 md:py-4 outline-none focus:border-[#0d83ed] transition-colors resize-none"
								/>
							</div>

							<motion.button
								type="submit"
								className="group flex items-center justify-center gap-2 w-full px-8 py-4 bg-[#0d83ed] text-white rounded-lg font-medium transition-all duration-300 hover:bg-[#0d83ed]/90 disabled:opacity-50 disabled:cursor-not-allowed"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								disabled={isLoading}
							>
								{isLoading ? (
									<Send className="w-5 h-5 animate-spin" />
								) : (
									<>
										Send Message
										<Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
									</>
								)}
							</motion.button>
						</form>
					</motion.div>
				</div>
				<div className="mt-12 h-[300px] w-full rounded-2xl overflow-hidden">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424144.67006371327!2d150.65178534643556!3d-33.847927688661174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20NSW!5e0!3m2!1sen!2sau!4v1708751271179!5m2!1sen!2sau"
						width="100%"
						height="100%"
						style={{ border: 0 }}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						className="w-full h-full"
					></iframe>
				</div>
			</div>
		</section>
	);
};

export default ContactForm;
