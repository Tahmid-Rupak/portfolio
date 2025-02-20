import React, { useState } from "react";

const ContactForm = () => {
  const [success, setSuccess] = useState("");

  return (
    <div>
      <p className="text-cyan">{success}</p>
    </div>
  );
};

export default ContactForm;