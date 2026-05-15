import {
  FaSpa,
  FaCut,
  FaCrown,
  FaInstagram,
  FaFacebook,
  FaWhatsapp
} from "react-icons/fa"
import hero from "./images/hero.jpg.jpg"
import salon1 from "./images/salon1.jpg.jpg"
import salon2 from "./images/salon2.jpg.jpg"
import salon3 from "./images/salon3.jpg.jpg"


function App() {
  return (
    <div className="bg-gradient-to-b from-[#E2D1C2] to-[#D4BBAC] text-[#442913]">

      {/* Navbar */}
      <nav className="bg-[#442913] shadow-xl sticky top-0 z-50 text-white flex flex-col md:flex-row justify-between items-center px-8 py-5 sticky top-0">
        <h1 className="text-3xl font-bold">GlowNest</h1>
<ul className="flex gap-6 text-lg">

  <li>
    <a href="#home" className="hover:text-[#D4BBAC] transition">
  Home
</a>
  </li>

  <li>
    <a href="#services" className="hover:text-[#D4BBAC] transition">
  Services
</a>
  </li>

  <li>
    <a href="#about" className="hover:text-[#D4BBAC] transition">
  About
</a>
  </li>

  <li>
    <a href="#gallery" className="hover:text-[#D4BBAC] transition">
  Gallery
</a>
  </li>

  <li>
    <a href="#contact" className="hover:text-[#D4BBAC] transition">
  Contact
</a>
  </li>

</ul>
        
      </nav>

      {/* Hero Section */}
      <section
  id="home"
  className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-12 px-10">
        <h1 className="text-4xl md:text-5xl font-bold max-w-4xl leading-tight">
          Glow Beyond Beauty
        </h1>

        <p className="mt-6 text-xl max-w-2xl">
          Experience luxury salon care, relaxing spa treatments, and premium beauty services at GlowNest Salon.
        </p>

        <a href="#booking">
  <button className="mt-8 bg-[#5C3422] text-white px-8 py-4 rounded-full text-lg hover:bg-[#442913] transition duration-300 hover:scale-105">
    Book Appointment
  </button>
</a> 
<img
  src={hero}
  alt="Salon"
  className="w-full md:w-[500px] rounded-3xl shadow-2xl mt-10"
/>
      </section>

      {/* Services */}
      <section id="services" className="px-6 md:px-16 py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-[#D4BBAC] p-8 rounded-3xl shadow-lg hover:scale-105 transition duration-300">
            <FaCut className="text-5xl mb-6 text-[#442913]" />
            <h3 className="text-3xl font-bold mb-4">Hair Styling</h3>
            <p>Professional haircut and styling services.</p>
          </div>

          <div className="bg-[#D4BBAC] p-8 rounded-3xl shadow-lg hover:scale-105 transition duration-300">
           <FaSpa className="text-5xl mb-6 text-[#442913]" />
            <h3 className="text-3xl font-bold mb-4">Spa Therapy</h3>
            <p>Relaxing spa treatments for complete refreshment.</p>
          </div>

          <div className="bg-[#D4BBAC] p-8 rounded-3xl shadow-lg hover:scale-105 transition duration-300">
            <FaCrown className="text-5xl mb-6 text-[#442913]" />
            <h3 className="text-3xl font-bold mb-4">Bridal Makeup</h3>
            <p>Luxury bridal beauty packages and makeup services.</p>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 md:px16 py-24 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          About GlowNest
        </h2>

        <p className="max-w-3xl mx-auto text-xl leading-9">
          GlowNest Salon combines elegance, beauty, and relaxation to create a premium salon experience for every customer.
        </p>
      </section>

      {/* Gallery */}
      {/* Gallery */}
<section id="gallery" className="px-6 md:px-16 py-24">

  <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
    Gallery
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    <img
      src={salon1}
      alt="Salon"
      className="h-72 w-full object-cover rounded-3xl hover:scale-105 transition duration-300"
    />

    <img
      src={salon2}
      alt="Salon"
      className="h-72 w-full object-cover rounded-3xl hover:scale-105 transition duration-300"
    />

    <img
      src={salon3}
      alt="Salon"
      className="h-72 w-full object-cover rounded-3xl hover:scale-105 transition duration-300"
    />

  </div>

</section>


      {/* Testimonials */}
      <section className="px-6 md:px-16 py-24 text-center">
        <h2 className="text-5xl font-bold mb-14">
          Testimonials
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

  <div className="bg-[#D4BBAC] p-8 rounded-3xl shadow-lg hover:scale-105 transition duration-300">

    <p className="text-lg italic">
      “Amazing salon experience and premium service.”
    </p>

    <h4 className="mt-6 text-xl font-bold">
      — Sophia
    </h4>

  </div>

  <div className="bg-[#D4BBAC] p-8 rounded-3xl shadow-lg hover:scale-105 transition duration-300">

    <p className="text-lg italic">
      “The best spa and beauty treatments I ever had.”
    </p>

    <h4 className="mt-6 text-xl font-bold">
      — Emma
    </h4>

  </div>

  <div className="bg-[#D4BBAC] p-8 rounded-3xl shadow-lg hover:scale-105 transition duration-300">

    <p className="text-lg italic">
      “Professional staff and beautiful atmosphere.”
    </p>

    <h4 className="mt-6 text-xl font-bold">
      — Olivia
    </h4>

  </div>

</div>
      </section>

      {/* Booking */}
      <section id="booking" className="px-6 md:px-16 py-24">
        <h2 className="text-5xl font-bold text-center mb-14">
          Book Appointment
        </h2>

        <form className="max-w-2xl mx-auto bg-[#D4BBAC] p-10 rounded-3xl shadow-lg flex flex-col gap-6">

          <input
  type="text"
  placeholder="Your Name"
  className="p-4 rounded-xl outline-none bg-white shadow-md"
/>

<input
  type="email"
  placeholder="Your Email"
  className="p-4 rounded-xl outline-none bg-white shadow-md"
/>

<input
  type="text"
  placeholder="Phone Number"
  className="p-4 rounded-xl outline-none bg-white shadow-md"
/>

<select className="p-4 rounded-xl outline-none bg-white shadow-md">

  <option>Select Service</option>

  <option>Hair Styling</option>

  <option>Spa Therapy</option>

  <option>Bridal Makeup</option>

</select>

<input
  type="date"
  className="p-4 rounded-xl outline-none bg-white shadow-md"
/>
          

          <button className="bg-[#442913] text-white py-4 rounded-xl text-lg hover:bg-[#5C3422] transition">
            Confirm Booking
          </button>

        </form>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#442913] text-white text-center py-8">
        <h2 className="text-3xl font-bold">GlowNest Salon</h2>

        <p className="mt-4">
          Luxury Beauty & Spa Experience
        </p>
        <div className="flex justify-center gap-6 mt-6 text-3xl">

  <FaInstagram className="hover:text-[#D4BBAC] transition cursor-pointer" />

  <FaFacebook className="hover:text-[#D4BBAC] transition cursor-pointer" />

  <FaWhatsapp className="hover:text-[#D4BBAC] transition cursor-pointer" />

</div>
      </footer>
      <a
  href="https://wa.me/911234567890"
  target="_blank"
>

  <div className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full text-3xl shadow-2xl hover:scale-110 transition duration-300 cursor-pointer">

    <FaWhatsapp />

  </div>

</a>

    </div>
  )
}

export default App

