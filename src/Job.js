import React from "react";
import ClickTheMallImage from "./clickthemall.jpg"; // Correct path

function Job() {
  return (
    <section id="job" style={{ padding: "130px", background: "#D4C2B4" }}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "40px",
          fontFamily: "Poppins",
          color: "#282C23",
        }}
      >
        Job Experiences
      </h1>

      <div style={{ display: "grid", gap: "30px", marginTop: "30px" }}>

        {/* Job: Amazon */}
        <div
          data-aos="fade-right"
          style={{
            display: "flex",
            alignItems: "center",
            background: "#fff",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            padding: "30px",
            gap: "20px",
          }}
        >
          <a
            href="https://www.aboutamazon.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
              alt="Amazon"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "5px",
                background: "#fff",
                objectFit: "contain",
              }}
            />
          </a>
          <div>
            <h2 style={{ fontFamily: "Poppins", color: "#BC7C7C", marginBottom: "1px" }}>
              Software Development Engineer Intern
            </h2>
            <p style={{ fontFamily: "Poppins", fontSize: "20px", color: "#BC7C7C" }}>
              Amazon (Jun 2025 – Sep 2025)
            </p>
            <ul
              style={{
                margin: "0",
                padding: "0",
                listStyle: "disc",
                lineHeight: "1.6",
                fontSize: "15px",
              }}
            >
              <li>
                Built a full-stack self-service COE tool used by 10,000+ engineers, reducing onboarding time by 70%.
              </li>
              <li>
                Implemented secure backend APIs in Java (AWS Lambda) with validation for Bar Raiser & Manager-Override policies.
              </li>
              <li>
                Developed a dynamic React UI with real-time validation and end-to-end integration for scalable policy management.
              </li>
            </ul>
          </div>
        </div>

        {/* Job: UW Student Office Assistant */}
        <div
          data-aos="fade-left"
          style={{
            display: "flex",
            alignItems: "center",
            background: "#fff",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            padding: "30px",
            gap: "20px",
          }}
        >
          <a
            href="https://www.washington.edu/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Washington_Huskies_logo.svg"
              alt="University of Washington"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "5px",
                background: "#fff",
                objectFit: "contain",
              }}
            />
          </a>
          <div>
            <h2 style={{ fontFamily: "Poppins", color: "#BC7C7C", marginBottom: "1px" }}>
              Student Office Assistant
            </h2>
            <p style={{ fontFamily: "Poppins", fontSize: "20px", color: "#BC7C7C" }}>
              University of Washington (Apr 2025 – Present)
            </p>
            <ul
              style={{
                margin: "0",
                padding: "0",
                listStyle: "disc",
                lineHeight: "1.6",
                fontSize: "15px",
              }}
            >
              <li>
                Provided front-desk support for 100+ student inquiries weekly about RSOs, events, and campus policies.
              </li>
              <li>
                Maintained digital documentation and resource guides for campus engagement tools.
              </li>
              <li>
                Coordinated NetID, storage, and space access for 50+ student organizations using internal ticketing systems.
              </li>
            </ul>
          </div>
        </div>

        {/* Job 1: TransPerfect */}
        <div
          data-aos="fade-right"
          style={{
            display: "flex",
            alignItems: "center",
            background: "rgba(255, 255, 255)",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            padding: "30px",
            gap: "20px",
          }}
        >
          <a
            href="https://www.transperfect.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <img
              src="https://portal.akeneo.com/media/thumbnail/big/b7c6e29ae5b8c286dbc5a1dfb17a4fd2.png"
              alt="TransPerfect"
              style={{ width: "200px", height: "200px", borderRadius: "5px" }}
            />
          </a>
          <div>
            <h2 style={{ fontFamily: "Poppins", color: "#BC7C7C", marginBottom: "1px" }}>
              Freelance Burmese-English Medical Interpreter
            </h2>
            <p style={{ fontFamily: "Poppins", fontSize: "20px", color: "#BC7C7C" }}>
              TransPerfect (Aug 2024 - Present)
            </p>
            <ul
              style={{
                margin: "0",
                padding: "0",
                listStyle: "disc",
                lineHeight: "1.6",
                display: "block",
                fontSize: "15px",
              }}
            >
              <li>
                Facilitated accurate and culturally sensitive communication between Burmese-speaking patients
                and healthcare professionals in medical settings.
              </li>
              <li>
                Interpreted complex medical terminology to ensure patient understanding and provider clarity
                during consultations, treatments, and procedures.
              </li>
              <li>
                Maintained confidentiality and adhered to HIPAA compliance to safeguard patient information.
              </li>
              <li>
                Delivered high-quality language services, adapting to diverse patient needs and medical
                scenarios.
              </li>
            </ul>
          </div>
        </div>

        {/* Job 2: Spokane International Translation */}
        <div
          data-aos="fade-left"
          style={{
            display: "flex",
            alignItems: "center",
            background: "#fff",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            padding: "30px",
            gap: "20px",
          }}
        >
          <a
            href="https://pgls.com/spokanetranslations/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <img
              src="https://media.licdn.com/dms/image/v2/C560BAQEC_DU8PW3gpQ/company-logo_200_200/company-logo_200_200/0/1677024177862/spokane_international_translation_logo"
              alt="Spokane International Translation"
              style={{ width: "200px", height: "200px", borderRadius: "5px" }}
            />
          </a>
          <div>
            <h2 style={{ fontFamily: "Poppins", color: "#BC7C7C", marginBottom: "1px" }}>
              Freelance Burmese-English Interpreter
            </h2>
            <p style={{ fontFamily: "Poppins", fontSize: "20px", color: "#BC7C7C" }}>
              Spokane International Translation (Feb 2024 - Present)
            </p>
            <ul
              style={{
                margin: "0",
                padding: "0",
                listStyle: "disc",
                lineHeight: "1.6",
                display: "block",
                fontSize: "15px",
              }}
            >
              <li>
                Provided professional interpretation services in both medical and social settings, bridging
                communication gaps between Burmese-speaking individuals and service providers.
              </li>
              <li>
                Facilitated clear and culturally appropriate communication during medical consultations,
                treatments, and social service interactions.
              </li>
              <li>
                Adapted language services to diverse environments, promoting inclusivity and effective communication.
              </li>
            </ul>
          </div>
        </div>

        {/* Job 3: Dorian Studio */}
        <div
          data-aos="fade-right"
          style={{
            display: "flex",
            alignItems: "center",
            background: "#fff",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            padding: "30px",
            gap: "20px",
          }}
        >
          <a
            href="https://www.dorianstudio.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <img
              src="https://media.licdn.com/dms/image/v2/C560BAQHN6Z-2Ntz7cQ/company-logo_200_200/company-logo_200_200/0/1630568818175/dorian_studios_inc_logo"
              alt="Dorian Studio"
              style={{ width: "200px", height: "200px", borderRadius: "5px" }}
            />
          </a>
          <div>
            <h2 style={{ fontFamily: "'Poppins'", color: "#BC7C7C", marginBottom: "1px" }}>
              OMR Data Processor
            </h2>
            <p
              style={{
                fontFamily: "'Poppins'",
                fontSize: "20px",
                color: "#BC7C7C",
                marginBottom: "10px",
              }}
            >
              Dorian Studio (Aug 2023 - June 2024)
            </p>
            <ul
              style={{
                margin: "0",
                padding: "0",
                listStyle: "disc",
                lineHeight: "1.6",
                display: "block",
                fontSize: "15px",
              }}
            >
              <li>Performed data entry from envelopes into the computer system, ensuring accuracy and efficiency.</li>
              <li>Utilized Remark application to correct and update background codes.</li>
              <li>Uploaded group photos to the server, making them accessible for clients to use.</li>
              <li>Maintained data integrity and handled sensitive information with confidentiality.</li>
            </ul>
          </div>
        </div>

        {/* Job 4: Metro by T-Mobile (Junior District Manager) */}
        <div
          data-aos="fade-left"
          style={{
            display: "flex",
            alignItems: "center",
            background: "#fff",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            padding: "30px",
            gap: "20px",
          }}
        >
          <a
            href="https://www.metrobyt-mobile.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <img
              src="https://r3.whistleout.com/public/images/articles/2023/07/metro-circle-logo.png"
              alt="Metro by T-Mobile"
              style={{ width: "200px", height: "200px", borderRadius: "5px" }}
            />
          </a>
          <div>
            <h2 style={{ fontFamily: "'Poppins'", color: "#BC7C7C", marginBottom: "1px" }}>
              Junior District Manager
            </h2>
            <p
              style={{
                fontFamily: "'Poppins'",
                fontSize: "20px",
                color: "#BC7C7C",
                marginBottom: "10px",
              }}
            >
              Metro by T-Mobile (Aug 2022 - July 2023)
            </p>
            <ul
              style={{
                margin: "0",
                padding: "0",
                listStyle: "disc",
                lineHeight: "1.6",
                display: "block",
                fontSize: "15px",
              }}
            >
              <li>Conducted store visits to ensure compliance with company standards.</li>
              <li>Implemented new systems and technologies to streamline operations.</li>
              <li>Developed and implemented store policies and procedures to ensure maximum efficiency.</li>
              <li>Monitored inventory levels and restocked merchandise as needed.</li>
            </ul>
          </div>
        </div>

        {/* Job 5: Metro by T-Mobile (Mobile Expert) */}
        <div
          data-aos="fade-right"
          style={{
            display: "flex",
            alignItems: "center",
            background: "#fff",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            padding: "30px",
            gap: "20px",
          }}
        >
          <a
            href="https://www.metrobyt-mobile.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <img
              src="https://r3.whistleout.com/public/images/articles/2023/07/metro-circle-logo.png"
              alt="Metro by T-Mobile"
              style={{ width: "200px", height: "200px", borderRadius: "5px" }}
            />
          </a>
          <div>
            <h2 style={{ fontFamily: "'Poppins'", color: "#BC7C7C", marginBottom: "1px" }}>
              Mobile Expert
            </h2>
            <p
              style={{
                fontFamily: "'Poppins'",
                fontSize: "20px",
                color: "#BC7C7C",
                marginBottom: "10px",
              }}
            >
              Metro by T-Mobile (May 2022 - Aug 2022)
            </p>
            <ul
              style={{
                margin: "0",
                padding: "0",
                listStyle: "disc",
                lineHeight: "1.6",
                display: "block",
                fontSize: "15px",
              }}
            >
              <li>Assisted customers with product inquiries and technology demonstrations.</li>
              <li>Provided a positive customer service experience with integrity and composure.</li>
            </ul>
          </div>
        </div>

        {/* Job 6: Click the Mall Snacks */}
        <div
          data-aos="fade-right"
          style={{
            display: "flex",
            alignItems: "center",
            background: "#fff",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            padding: "30px",
            gap: "20px",
          }}
        >
          <a
            href="https://www.facebook.com/clickthemallsnacks"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <img
              src={ClickTheMallImage}
              alt="Click the Mall Snacks Bar"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            />
          </a>
          <div>
            <h2 style={{ fontFamily: "'Poppins'", color: "#BC7C7C", marginBottom: "1px" }}>
              Founder & Sole Proprietor
            </h2>
            <p
              style={{
                fontFamily: "'Poppins'",
                fontSize: "20px",
                color: "#BC7C7C",
                marginBottom: "10px",
              }}
            >
              Click the Mall Snacks Bar (May 2018 - Oct 2023)
            </p>
            <ul
              style={{
                margin: "0",
                padding: "0",
                listStyle: "disc",
                lineHeight: "1.6",
                display: "block",
                fontSize: "15px",
              }}
            >
              <li>
                Managed a small business on social media in Myanmar specializing in the import and sale of snacks
                from USA, South Korea, and Thailand.
              </li>
              <li>
                Developed and designed a distinctive logo and cover photo to establish a strong brand identity.
              </li>
              <li>Produced engaging and creative content to attract customers.</li>
              <li>
                Utilized photo editing skills to enhance product images and maintain visual consistency.
              </li>
              <li>
                Captured high-quality product photography to strengthen marketing visuals.
              </li>
              <li>
                Executed social media advertising campaigns to drive sales and boost customer engagement.
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Job;
