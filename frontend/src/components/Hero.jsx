import { Button } from "./ui/button";
import Section from "./Hero/Section";
import { BackgroundCircles, BottomLine, Gradient } from "./Hero/Styles";
import { useRef, useEffect } from "react";
import Generating from "./Hero/Generating";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const parallaxRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroTextRef = useRef(null);
  const robotImgRef = useRef(null);
  const companyLogosRef = useRef(null);

  useEffect(() => {
    // Animate on load
    gsap.fromTo(
      heroTitleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.3 }
    );
    gsap.fromTo(
      heroTextRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.6 }
    );
    gsap.fromTo(
      robotImgRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.9 }
    );

    // Animate on scroll
    gsap.fromTo(
      companyLogosRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: companyLogosRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div
          className="relative z-10 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]"
          ref={heroTitleRef}
        >
          <h1 className="h1 mb-6 text-white">
            Transforming Sports with Accessible&nbsp;Analytics&nbsp;
            <span className="inline-block relative">
              StatOracle {" "}
              <img
                src="../assets/curve.png"
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p
            className="body-1 max-w-3xl mx-auto mb-6 text-[#CAC6DD] lg:mb-8"
            ref={heroTextRef}
          >
            Unleash the power of AI with StatOracle, your personal fitness trainer and AI sports analyst.  
          </p>
          <Button href="/pricing" white>
            Get started
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-10 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-[#0E0C15] rounded-[1rem]">
              <div className="h-[1.4rem] bg-[#43435C] rounded-t-[0.9rem]" />

              <div
                className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]"
                ref={robotImgRef}
              >
                <img
                  src="../assets/robot.jpg"
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />

                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src="../assets/hero-background.jpg"
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>

        <div ref={companyLogosRef} className="hidden relative z-20 mt-20 lg:block">
          <img src="../assets/statoracle_logo.png" alt="StatOracle Logo" />
        </div>
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
