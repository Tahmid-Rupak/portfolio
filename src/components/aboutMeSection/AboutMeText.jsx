import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Us</h2>
      <p className="text-lg text-justify">
      We provide comprehensive digital solutions to elevate your brand, including logo and UI/UX design, SEO-optimized content creation, marketing graphics, full-stack web and mobile app development, Agentic RAG AI integration, and brand strategy consultation to drive growth and success. We useAdobe Illustrator, Photoshop, Figma, on-page SEO, meta tags, Google Analytics, SEMrush, HTML, CSS, JavaScript, React, Node.js, PHP, Laravel, Python, Django, MySQL, PostgreSQL, MongoDB, Flutter, React Native, AWS, Azure, NLP, RAG, Hugging Face to make the business more userfriendly.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          Our Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
