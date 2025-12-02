import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQs = () => {
  const bgColor = "#ffff";        // 🌿 Deep Forest Green
  const accentColor = "#CD2C58";    // 💚 Vibrant Green
  const secondaryColor = "#E06B80"; // 🟢 Fresh Green (hover)
  const contrastColor = "#FFC69D";  // 🟠 Contrast Orange
  const textColor = "#000000ff";      // ⚪ Light Gray
  const borderColor = "#FFC69D";    // 📗 Medium Green Border

  const faqs = [
    {
      question: "Are my   goods insured during transfer?",
      answer:
        "Absolutely. Wemovers provides basic insurance coverage for all activities. For security, we also offer more insurance options depending on your needs.",
    },
    {
      question: "Do you offer long-distance or intercity travel?",
      answer:
        "Yes, office furniture Movers in the UAE are experts in both local and long-distance relocation. Whether you move to a city or over an emirate, we have you covered.",
    },
    {
      question: "Why rent Wemovers in Dubai?",
      answer:
        "At Wemovers, we stick to our mission to make your move as easy and worry-free as possible. Tamam means 'all is well' in Arabic. So trust us as your preferred company in Dubai and expect everything to fall into place.",
    },
    {
      question: "Is your Movers team also in Abu Dhabi?",
      answer:
        "Yes, our moving company is also in Abu Dhabi. If you need to move in and around Abu Dhabi, we provide transmission services in Abu Dhabi.",
    },
    {
      question: "How to contact our Movers and Packers in Abu Dhabi?",
      answer:
        "It's easy to reach us. Call Toll Free +971-50 935 9181 Or e -post info@wemovers.ae to communicate with our moves in Abu Dhabi. Our offices in Dubai and Abu Dhabi are well-connected and will connect you to our team for moving in Abu Dhabi.",
    },
    {
      question: "What do your transport services in Abu Dhabi do reliably?",
      answer:
        "As Movers and Packers in Abu Dhabi, we have had the same reliability and inheritance from Wemovers for many years. Our team of movers in Abu Dhabi is also strictly trained on troubleshooting moving methods, etiquette, and customer-facing skills. In addition, they are trained in packing and moving hacks, and all safety standards are followed during the move.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      style={{
        backgroundColor: bgColor,
        color: textColor,
        padding: "80px 20px",
        textAlign: "center",
      }}
      id="faqs"
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h2
          style={{
            color: contrastColor,
            fontSize: "2.5rem",
            marginBottom: "10px",
            fontWeight: "bold",
          }}
        >
          Frequently Asked Questions
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            marginBottom: "50px",
            color: textColor,
            opacity: 0.9,
          }}
        >
          Everything you need to know before moving with{" "}
          <b style={{ color: secondaryColor }}>WeMovers</b>.
        </p>

        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#1F4B32",
              border: `1px solid ${borderColor}`,
              borderRadius: "12px",
              marginBottom: "18px",
              textAlign: "left",
              overflow: "hidden",
              transition: "all 0.3s ease",
              boxShadow:
                openIndex === index
                  ? `0 0 20px rgba(243, 156, 18, 0.4)`
                  : "none",
            }}
          >
            <div
              onClick={() => toggleFAQ(index)}
              style={{
                cursor: "pointer",
                padding: "18px 25px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor:
                  openIndex === index ? accentColor : "#FFC69D",
                color: openIndex === index ? bgColor : textColor,
                transition: "background-color 0.3s ease",
              }}
            >
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  margin: 0,
                }}
              >
                {faq.question}
              </h3>
              {openIndex === index ? (
                <FaChevronUp size={18} />
              ) : (
                <FaChevronDown size={18} />
              )}
            </div>

            {openIndex === index && (
              <div
                style={{
                  backgroundColor: "#FFC69D",
                  padding: "18px 25px",
                  borderTop: `1px solid ${borderColor}`,
                  color: textColor,
                  fontSize: "1rem",
                  lineHeight: "1.7",
                }}
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
