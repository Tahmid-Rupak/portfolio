import ContactForm from "./ContactForm";
import ContactText from "./ContactText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ContactMeLeft = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      

      
      

      <motion.div
        variants={fadeIn("right", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ContactText />
        </motion.div>
        <motion.div
        variants={fadeIn("right", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ContactForm />
        </motion.div>
    </div>
  );
};

export default ContactMeLeft;
