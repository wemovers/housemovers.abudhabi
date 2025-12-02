import React from "react";
import safeImg1 from "../assets/img/safe1.webp"; // Replace with your actual image paths
import safeImg2 from "../assets/img/safe2.jpg";
import { Link } from "react-router-dom";


const SafePackingMoving = () => {
  const bgColor = "#ffffffff";        // 🌿 Deep Forest Green
  const accentColor = "#CD2C58";    // 💚 Vibrant Green
  const secondaryColor = "#E06B80"; // 🟢 Fresh Green (hover)
  const contrastColor = "#E06B80";  // 🟠 Contrast Orange
  const textColor = "#000000ff";      // ⚪ Light Gray
  const borderColor = "#CD2C58";    // 📗 Medium Green Border

  return (
    <section
      style={{
        backgroundColor: bgColor,
        color: textColor,
        padding: "80px 20px",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "40px",
      }}
      id="safe-packing-and-moving"
    >
      {/* Left Image Section */}
      <div
        style={{
          flex: "1 1 400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <img
          src={safeImg1}
          alt="Safe Packing"
          style={{
            width: "90%",
            borderRadius: "16px",
            border: `3px solid ${borderColor}`,
            boxShadow: `0 0 25px rgba(226, 183, 217, 0.4)`,
            
          }}
         
        />
        <img
          src={safeImg2}
          alt="Moving Truck"
          style={{
            width: "55%",
            position: "absolute",
            bottom: "-40px",
            right: "-30px",
            borderRadius: "12px",
            border: `2px solid ${contrastColor}`,
            boxShadow: `0 0 20px rgba(243, 156, 18, 0.5)`,
            
          }}
          
        />
      </div>

      {/* Right Text Section */}
      <div
        style={{
          flex: "1 1 500px",
          textAlign: "left",
          maxWidth: "550px",
        }}
      >
        <h2
          style={{
            color: contrastColor,
            fontSize: "2.3rem",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
         Skilled professionals are obliged to secure mobility
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.8",
            marginBottom: "20px",
            color: textColor,
            opacity: 0.95,
            textAlign:"justify"
          }}
        >
      At <a href="https://www.wemovers.ae/services/office-relocation\" class="clickable-link\" target="_blank\">Office Movers</a> in Abu Dhabi, our experienced team handles each move with precision and care. We specialize in secure packaging, even loading, and safe delivery in the UAE-something that does your job worry-free from start to finish.

        </p>
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: "1.8",
            color: textColor,
            opacity: 0.9,
            textAlign:"justify"
          }}
        >
         At Office Movers, we believe that <a href="https://www.wemovers.ae/blog\" class="clickable-link\" target="_blank\">moving</a> should be a seamless and positive experience. We treat your office furniture as our own - and ensure that every single feature is handled with care, precision, and professionalism
        </p>
 <div style={{ textAlign: "center", marginTop: "40px" }}>
  <Link to="https://www.wemovers.ae" style={{ textDecoration: "none" }}>
    <button
      style={{
        backgroundColor: contrastColor,
        color: bgColor,
        padding: "14px 36px",
        border: "none",
        borderRadius: "50px",
        fontSize: "1.1rem",
        fontWeight: "600",
        cursor: "pointer",
       
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = secondaryColor;
    
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = contrastColor;
      
      }}
    >
      Learn More
    </button>
  </Link>
</div>


      </div>
    </section>
  );
};

export default SafePackingMoving;
