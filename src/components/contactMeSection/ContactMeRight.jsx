import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
   
      
      <motion.div
        variants={fadeIn("left", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ContactInfo />
        </motion.div>
        <motion.div
        variants={fadeIn("up", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ContactSocial />
        </motion.div>


      
    </div>
  );
};

export default ContactMeRight;
