import { ReactComponent as Logo } from '../assets/svg/webdev.svg';

const Hero = () => (
  <section id="hero" className="max-w-4xl mx-auto mt-16 md:mt-32 px-4 sm:px-8">
    <h2 className="font-lato font-light text-center sm:text-left text-3xl sm:text-6xl uppercase text-secondary mb-8">
      Let&apos;s build something great together
    </h2>
    <div className="flex flex-col md:flex-row mb-8">
      <h1 className="text-center sm:text-left text-lg sm:font-semibold text-primary mt-8 md:mt-0 order-2 md:order-1">
        I&apos;m creating fully responsive and SEO-optimized websites using
        modern web technologies like React JS, Vue JS, Laravel or just native
        ES6.
      </h1>
      <div className="order-1 md:order-2 flex justify-center">
        <Logo />
      </div>
    </div>
    <p className="text-center text-lg sm:font-semibold text-primary mb-4">
      If you want to create something great with me, I would be very happy to
      hear from you &#128075;
    </p>
    <div className="flex justify-center">
      <a
        className="bg-secondary font-bold text-white text-center px-6 block sm:inline-block py-4 rounded mb-8 shadow-md hover:bg-white hover:text-secondary transition-all active:bg-white active:text-secondary"
        href="mailto:hello@wolfniklas.com"
      >
        EMAIL ME
      </a>
    </div>
  </section>
);

export default Hero;
