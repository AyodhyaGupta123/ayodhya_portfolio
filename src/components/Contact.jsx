import { createElement, useState } from "react";
import { content } from "../Content";

const Contact = () => {
  const { Contact } = content;
  const [formData, setFormData] = useState({
    from_name: "",
    user_email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // WhatsApp Send Logic
  const sendWhatsApp = (e) => {
    e.preventDefault();
    const phoneNumber = "919682780369"; 

    const text = `New Contact Form Submission:%0A
    👤 Name: ${formData.from_name}%0A
    📧 Email: ${formData.user_email}%0A
    📱 Mobile: ${formData.mobile}%0A
    💬 Message: ${formData.message}`;

    // ✅ same tab me open hoga
    window.location.href = `https://wa.me/${phoneNumber}?text=${text}`;

    // ✅ form reset karna
    setFormData({
      from_name: "",
      user_email: "",
      mobile: "",
      message: "",
    });
  };

  return (
    <section className="bg-dark_primary text-white" id="contact">
      <div className="md:container px-5 py-14">
        <h2 className="title !text-white" data-aos="fade-down">
          {Contact.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Contact.subtitle}
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <form
            onSubmit={sendWhatsApp}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              value={formData.from_name}
              onChange={handleChange}
              required
              className="border border-slate-600 p-3 rounded"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email Id"
              value={formData.user_email}
              onChange={handleChange}
              required
              className="border border-slate-600 p-3 rounded"
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="border border-slate-600 p-3 rounded"
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="border border-slate-600 p-3 rounded h-44"
              required
            ></textarea>
            <button
              type="submit"
              className="btn self-start bg-white text-dark_primary"
            >
              Submit
            </button>
          </form>
          <div className="flex-1 flex flex-col gap-5">
            {Contact.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-2"
              >
                <h4 className="text-white">{createElement(content.icon)}</h4>
                <a
                  className="font-Poppins"
                  href={content.link}
                  target="_self" 
                  rel="noreferrer"
                >
                  {content.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
