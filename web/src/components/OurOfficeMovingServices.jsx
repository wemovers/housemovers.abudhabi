import React from "react";
import officeMoveImg from "../assets/img/r1.jpg";

const OurOfficeMovingService = () => {
  return (
    <>
      {/* INTERNAL RESPONSIVE CSS */}
      <style>
        {`
          @media (max-width: 768px) {
            .office-grid {
              grid-template-columns: 1fr !important;
              text-align: center !important;
            }

            .office-img {
              height: 280px !important;
              margin-top: 20px !important;
            }

            .office-text {
              order: 1 !important;
              text-align: center !important;
            }

            .office-picture {
              order: 2 !important;
            }

            .office-title {
              font-size: 32px !important;
            }

            .office-ul li {
  justify-content: flex-start !important;
  text-align: justify !important;
  width: 100% !important;
}

          }
        `}
      </style>

      <section
        style={{
          width: "100%",
          backgroundColor: "#FFC69D",
          padding: "70px 20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          className="office-grid"
          style={{
            maxWidth: "1200px",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "50px",
            alignItems: "center",
          }}
        >
          {/* LEFT TEXT */}
          <div className="office-text">
            <h2
              className="office-title"
              style={{
                fontSize: "42px",
                color: "#CD2C58",
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
                textAlign: "justify",
              }}
            >
              Relocating​‍​‌‍​‍‌​‍​‌‍​‍‌ a business or an office is a pretty complex job that definitely calls for a fast, safe, and precise way of working. Here at House Movers. Abu Dhabi, we totally get the vital need to keep the downtime of operations as short as possible. That's the reason we have a specially equipped commercial moving service, and it is also our specialists who are experienced in corporate logistics and are very careful with security regulations, that powers it. Actually, it is our first goal to have your business working like clockwork and offering its services in the new place as soon as possible. In fact, we are also very careful with the disassembly and reassembly of sensitive IT infrastructure and household shifting servers so that no one sees the transfer of confidential documents and files that can only be trusted to ​‍​‌‍​‍‌​‍​‌‍​‍‌us.
            </p>

            <ul className="office-ul" style={{ marginTop: "20px", textAlign:"justify"}}>
              {[
                "1. Detailed Survey",
                "2. Customized Moving Plan",
                "3. Inventory Management",
                "4. Relocation of IT Equipment",
                "5. Confidential Document Management",
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    marginBottom: "14px",
                    color: "#CD2C58",
                    fontWeight: "600",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "16px",
                    textAlign:"justify",
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
          <div className="office-picture">
            <img
              src={officeMoveImg}
              alt="Office Moving"
              className="office-img"
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
    </>
  );
};

export default OurOfficeMovingService;
