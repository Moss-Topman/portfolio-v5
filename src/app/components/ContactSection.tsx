import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 bg-[#252529] font-roboto-mono"
      aria-labelledby="contact-heading"
      role="region"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="contact-heading" className="font-poppins text-4xl md:text-6xl font-bold text-white text-center mb-12 tracking-wide">
          Contact
        </h2>
        <p className="text-gray-400 text-center mb-8">Get in touch for opportunities.</p>
        <ContactForm />
      </div>
    </section>
  );
}