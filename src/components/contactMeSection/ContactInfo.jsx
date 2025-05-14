import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-2">
      <SingleInfo text="isprike36.1@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+88 01518907202" Image={FiPhone} />
      <SingleInfo text="Dinajpur, Bangladesh" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
