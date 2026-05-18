import { useState } from "react"
import hair from "./images/hair.jpg.jpg"
import spa from "./images/spa.jpg.jpg"
import bridal from "./images/bridal.jpg.jpg"
import {
  FaSpa,
  FaCut,
  FaCrown,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaRegClock,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaQuoteLeft,
  FaCheckCircle,
  FaTimes
} from "react-icons/fa"
import hero from "./images/hero.jpg.jpg"
import salon1 from "./images/salon1.jpg.jpg"
import salon2 from "./images/salon2.jpg.jpg"
import salon3 from "./images/salon3.jpg.jpg"

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Hair Styling",
    date: ""
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.phone && formData.date) {
      setIsModalOpen(true)
    } else {
      alert("Please fill in all fields")
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "Hair Styling",
      date: ""
    })
  }

  return (
    <div className="font-['Poppins','Inter',system-ui,-apple-system,sans-serif] bg-gradient-to-br from-[#FAF6F2] via-[#F5EDE7] to-[#EFE4DC] text-[#2C1810]">

      {/* Navbar */}
      <nav className="bg-[#2C1810]/95 backdrop-blur-md shadow-xl sticky top-0 z-50 text-white flex flex-col md:flex-row justify-between items-center px-8 py-5">
        <h1 className="text-3xl md:text-4xl font-light tracking-wide">
          Glow<span className="font-bold tracking-tight">Nest</span>
          <span className="block text-xs font-light tracking-[0.3em] mt-0.5">SALON & SPA</span>
        </h1>
        <ul className="flex gap-8 text-md font-medium tracking-wide mt-3 md:mt-0">
          <li><a href="#home" className="hover:text-[#D4BBAC] transition-colors duration-150">Home</a></li>
          <li><a href="#services" className="hover:text-[#D4BBAC] transition-colors duration-150">Services</a></li>
          <li><a href="#about" className="hover:text-[#D4BBAC] transition-colors duration-150">About</a></li>
          <li><a href="#gallery" className="hover:text-[#D4BBAC] transition-colors duration-150">Gallery</a></li>
          <li><a href="#contact" className="hover:text-[#D4BBAC] transition-colors duration-150">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col-reverse md:flex-row justify-center items-center gap-12 px-6 md:px-20 py-16">
        <div className="flex-1 text-center md:text-left">
          <p className="text-[#8B5A3C] tracking-[0.2em] mb-4 font-semibold text-sm">WELCOME TO LUXURY</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            Glow Beyond <br />
            <span className="text-[#8B5A3C]">Beauty</span>
          </h1>
          <p className="mt-6 text-lg max-w-lg text-[#4A3326] leading-relaxed">
            Experience luxury salon care, relaxing spa treatments, and premium beauty services at GlowNest Salon.
          </p>
          <a href="#booking">
            <button className="mt-10 bg-[#2C1810] text-white px-10 py-4 rounded-full text-md font-medium tracking-wide shadow-md hover:bg-[#4A2A1A] transition-colors duration-150">
              Book Appointment →
            </button>
          </a>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src={hero}
            alt="Salon"
            className="w-full md:w-[550px] rounded-3xl shadow-xl"
          />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-6 md:px-20 py-32 bg-white/40">
        <div className="text-center mb-16">
          <p className="text-[#8B5A3C] tracking-[0.2em] font-semibold text-sm mb-3">WHAT WE OFFER</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Our Services</h2>
          <div className="w-24 h-1 bg-[#D4BBAC] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-md overflow-hidden">
            <div className="h-64">
              <img
                src={hair}
                alt="Hair Styling"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-[#FAF6F2] rounded-full flex items-center justify-center mx-auto mb-5">
                <FaCut className="text-3xl text-[#2C1810]" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Hair Styling</h3>
              <p className="text-[#4A3326]">Professional haircut, coloring, and styling services tailored to your personality.</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-md overflow-hidden">
            <div className="h-64">
              <img
                src={spa}
                alt="Spa"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-[#FAF6F2] rounded-full flex items-center justify-center mx-auto mb-5">
                <FaSpa className="text-3xl text-[#2C1810]" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Spa Therapy</h3>
              <p className="text-[#4A3326]">Relaxing spa treatments for complete refreshment of body and mind.</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-md overflow-hidden">
            <div className="h-64">
              <img
                src={bridal}
                alt="Bridal"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-[#FAF6F2] rounded-full flex items-center justify-center mx-auto mb-5">
                <FaCrown className="text-3xl text-[#2C1810]" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Bridal Makeup</h3>
              <p className="text-[#4A3326]">Luxury bridal beauty packages and makeup services for your special day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 md:px-20 py-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img src={salon1} alt="About Us" className="rounded-3xl shadow-xl w-full h-[500px] object-cover" />
          </div>
          <div className="text-left">
            <p className="text-[#8B5A3C] tracking-[0.2em] font-semibold text-sm mb-4">OUR STORY</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">About GlowNest</h2>
            <div className="w-20 h-1 bg-[#D4BBAC] mb-8 rounded-full"></div>
            <p className="text-lg leading-relaxed text-[#4A3326] mb-6">
              Founded with a passion for beauty and wellness, GlowNest Salon combines elegance, artistry, and relaxation to create a premium salon experience.
            </p>
            <p className="text-lg leading-relaxed text-[#4A3326]">
              Our team of expert stylists and therapists are dedicated to bringing out your natural glow through personalized services and luxurious treatments.
            </p>
            <div className="flex gap-6 mt-10">
              <div className="text-center">
                <p className="text-3xl font-bold text-[#2C1810]">500+</p>
                <p className="text-sm text-[#8B5A3C]">Happy Clients</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#2C1810]">8+</p>
                <p className="text-sm text-[#8B5A3C]">Years Exp</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#2C1810]">20+</p>
                <p className="text-sm text-[#8B5A3C]">Experts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="px-6 md:px-20 py-32 bg-white/40">
        <div className="text-center mb-16">
          <p className="text-[#8B5A3C] tracking-[0.2em] font-semibold text-sm mb-3">OUR WORK</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Gallery</h2>
          <div className="w-24 h-1 bg-[#D4BBAC] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-md">
            <img src={salon1} alt="Salon Interior" className="h-80 w-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-md">
            <img src={salon2} alt="Hair Styling" className="h-80 w-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-md">
            <img src={salon3} alt="Relaxing Spa" className="h-80 w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 md:px-20 py-32">
        <div className="text-center mb-16">
          <p className="text-[#8B5A3C] tracking-[0.2em] font-semibold text-sm mb-3">TESTIMONIALS</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">What Clients Say</h2>
          <div className="w-24 h-1 bg-[#D4BBAC] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <FaQuoteLeft className="text-3xl text-[#D4BBAC] mb-4" />
            <p className="text-lg italic text-[#4A3326] leading-relaxed">
              "Amazing salon experience and premium service. The staff is incredibly professional and caring."
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-[#D4BBAC] rounded-full flex items-center justify-center text-white font-bold text-xl">S</div>
              <div>
                <h4 className="text-xl font-bold">Sophia Martinez</h4>
                <p className="text-sm text-[#8B5A3C]">Regular Client</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <FaQuoteLeft className="text-3xl text-[#D4BBAC] mb-4" />
            <p className="text-lg italic text-[#4A3326] leading-relaxed">
              "The best spa and beauty treatments I ever had. The ambiance is so relaxing and peaceful."
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-[#D4BBAC] rounded-full flex items-center justify-center text-white font-bold text-xl">E</div>
              <div>
                <h4 className="text-xl font-bold">Emma Watson</h4>
                <p className="text-sm text-[#8B5A3C]">Spa Lover</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <FaQuoteLeft className="text-3xl text-[#D4BBAC] mb-4" />
            <p className="text-lg italic text-[#4A3326] leading-relaxed">
              "Professional staff and beautiful atmosphere. My go-to salon for all my beauty needs."
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-[#D4BBAC] rounded-full flex items-center justify-center text-white font-bold text-xl">O</div>
              <div>
                <h4 className="text-xl font-bold">Olivia Chen</h4>
                <p className="text-sm text-[#8B5A3C]">Beauty Enthusiast</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="px-6 md:px-20 py-32 bg-gradient-to-r from-[#2C1810] to-[#4A2A1A]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <p className="tracking-[0.2em] text-[#D4BBAC] font-semibold text-sm mb-4">RESERVE YOUR SPOT</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Book an Appointment</h2>
            <div className="w-20 h-1 bg-[#D4BBAC] mb-8 rounded-full"></div>
            <p className="text-lg leading-relaxed mb-8 text-white/80">
              Experience luxury beauty and relaxation. Fill out the form and our team will get back to you within 24 hours.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <FaRegClock className="text-[#D4BBAC]" />
                </div>
                <div>
                  <p className="font-semibold">Working Hours</p>
                  <p className="text-white/70">Mon-Sat: 9AM - 8PM | Sun: 10AM - 6PM</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <FaPhoneAlt className="text-[#D4BBAC]" />
                </div>
                <div>
                  <p className="font-semibold">Call Us</p>
                  <p className="text-white/70">+91 12345 67890</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl flex flex-col gap-5">
            <h3 className="text-2xl font-bold text-[#2C1810] mb-2">Schedule Your Visit</h3>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              required
              className="p-4 rounded-xl outline-none bg-[#FAF6F2] border border-[#E8DDD4] focus:border-[#D4BBAC] transition-colors duration-150"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              required
              className="p-4 rounded-xl outline-none bg-[#FAF6F2] border border-[#E8DDD4] focus:border-[#D4BBAC] transition-colors duration-150"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone Number"
              required
              className="p-4 rounded-xl outline-none bg-[#FAF6F2] border border-[#E8DDD4] focus:border-[#D4BBAC] transition-colors duration-150"
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="p-4 rounded-xl outline-none bg-[#FAF6F2] border border-[#E8DDD4] focus:border-[#D4BBAC] transition-colors duration-150"
            >
              <option>Hair Styling</option>
              <option>Spa Therapy</option>
              <option>Bridal Makeup</option>
            </select>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
              className="p-4 rounded-xl outline-none bg-[#FAF6F2] border border-[#E8DDD4] focus:border-[#D4BBAC] transition-colors duration-150"
            />
            <button
              type="submit"
              className="bg-[#2C1810] text-white py-4 rounded-xl text-lg font-semibold hover:bg-[#4A2A1A] transition-colors duration-150 shadow-md"
            >
              Confirm Booking →
            </button>
          </form>
        </div>
      </section>

      {/* Booking Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 text-center shadow-2xl animate-fadeIn">
            <div className="flex justify-end">
              <button onClick={closeModal} className="text-gray-400 hover:text-gray-600 transition-colors duration-150">
                <FaTimes size={24} />
              </button>
            </div>
            <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-[#2C1810] mb-2">Booking Confirmed!</h3>
            <p className="text-[#4A3326] mb-6">
              Thank you {formData.name} for booking with GlowNest Salon.
            </p>
            <div className="bg-[#FAF6F2] p-4 rounded-xl text-left mb-6 space-y-2">
              <p className="text-sm"><span className="font-semibold">Service:</span> {formData.service}</p>
              <p className="text-sm"><span className="font-semibold">Date:</span> {formData.date}</p>
              <p className="text-sm"><span className="font-semibold">Contact:</span> {formData.phone}</p>
            </div>
            <p className="text-sm text-[#8B5A3C] mb-6">
              We'll send a confirmation to {formData.email}
            </p>
            <button
              onClick={closeModal}
              className="w-full bg-[#2C1810] text-white py-3 rounded-xl font-semibold hover:bg-[#4A2A1A] transition-colors duration-150"
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer id="contact" className="bg-[#1A0F0A] text-white/80">
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-16 grid md:grid-cols-4 gap-12">
          <div>
            <h2 className="text-3xl font-light mb-4">
              Glow<span className="font-bold">Nest</span>
            </h2>
            <p className="text-sm leading-relaxed">Luxury Beauty & Spa Experience</p>
            <div className="flex gap-4 mt-6">
              <FaInstagram className="hover:text-[#D4BBAC] transition-colors duration-150 cursor-pointer text-xl" />
              <FaFacebook className="hover:text-[#D4BBAC] transition-colors duration-150 cursor-pointer text-xl" />
              <FaWhatsapp className="hover:text-[#D4BBAC] transition-colors duration-150 cursor-pointer text-xl" />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-[#D4BBAC] transition-colors duration-150">Home</a></li>
              <li><a href="#services" className="hover:text-[#D4BBAC] transition-colors duration-150">Services</a></li>
              <li><a href="#about" className="hover:text-[#D4BBAC] transition-colors duration-150">About</a></li>
              <li><a href="#gallery" className="hover:text-[#D4BBAC] transition-colors duration-150">Gallery</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#D4BBAC]" />
                <span>123 Luxury Lane, Beverly Hills</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#D4BBAC]" />
                <span>+91 12345 67890</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-sm mb-3">Get updates on special offers</p>
            <div className="flex">
              <input type="email" placeholder="Your email" className="p-2 rounded-l-lg w-full text-sm text-[#2C1810] outline-none" />
              <button className="bg-[#D4BBAC] px-4 rounded-r-lg text-[#2C1810] font-semibold text-sm hover:bg-[#c4ab9a] transition-colors duration-150">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 text-center py-6 text-sm">
          <p>&copy; 2025 GlowNest Salon & Spa. All rights reserved.</p>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/911234567890"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full text-3xl shadow-md hover:shadow-lg transition-shadow duration-150 cursor-pointer z-50">
          <FaWhatsapp />
        </div>
      </a>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </div>
  )
}

export default App