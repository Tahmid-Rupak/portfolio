import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaReddit } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-6">
      <SingleContactSocial
        link="https://www.linkedin.com/company/107118179"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial link="https://github.com/FalahLab" Icon={FiGithub} />
      <SingleContactSocial link="#" Icon={FaReddit} />
    </div>
  );
};

export default ContactSocial;
