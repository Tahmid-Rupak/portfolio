import SingleSkill from "./SingleSkill";

import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiLaravel,
  SiBootstrap,
  SiMongodb,
  SiMysql,
  SiFigma,
} from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

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

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
