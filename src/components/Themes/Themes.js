import "./Themes.css";
import hoPurple from "../../assets/img/ho1.png";
import hoGreen from "../../assets/img/ho2.png";
import hoYellow from "../../assets/img/ho3.png";
import hoBlue from "../../assets/img/ho4.png";
import { motion } from "framer-motion";
import { useState } from "react";

const Themes = () => {
  const [click, setClick] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [click4, setClick4] = useState(false);
  const [click5, setClick5] = useState(false);
  const [click6, setClick6] = useState(false);
  const [click7, setClick7] = useState(false);
  const [click8, setClick8] = useState(false);
  return (
    <div className="container">
      <h1 className="text-center">Themes</h1>
      <div className="cards-grid">
        {click ? (
          <motion.div
            className="theme-card"
            onClick={() => {
              setClick(!click);
            }}
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              rotateY: 360,
            }}
          >
            <h1 style={{ filter: "blur(8px)" }}>Social Welfare</h1>
            <img
              style={{ filter: "blur(4px)" }}
              src={hoBlue}
              alt="default.png"
            />
            <p>
              Join our hackathon to create innovative solutions for social
              welfare challenges, promoting well-being and tackling poverty,
              healthcare, and education. Let's work together to make a positive
              impact on society.
            </p>
          </motion.div>
        ) : (
          <motion.div
            div
            className="theme-card"
            onClick={() => {
              setClick(!click);
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <h1>Social Welfare</h1>
            <img src={hoBlue} alt="default.png" />
          </motion.div>
        )}
        {click2 ? (
          <motion.div
            className="theme-card"
            onClick={() => {
              setClick2(!click2);
            }}
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              rotateY: 360,
            }}
          >
            <h1 style={{ filter: "blur(8px)" }}>Fintech</h1>
            <img
              style={{ filter: "blur(4px)" }}
              src={hoGreen}
              alt="default.png"
            />
            <p>
              Join our hackathon to revolutionize finance with innovative
              solutions that improve financial inclusion, customer experience,
              and security. Help shape the future of mobile payments, digital
              currencies, and peer-to-peer lending.
            </p>
          </motion.div>
        ) : (
          <motion.div
            className="theme-card"
            onClick={() => {
              setClick2(!click2);
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <h1>Fintech</h1>
            <img src={hoGreen} alt="default.png" />
          </motion.div>
        )}
        {click3 ? (
          <motion.div
            className="theme-card"
            onClick={() => {
              setClick3(!click3);
            }}
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              rotateY: 360,
            }}
          >
            <h1 style={{ filter: "blur(8px)" }}>Open Source</h1>
            <img
              style={{ filter: "blur(4px)" }}
              src={hoYellow}
              alt="default.png"
            />
            <p>
              Join our hackathon to leverage open source tech and create
              innovative solutions using community collaboration. Build
              developer tools, user applications or contribute to open source
              projects to help us build a more connected world.
            </p>
          </motion.div>
        ) : (
          <motion.div
            className="theme-card"
            onClick={() => {
              setClick3(!click3);
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <h1>Open Source</h1>
            <img src={hoYellow} alt="default.png" />
          </motion.div>
        )}

        {click4 ? (
          <motion.div
            className="theme-card"
            onClick={() => {
              setClick4(!click4);
            }}
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              rotateY: 360,
            }}
          >
            <h1 style={{ filter: "blur(8px)" }}>Healthcare</h1>
            <img
              style={{ filter: "blur(4px)" }}
              src={hoPurple}
              alt="default.png"
            />
            <p>
              Join our hackathon to innovate solutions for better patient
              outcomes, healthcare accessibility, and efficiency. Let's improve
              the world with telemedicine, personalized medicine, and healthcare
              data analytics.
            </p>
          </motion.div>
        ) : (
          <motion.div
            className="theme-card"
            onClick={() => {
              setClick4(!click4);
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <h1>Healthcare</h1>
            <img src={hoPurple} alt="default.png" />
          </motion.div>
        )}

        {click5 ? (
          <motion.div
            className="theme-card"
            onClick={() => {
              setClick5(!click5);
            }}
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              rotateY: 360,
            }}
          >
            <h1 style={{ filter: "blur(8px)" }}>AI/ML</h1>
            <img
              style={{ filter: "blur(4px)" }}
              src={hoBlue}
              alt="default.png"
            />
            <p>
              Join our hackathon to innovate solutions for intelligent
              automation, predictive analytics, and enhanced decision-making.
              Let's revolutionize industries with machine learning, natural
              language processing, and computer vision.
            </p>
          </motion.div>
        ) : (
          <motion.div
            div
            className="theme-card"
            onClick={() => {
              setClick5(!click5);
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <h1>AI/ML</h1>
            <img src={hoBlue} alt="default.png" />
          </motion.div>
        )}

        {click6 ? (
          <motion.div
            className="theme-card"
            onClick={() => {
              setClick6(!click6);
            }}
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              rotateY: 360,
            }}
          >
            <h1 style={{ filter: "blur(8px)" }}>AR/VR</h1>
            <img
              style={{ filter: "blur(4px)" }}
              src={hoYellow}
              alt="default.png"
            />
            <p>
              Develop innovative solutions that enhance learning, entertainment,
              and communication using immersive experiences, content creation
              tools, and education. Let's explore the potential of AR and VR
              together!
            </p>
          </motion.div>
        ) : (
          <motion.div
            div
            className="theme-card"
            onClick={() => {
              setClick6(!click6);
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <h1>AR/VR</h1>
            <img src={hoYellow} alt="default.png" />
          </motion.div>
        )}

        {click7 ? (
          <motion.div
            className="theme-card"
            onClick={() => {
              setClick7(!click7);
            }}
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              rotateY: 360,
            }}
          >
            <h1 style={{ filter: "blur(8px)" }}>Blockchain</h1>
            <img
              style={{ filter: "blur(4px)" }}
              src={hoGreen}
              alt="default.png"
            />
            <p>
              Join our blockchain/web3 hackathon to innovate solutions for DeFi,
              NFTs, and DAOs using cryptography, smart contract development, and
              dApp building. Let's build the future of finance, art, and
              governance with blockchain technology
            </p>
          </motion.div>
        ) : (
          <motion.div
            div
            className="theme-card"
            onClick={() => {
              setClick7(!click7);
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <h1>Blockchain</h1>
            <img src={hoGreen} alt="default.png" />
          </motion.div>
        )}

        {click8 ? (
          <motion.div
            className="theme-card"
            onClick={() => {
              setClick8(!click8);
            }}
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              rotateY: 360,
            }}
          >
            <h1 style={{ filter: "blur(8px)" }}>Sustainablity</h1>
            <img
              style={{ filter: "blur(4px)" }}
              src={hoYellow}
              alt="default.png"
            />
            <p>
              Join our hackathon to create innovative solutions for
              environmental and social challenges using decentralized
              technologies. Let's build a future where sustainability is at the
              forefront of our economic and social systems and work towards a
              more sustainable world.
            </p>
          </motion.div>
        ) : (
          <motion.div
            div
            className="theme-card"
            onClick={() => {
              setClick8(!click8);
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <h1>Sustainablity</h1>
            <img src={hoYellow} alt="default.png" />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Themes;
