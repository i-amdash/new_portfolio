import { otherProjects } from "../constants";
import TitleHeader from "../components/TitleHeader";
import { useRef } from "react";

const Testimonials = () => {
  const cardRefs = useRef([]);

  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty("--start", angle + 60);
  };

  return (
    <section className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Projects"
          sub="🚀 More of my work"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {otherProjects.map((project, index) => {
            const isClickable = project.link && project.link !== "#";
            const CardWrapper = isClickable ? "a" : "div";
            const cardProps = isClickable
              ? {
                  href: project.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column block hover:scale-[1.02] transition-transform duration-300 cursor-pointer",
                }
              : {
                  className: "card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column",
                };

            return (
              <CardWrapper
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                onMouseMove={handleMouseMove(index)}
                {...cardProps}
              >
                <div className="glow"></div>
                <div className="mb-4 rounded-lg overflow-hidden">
                  <img
                    src={project.imgPath}
                    alt={project.title}
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg capitalize mb-2 text-white">{project.title}</h4>
                  <p className="text-white-50 text-sm">{project.description}</p>
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
