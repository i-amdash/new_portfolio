import TitleHeader from "../components/TitleHeader";
import { personalInfo } from "../constants";

const About = () => {
  return (
    <section id="about" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="About Me"
          sub="✨ Who am I? 🧑🏾‍💻"
        />
        <div className="grid md:grid-cols-2 gap-10 mt-16">
          <div className="flex flex-col gap-6">
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              I'm {personalInfo.name}
            </h3>
            <p className="text-white-50 text-lg leading-relaxed">
              {personalInfo.bio}
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="card-border rounded-xl p-5">
                <h4 className="text-white font-semibold mb-2">Name</h4>
                <p className="text-white-50">{personalInfo.name}</p>
              </div>
              <div className="card-border rounded-xl p-5">
                <h4 className="text-white font-semibold mb-2">Stack</h4>
                <p className="text-white-50">Flutter, Javascript, Typescript, Laravel, Kotlin</p>
              </div>
              <div className="card-border rounded-xl p-5">
                <h4 className="text-white font-semibold mb-2">From</h4>
                <p className="text-white-50">{personalInfo.location}</p>
              </div>
              <div className="card-border rounded-xl p-5">
                <h4 className="text-white font-semibold mb-2">Email</h4>
                <a className="w-full" href="mailto:ashimidoyin@yahoo.com">
                  <p className="text-white-50 text-sm flex gap-x-3">Send an email <span className="">📤</span></p>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="card-border rounded-xl p-8">
              <h4 className="text-2xl font-bold text-white mb-6">Education & Certifications</h4>
              <div className="space-y-6">
                                <div>
                  <h5 className="text-white font-semibold text-lg">Afe Babalola University</h5>
                  <p className="text-white-50 text-sm mb-2">October 2017</p>
                  <ul className="list-disc list-inside text-white-50 text-sm space-y-1">
                    <li>Bachelor of Science in Accounting</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-white font-semibold text-lg">FreeCodeCamp</h5>
                  <p className="text-white-50 text-sm mb-2">March 2020 - Present</p>
                  <ul className="list-disc list-inside text-white-50 text-sm space-y-1">
                    <li>Frontend Development Libraries Certification</li>
                    <li>JavaScript Algorithms and Data Structures</li>
                    <li>Responsive Web Design Certification</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-white font-semibold text-lg">Institute of Chartered Accountants of Nigeria</h5>
                  <p className="text-white-50 text-sm mb-2">December 2020</p>
                  <ul className="list-disc list-inside text-white-50 text-sm">
                    <li>Associate Chartered Accountant</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-white font-semibold text-lg">Self-taught Flutter Developer</h5>
                  <p className="text-white-50 text-sm mb-2">August 2022 - Present</p>
                  <ul className="list-disc list-inside text-white-50 text-sm">
                    <li>Flutter Mobile Development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
