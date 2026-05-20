import { useState } from 'react'

export default function PremiumGlowNestHomepage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleBooking = (e) => {
    e.preventDefault()

    localStorage.setItem('glownest-booking', JSON.stringify(formData))

    alert('Appointment booked successfully!')

    setFormData({
      name: '',
      phone: '',
      service: '',
      date: '',
    })
  }

  return (
    <div className="bg-[#FFFDFB] text-[#2D2D2D] overflow-x-hidden">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 lg:px-16 py-4">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-6 py-4 flex items-center justify-between shadow-xl">
          <h1 className="text-2xl font-serif tracking-wide text-[#2A1F1B] font-bold">
            GlowNest
          </h1>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="hover:text-[#D4B483] transition-all duration-300">
              Services
            </a>
            <a href="#gallery" className="hover:text-[#D4B483] transition-all duration-300">
              Gallery
            </a>
            <a href="#team" className="hover:text-[#D4B483] transition-all duration-300">
              Team
            </a>
            <a href="#contact" className="hover:text-[#D4B483] transition-all duration-300">
              Contact
            </a>
          </nav>

          <button className="bg-[#2A1F1B] hover:bg-[#D4B483] text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
            Book Now
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center pt-36 px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* LEFT */}
          <div className="space-y-8">
            <div className="inline-block px-5 py-2 rounded-full bg-[#F6E8E4] text-[#2A1F1B] text-sm font-medium shadow-sm">
              Premium Beauty Experience
            </div>

            <h1 className="text-5xl lg:text-7xl leading-tight font-serif text-[#2A1F1B]">
              Luxury Beauty
              <br />
              Crafted Around You
            </h1>

            <p className="text-lg leading-8 text-gray-600 max-w-xl">
              Experience premium salon treatments, expert stylists, and personalized beauty care in a modern luxury environment.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#booking"
                className="bg-[#2A1F1B] hover:bg-[#D4B483] text-white px-8 py-4 rounded-full text-sm tracking-wide transition-all duration-300 hover:scale-105 shadow-xl inline-block"
              >
                Book Appointment
              </a>

              <button className="border border-[#2A1F1B] hover:bg-[#2A1F1B] hover:text-white px-8 py-4 rounded-full text-sm tracking-wide transition-all duration-300">
                Explore Services
              </button>
            </div>

            <div className="flex items-center gap-6 pt-6">
              <div>
                <h3 className="text-3xl font-bold text-[#2A1F1B]">10K+</h3>
                <p className="text-gray-500 text-sm">Happy Clients</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#2A1F1B]">4.9</h3>
                <p className="text-gray-500 text-sm">Average Rating</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#2A1F1B]">15+</h3>
                <p className="text-gray-500 text-sm">Expert Stylists</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#F6E8E4] rounded-full blur-3xl opacity-70"></div>

            <img
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1200&auto=format&fit=crop"
              alt="Salon"
              className="rounded-[40px] shadow-2xl object-cover h-[700px] w-full"
            />

            <div className="absolute bottom-8 left-8 backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-6 shadow-xl max-w-xs">
              <p className="text-sm text-white leading-7">
                “GlowNest completely transformed my confidence and style.”
              </p>

              <div className="flex items-center gap-3 mt-4">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="text-white font-semibold">Sophia Grace</h4>
                  <p className="text-white/80 text-sm">Verified Client</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 px-6 lg:px-20 bg-[#FAF7F5]">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#D4B483] uppercase tracking-[4px] text-sm mb-4">
            Premium Services
          </p>

          <h2 className="text-5xl font-serif text-[#2A1F1B] mb-6">
            Luxury Beauty Treatments
          </h2>

          <p className="text-gray-600 leading-8">
            Discover personalized beauty treatments designed to elevate your confidence and style.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Hair Styling',
              image:
                'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop',
            },
            {
              title: 'Luxury Facial',
              image:
                'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop',
            },
            {
              title: 'Bridal Makeup',
              image:
                'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop',
            },
          ].map((service, index) => (
            <div
              key={index}
              className="group rounded-[30px] overflow-hidden bg-white shadow-lg hover:-translate-y-3 transition-all duration-500"
            >
              <div className="overflow-hidden h-[350px]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover group-hover:scale-110 transition-all duration-700"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-serif text-[#2A1F1B] mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-7 mb-6">
                  Premium treatments designed with elegance, comfort, and personalized care.
                </p>

                <button className="text-[#D4B483] font-semibold hover:translate-x-2 transition-all duration-300">
                  Explore Service →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRANSFORMATION GALLERY */}
      <section id="gallery" className="py-28 px-6 lg:px-20">
        <div className="text-center mb-16">
          <p className="text-[#D4B483] uppercase tracking-[4px] text-sm mb-4">
            Transformations
          </p>

          <h2 className="text-5xl font-serif text-[#2A1F1B]">
            Beauty Transformations
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop',
          ].map((image, index) => (
            <div key={index} className="overflow-hidden rounded-[30px] group relative h-[420px]">
              <img
                src={image}
                className="h-full w-full object-cover group-hover:scale-110 transition-all duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                <h3 className="text-white text-2xl font-serif">Glow Transformation</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 px-6 lg:px-20 bg-[#2A1F1B] text-white">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] text-sm text-[#D4B483] mb-4">
            Testimonials
          </p>

          <h2 className="text-5xl font-serif">
            Loved By Thousands
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
  {
    name: 'Emma Wilson',
    role: 'Fashion Influencer',
    review:
      'GlowNest gave me the most luxurious salon experience I have ever had. The atmosphere and service were absolutely premium.',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'Sophia Carter',
    role: 'Beauty Blogger',
    review:
      'The hairstyling and skincare treatments were exceptional. I felt confident, refreshed, and completely transformed.',
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
  },
  {
    name: 'Olivia Bennett',
    role: 'Entrepreneur',
    review:
      'Professional staff, elegant interiors, and outstanding beauty treatments made GlowNest my favorite luxury salon.',
    image: 'https://randomuser.me/api/portraits/women/32.jpg',
  },
].map((testimonial, item) => (
  <div
    key={item}
    className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-[30px] p-8 hover:-translate-y-2 transition-all duration-500"
  >
    <div className="flex gap-1 text-[#D4B483] mb-6">
      ★★★★★
    </div>

    <p className="leading-8 text-gray-200 mb-8">
      {testimonial.review}
    </p>

    <div className="flex items-center gap-4">
      <img
        src={testimonial.image}
        className="w-14 h-14 rounded-full"
      />

      <div>
        <h4 className="font-semibold">{testimonial.name}</h4>
        <p className="text-sm text-gray-400">{testimonial.role}</p>
      </div>
    </div>
  </div>
))}
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-28 px-6 lg:px-20">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] text-sm text-[#D4B483] mb-4">
            Expert Stylists
          </p>

          <h2 className="text-5xl font-serif text-[#2A1F1B]">
            Meet Our Beauty Experts
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              name: 'Sophia Blake',
              role: 'Hair Specialist',
              image:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop',
            },
            {
              name: 'Olivia Rose',
              role: 'Makeup Artist',
              image:
                'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop',
            },
            {
              name: 'Emma Grace',
              role: 'Skin Expert',
              image:
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop',
            },
          ].map((member, index) => (
            <div key={index} className="group text-center">
              <div className="overflow-hidden rounded-[40px] mb-6 h-[500px]">
                <img
                  src={member.image}
                  className="h-full w-full object-cover group-hover:scale-105 transition-all duration-700"
                />
              </div>

              <h3 className="text-2xl font-serif text-[#2A1F1B] mb-2">
                {member.name}
              </h3>

              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VIP MEMBERSHIP */}
      <section className="py-28 px-6 lg:px-20 bg-[#FAF7F5]">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] text-sm text-[#D4B483] mb-4">
            Membership
          </p>

          <h2 className="text-5xl font-serif text-[#2A1F1B]">
            VIP Beauty Packages
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
  {
    plan: 'Glow Elite',
    price: '₹4,999',
  },
  {
    plan: 'Bridal Luxe',
    price: '₹6,999',
  },
  {
    plan: 'Royal Spa',
    price: '₹8,999',
  },
].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[35px] p-10 shadow-xl hover:-translate-y-3 transition-all duration-500 border border-[#F0E7E2]"
            >
              <h3 className="text-3xl font-serif text-[#2A1F1B] mb-6">
                {item.plan}
              </h3>

              <h4 className="text-5xl font-bold text-[#D4B483] mb-8">
                {item.price}
              </h4>

              <ul className="space-y-4 text-gray-600 mb-10">
                <li>✔ Premium Facial</li>
                <li>✔ Hair Spa Session</li>
                <li>✔ Priority Booking</li>
                <li>✔ VIP Lounge Access</li>
              </ul>

              <button className="w-full bg-[#2A1F1B] hover:bg-[#D4B483] text-white py-4 rounded-full transition-all duration-300">
                Choose Package
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 px-6 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[4px] text-sm text-[#D4B483] mb-4">
              FAQ
            </p>

            <h2 className="text-5xl font-serif text-[#2A1F1B]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
  {
    question: 'How do I book an appointment?',
    answer:
      'You can easily schedule your salon visit through our online booking system or by contacting our support team.',
  },
  {
    question: 'Do you offer bridal beauty packages?',
    answer:
      'Yes, we provide complete bridal luxury packages including makeup, hairstyling, skincare, and consultation services.',
  },
  {
    question: 'Which beauty products do you use?',
    answer:
      'We use premium professional salon products from internationally trusted beauty and skincare brands.',
  },
  {
    question: 'Can I reschedule my appointment?',
    answer:
      'Yes, appointments can be rescheduled in advance based on stylist availability and booking policies.',
  },
].map((faq, item) => (
  <div
    key={item}
    className="border border-[#EADDD7] rounded-[25px] p-8 hover:shadow-lg transition-all duration-300"
  >
    <h3 className="text-xl font-semibold text-[#2A1F1B] mb-4">
      {faq.question}
    </h3>

    <p className="text-gray-600 leading-8">
      {faq.answer}
    </p>
  </div>
))}
          </div>
        </div>
      </section>

      {/* BOOKING SECTION */}
      <section
        id="booking"
        className="py-28 px-6 lg:px-20 bg-[#FAF7F5]"
      >
        <div className="max-w-4xl mx-auto bg-white rounded-[40px] p-10 lg:p-16 shadow-2xl">
          <div className="text-center mb-12">
            <p className="uppercase tracking-[4px] text-sm text-[#D4B483] mb-4">
              Appointment
            </p>

            <h2 className="text-5xl font-serif text-[#2A1F1B] mb-6">
              Book Your Luxury Session
            </h2>

            <p className="text-gray-600 leading-8">
              Reserve your beauty appointment and enjoy a premium salon experience tailored for you.
            </p>
          </div>

          <form
            onSubmit={handleBooking}
            className="grid md:grid-cols-2 gap-6"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="border border-[#EADDD7] rounded-2xl px-6 py-4 outline-none focus:border-[#D4B483]"
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="border border-[#EADDD7] rounded-2xl px-6 py-4 outline-none focus:border-[#D4B483]"
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="border border-[#EADDD7] rounded-2xl px-6 py-4 outline-none focus:border-[#D4B483]"
            >
              <option value="">Select Service</option>
              <option value="Hair Styling">Hair Styling</option>
              <option value="Luxury Facial">Luxury Facial</option>
              <option value="Bridal Makeup">Bridal Makeup</option>
              <option value="Hair Spa">Hair Spa</option>
            </select>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="border border-[#EADDD7] rounded-2xl px-6 py-4 outline-none focus:border-[#D4B483]"
            />

            <button
              type="submit"
              className="md:col-span-2 bg-[#2A1F1B] hover:bg-[#D4B483] text-white py-5 rounded-full transition-all duration-300 hover:scale-[1.02]"
            >
              Confirm Appointment
            </button>
          </form>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 px-6 lg:px-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1600&auto=format&fit=crop"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto text-white">
          <h2 className="text-5xl lg:text-6xl font-serif mb-8 leading-tight">
            Your Signature Beauty Experience Starts Here
          </h2>

          <p className="text-lg leading-8 text-gray-200 mb-10">
            Book your premium salon appointment today and experience luxury beauty care like never before.
          </p>

          <button className="bg-[#D4B483] hover:bg-white hover:text-[#2A1F1B] px-10 py-5 rounded-full text-sm tracking-wide transition-all duration-300 shadow-2xl">
            Reserve Your Appointment
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-[#1B1411] text-white py-20 px-6 lg:px-20">
        <div className="grid lg:grid-cols-4 gap-14">
          <div>
            <h2 className="text-3xl font-serif mb-6">GlowNest</h2>
            <p className="text-gray-400 leading-8">
              Luxury salon experiences crafted with elegance, beauty, and personalized care.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>

            <ul className="space-y-4 text-gray-400">
              <li>Home</li>
              <li>Services</li>
              <li>Gallery</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Contact</h3>

            <ul className="space-y-4 text-gray-400">
              <li>+91 98765 43210</li>
              <li>hello@glownest.com</li>
              <li>Luxury Beauty Avenue</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Instagram</h3>

            <div className="grid grid-cols-3 gap-3">
              {[
  'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=400&auto=format&fit=crop',
].map((image, item) => (
  <img
    key={item}
    src={image}
    className="rounded-xl h-20 w-full object-cover"
  />
))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500 text-sm">
          © 2026 GlowNest Salon. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
