const ContactText = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <img
        src="../../portfolio/images/email-image.png"
        alt="email image"
        className="max-w-[200px]" // Tailwind class
        style={{ maxWidth: "200px" }} // Inline style fallback
      />
      <h2 className="text-orange text-3xl mb-2 mt-2">Get In Touch</h2>

    </div>
  );
};

export default ContactText;