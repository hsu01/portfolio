import React from "react";
import ClickTheMallImage from "./clickthemall.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { theme } from "./theme";

// Modern JobCard Component with Glassmorphism
const JobCard = ({ animation, logoUrl, logoAlt, companyUrl, title, company, period, location, responsibilities, index }) => (
  <div
    data-aos={animation}
    style={{
      display: "flex",
      alignItems: "flex-start",
      background: theme.colors.panel,
      backdropFilter: "blur(18px)",
      borderRadius: theme.radii.lg,
      boxShadow: theme.shadows.soft,
      border: `1px solid ${theme.colors.line}`,
      padding: "35px",
      gap: "30px",
      transition: "all 0.4s ease",
      position: "relative",
      overflow: "hidden",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-5px)";
      e.currentTarget.style.boxShadow = theme.shadows.glow;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = theme.shadows.soft;
    }}
  >
    {/* Decorative Accent */}
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "5px",
        height: "100%",
        background: index % 2 === 0 ? theme.gradients.accent : "linear-gradient(180deg, #ff8a65 0%, #7db8ff 100%)",
      }}
    />

    {/* Company Logo */}
    <a
      href={companyUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        textDecoration: "none",
        flexShrink: 0,
        transition: "transform 0.3s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src={logoUrl}
        alt={logoAlt}
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "15px",
          objectFit: "cover",
          boxShadow: theme.shadows.accent,
        }}
        className="job-logo"
      />
    </a>

    {/* Content */}
    <div style={{ flex: 1 }}>
      {/* Job Title */}
      <h2
        style={{
          fontSize: "24px",
          background: theme.gradients.accent,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontFamily: theme.fonts.sans,
          fontWeight: "700",
          marginBottom: "8px",
          lineHeight: "1.3",
        }}
        className="job-title"
      >
        {title}
      </h2>

      {/* Company & Period */}
      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", marginBottom: "20px" }} className="job-badges">
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "6px 14px",
            background: "rgba(121, 247, 212, 0.1)",
            borderRadius: theme.radii.pill,
            fontSize: "14px",
            color: theme.colors.accent,
            fontWeight: "600",
            border: `1px solid ${theme.colors.line}`,
          }}
        >
          <span>🏢</span> {company}
        </div>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "6px 14px",
            background: "rgba(125, 184, 255, 0.12)",
            borderRadius: theme.radii.pill,
            fontSize: "14px",
            color: theme.colors.accentAlt,
            fontWeight: "600",
            border: `1px solid ${theme.colors.line}`,
          }}
        >
          <span>📅</span> {period}
        </div>
        {location && (
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "6px 14px",
              background: "rgba(255, 138, 101, 0.12)",
              borderRadius: theme.radii.pill,
              fontSize: "14px",
              color: theme.colors.accentWarm,
              fontWeight: "600",
              border: `1px solid ${theme.colors.line}`,
            }}
          >
            <span>📍</span> {location}
          </div>
        )}
      </div>

      {/* Responsibilities */}
      <ul
        style={{
          margin: "0",
          paddingLeft: "20px",
          listStyle: "none",
          lineHeight: "1.8",
          fontSize: "15px",
          color: theme.colors.subtle,
          fontFamily: theme.fonts.sans,
        }}
        className="job-responsibilities"
      >
        {responsibilities.map((item, idx) => (
          <li
            key={idx}
            style={{
              position: "relative",
              paddingLeft: "20px",
              marginBottom: "10px",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: "0",
                top: "8px",
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: index % 2 === 0 ? theme.gradients.accent : "linear-gradient(135deg, #ff8a65 0%, #7db8ff 100%)",
              }}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

function Job() {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const jobs = [
    {
      animation: "fade-up",
      logoUrl: `${process.env.PUBLIC_URL}/expedia-group-logo.jpg`,
      logoAlt: "Expedia Group",
      companyUrl: "https://www.expediagroup.com/",
      title: "Cloud Engineer Intern",
      company: "Expedia Group",
      period: "Jun 2026 - Aug 2026",
      location: "Austin, TX",
      responsibilities: [
        "Incoming Cloud Engineering Intern focused on building scalable cloud infrastructure and distributed systems."
      ]
    },
    {
      animation: "fade-up",
      logoUrl: "https://policyviz.com/wp-content/uploads/2020/12/amazon-logo-square.jpg",
      logoAlt: "Amazon",
      companyUrl: "https://www.amazon.com/",
      title: "Software Development Engineer Intern",
      company: "Amazon",
      period: "Jun 2025 - Sep 2025",
      location: "Seattle, WA",
      responsibilities: [
        "Developed a full-stack self-service COE (Correction of Error) tool used by 10,000+ Amazon engineers for incident prevention, replacing SIM ticket workflows and reducing manual policy onboarding time by 70%.",
        "Implemented secure backend logic and APIs in Java (AWS Lambda) with validation for Bar Raiser and Manager-Override policies, eliminating manual errors and bottlenecks.",
        "Built a dynamic frontend UI with real-time validation and end-to-end integration, empowering teams to self-serve post-incident prevention policies at scale."
      ]
    },
    {
      animation: "fade-up",
      logoUrl: "https://upload.wikimedia.org/wikipedia/en/5/58/University_of_Washington_seal.svg",
      logoAlt: "University of Washington",
      companyUrl: "https://www.washington.edu/",
      title: "Student Office Assistant",
      company: "University of Washington",
      period: "Apr 2025 - Jun 2025",
      location: "Seattle, WA",
      responsibilities: [
        "Provided front-desk support for 100+ student inquiries weekly, covering RSO logistics, event planning, and campus policies.",
        "Maintained and updated digital documentation for campus engagement tools and RSO resource guides.",
        "Coordinated NetID, storage, and space access for 50+ student organizations using internal ticketing tools."
      ]
    },
    {
      animation: "fade-up",
      logoUrl: "https://portal.akeneo.com/media/thumbnail/big/b7c6e29ae5b8c286dbc5a1dfb17a4fd2.png",
      logoAlt: "TransPerfect",
      companyUrl: "https://www.transperfect.com/",
      title: "Freelance Burmese-English Medical Interpreter",
      company: "TransPerfect",
      period: "Aug 2024 - Present",
      location: "",
      responsibilities: [
        "Facilitated accurate and culturally sensitive communication between Burmese-speaking patients and healthcare professionals in medical settings.",
        "Interpreted complex medical terminology to ensure patient understanding and provider clarity during consultations, treatments, and procedures.",
        "Maintained confidentiality and adhered to HIPAA compliance to safeguard patient information.",
        "Delivered high-quality language services, adapting to diverse patient needs and medical scenarios."
      ]
    },
    {
      animation: "fade-up",
      logoUrl: "https://media.licdn.com/dms/image/v2/C560BAQEC_DU8PW3gpQ/company-logo_200_200/company-logo_200_200/0/1677024177862/spokane_international_translation_logo?e=2147483647&v=beta&t=JpyFtDRzZRkd_z42SpGuaOfmGkm3xxxminC-9243-Z0",
      logoAlt: "Spokane International Translation",
      companyUrl: "https://pgls.com/spokanetranslations/",
      title: "Freelance Burmese-English Interpreter",
      company: "Spokane International Translation",
      period: "Feb 2024 - Present",
      location: "",
      responsibilities: [
        "Provided professional interpretation services in both medical and social settings, bridging communication gaps between Burmese-speaking individuals and service providers.",
        "Facilitated clear and culturally appropriate communication during medical consultations, treatments, and social service interactions.",
        "Adapted language services to diverse environments, promoting inclusivity and effective communication."
      ]
    },
    {
      animation: "fade-up",
      logoUrl: "https://media.licdn.com/dms/image/v2/C560BAQHN6Z-2Ntz7cQ/company-logo_200_200/company-logo_200_200/0/1630568818175/dorian_studios_inc_logo?e=2147483647&v=beta&t=39MkU88PtNUY5SmToG2EDeHe5C51GaiWSWjASIAfkhY",
      logoAlt: "Dorian Studio",
      companyUrl: "https://www.dorianstudio.com/",
      title: "OMR Data Processor",
      company: "Dorian Studio",
      period: "Aug 2023 - June 2024",
      location: "",
      responsibilities: [
        "Performed data entry from envelopes into the computer system, ensuring accuracy and efficiency.",
        "Utilized Remark application to correct and update background codes.",
        "Uploaded group photos to the server, making them accessible for clients to use.",
        "Maintained data integrity and handled sensitive information with confidentiality."
      ]
    },
    {
      animation: "fade-up",
      logoUrl: "https://r3.whistleout.com/public/images/articles/2023/07/metro-circle-logo.png",
      logoAlt: "Metro by T-Mobile",
      companyUrl: "https://www.metrobyt-mobile.com/",
      title: "Junior District Manager",
      company: "Metro by T-Mobile",
      period: "Aug 2022 - July 2023",
      location: "",
      responsibilities: [
        "Conducted store visits to ensure compliance with company standards.",
        "Implemented new systems and technologies to streamline operations.",
        "Developed and implemented store policies and procedures to ensure maximum efficiency.",
        "Monitor inventory level and restock merchandises as needed."
      ]
    },
    {
      animation: "fade-up",
      logoUrl: "https://r3.whistleout.com/public/images/articles/2023/07/metro-circle-logo.png",
      logoAlt: "Metro by T-Mobile",
      companyUrl: "https://www.metrobyt-mobile.com/",
      title: "Mobile Expert",
      company: "Metro by T-Mobile",
      period: "May 2022 - Aug 2022",
      location: "",
      responsibilities: [
        "Assisted customers with product inquiries and technology demonstrations.",
        "Provided a positive customer service experience with integrity and composure."
      ]
    },
    {
      animation: "fade-up",
      logoUrl: ClickTheMallImage,
      logoAlt: "Click the Mall Snacks Bar",
      companyUrl: "https://www.facebook.com/clickthemallsnacks",
      title: "Founder & Sole Proprietor",
      company: "Click the Mall Snacks Bar",
      period: "May 2018 - Oct 2023",
      location: "",
      responsibilities: [
        "Manage a small business on social media in Myanmar specializing in the import and sale of snacks from USA, South Korea and Thailand.",
        "Develop and design a distinctive logo and cover photo to establish a strong brand identity.",
        "Produce engaging and creative content to attract customers.",
        "Utilize photo editing skills to enhance product images and maintain visual consistencies.",
        "Demonstrate proficiency in photography by capturing high-quality images for marketing purposes.",
        "Devise and execute innovative social media advertising and promotional campaigns to drive sales and increase customer engagement."
      ]
    }
  ];

  return (
    <section
      id="job"
      className="section-shell"
      style={{
        padding: "80px 20px",
        background: theme.gradients.section,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Background */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "-150px",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "rgba(125, 184, 255, 0.12)",
          filter: "blur(100px)",
        }}
      />

      {/* Section Header */}
      <div style={{ textAlign: "center", marginBottom: "70px", position: "relative", zIndex: 1 }}>
        <h1
          style={{
            fontSize: "48px",
            background: theme.gradients.accent,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: theme.fonts.sans,
            fontWeight: "700",
            marginBottom: "15px",
            letterSpacing: "1px",
          }}
        >
          Work Experience
        </h1>
        <p
          style={{
            fontSize: "18px",
            color: theme.colors.muted,
            maxWidth: "700px",
            margin: "0 auto",
            fontFamily: theme.fonts.serif,
          }}
        >
          My professional journey across tech, interpretation, and entrepreneurship
        </p>
      </div>

      {/* Jobs Grid */}
      <div
        style={{
          display: "grid",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {jobs.map((job, index) => (
          <JobCard key={index} {...job} index={index} />
        ))}
      </div>

      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          #job {
            padding: 30px 15px !important;
          }
          
          #job h1 {
            font-size: 32px !important;
          }
          
          #job p {
            font-size: 15px !important;
          }
          
          #job > div:last-child > div {
            flex-direction: column !important;
            padding: 20px !important;
            gap: 20px !important;
          }
          
          .job-logo {
            width: 88px !important;
            height: 88px !important;
          }
          
          .job-title {
            font-size: 20px !important;
          }
          
          .job-badges {
            gap: 8px !important;
          }
          
          .job-badges > div {
            font-size: 12px !important;
            padding: 5px 10px !important;
          }
          
          .job-responsibilities {
            font-size: 14px !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Job;
