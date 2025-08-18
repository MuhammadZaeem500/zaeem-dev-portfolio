"use client";

import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <button className="border border-white px-4 py-1 rounded-full text-sm mb-4 hover:bg-white hover:text-black transition">
          Get In Touch
        </button>
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Let’s Discuss Your Project</h2>
        <p className="text-gray-400">
          Have a project in mind or want to discuss potential opportunities? I’d love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-6">
          <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3 bg-gray-900 p-4 rounded-lg">
              <Mail className="w-5 h-5 text-gray-400" />
              <span>hassantahir3556@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 bg-gray-900 p-4 rounded-lg">
              <Phone className="w-5 h-5 text-gray-400" />
              <span>+90 501 173 1941</span>
            </div>
            <div className="flex items-center gap-3 bg-gray-900 p-4 rounded-lg">
              <MapPin className="w-5 h-5 text-gray-400" />
              <span>Istanbul, Turkey</span>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Connect With Me</h3>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-900 p-3 rounded-full hover:bg-gray-700 transition">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-900 p-3 rounded-full hover:bg-gray-700 transition">
                <Linkedin className="w-5 h-5" />
              </a>
              
            </div>
          </div>
        </div>

        {/* Message Form */}
        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="font-semibold text-lg mb-4">Send Me a Message</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your name" className="w-full p-3 rounded bg-black border border-gray-700 focus:outline-none focus:ring-1 focus:ring-white" />
              <input type="email" placeholder="Your email" className="w-full p-3 rounded bg-black border border-gray-700 focus:outline-none focus:ring-1 focus:ring-white" />
            </div>
            <input type="text" placeholder="Subject of your message" className="w-full p-3 rounded bg-black border border-gray-700 focus:outline-none focus:ring-1 focus:ring-white" />
            <textarea placeholder="Write your message here..." rows={5} className="w-full p-3 rounded bg-black border border-gray-700 focus:outline-none focus:ring-1 focus:ring-white"></textarea>
            
            <button type="submit" className="w-full flex items-center justify-center gap-2 bg-white text-black font-medium py-3 rounded hover:bg-gray-200 transition">
              <Send className="w-4 h-4" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
