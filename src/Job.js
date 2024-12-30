import React from "react";

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
        {/* Job 1 */}
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
              <li>Maintained confidentiality and adhered to HIPAA compliance to safeguard patient information.</li>
              <li>
                Delivered high-quality language services, adapting to diverse patient needs and medical
                scenarios.
              </li>
            </ul>
          </div>
        </div>

        {/* Job 2 */}
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
              src="https://media.licdn.com/dms/image/v2/C560BAQEC_DU8PW3gpQ/company-logo_200_200/company-logo_200_200/0/1677024177862/spokane_international_translation_logo?e=2147483647&v=beta&t=JpyFtDRzZRkd_z42SpGuaOfmGkm3xxxminC-9243-Z0"
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
              <li>Adapted language services to diverse environments, promoting inclusivity and effective communication.</li>
            </ul>
          </div>
        </div>
    {/* Job 3 */}
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
    href="https://www.dorianstudio.com/" // Replace with the company's URL
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: "none" }}
  >
    <img
      src="https://media.licdn.com/dms/image/v2/C560BAQHN6Z-2Ntz7cQ/company-logo_200_200/company-logo_200_200/0/1630568818175/dorian_studios_inc_logo?e=2147483647&v=beta&t=39MkU88PtNUY5SmToG2EDeHe5C51GaiWSWjASIAfkhY" // Replace with your logo/image URL
      alt="Dorian Studio"
      style={{ width: "200px", height: "200px", borderRadius: "5px" }}
    />
  </a>
  <div>
    <h2 style={{ 
      fontFamily: "'Poppins'", 
      color: "#BC7C7C",
      marginBottom: "1px",
      }}>
      OMR Data Processor
    </h2>
    <p
      style={{
        fontFamily: "'Poppins'",
        fontSize: "20px",
        color: "#BC7C7C",
        marginBottom: "10px",
      }}>
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
      }}>
      <li>
      Performed data entry from envelopes into the computer system, ensuring accuracy and efficiency.
      </li>
      <li>
      Utilized Remark application to correct and update background codes.
      </li>
      <li>
      Uploaded group photos to the server, making them accessible for clients to use.
      </li>
      <li>
      Maintained data integrity and handled sensitive information with confidentiality.
      </li>
    </ul>
  </div>
</div>

{/* Job 4 */}
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
    href="https://www.metrobyt-mobile.com/" // Replace with the company's URL
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
    <h2 style={{ 
      fontFamily: "'Poppins'", 
      color: "#BC7C7C",
      marginBottom: "1px",
      }}>
      Junior District Manager
    </h2>
    <p
      style={{
        fontFamily: "'Poppins'",
        fontSize: "20px",
        color: "#BC7C7C",
        marginBottom: "10px",
      }}>
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
      }}>
      <li>
      Conducted store visits to ensure compliance with company standards.
      </li>
      <li>
      Implemented new systems and technologies to streamline operations.
      </li>
      <li>
      Developed and implemented store polices and procedures to ensure maximum efficiency.
      </li>
      <li>
        Monitor inventory level and restock merchandises as needed.
      </li>
    </ul>
  </div>
</div>

{/* Job 5 */}
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
    href="https://www.metrobyt-mobile.com/" // Replace with the company's URL
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
    <h2 style={{ 
      fontFamily: "'Poppins'", 
      color: "#BC7C7C",
      marginBottom: "1px",
      }}>
      Mobile Expert
    </h2>
    <p
      style={{
        fontFamily: "'Poppins'",
        fontSize: "20px",
        color: "#BC7C7C",
        marginBottom: "10px",
      }}>
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
      }}>
      <li>
      Assisted customers with product inquiries and technology demonstrations.
      </li>
      <li>
      Provided a positive customer service experience with integrity and composure.
      </li>
    </ul>
  </div>
</div>

{/* Job 6 */}
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
    href="https://www.facebook.com/clickthemallsnacks" // Replace with the company's URL
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: "none" }}
  >
    <img
      src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/326540164_1285679908649821_1253814587433546366_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=3CFnwrLXS7YQ7kNvgHVzYGt&_nc_zt=23&_nc_ht=scontent-sea1-1.xx&_nc_gid=Aqe94oBeUz2_rLtgraZ5yR7&oh=00_AYBHNrzjcJeOw1O4D-QjLClriFaa9JwNpok1XoV1qwGVyA&oe=6777AFE4"
      alt="Click the Mall Snacks Bar"
      style={{ width: "200px", height: "200px", borderRadius: "5px" }}
    />
  </a>
  <div>
    <h2 style={{ 
      fontFamily: "'Poppins'", 
      color: "#BC7C7C",
      marginBottom: "1px",
      }}>
      Founder & Sole Proprietor
    </h2>
    <p
      style={{
        fontFamily: "'Poppins'",
        fontSize: "20px",
        color: "#BC7C7C",
        marginBottom: "10px",
      }}>
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
      }}>
      <li>
      Manage a small business on social media in Myanmar specializing in the import and sale of snacks from USA, 
      South Korea and Thailand.
      </li>
      <li>
      Develop and design a distinctive logo and cover photo to establish a strong brand identity.
      </li>
      <li>
      Produce engaging and creative content to attract customers.
      </li>
      <li>
      Utilize photo editing skills to enhance product images and maintain visual consistencies.
      </li>
      <li>
      Demonstrate proficiency in photography by capturing high-quality images for marketing purposes.
      </li>
      <li>
      Devise and execute innovative social media advertising and promotional campaigns to drive sales and increase customer engagement.
      </li>
    </ul>
  </div>
</div>
      </div>
    </section>
  );
}

export default Job;
