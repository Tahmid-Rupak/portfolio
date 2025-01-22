import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Us</h2>
      <p className="text-lg text-justify">
        We offer a comprehensive range of digital services to elevate your brand
        and drive its success. Our expertise includes logo design, focusing on
        branding and identity creation, and UI/UX design, crafting visually
        appealing, user-friendly interfaces. We provide content writing and
        creation, delivering SEO-friendly content that engages audiences and
        builds your brand voice. Our team designs banners, posters, and social
        media graphics that align with your marketing goals. We specialize in
        full-stack website development and web application development, ensuring
        responsive, secure, and scalable platforms. Our mobile app development
        services cater to both Android and iOS, delivering seamless user
        experiences. With Agentic RAG AI integration, we bring advanced AI
        solutions to enable intelligent decision-making and automation. We also
        excel in SEO, social media marketing and management, and email
        campaigns, optimizing your online presence and engagement. Additionally,
        we offer web hosting and maintenance to ensure reliable website
        performance and brand strategy consultation to position your business
        for growth.
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
