import Button from "./ui/button";
import Section from "./Hero/Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { useRef, useEffect } from "react";
import Generating from "./Generating";
import Notification from "./Hero/Notification";
// import CompanyLogos from "./CompanyLogos";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const parallaxRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroTextRef = useRef(null);
  const robotImgRef = useRef(null);
  const heroIconsRef = useRef(null);
  const notificationRef = useRef(null);
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
      heroIconsRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroIconsRef.current,
          start: "top 80%",
        },
      }
    );
    gsap.fromTo(
      notificationRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: notificationRef.current,
          start: "top 80%",
        },
      }
    );
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
          className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]"
          ref={heroTitleRef}
        >
          <h1 className="h1 mb-6">
            Explore the Possibilities of&nbsp;AI&nbsp;Chatting with {` `}
            <span className="inline-block relative">
              Brainwave{" "}
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
            className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8"
            ref={heroTextRef}
          >
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>
          <Button href="/pricing" white>
            Get started
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

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

                <div ref={heroIconsRef}>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </div>

                <div ref={notificationRef}>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Code generation"
                  />
                </div>
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

        <div ref={companyLogosRef}>
          <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
        </div>
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
