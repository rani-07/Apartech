import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Sparkles } from "lucide-react";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const domains = [
    { name: "Web Development", icon: "🌐" },
    { name: "Mobile Apps", icon: "📱" },
    { name: "AI & ML", icon: "🤖" },
    { name: "Cloud Computing", icon: "☁️" },
    { name: "Cyber Security", icon: "🔐" },
    { name: "UI/UX Design", icon: "🎨" },
    { name: "Data Science", icon: "📊" },
    { name: "DevOps", icon: "⚙️" },
  ];

  return (
    <div className="min-h-screen">

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center text-white">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative text-center px-4 max-w-4xl">

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur"
          >
            <Sparkles className="text-blue-400" />
            <span className="text-sm">We’re Hiring</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Build Your Future with{" "}
            <span className="text-blue-400">RDAtech</span>
          </motion.h1>

          <p className="text-lg text-gray-300 mb-10">
            Empowering innovation through cutting-edge technology and real-world impact.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.08 }}>
              <Link
                to="/positions"
                className="flex items-center gap-2 px-8 py-4 bg-blue-600 rounded-xl hover:bg-blue-700 transition shadow-lg"
              >
                Explore Careers <ChevronRight />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.08 }}>
              <Link
                to="/apply"
                className="px-8 py-4 border border-white/30 rounded-xl hover:bg-white/10 transition"
              >
                Apply Now
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Welcome to RDAtech 🚀</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          We build modern software solutions and help developers grow their careers.
        </p>
      </section>

      {/* 🔥 DOMAINS SECTION */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-12">Our Domains 🚀</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
          {domains.map((domain, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
            >
              <div className="text-4xl mb-3">{domain.icon}</div>
              <h3 className="font-semibold text-gray-800">
                {domain.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔥 FLOATING SOCIAL BUTTONS */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">

        <a
          href="https://wa.me/916364326342"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" className="h-6 w-6" />
        </a>

        <a
          href="https://www.linkedin.com/company/aparaitech/posts/?feedView=all"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" className="h-6 w-6" />
        </a>

        <a
          href="https://www.instagram.com/aparaitech_global/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" className="h-6 w-6" />
        </a>

        <a
          href="mailto:info@aparaitech.org"
          className="bg-gray-700 p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" className="h-6 w-6" />
        </a>

      </div>
    </div>
  );
};

export default HomePage;