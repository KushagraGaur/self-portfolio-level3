import { Particles } from "../components/Particles";

const Contact = () => {
  // Replace with your actual email and contact link (WhatsApp, LinkedIn, etc.)
  const emailAddress = "kushagragaur31@gmail.com";
  const contactLink = "https://wa.me/+918130540427"; // Example: WhatsApp

  return (
    <section className="relative flex items-center c-space section-spacing" id="contact" >
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help!
          </p>
        </div>
        <div className="flex flex-col space-y-5 w-full">
          <a
            href={`mailto:${emailAddress}`}
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            Email Me
          </a>
          <a
            href={contactLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
