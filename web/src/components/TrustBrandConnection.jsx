import React from "react";
import { 
  FaUserSecret, 
  FaCheckCircle, 
  FaIdBadge, 
  FaBusinessTime 
} from "react-icons/fa";

const TrustBrandConnection = () => {
  const bgColor = '#FFC69D';        // 🌿 Deep Forest Green
  const accentColor = '#FFC69D';    // 💚 Vibrant Green
  const secondaryColor = '#E06B80'; // 🟢 Fresh Green (hover)
  const contrastColor = '#E06B80';  // 🟠 Contrast Orange
  const textColor = '#000000ff';      // ⚪ Light Gray
  const borderColor = '#E06B80';    // 📗 Medium Green Border

  const trustData = [
    {
      icon: <FaUserSecret size={40} />,
      title: "Discreet Handling",
      desc: "When we handle sensitive documents, high-value assets, and confidential equipment, we keep very strict privacy and professionalism.",
    },
    {
      icon: <FaCheckCircle  size={40} />,
      title: "Consistent Quality",
      desc: "We are at the same high standard when moving a luxury villa or a major corporate office. ",
    },
    {
      icon: <FaIdBadge  size={40} />,
      title: "Licensed & Insured",
      desc: "We have comprehensive insurance coverage and all the necessary permits from Abu Dhabi to operate; thus, we offer complete financial security and peace of mind to our clients. ",
    },
    {
      icon: <FaBusinessTime  size={40} />,
      title: "Minimal Disruption",
      desc: "We, the commercial clients, hire executing moves swiftly and efficiently. Most of the time, it is done outside of business hours; thus, there is no impact on the operations. ",
    },
  ];

  return (
    <section
      style={{
        backgroundColor: bgColor,
        color: textColor,
        padding: "80px 20px",
      }}
    >
      <div className="max-w-7xl mx-auto text-center" id="trust-brand-connection">
        {/* 🌟 Section Header */}
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            color: contrastColor,
            marginBottom: "20px",
          }}
        >
          Why Brands Trust Us in Abu Dhabi
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            maxWidth: "700px",
            margin: "0 auto 60px",
            color: textColor,
            opacity: "0.9",
            textAlign:"justify",
          }}
        >
          Brands trust us because we know that corporate and high-value moves are not just about lifting boxes. They need detailed planning and execution that reduces the time that the business is disrupted and keeps confidentiality very strict. 
        </p>

        {/* 💚 Trust Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "30px",
          }}
        >
          {trustData.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#E06B80",
                border: `1px solid ${borderColor}`,
                borderRadius: "16px",
                padding: "40px 25px",
                textAlign: "center",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              }}
              className="hover:scale-105 hover:shadow-lg"
            >
              <div
                style={{
                  color: accentColor,
                  marginBottom: "20px",
                }}
              >
                {item.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.4rem",
                  fontWeight: "600",
                  marginBottom: "15px",
                  color:"white"
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#dfe6e9",
                  opacity: "0.85",
                  lineHeight: "1.6",
                  textAlign:"justify",
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBrandConnection;
