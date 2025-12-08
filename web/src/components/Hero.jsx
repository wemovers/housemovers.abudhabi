import heroImg from "../assets/img/hero.webp"; // change to your hero image

const Hero = () => {
  return (
    <section
      style={{
        width: "100%",
        minHeight: "90vh",
        background: "linear-gradient(135deg, #FFC69D 0%, #E06B80 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 5%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Floating Circle Deco Left */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-80px",
          width: "200px",
          height: "200px",
          background: "#CD2C58",
          opacity: 0.18,
          borderRadius: "50%",
          filter: "blur(6px)",
          animation: "float1 6s infinite ease-in-out",
        }}
      ></div>

      {/* Floating Circle Deco Right */}
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          right: "-70px",
          width: "180px",
          height: "180px",
          background: "#E06B80",
          opacity: 0.18,
          borderRadius: "50%",
          filter: "blur(6px)",
          animation: "float2 7s infinite ease-in-out",
        }}
      ></div>

      {/* CONTENT */}
      <div
        style={{
          maxWidth: "1300px",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 2,
        }}
      >
        {/* LEFT TEXT */}
        <div
          style={{
            flex: "1 1 500px",
            color: "#ffffff",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2.3rem, 4vw, 4rem)",
              fontWeight: "800",
              lineHeight: "1.2",
              marginBottom: "20px",
              textShadow: "0 2px 4px rgba(0,0,0,0.15)",
            }}
          >
           Stress-Free​‍​‌‍​‍‌​‍​‌‍​‍‌ Moving Starts Here
            <span style={{ color: "#CD2C58" }}> Simple, Fast,</span>  
         
            & Stress-Free
          </h1>

          <p
            style={{
              fontSize: "1.1rem",
              fontWeight: "400",
              maxWidth: "500px",
              lineHeight: "1.6",
              marginBottom: "35px",
              textAlign:"justify"
            }}
          >
           Moving​‍​‌‍​‍‌​‍​‌‍​‍‌ can be hard and overwhelming, and it often comes with a lot of stress and logistical problems. We at House Movers Abu Dhabi are firm believers in the idea that moving should be an exciting new chapter in your life, rather than something that makes you anxious. Hence, our entire modus operandi is geared towards making your home shifting services experience a breeze, devoid of any stress, and absolutely safe. We are the one-stop solution for relocating your home, as we take care of every detail - starting from professionally and impeccably packing even your most valuable and beloved items, to a faultless journey, and then carefully unpacking at your new Abu Dhabi residence. Our aim is to take over the intricacies and the heavy work completely, thus ensuring that the move will be smooth and you will be able to concentrate only on settling into your new life ​‍​‌‍​‍‌​‍​‌‍​‍‌calmly.

          </p>

          {/* CTA BUTTONS */}
          <div style={{ display: "flex", gap: "18px" }}>
            <a
              href="/#contact"
              style={{
                backgroundColor: "#CD2C58",
                padding: "14px 32px",
                color: "#fff",
                borderRadius: "35px",
                fontWeight: "700",
                letterSpacing: "0.5px",
                border: "2px solid #ffffff",
              }}
            >
              Get Free Quote
            </a>

            <a
              href="/#about"
              style={{
                backgroundColor: "#ffffff",
                padding: "14px 32px",
                color: "#CD2C58",
                borderRadius: "35px",
                fontWeight: "700",
                border: "2px solid #CD2C58",
              }}
            >
              Our Services
            </a>
          </div>

          {/* TRUST BADGE */}
          <div
            style={{
              marginTop: "25px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                background: "#ffffff",
                padding: "8px 16px",
                borderRadius: "20px",
                fontWeight: "700",
                color: "#CD2C58",
                fontSize: "0.9rem",
              }}
            >
              ★ 4.9/5 Rated by Clients
            </div>
            <div
              style={{
                background: "#ffffff",
                padding: "8px 16px",
                borderRadius: "20px",
                fontWeight: "700",
                color: "#E06B80",
                fontSize: "0.9rem",
              }}
            >
              ✓ 100% Safe & Secure
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          style={{
            flex: "1 1 450px",
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          <img
            src={heroImg}
            alt="WeMovers Hero"
            style={{
              width: "95%",
              maxWidth: "550px",
              borderRadius: "30px",
              boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
