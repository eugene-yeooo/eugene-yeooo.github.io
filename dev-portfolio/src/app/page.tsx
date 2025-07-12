import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-white">
      <section id="about" className="min-h-screen p-8">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        {/* About content */}
      </section>

      <section id="projects" className="min-h-screen p-8">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        {/* Projects content */}
      </section>

      <section id="contact" className="min-h-screen p-8">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        {/* Contact content */}
      </section>
    </div>
  )
}
