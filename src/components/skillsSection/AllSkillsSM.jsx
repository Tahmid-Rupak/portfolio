import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import {
  SiLaravel,
  SiBootstrap,
  SiMongodb,
  SiMysql,
  SiFigma,
} from "react-icons/si";

const skills = [
  {
    skill: "UI/UX",
    icon: SiFigma,
  },
  {
    skill: "Bootstrap",
    icon: SiBootstrap,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "Redux",
    icon: SiRedux,
  },
  {
    skill: "NextJS",
    icon: SiNextdotjs,
  },

  {
    skill: "Node.js",
    icon: FaNodeJs,
  },
  {
    skill: "Laravel",
    icon: SiLaravel,
  },

  {
    skill: "MongoDB",
    icon: SiMongodb,
  },
  {
    skill: "MySQL",
    icon: SiMysql,
  },
];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
