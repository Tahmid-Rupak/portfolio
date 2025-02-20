const ContactText = () => {
  return (
    <div>
      <img
        src="../../public/images/email-image.png"
        alt="email image"
        className="max-w-[200px]" // Tailwind class
        style={{ maxWidth: "200px" }} // Inline style fallback
      />
      <h2 className="text-orange text-3xl mb-2 mt-2">Get In Touch</h2>
      <p>
        Feel free to reach out if you’d like to collaborate
        <br />
        you are just a few clicks away!
      </p>
    </div>
  );
};

export default ContactText;