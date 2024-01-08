import React, { useRef, FormEvent } from "react";
import emailjs from "emailjs-com";

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    const btn = form.current.querySelector("button");
    if (btn) btn.textContent = "Sending...";

    emailjs
      .sendForm(
        "service_zd0afsv",
        "template_aoq37ee",
        form.current,
        "JUeIMu-pBpDTdYfyY"
      )
      .then(
        () => {
          if (btn) btn.textContent = "Send Email";
          alert("Sent!");
        },
        (err) => {
          if (btn) btn.textContent = "Send Email";
          alert(JSON.stringify(err));
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="form-control w-full md:max-w-lg lg:max-w-xl">
      <input
        type="text"
        name="user_name"
        placeholder="Votre nom"
        className="input input-bordered input-primary w-full mb-4"
      />
      <input
        type="email"
        name="user_email"
        placeholder="Votre email"
        className="input input-bordered input-primary w-full mb-4"
      />
      <textarea
        name="message"
        placeholder="Votre message"
        className="textarea textarea-bordered textarea-primary w-full mb-4"
      />
      <button type="submit" className="btn btn-primary mt-4">
        Envoyer
      </button>
    </form>
  );
};

export default ContactForm;
