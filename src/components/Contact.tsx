"use client";

import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setLoading(true);

    emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setSuccess("Message sent successfully!");
          formRef.current?.reset();
          setLoading(false);
        },
        (error) => {
          setSuccess("Oops! Something went wrong.");
          console.log("EmailJS error:", error);
          setLoading(false);
        }
      );
  };

  return (
    <motion.section
      className="bg-black text-white py-28 md:py-30 px-4 sm:px-6 lg:px-16"
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <motion.div
        className="max-w-6xl mx-auto text-center mb-10 sm:mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        viewport={{ once: false }}
      >
        <button className="border border-white px-4 py-1 rounded-full text-sm mb-4">
          Get In Touch
        </button>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">
          Let’s Discuss Your Project
        </h2>
        <p className="text-gray-400 text-sm sm:text-base">
          Have a project in mind or want to discuss potential opportunities? I’d
          love to hear from you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 max-w-6xl mx-auto">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false }}
        >
          <h3 className="font-semibold text-lg md:text-xl mb-2">
            Contact Information
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3 bg-gray-900 p-3 sm:p-4 rounded-lg">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=zaeemsheikh102@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 cursor-pointer hover:text-blue-500 transition"
              >
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-sm sm:text-base">
                  zaeemsheikh102@gmail.com
                </span>
              </a>
            </div>
            <div className="flex items-center gap-3 bg-gray-900 p-3 sm:p-4 rounded-lg">
              <Phone className="w-5 h-5 text-gray-400" />
              <span className="text-sm sm:text-base">+92 341 4009812</span>
            </div>
            <div className="flex items-center gap-3 bg-gray-900 p-3 sm:p-4 rounded-lg">
              <MapPin className="w-5 h-5 text-gray-400" />
              <span className="text-sm sm:text-base">Lahore, Pakistan</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg md:text-xl mb-2">
              Connect With Me
            </h3>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://github.com/MuhammadZaeem500"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 p-3 sm:p-3.5 rounded-full hover:bg-gray-700 transition"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-zaeem-sheikh"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 p-3 sm:p-3.5 rounded-full hover:bg-gray-700 transition"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-gray-900 p-5 sm:p-6 md:p-8 rounded-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
        >
          <h3 className="font-semibold text-lg md:text-xl mb-4">
            Send Me a Message
          </h3>
          <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <input
                type="text"
                name="user_name"
                placeholder="Your name"
                className="w-full p-3 rounded bg-black border border-gray-700 focus:outline-none focus:ring-1 focus:ring-white text-sm sm:text-base"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your email"
                className="w-full p-3 rounded bg-black border border-gray-700 focus:outline-none focus:ring-1 focus:ring-white text-sm sm:text-base"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject of your message"
              className="w-full p-3 rounded bg-black border border-gray-700 focus:outline-none focus:ring-1 focus:ring-white text-sm sm:text-base"
              required
            />
            <textarea
              name="message"
              placeholder="Write your message here..."
              rows={5}
              className="w-full p-3 rounded bg-black border border-gray-700 focus:outline-none focus:ring-1 focus:ring-white text-sm sm:text-base"
              required
            ></textarea>

            <motion.button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-white text-black font-medium py-3 rounded hover:bg-gray-200 transition text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send className="w-4 h-4 sm:w-5 sm:h-5" />{" "}
              {loading ? "Sending..." : "Send Message"}
            </motion.button>

            {success && (
              <p className="mt-2 text-blue-400 text-sm sm:text-base">
                {success}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}
