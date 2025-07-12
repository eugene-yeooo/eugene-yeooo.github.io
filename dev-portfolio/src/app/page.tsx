import VantaNetBackground from '@/components/VantaNetBackground'

export default function Home() {
  const sectionStyle =
    'min-h-screen p-8 pt-24 scroll-mt-24 flex flex-col items-center justify-center text-center'

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <VantaNetBackground />

      {/* About Section */}
      <section id="about" className={sectionStyle}>
        <div className="p-8 rounded-lg shadow-lg max-w-3xl w-full backdrop-blur-md bg-opacity-90">
          <h2 className="text-4xl font-bold mb-6">&lt;About Me /&gt;</h2>
          <p className="max-w-3xl text-lg leading-relaxed">
            I'm a full-stack engineer with passion for the outdoors, adventure &
            technical skills, and I pivoted into the tech industry to pursue a
            career that revolves around problem-solving and collaboration.
            <br />
            My journey in tech reflects how I've thrived in learning, teaching,
            and working as a team on expeditions in the rock climbing,
            canyoning, caving and mountaineering space. Like getting people
            engaged with technical rope skills and the outdoors, I get excited
            from people using the clean, responsive, and user-friendly
            applications I've built.
            <br />
            With a background in digital marketing and communications, I bring a
            creative mindset, strong human skills, and sharp attention to detail
            in project collaborations. I love making an impact, and I love tech
            for the endless opportunities to drive impact, problem-solve, and
            for breakthroughs that challenge my mind.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={sectionStyle}>
        <h2 className="text-4xl font-bold mb-6">&lt;Skills /&gt;</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl">
          <div className="bg-white/10 p-4 rounded-lg">
            JavaScript / TypeScript
          </div>
          <div className="bg-white/10 p-4 rounded-lg">React / Next.js</div>
          <div className="bg-white/10 p-4 rounded-lg">Node.js / Express</div>
          <div className="bg-white/10 p-4 rounded-lg">Knex / PostgreSQL</div>
          <div className="bg-white/10 p-4 rounded-lg">Tailwind CSS / GSAP</div>
          <div className="bg-white/10 p-4 rounded-lg">Git / GitHub / Vite</div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={sectionStyle}>
        <h2 className="text-4xl font-bold mb-6">&lt;Projects /&gt;</h2>
        <div className="space-y-8 max-w-4xl">
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold">Crux</h3>
            <p className="text-gray-300 mt-2">
              A logbook web app for documenting outdoor adventures. Users can
              create and edit logs across multiple sport types including caving
              and climbing. Built with React, Node.js, Express, and Knex.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold">FlatFunds</h3>
            <p className="text-gray-300 mt-2">
              A bill-splitting app designed for flatmates to track shared
              expenses. Features custom inputs, payment tracking, and automated
              split calculations. Built during Dev Academy using a full-stack
              JavaScript stack.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
