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
         Moving House Movers Experts in Abu Dhabi
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
      If you are performing a moving task, you need to be sure that your valuables are with good hands. That is exactly what we give: Moving House Movers Experts in Abu Dhabi. Our group is not simply a bunch of movers; rather, we are extremely experienced professionals having deep knowledge of the different residential areas of Abu Dhabi, such as the high-rise apartments of Al Seem Island and the luxury villas of Stadia. By understanding the area so well, we are able to go through the rules of the building quickly, get the permits that we need without wasting time, and also find the best route for the logistics.

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
         We are very flexible with our services and would be happy to assist you with any house shifting services needs from the very first step of a thorough plan to the final step when your things are securely and punctually placed in your new home.
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
