import "./NewThemes.css";
// import hoGreen from "../../assets/img/ho2.png";
// import hoYellow from "../../assets/img/ho3.png";
// import hoBlue from "../../assets/img/ho4.png";
// import { motion } from "framer-motion";
// import { useState } from "react";
import ThemesCard from "../ThemesCard/ThemesCard";

// SDGS IMPORT
import poverty from "../../assets/img/themes/poverty.webp";
import zerohunger from "../../assets/img/themes/zerohunger.webp";
import goodhealth from "../../assets/img/themes/goodhealth.webp";
import qualityedu from "../../assets/img/themes/qualityedu.webp";
import genderequality from "../../assets/img/themes/genderequality.webp";
import cleanwater from "../../assets/img/themes/cleanwater.webp";
import decentwork from "../../assets/img/themes/decentwork.webp";
import industry from "../../assets/img/themes/industry.webp";
import reduceinequalities from "../../assets/img/themes/reduceinequalities.webp";
import cities from "../../assets/img/themes/cities.webp";
import consumption from "../../assets/img/themes/consumption.webp";
import climate from "../../assets/img/themes/climate.webp";
import partnerships from "../../assets/img/themes/partnerships.webp";
import marinelife from "../../assets/img/themes/marinelife.webp";
import landlife from "../../assets/img/themes/landlife.webp";
import peace from "../../assets/img/themes/peace.webp";
import cleanenergy from "../../assets/img/themes/cleanenergy.webp";

const NewThemes = () => {
  // const [click, setClick] = useState(false);
  // const [hover, setHover] = useState(false);
  return (
    <div className="container pt-10" id="themes">
      <h1
        id="green-yellow"
        className="text-center"
        style={{ fontFamily: "Poppins,sans-serif", fontWeight: 700 }}
      >
        Themes - The 17 SDG'S
      </h1>
      <div className="cards-grid grid grid-cols-1 gap-4 place-items-center md:grid md:grid-cols-2 md:gap-4 lg:grid lg:grid-cols-3 lg:gap-12 xl:grid xl:grid-cols-3 xl:gap-12">
        <ThemesCard
          title={"No Poverty"}
          image={poverty}
          description={
            "End poverty in all its forms, everywhere. Join our hackathon to create innovative solutions for No Poverty. Let's work together to make a positive impact on society."
          }
          gradientColor="bg-gradient-poverty"
          gradientColorText={"bg-gradient-poverty-text"}
        />

        <ThemesCard
          title={"Zero Hunger"}
          image={zerohunger}
          description={
            "End hunger, achieve food security and improved nutrition, and promote sustainable agriculture. Join our hackathon to create innovative solutions for Zero Hunger."
          }
          gradientColor={"bg-gradient-hunger"}
          gradientColorText={"bg-gradient-hunger-text"}
        />

        <ThemesCard
          title={"Good Health"}
          image={goodhealth}
          description={
            "Ensure healthy lives and promote well-being for all, at all ages. Join our hackathon to create innovative solutions for Good Health. Let's work together to make a positive impact on society."
          }
          gradientColor={"bg-gradient-health"}
          gradientColorText={"bg-gradient-health-text"}
        />

        <ThemesCard
          title={"Quality Education"}
          image={qualityedu}
          description={
            "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all. Join our hackathon to create innovative solutions for Quality Education."
          }
          gradientColor={"bg-gradient-education"}
          gradientColorText={"bg-gradient-education-text"}
        />

        <ThemesCard
          title={"Gender Equality"}
          image={genderequality}
          description={
            "Achieve gender equality and empower all women and girls. Join our hackathon to create innovative solutions for Gender Equality. Let's work together to make a positive impact."
          }
          gradientColor={"bg-gradient-genderequality"}
          gradientColorText={"bg-gradient-genderequality-text"}
        />

        <ThemesCard
          title={"Clean Water and Sanitation"}
          image={cleanwater}
          description={
            "Ensure availability and sustainable management of water and sanitation for all. Join our hackathon to create innovative solutions for Clean Water and Sanitation."
          }
          gradientColor={"bg-gradient-cleanwater"}
          gradientColorText={"bg-gradient-cleanwater-text"}
        />

        <ThemesCard
          title={"Decent Work"}
          image={decentwork}
          description={
            "Promote inclusive, and sustainable economic growth, productive employment. Join our hackathon to create innovative solutions for Decent Work and Economic Growth."
          }
          gradientColor={"bg-gradient-decentwork"}
          gradientColorText={"bg-gradient-decentwork-text"}
        />

        <ThemesCard
          title={"Industry & Infrastructure"}
          image={industry}
          description={
            "Build resilient infrastructure, promote inclusive and sustainable industrialization, and foster innovation. Join our hackathon to create innovative solutions for Industry."
          }
          gradientColor={"bg-gradient-industry"}
          gradientColorText={"bg-gradient-industry-text"}
        />

        <ThemesCard
          title={"Reduced Inequalities"}
          image={reduceinequalities}
          description={
            "Reduce inequality within and among countries. Join our hackathon to create innovative solutions for Reduced Inequalities. Let's work together to make a positive impact on society."
          }
          gradientColor={"bg-gradient-reduceinequalities"}
          gradientColorText={"bg-gradient-reduceinequalities-text"}
        />

        <ThemesCard
          title={"Sustainable Cities"}
          image={cities}
          description={
            "Make cities and human settlements inclusive, safe, resilient, and sustainable. Join our hackathon to create innovative solutions for Sustainable Cities and Communities."
          }
          gradientColor={"bg-gradient-cities"}
          gradientColorText={"bg-gradient-cities-text"}
        />

        <ThemesCard
          title={"Consumption & Production"}
          image={consumption}
          description={
            "Ensure sustainable consumption and production patterns. Join our hackathon to create innovative solutions for Responsible Consumption and Production."
          }
          gradientColor={"bg-gradient-consumption"}
          gradientColorText={"bg-gradient-consumption-text"}
        />

        <ThemesCard
          title={"Climate Action"}
          image={climate}
          description={
            "Take urgent action to combat climate change and its impacts. Join our hackathon to create innovative solutions for Climate Action. Let's work together to make a positive impact."
          }
          gradientColor={"bg-gradient-climate"}
          gradientColorText={"bg-gradient-climate-text"}
        />

        <ThemesCard
          title={"Partnerships"}
          image={partnerships}
          description={
            "Strengthen the means of implementation and revitalize the global partnership for sustainable development. Join our hackathon to create innovative solutions for Partnerships."
          }
          gradientColor={"bg-gradient-partnerships"}
          gradientColorText={"bg-gradient-partnerships-text"}
        />

        <ThemesCard
          title={"Life Below Water"}
          image={marinelife}
          description={
            "Conserve and sustainably use the oceans, seas, and marine resources for sustainable development. Join our hackathon to create innovative solutions for Marine Life."
          }
          gradientColor={"bg-gradient-marinelife"}
          gradientColorText={"bg-gradient-marinelife-text"}
        />

        <ThemesCard
          title={"Life on Land"}
          image={landlife}
          description={
            "Protect, restore, and promote sustainable use of terrestrial ecosystems, manage forests, combat desertification and biodiversity loss, and halt and reverse land degradation."
          }
          gradientColor={"bg-gradient-landlife"}
          gradientColorText={"bg-gradient-landlife-text"}
        />

        <ThemesCard
          title={"Peace & Justice"}
          image={peace}
          description={
            "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all, and build effective, accountable, and inclusive institutions."
          }
          gradientColor={"bg-gradient-peace"}
          gradientColorText={"bg-gradient-peace-text"}
        />

        <ThemesCard
          title={"Affordable & Clean Energy"}
          image={cleanenergy}
          description={
            "Ensure access to affordable, reliable, sustainable, and modern energy for all. Join our hackathon to create innovative solutions for Affordable & Clean Energy."
          }
          gradientColor={"bg-gradient-cleanenergy"}
          gradientColorText={"bg-gradient-cleanenergy-text"}
        />
      </div>
    </div>
  );
};

export default NewThemes;
