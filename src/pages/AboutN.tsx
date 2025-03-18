import { motion } from "framer-motion";
import { ArrowRight, Award, Building, Check, Mail, Phone } from "lucide-react";
import newbuild3 from "../assets/newbuild/newbuild3.webp";
import grannyflat7 from "../assets/grannyflat/grannyflat7.webp";
import { Link } from "react-router-dom";

const AboutN = () => {
	return (
		<div className="mt-20 md:mt-24">
			{/* Banner Section */}
			<section className="relative w-full h-[40vh] md:h-[60vh]">
				<img
					src={
						"https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					}
					alt="About Us Banner"
					className="w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-black/60 flex items-center justify-center">
					<div className="text-center text-white px-4 md:px-8">
						<h1 className="text-3xl md:text-5xl font-bold mb-4">
							ABOUT US
						</h1>
						<p className="text-lg md:text-xl w-full md:max-w-3xl">
							BMK Developments brings together an exceptional team
							of skilled craftsmen and industry experts who share
							one common goal - transforming your dream home into
							a stunning reality through masterful execution and
							unwavering commitment to excellence.
						</p>
					</div>
				</div>
			</section>

			{/* Text Left, Image Right Section */}
			<section className="py-12 pt-4 md:py-24 bg-white">
				<div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="space-y-4"
					>
						<p className="text-gray-700">
							Staying at the forefront of industry standards is
							our priority. Through ongoing collaboration with
							local Councils, certified Engineers, and Private
							Certifiers, we maintain comprehensive knowledge of
							current building codes and regulations. This
							expertise enables us to provide precise assessments
							and transparent, accurate pricing from the start.
						</p>
						<p className="text-gray-700">
							What sets our team apart is their exceptional
							craftsmanship combined with a thoughtful approach to
							construction. We understand the impact of building
							works on surrounding residents and take great care
							to minimize disruption while maintaining rigorous
							safety protocols that protect everyone on and around
							our sites.
						</p>
						<p className="text-gray-700">
							Unlike many others, we handle all construction
							in-house with our own dedicated team. This means
							when you choose BMK Developments, you're working
							directly with the builders who will bring your
							project to life - no third-party contractors or
							outsourcing.
						</p>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.4 }}
							className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6"
						>
							<div className="flex items-center gap-2">
								<Mail className="w-5 h-5 text-[#0d83ed]" />
								<span>info@bmkdevelopments.com</span>
							</div>
							<div className="flex items-center gap-2">
								<Phone className="w-5 h-5 text-[#0d83ed]" />
								<span>0460 006 007</span>
							</div>
							<div className="flex items-center gap-2">
								<Award className="w-5 h-5 text-[#0d83ed]" />
								<span>License: 469014C</span>
							</div>
							<div className="flex items-center gap-2">
								<Building className="w-5 h-5 text-[#0d83ed]" />
								<span>Qualified Builder</span>
							</div>
						</motion.div>
					</motion.div>
					<motion.img
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{
							duration: 0.8,
							ease: "easeOut",
							delay: 0.2,
						}}
						src={grannyflat7}
						alt="About Us Image"
						className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl shadow-lg"
					/>
				</div>
			</section>

			{/* Image Left, Text Right Section */}
			<section className="py-16 md:py-24 bg-gray-100">
				<div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
					<motion.img
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						src={newbuild3}
						alt="Our Values Image"
						className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl shadow-lg"
					/>
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{
							duration: 0.8,
							ease: "easeOut",
							delay: 0.2,
						}}
						className="space-y-4"
					>
						<h2 className="text-3xl font-bold text-gray-800">
							PARTNER WITH EXCELLENCE
						</h2>

						<div className="space-y-4 last:mt-3">
							<div className="flex items-start gap-3">
								<Check className="min-w-5 h-5 text-[#0d83ed] mt-1" />
								<p className="text-gray-600">
									With a proven track record spanning numerous
									successful builds, we bring unmatched expertise
									to every construction challenge.
								</p>
							</div>

							<div className="flex items-start gap-3">
								<Check className="min-w-5 h-5 text-[#0d83ed] mt-1" />
								<p className="text-gray-600">
									Start your journey with a zero-cost consultation
									and receive a comprehensive project estimate at
									no obligation.
								</p>
							</div>

							<div className="flex items-start gap-3">
								<Check className="min-w-5 h-5 text-[#0d83ed] mt-1" />
								<p className="text-gray-600">
									Every quote comes with a complete breakdown of
									costs and services - we believe in absolute
									clarity and zero surprises.
								</p>
							</div>

							<div className="flex items-start gap-3">
								<Check className="min-w-5 h-5 text-[#0d83ed] mt-1" />
								<p className="text-gray-600">
									Rest assured knowing your project is backed by
									our complete suite of industry certifications,
									permits and comprehensive insurance coverage.
								</p>
							</div>

							{/* <div className="flex items-start gap-3">
								<Check className="min-w-5 h-5 text-[#0d83ed] mt-1" />
								<p className="text-gray-600">
									Our network of skilled tradesmen brings
									together over 50 years of combined
									experience, ensuring high-quality
									workmanship.
								</p>
							</div> */}
							<motion.div>
								<Link
									to="/contact"
									className="flex items-center gap-2 w-max mt-2 bg-[#0d83ed] hover:bg-[#0d83ed]/90 text-white px-6 py-3 rounded-lg transition-colors duration-300 group"
								>
									Get Your Free Quote Today
									<ArrowRight className="group-hover:translate-x-2 transition-all duration-200" />
								</Link>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
};

export default AboutN;
