import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleExperience = ({ experience }) => {
  return (
    <motion.div
      variants={fadeIn("right", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="md:h-[350px] md:w-[240px] sm:h-auto sm:w-full border-4 border-orange border-dashed rounded-2xl mt-12 p-4"
    >
      <p className="md:h-[150px] md:w-[150px] sm:w-auto sm:h-full border-2 border-y-lightOrange border-dashed rounded-2xl mb-3 p-1">
        {experience.photo}
      </p>
      <p className="text-orange">{experience.company}</p>
      <p className="font-bold text-cyan">{experience.job}</p>

      <ul className="list-disc pl-4">
        {experience.responsibilities.map((resp, index) => {
          return <li key={index}>{resp}</li>;
        })}
      </ul>
    </motion.div>
  );
};

export default SingleExperience;
