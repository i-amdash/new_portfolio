import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="projects" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/projects/lca.png" alt="Landmark Citizen App" />
            </div>
            <div className="text-content">
              <h2>
                Landmark Citizen App
              </h2>
              <p className="text-white-50 md:text-xl">
                the landmark citizen app is a mobile app built with flutter featuring push notifications, reward system, google auth, ticket purchase, furniture booking, a wallet system, food ordering, activity booking, scan to pay and more. you can download it on both the google play store and apple app store.
              </p>
            </div>
          </div>

          <a href="https://landmarkafrica.com/" target="_blank" className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/projects/lma.png"
                  alt="Landmark Group Website"
                />
              </div>
              <h2>Landmark Group Website</h2>
            </div>

            <a href="https://onbapparels.vercel.app/" target="_blank" className="project cursor-pointer" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/projects/onb.png" alt="Blaq Samurai" />
              </div>
              <h2>O & B Apparels</h2>
            </a>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
