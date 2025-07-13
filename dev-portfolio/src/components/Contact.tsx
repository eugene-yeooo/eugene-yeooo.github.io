'use client'

import { Download, Github, Linkedin, Mail, Phone, Send } from 'lucide-react'
import Image from 'next/image'
import emailjs from '@emailjs/browser'

export default function Contact() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    emailjs
      .sendForm(
        'service_x8x8x8x',
        'template_sfh7ofj',
        e.currentTarget,
        'qCilGX1yHdQnMAWtg'
      )
      .then(
        () => {
          alert('Message sent!')
        },
        (error) => {
          console.error('Error sending email:', error)
        }
      )
  }

  return (
    <section>
      <div className="bg-white p-8 rounded-lg shadow-lg min-w-xl w-full text-black">
        <h2 className="text-4xl font-bold mb-6 text-black bg-green-200 py-2 font-mono px-3 inline-block">
          Contact
        </h2>

        {/* Contact Info */}
        <section className="flex border-b border-gray-400 mb-2 pl-3">
          <div className="text-left mb-4 pb-2 space-y-2 pr-12 border-r border-gray-400">
            <p className="flex items-center gap-2">
              <Phone size={18} />{' '}
              <span className="font-normal">+64 22 429 0210</span>
            </p>
            <p className="flex items-center gap-2 pb-2">
              <Mail size={18} />{' '}
              <a
                href="mailto:eugeneyeoooo@gmail.com"
                className="text-blue-600 underline"
              >
                eugeneyeoooo@gmail.com
              </a>
            </p>
            <a
              href="/Eugene Yeo_CV.pdf"
              download
              className="bg-black text-white font-bold px-4 py-2 rounded hover:bg-green-200 hover:text-black transition flex items-center gap-2 max-w-fit"
            >
              <Download size={20} /> Download CV
            </a>
          </div>

          {/* External Links */}
          <div className=" mx-auto max-w-fit -translate-y-2">
            <h1 className="pb-1 font-mono font-bold">Find me on:</h1>

            <a
              href="https://github.com/eugene-yeooo"
              target="_blank"
              rel="noopener noreferrer"
              className="border px-4 py-2 rounded font-bold text-black hover:bg-green-200 hover:border-white transition flex items-center gap-2 mb-2"
            >
              <Github size={20} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/eugeneyeooo/"
              target="_blank"
              rel="noopener noreferrer"
              className="border px-4 py-2 rounded font-bold text-black hover:bg-green-200 hover:border-white transition flex items-center gap-2"
            >
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg"
                alt="LinkedIn"
                width={20}
                height={0}
              />{' '}
              LinkedIn
            </a>
          </div>
        </section>

        {/* Contact Form */}
        <h1 className="font-mono font-semibold text-xl mb-1 pt-1">
          Let's chat about tech 👇
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="p-2 border border-gray-300 rounded"
            required
          />
          <textarea
            placeholder="Your message"
            name="message"
            className="p-2 border border-gray-300 rounded"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded hover:bg-green-200 hover:text-black transition font-bold flex items-center gap-2 self-start mx-auto"
          >
            <Send size={18} /> Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
