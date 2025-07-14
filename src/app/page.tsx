'use client'

import MarqLandF from '@/components/skills/MarqLandF'
import MarqBackend from '@/components/skills/MarqBackend'
import MarqStyling from '@/components/skills/MarqStyling'
import MarqTools from '@/components/skills/MarqTools'
import Icons from '@/components/skills/Icons'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'
import ProjectBody from '@/components/projects/ProjectsBody'
import AboutMe from '@/components/AboutMe'

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
      <Navbar />
      {/* About Section */}
      <section
        id="about"
        className="min-h-screen p-8 pt-24 scroll-mt-24 flex flex-col items-center justify-center text-center snap-start h-screen"
      >
        <AboutMe />
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen pt-[84px] flex flex-col items-center justify-center text-center snap-start h-screen"
      >
        <div className="p-8 pt-5 pb-3 rounded-lg shadow-lg max-w-3xl w-full bg-white">
          <h2 className="text-4xl font-bold mb-6 text-black bg-green-200 py-2 font-mono px-3 inline-block">
            Skills
          </h2>
          <p></p>
          <MarqLandF />
          <MarqBackend />
          <MarqStyling />
          <MarqTools />
          <Icons />
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen pt-[84px] justify-center flex flex-col items-center text-center snap-start h-screen"
      >
        <ProjectBody />
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen pt-[84px] justify-center flex flex-col items-center text-center snap-start h-screen"
      >
        <Contact />
      </section>

      {/* About Section */}
      {/* <section id="about" className={sectionStyle}>
        <div className="flex gap-10">
          <div className="p-8 rounded-lg shadow-lg max-w-3xl w-full bg-white">
            <h2 className="text-5xl font-black text-black bg-green-200 py-2 font-mono max-w-fit px-3">
              EUGENE
            </h2>
            <h3 className="text-4xl font-black mb-4 text-black py-2 font-mono max-w-fit">
              Full-Stack Developer
            </h3>
            <p className="max-w-3xl leading-relaxed text-left text-black text-md">
              Hey! 👋 I&#39;m a full-stack engineer with passion for the
              outdoors, adventure & technical skills. Based in New Zealand, I
              transitioned into the tech industry to pursue a career that
              revolves around problem-solving and collaboration.
              <br />
              <br />
              My journey in tech reflects how I&#39;ve thrived in learning,
              teaching, and working as a team on expeditions in the rock
              climbing, canyoning, caving and mountaineering space. Like getting
              people engaged with technical rope skills and the outdoors, I get
              <span className="font-bold"> ~excited~</span> from people using
              the clean, responsive, and user-friendly applications I&#39;ve
              built.
              <br />
              <br />
              With a background in digital marketing and communications, I bring
              a creative mindset, strong human skills, and sharp attention to
              detail in project collaborations. I love making an impact, and I
              love tech for the endless opportunities to drive impact,
              problem-solve, and for breakthroughs that challenge my mind.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a
                href="/Eugene Yeo_CV.pdf"
                download
                className=" bg-black text-white font-bold px-4 py-2 rounded hover:bg-green-200 hover:text-black hover:font-bold transition flex items-center gap-2"
              >
                <Download size={20} />
                Download CV
              </a>

              <button
                onClick={() => {
                  const el = document.getElementById('contact')
                  el?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="border text-black font-bold px-4 py-2 rounded hover:bg-green-200  hover:border-white transition flex items-center gap-2"
              >
                <Send size={20} />
                Contact Me
              </button>
            </div>
          </div>
          <Image
            src="/images/DSC04088.avif"
            alt="Profile picture"
            width={100}
            height={100}
            className="min-w-md object-cover border-white border-10"
          />
        </div>
      </section> */}
    </div>
  )
}
