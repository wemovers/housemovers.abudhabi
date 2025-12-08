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
      question: "Q: Are your packers professionally trained?",
      answer:
        "Yeah, surely. Our experts are on the way to the highest standards of their work; only they have been checked for the background, and they are professionals in the safe packing and secure handling of all kinds of items, including valuable and fragile goods.",
    },
    {
      question: "Q: Do you disassemble and reassemble furniture?",
      answer:
        "We definitely are the ones who provide the highest number of cabinet services, not only by taking apart and putting the furniture back together, but also by changing your clothes and mattresses at your new place.",
    },
    {
      question: "Q: Are special permits required for moving in Abu Dhabi?",
      answer:
        "In fact, in Abu Dhabi, it is a standard regulation that all buildings and neighborhoods require the management's permission for move-in/move-out before the relocation takes place.  Our team will be there to accompany you with this process and the necessary documents.",
    },
    {
      question: "Q: Are your packers professionally trained?",
      answer:
        "Yes, definitely. Villa movers and packers in Dubai. Our specialists are going to be the topmost standards of their work, only they have been checked for the background, and they are experts in safe packing and secure handling of all kinds of items, including valuable and fragile goods.",
    }
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
                  textAlign:"justify"
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
