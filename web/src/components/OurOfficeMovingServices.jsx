import React from "react";
import officeMoveImg from "../assets/img/r1.jpg"; // your image

const OurOfficeMovingService = () => {
  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#FFC69D", // NEW BG COLOR
        padding: "70px 20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "50px",
          alignItems: "center",
        }}
      >
        {/* LEFT CONTENT */}
        <div>
          <h2
            style={{
              fontSize: "42px",
              color: "#CD2C58", // Primary heading color
              marginBottom: "25px",
              fontWeight: "800",
              lineHeight: "1.2",
              letterSpacing: "1px",
            }}
          >
            Office Moving Service
          </h2>

          <p
            style={{
              fontSize: "18px",
              color: "#4A3A3A",
              lineHeight: "1.8",
              marginBottom: "20px",
              fontWeight: "500",
            }}
          >
            Our office relocation service ensures a smooth, organized and
            efficient move with minimal downtime. We handle everything professionally —
            from packing delicate equipment to transporting office furniture safely.
          </p>

          <ul style={{ marginTop: "20px" }}>
            {[
              "Expert packing for IT & office equipment",
              "Safe commercial transport service",
              "Furniture dismantling & reinstallation",
              "Fast process to avoid business interruption",
              "Skilled & trained office relocation staff",
            ].map((item, index) => (
              <li
                key={index}
                style={{
                  marginBottom: "14px",
                  color: "#CD2C58",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "16px",
                }}
              >
                <span
                  style={{
                    width: "12px",
                    height: "12px",
                    backgroundColor: "#E06B80",
                    borderRadius: "50%",
                  }}
                ></span>
                {item}
              </li>
            ))}
          </ul>

        </div>

        {/* RIGHT IMAGE */}
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <img
            src={officeMoveImg}
            alt="Office Moving"
            style={{
              width: "100%",
              height: "480px",
              objectFit: "cover",
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              border: "6px solid #CD2C58",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default OurOfficeMovingService;
