import "./Themes.css";
import hoPurple from "../../assets/img/ho1.png";
import hoGreen from "../../assets/img/ho2.png";
import hoYellow from "../../assets/img/ho3.png";
import hoBlue from "../../assets/img/ho4.png";
import { motion } from "framer-motion";
import { useState } from "react";

const Themes = () => {
  // const [click, setClick] = useState(false);
  // const [hover, setHover] = useState(false);
  const [hover, setHover] = useState(false);
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);
  const [hover5, setHover5] = useState(false);
  const [hover6, setHover6] = useState(false);
  const [hover7, setHover7] = useState(false);
  return (
    <div className="container pt-10" id="themes">
      <h1
        className="text-center"
        style={{ fontFamily: "Poppins,sans-serif", fontWeight: 700 }}
      >
        Themes - The 17 SDG'S
      </h1>
      <div className="cards-grid grid grid-cols-1 gap-4 place-items-center md:grid md:grid-cols-2 md:gap-4 xl:grid xl:grid-cols-4 xl:gap-8">
        <motion.div
          className="theme-card cursor-pointer"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            rotateY: hover ? 360 : 0,
          }}
        >
          <h1
            style={{
              filter: !hover ? "none" : "blur(8px)",
              color: hover && "#867dbb",
            }}
          >
            No Poverty
          </h1>
          <img
            src={hoBlue}
            alt="default.png"
            style={{ filter: !hover ? "none" : "blur(4px)" }}
          />
          <p style={{ display: !hover ? "none" : "block" }}>
            Join our hackathon to create innovative solutions for social welfare
            challenges, promoting well-being and tackling poverty, healthcare,
            and education. Let's work together to make a positive impact on
            society.
          </p>
        </motion.div>

        <motion.div
          className="theme-card cursor-pointer"
          onMouseEnter={() => setHover1(true)}
          onMouseLeave={() => setHover1(false)}
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            rotateY: hover1 ? 360 : 0,
          }}
        >
          <h1
            style={{
              filter: !hover1 ? "none" : "blur(8px)",
              color: hover1 && "#80ffea",
            }}
          >
            Zero Hunger
          </h1>
          <img
            src={hoGreen}
            alt="default.png"
            style={{ filter: !hover1 ? "none" : "blur(4px)" }}
          />
          <p style={{ display: !hover1 ? "none" : "block" }}>
            Join our hackathon to revolutionize finance with innovative
            solutions that improve financial inclusion, customer experience, and
            security. Help shape the future of mobile payments, digital
            currencies, and peer-to-peer lending.
          </p>
        </motion.div>

        <motion.div
          className="theme-card cursor-pointer"
          onMouseEnter={() => setHover2(true)}
          onMouseLeave={() => setHover2(false)}
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            rotateY: hover2 ? 360 : 0,
          }}
        >
          <h1
            style={{
              filter: !hover2 ? "none" : "blur(8px)",
              color: hover2 && "#ffff80",
            }}
          >
            Good Health
          </h1>
          <img
            src={hoYellow}
            alt="default.png"
            style={{ filter: !hover2 ? "none" : "blur(4px)" }}
          />
          <p style={{ display: !hover2 ? "none" : "block" }}>
            Join our hackathon to leverage open source tech and create
            innovative solutions using community collaboration. Build developer
            tools, user applications or contribute to open source projects to
            help us build a more connected world.
          </p>
        </motion.div>

        <motion.div
          className="theme-card cursor-pointer"
          onMouseEnter={() => setHover3(true)}
          onMouseLeave={() => setHover3(false)}
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            rotateY: hover3 ? 360 : 0,
          }}
        >
          <h1
            style={{
              filter: !hover3 ? "none" : "blur(8px)",
              color: hover3 && "#a9519f",
            }}
          >
            Healthcare
          </h1>
          <img
            src={hoPurple}
            alt="default.png"
            style={{ filter: !hover3 ? "none" : "blur(4px)" }}
          />
          <p style={{ display: !hover3 ? "none" : "block" }}>
            Join our hackathon to innovate solutions for better patient
            outcomes, healthcare accessibility, and efficiency. Let's improve
            the world with telemedicine, personalized medicine, and healthcare
            data analytics.
          </p>
        </motion.div>

        <motion.div
          className="theme-card cursor-pointer"
          onMouseEnter={() => setHover4(true)}
          onMouseLeave={() => setHover4(false)}
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            rotateY: hover4 ? 360 : 0,
          }}
        >
          <h1
            style={{
              filter: !hover4 ? "none" : "blur(8px)",
              color: hover4 && "#867dbb",
            }}
          >
            AI/ML
          </h1>
          <img
            src={hoBlue}
            alt="default.png"
            style={{ filter: !hover4 ? "none" : "blur(4px)" }}
          />
          <p style={{ display: !hover4 ? "none" : "block" }}>
            Join our hackathon to innovate solutions for intelligent automation,
            predictive analytics, and enhanced decision-making. Let's
            revolutionize industries with machine learning, natural language
            processing, and computer vision.
          </p>
        </motion.div>

        <motion.div
          className="theme-card cursor-pointer"
          onMouseEnter={() => setHover5(true)}
          onMouseLeave={() => setHover5(false)}
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            rotateY: hover5 ? 360 : 0,
          }}
        >
          <h1
            style={{
              filter: !hover5 ? "none" : "blur(8px)",
              color: hover5 && "#ffff80",
            }}
          >
            AR/VR
          </h1>
          <img
            src={hoYellow}
            alt="default.png"
            style={{ filter: !hover5 ? "none" : "blur(4px)" }}
          />
          <p style={{ display: !hover5 ? "none" : "block" }}>
            Develop innovative solutions that enhance learning, entertainment,
            and communication using immersive experiences, content creation
            tools, and education. Let's explore the potential of AR and VR
            together!
          </p>
        </motion.div>

        <motion.div
          className="theme-card cursor-pointer"
          onMouseEnter={() => setHover6(true)}
          onMouseLeave={() => setHover6(false)}
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            rotateY: hover6 ? 360 : 0,
          }}
        >
          <h1
            style={{
              filter: !hover6 ? "none" : "blur(8px)",
              color: hover6 && "#80ffea",
            }}
          >
            Blockchain
          </h1>
          <img
            src={hoGreen}
            alt="default.png"
            style={{ filter: !hover6 ? "none" : "blur(4px)" }}
          />
          <p style={{ display: !hover6 ? "none" : "block" }}>
            Join our blockchain/web3 hackathon to innovate solutions for DeFi,
            NFTs, and DAOs using cryptography, smart contract development, and
            dApp building. Let's build the future of finance, art, and
            governance with blockchain technology
          </p>
        </motion.div>

        <motion.div
          className="theme-card cursor-pointer"
          onMouseEnter={() => setHover7(true)}
          onMouseLeave={() => setHover7(false)}
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            rotateY: hover7 ? 360 : 0,
          }}
        >
          <h1
            style={{
              filter: !hover7 ? "none" : "blur(8px)",
              color: hover7 && "#ffff80",
            }}
          >
            Sustainablity
          </h1>
          <img
            src={hoYellow}
            alt="default.png"
            style={{ filter: !hover7 ? "none" : "blur(4px)" }}
          />
          <p style={{ display: !hover7 ? "none" : "block" }}>
            Join our hackathon to create innovative solutions for environmental
            and social challenges using decentralized technologies. Let's build
            a future where sustainability is at the forefront of our economic
            and social systems and work towards a more sustainable world.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Themes;
