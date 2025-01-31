import React, { useEffect, useReducer, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Box, Heading, HStack } from "@chakra-ui/react";
import { Stack, VStack } from "@chakra-ui/react";

import "./xyz.css";
import {
  GridItem,
  SimpleGrid,
  Grid,
  Image as ChakraImage,
  Text,
  Flex,
  Link,
} from "@chakra-ui/react";
// import Nav from "../components/navbar";
import { NavBar } from "../NavBar";
// import Head from "../components/heading";

import { useAutoAnimate } from "@formkit/auto-animate/react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
// Import Swiper styles
import "swiper/css";
import {
  // FaFacebook,
  FaDiscord,
  FaTwitter,
  FaGithub,
  // FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
import XIcon from "@mui/icons-material/X";
//import css
import "./AppTeam.css";
import "./Animation.css";

const TeamNavMember = (props) => {
  //hover state
  const [hover, setHover] = useState(false);
  return (
    <Box
      pos="inherit"
      onClick={() => props.onClick()}
      h={{
        base: props.isSelected ? "60px" : "40px",
        md: props.isSelected ? "120px" : "100px",
      }}
      w={{
        base: props.isSelected ? "60px" : "40px",
        md: props.isSelected ? "120px" : "100px",
      }}
      // border="4px green solid"
      // borderRadius="50%"
      overflow="hidden"
      //onHover
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <ChakraImage
        src={props.image}
        width={{ base: "100%", md: "100%" }}
        height={{ base: "100%", md: "100%" }}
        objectFit="cover"
        // border={'4px solid yellow'}
      />
      {hover && (
        <Box
          pos="absolute"
          top={{ base: 0, md: 0 }}
          left={{ base: 0, md: 0 }}
          w={{ base: "100%", md: "100%" }}
          h={{ base: "100%", md: "100%" }}
          bg="rgba(0,0,0,0.5)"
          display="flex"
          borderRadius={{ base: "100", md: 100 }}
          // border={'4px solid yellow'}
        >
          <Text
            color="white"
            m="auto"
            p={2}
            fontSize={{ base: "1.5vw", md: "1.2vw" }}
            textAlign="center"
          >
            {props.name}
          </Text>
        </Box>
      )}
    </Box>
  );
};

const TeamNav = (props) => {
  // if elements are more than 5, then show arrows

  // available pos must be in odd numbers

  var posArrayTeamLeads = props.posArrayTeamLeads;
  const selectedPosTeamLeads = props.selectedPosTeamLeads;
  const setSelectedPosTeamLeads = props.setSelectedPosTeamLeads;
  const setPosArray = props.setPosArray;
  // selectedPosTeamLeads will always be in the center and bigger than the other positions

  const handleClicked = (it) => {
    //find the index of the clicked item
    const index = posArrayTeamLeads.findIndex((item) => item.name === it.name);
    // if the selectedPosTeamLeads is clicked, do nothing
    if (index === selectedPosTeamLeads) return;
    // if the selectedPosTeamLeads is not clicked, set the selectedPosTeamLeads to the clicked index

    const temp = [...posArrayTeamLeads];
    //get element at index and put it in the center
    const selectedElement = temp.splice(index, 1);
    temp.splice(temp.length / 2, 0, selectedElement[0]);
    setSelectedPosTeamLeads(Math.floor(temp.length - 1) / 2);
    //set the new array
    setPosArray(temp);
  };

  const [parent] = useAutoAnimate(/* optional config */);

  return (
    <HStack
      spacing={{ base: "10px", md: "20px" }}
      p={0}
      ref={parent}
      minH="20px"
      // border={'4px red solid'}
      display="flex"
    >
      {posArrayTeamLeads.map((it) => (
        <TeamNavMember
          image={it.image1}
          name={it.name}
          onClick={() => handleClicked(it)}
          key={it.key}
          isSelected={posArrayTeamLeads.indexOf(it) === selectedPosTeamLeads}
        />
      ))}
    </HStack>
  );
};

const Img = (src) => {
  return <img src={src} alt="team" />;
};

const CurrentTeamNav = (props) => {
  const allPosArray = props.posArrayTeamLeads;
  const [selectedPosArray, setSelectedPosArray] = useState(0);
  const [posArrayTeamLeads, setPosArray] = useState(
    // get the first 5 elements
    allPosArray.slice(selectedPosArray, 5)
  );
  useEffect(() => {
    console.log("posArrayTeamLeads", posArrayTeamLeads);
    const key = posArrayTeamLeads[selectedPosTeamLeads]?.key;
    console.log("key", key);
    props.parentSetSelectedPos(key - 1);
  }, [posArrayTeamLeads]);

  const [selectedPosTeamLeads, setSelectedPosTeamLeads] = useState(
    Math.floor((posArrayTeamLeads.length - 1) / 2)
  );

  return (
    <HStack>
      {allPosArray.length > 5 && (
        <Box
          w={{ base: "20px", md: "40px" }}
          h={{ base: "20px", md: "40px" }}
          bg={selectedPosArray > 0 ? "black" : "blackAlpha.300"}
          borderRadius="50%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          // border={'4px blue solid'}
          ml={-10}
          onClick={() => {
            // set the new array
            //selectedPosArray is the index of the first element in the array
            // selectedPosArray >= 0 and selectedPosArray < allPosArray.length-5
            if (selectedPosArray - 5 >= 0) {
              setSelectedPosArray(selectedPosArray - 5);
              setPosArray(
                allPosArray.slice(selectedPosArray - 5, selectedPosArray)
              );
            } else {
              setSelectedPosArray(0);
              setPosArray(allPosArray.slice(0, 5));
            }
          }}
        >
          <AiOutlineLeft color="white" />
        </Box>
      )}
      <TeamNav
        posArrayTeamLeads={posArrayTeamLeads}
        selectedPosTeamLeads={selectedPosTeamLeads}
        setSelectedPosTeamLeads={setSelectedPosTeamLeads}
        setPosArray={setPosArray}
      />

      {allPosArray.length > 5 && (
        <Box
          w={{ base: "20px", md: "40px" }}
          h={{ base: "20px", md: "40px" }}
          bg={
            selectedPosArray < allPosArray.length - 5
              ? "black"
              : "blackAlpha.300"
          }
          // border="4px green solid"
          borderRadius="50%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          ml={120}
          onClick={() => {
            // set the new array
            //selectedPosArray is the index of the first element in the array
            // selectedPosArray >= 0 and selectedPosArray < allPosArray.length-5
            if (selectedPosArray + 10 < allPosArray.length) {
              setSelectedPosArray(selectedPosArray + 5);
              setPosArray(
                allPosArray.slice(selectedPosArray + 5, selectedPosArray + 10)
              );
            } else {
              setSelectedPosArray(allPosArray.length - 5);
              setPosArray(
                allPosArray.slice(allPosArray.length - 5, allPosArray.length)
              );
            }
          }}
        >
          <AiOutlineRight color="white" />
        </Box>
      )}
    </HStack>
  );
};

function Teampage() {
  // MENTORS SECTION .......................////////////////////////////
  const Mentors = [
    {
      image: "/reveal1.png",
      image1: "/reveal1.png",
      id: "😊",
      xtwitter: "https://hack-overflow-2.tech/",
      xtwitterhandle: "@coming_soon",
      insta: "https://hack-overflow-2.tech/",
      instahandle: "@coming_soon",
      linkedin: "https://hack-overflow-2.tech/",
      Linkedinhandle: "@coming_soon",
      github: "https://hack-overflow-2.tech/",
      githubhandle: "@coming_soon",
      discord: "https://hack-overflow-2.tech/",
      discordhandle: "@coming_soon",
      name: "Web Mentor",
      // content:
      // "I favor a systematic approach involving planning, organizing, implementing, and monitoring, blending science and art to achieve set goals.",
      content:
        "I'll soon be swooping in to unveil my mentorship in the epic realm of HackOverflow 3.0! 🎉",
      key: "1",
    },
    {
      image: "/reveal2.png",
      image1: "/reveal2.png",
      id: "😊",
      xtwitter: "https://hack-overflow-2.tech/",
      xtwitterhandle: "@coming_soon",
      insta: "https://hack-overflow-2.tech/",
      instahandle: "@coming_soon",
      linkedin: "https://hack-overflow-2.tech/",
      Linkedinhandle: "@coming_soon",
      github: "https://hack-overflow-2.tech/",
      githubhandle: "@coming_soon",
      discord: "https://hack-overflow-2.tech/",
      discordhandle: "@coming_soon",
      name: "App Mentor",
      content:
        " The countdown is on as I prepare to unleash my mentorship powers in the electrifying world of HackOverflow 3.0! 🎩✨ Get ready to unlock your full coding potential and embark on a journey of innovation and discovery.",
      key: "2",
    },
    {
      image: "/reveal3.png",
      image1: "/reveal3.png",
      id: "😊",
      xtwitter: "https://hack-overflow-2.tech/",
      xtwitterhandle: "@coming_soon",
      insta: "https://hack-overflow-2.tech/",
      instahandle: "@coming_soon",
      linkedin: "https://hack-overflow-2.tech/",
      Linkedinhandle: "@coming_soon",
      github: "https://hack-overflow-2.tech/",
      githubhandle: "@coming_soon",
      discord: "https://hack-overflow-2.tech/",
      discordhandle: "@coming_soon",
      name: "Cloud Mentor",
      content:
        "🚀 Calling all aspiring coders! 📣 Prepare to be inspired and empowered as I gear up to reveal myself as your guide and mentor in the epic saga of HackOverflow 3.0! 🌟",
      key: "3",
    },
  ];

  // JUDGES ARRAY.................................//////////////////////////////
  const TeamLeads = [
    {
      image: "/vaibhav.png",
      image1: "/vaibhav.png",
      id: "Vaibhav Malpani",
      xtwitter: "https://twitter.com/IVaibhavMalpani",
      xtwitterhandle: "@IVaibhavMalpani",
      // insta: "https://hack-overflow-2.tech/",
      // instahandle: "@coming_soon",
      linkedin: "https://www.linkedin.com/in/ivaibhavmalpani/",
      Linkedinhandle: "ivaibhavmalpani",
      github: "https://github.com/vaibhav-malpani/",
      githubhandle: "vaibhav-malpani",
      discord: "https://hack-overflow-2.tech/",
      discordhandle: "@coming_soon",
      // name: "Coming Soon",
      name: "Judge 1",
      content:
        "🔍 Attention all HackOverflow 3.0 contenders! 🚀 As one of the vigilant judges, I'm discreetly analyzing your coding ingenuity💻.",
      key: "1",
    },
    {
      image: "/sumit.png",
      image1: "/sumit.png",
      id: "Sumit Kumar",
      // insta: "https://www.linkedin.com/in/nikita-gandhi01/",
      // instahandle: "@sanatbhatia",
      xtwitter: "https://twitter.com/SumitKu67694538",
      xtwitterhandle: "@SumitKu67694538",
      linkedin: "https://www.linkedin.com/in/sumit-kumar-54068b141/",
      Linkedinhandle: "sumit-kumar-54068b141",
      github: "https://github.com/sumit276",
      githubhandle: "@sumit276",
      discord: "https://hack-overflow-2.tech/",
      discordhandle: "@coming_soon",
      name: "Judge 2",
      content:
        "👩‍⚖️ Welcome, participants. As your judge, I'm eager to see your creativity unleashed💻🕵️‍♀️",
      key: "2",
    },
    // {
    //   image: "/anjani.png",
    //   image1: "/anjani.png",
    //   id: "Anjani Kumar Thakur",
    //   // insta: "https://www.linkedin.com/in/nikita-gandhi01/",
    //   // instahandle: "@sanatbhatia",
    //   xtwitter: "https://twitter.com/lifeofanjkt",
    //   xtwitterhandle: "@lifeofanjkt",
    //   linkedin: "https://www.linkedin.com/in/anjkt/",
    //   Linkedinhandle: "anjkt",
    //   github: "https://github.com/anjkt",
    //   githubhandle: "@anjkt",
    //   discord: "https://hack-overflow-2.tech/",
    //   discordhandle: "@coming_soon",
    //   name: "Judge 2",
    //   content:
    //     "🧐 As one of the discerning judges for HackOverflow 3.0, I'm discreetly evaluating your coding finesse💻🕵️‍♀️",
    //   key: "2",
    // },
    {
      image: "/nitin.png",
      image1: "/nitin.png",
      id: "Nitin Tiwari",
      xtwitter: "https://twitter.com/NSTiwari21",
      xtwitterhandle: "@NSTiwari21",
      // insta: "https://hack-overflow-2.tech/",
      // instahandle: "@coming_soon",
      linkedin: "https://www.linkedin.com/in/tiwari-nitin/",
      Linkedinhandle: "tiwari-nitin",
      github: "https://github.com/NSTiwari",
      githubhandle: "@NSTiwari",
      discord: "https://hack-overflow-2.tech/",
      discordhandle: "@coming_soon",
      name: "Judge 3",
      content:
        "👨‍⚖️Attention all participants!! As one of your judges, I'm here to assess your performance with a discerning eye🌟.",
      key: "3",
    },
    // {
    //   image: "/sumit.png",
    //   image1: "/sumit.png",
    //   id: "Sumit Kumar",
    //   // insta: "https://www.linkedin.com/in/nikita-gandhi01/",
    //   // instahandle: "@sanatbhatia",
    //   xtwitter: "https://twitter.com/SumitKu67694538",
    //   xtwitterhandle: "@SumitKu67694538",
    //   linkedin: "https://www.linkedin.com/in/sumit-kumar-54068b141/",
    //   Linkedinhandle: "sumit-kumar-54068b141",
    //   github: "https://github.com/sumit276",
    //   githubhandle: "@sumit276",
    //   discord: "https://hack-overflow-2.tech/",
    //   discordhandle: "@coming_soon",
    //   name: "Judge 4",
    //   content:
    //     "👩‍⚖️ Welcome, participants. As your judge, I'm eager to see your creativity unleashed💻🕵️‍♀️",
    //   key: "4",
    // },
    // {
    //   image: "/sumit.png",
    //   image1: "/sumit.png",
    //   id: "Sumit Kumar",
    //   xtwitter: "https://twitter.com/SumitKu67694538",
    //   xtwitterhandle: "@SumitKu67694538",
    //   // insta: "https://hack-overflow-2.tech/",
    //   // instahandle: "@coming_soon",
    //   linkedin: "https://www.linkedin.com/in/sumit-kumar-54068b141/",
    //   Linkedinhandle: "sumit-kumar-54068b141",
    //   github: "https://github.com/sumit276",
    //   githubhandle: "@sumit276",
    //   discord: "https://hack-overflow-2.tech/",
    //   discordhandle: "@coming_soon",
    //   name: "Judge 4",
    //   content:
    //     "👩‍⚖️ Welcome, participants. As your judge, I'm eager to see your creativity unleashed💻🕵️‍♀️",
    //   key: "4",
    // },
  ];

  // GUESTS ARRAY STARTS HERE..................
  const CoreTeam = [
    {
      image: "/nikita.png",
      image1: "/nikita.png",
      id: "Nikita Gandhi",
      // insta: "https://www.linkedin.com/in/nikita-gandhi01/",
      // instahandle: "@sanatbhatia",
      xtwitter: "https://twitter.com/Nikkitagandhi",
      xtwitterhandle: "Nikkitagandhi",
      linkedin: "https://www.linkedin.com/in/nikita-gandhi01/",
      Linkedinhandle: "nikita-gandhi01",
      github: "https://hack-overflow-2.tech/",
      githubhandle: "@coming_soon",
      discord: "https://discordapp.com/users/nikita1494",
      discordhandle: "nikita1494",
      name: "Guest 1",
      content:
        "👨‍⚖️ As a Guest for HackOverflow 3.0, I'm silently appraising your innovation and execution along with the flawless implementation🚀.",
      key: "1",
    },
    {
      image: "/anjani.png",
      image1: "/anjani.png",
      id: "Anjani Kumar Thakur",
      // insta: "https://www.linkedin.com/in/nikita-gandhi01/",
      // instahandle: "@sanatbhatia",
      xtwitter: "https://twitter.com/lifeofanjkt",
      xtwitterhandle: "@lifeofanjkt",
      linkedin: "https://www.linkedin.com/in/anjkt/",
      Linkedinhandle: "anjkt",
      github: "https://github.com/anjkt",
      githubhandle: "@anjkt",
      discord: "https://hack-overflow-2.tech/",
      discordhandle: "@coming_soon",
      name: "Guest 2",
      content:
        "🧐 As one of the discerning guest for HackOverflow 3.0, I'm discreetly evaluating your coding finesse💻🕵️‍♀️",
      key: "2",
    },
    {
      image: "/reveal6.png",
      image1: "/reveal6.png",
      id: "😊",
      xtwitter: "https://hack-overflow-2.tech/",
      xtwitterhandle: "@coming_soon",
      insta: "https://hack-overflow-2.tech/",
      instahandle: "@coming_soon",
      linkedin: "https://hack-overflow-2.tech/",
      Linkedinhandle: "@coming_soon",
      github: "https://hack-overflow-2.tech/",
      githubhandle: "@coming_soon",
      discord: "https://hack-overflow-2.tech/",
      discordhandle: "@coming_soon",
      name: "Guest 3",
      content: "Crafting Digital Excellence, One Line of Code at a Time.",
      key: "3",
    },
    // {
    //   image: "/reveal7.png",
    //   image1: "/reveal7.png",
    //   id: "😊",
    //   xtwitter: "https://hack-overflow-2.tech/",
    //   xtwitterhandle: "@coming_soon",
    //   insta: "https://hack-overflow-2.tech/",
    //   instahandle: "@coming_soon",
    //   linkedin: "https://hack-overflow-2.tech/",
    //   Linkedinhandle: "@coming_soon",
    //   github: "https://hack-overflow-2.tech/",
    //   githubhandle: "@coming_soon",
    //   discord: "https://hack-overflow-2.tech/",
    //   discordhandle: "@coming_soon",
    //   name: "Dev Head",
    //   content: "Crafting Digital Excellence, One Line of Code at a Time.",
    //   key: "3",
    // },
    // {
    //   image: "/reveal8.png",
    //   image1: "/reveal8.png",
    //   id: "😊",
    //   xtwitter: "https://hack-overflow-2.tech/",
    //   xtwitterhandle: "@coming_soon",
    //   insta: "https://hack-overflow-2.tech/",
    //   instahandle: "@coming_soon",
    //   linkedin: "https://hack-overflow-2.tech/",
    //   Linkedinhandle: "@coming_soon",
    //   github: "https://hack-overflow-2.tech/",
    //   githubhandle: "@coming_soon",
    //   discord: "https://hack-overflow-2.tech/",
    //   discordhandle: "@coming_soon",
    //   content: "Crafting Digital Excellence, One Line of Code at a Time.",
    //   name: "Media Head",
    //   key: "4",
    // },
    // {
    //   image: "/reveal9.png",
    //   image1: "/reveal9.png",
    //   id: "😊",
    //   xtwitter: "https://hack-overflow-2.tech/",
    //   xtwitterhandle: "@coming_soon",
    //   insta: "https://hack-overflow-2.tech/",
    //   instahandle: "@coming_soon",
    //   linkedin: "https://hack-overflow-2.tech/",
    //   Linkedinhandle: "@coming_soon",
    //   github: "https://hack-overflow-2.tech/",
    //   githubhandle: "@coming_soon",
    //   discord: "https://hack-overflow-2.tech/",
    //   discordhandle: "@coming_soon",
    //   content: "Crafting Digital Excellence, One Line of Code at a Time.",
    //   name: "Creative Head",
    //   key: "5",
    // },
    // {
    //   image: "/reveal10.png",
    //   image1: "/reveal10.png",
    //   id: "😊",
    //   xtwitter: "https://hack-overflow-2.tech/",
    //   xtwitterhandle: "@coming_soon",
    //   insta: "https://hack-overflow-2.tech/",
    //   instahandle: "@coming_soon",
    //   linkedin: "https://hack-overflow-2.tech/",
    //   Linkedinhandle: "@coming_soon",
    //   github: "https://hack-overflow-2.tech/",
    //   githubhandle: "@coming_soon",
    //   discord: "https://hack-overflow-2.tech/",
    //   discordhandle: "@coming_soon",
    //   content: "Crafting Digital Excellence, One Line of Code at a Time.",
    //   name: "Graphics Head",
    //   key: "6",
    // },
  ];

  const loadImages = () => {
    //load images from image and image1 in the TeamLeads and Mentors array
    var cache = [];
    Mentors.forEach((member) => {
      var img = (new Image().src = member.image);
      cache.push(img);
    });
    TeamLeads.forEach((member) => {
      var img = (new Image().src = member.image);
      cache.push(img);
    });
    CoreTeam.forEach((member) => {
      var img = (new Image().src = member.image);
      cache.push(img);
    });
  };

  useEffect(() => {
    loadImages();
  }, []);

  const [posArrayTeamLeads, setPosArray] = useState(TeamLeads);
  const [selectedPosTeamLeads, setSelectedPosTeamLeads] = useState(
    Math.floor((posArrayTeamLeads.length - 1) / 2)
  );
  const [selectedPosTeamLeadsX, setSelectedPosTeamLeadsX] = useState(
    Math.floor((posArrayTeamLeads.length - 1) / 2)
  );
  const [mountState, setMountState] = useState(true);
  useEffect(() => {
    setMountState(false);
  }, [posArrayTeamLeads]);

  useEffect(() => {
    //50 ms timeout to allow the animation to finish
    setTimeout(() => {
      setMountState(true);
    }, 50);
  }, [mountState]);

  const [selectedTeam, setSelectedTeam] = useState("leads");

  const [parent] = useAutoAnimate(/* optional config */);
  return (
    <ChakraProvider>
      <>
        <Box
          //   bgColor={"#111111"}
          minH="100%"
          alignItems={"center"}
          w="100%"
          justifyContent={"center"}
          display={"flex"}
          //   paddingTop={"4rem"}
          className=""
        >
          <Box m={0} w="100%">
            {/* <Nav /> */}
            <NavBar />
            {/* <Head /> */}
            <VStack
              justify={"center"}
              align={"center"}
              direction={"column"}
              display={"flex"}
              flexGrow={1}
              py={{ base: "5", md: "10" }}
              pb={{ base: "5", md: "20" }}
              //fill remaining height
            >
              <Flex justify={"center"} align={"center"}>
                <Box
                  justifySelf={"center"}
                  alignContent={"center"}
                  bgPosition={"center"}
                  alignItems={"center"}
                  width={{ base: "90%", md: 950 }}
                  height={{ base: "300", md: 400 }}
                  p={{ base: 4, md: 10 }}
                  mt={{ base: "-5", md: "5" }}
                  borderRadius={15}
                  bg="linear-gradient(93.17deg, rgb(187 76 130 / 70%) 0%, rgba(255, 255, 255, 0.2) 97.37%)"
                  boxShadow="inset 0px -4px 10px rgba(255, 130, 191, 0.7)"
                >
                  <Grid
                    templateAreas={`
                  "nav main"
                  "nav footer"
                  "nav social"
                `}
                    gridTemplateRows={{ md: "0.5fr 0.7fr 1fr" }}
                    gridTemplateColumns={{ md: "0.5fr  1fr" }}
                  >
                    <GridItem pl="2" area={"nav"}>
                      <ChakraImage
                        src={posArrayTeamLeads[selectedPosTeamLeads]?.image}
                        fallbackSrc={
                          posArrayTeamLeads[selectedPosTeamLeads]?.image1
                        }
                        position="relative"
                        className="cursor-pointer"
                        // ml={{ base: -4, md: 4 }}
                        mb={3}
                        width={{ base: "100%", md: "80%" }}
                        size={"auto"}
                        mt={{ base: 20, md: 12 }}
                      />
                    </GridItem>
                    <GridItem pl={{ base: 2, md: "2" }} area={"main"}>
                      <Text
                        mt={2}
                        color={"white"}
                        ml={{ base: 0, md: 4 }}
                        className="fade-in"
                        textAlign={"left"}
                        key={posArrayTeamLeads[selectedPosTeamLeads]?.key}
                        fontFamily={"Gilroy-SemiBold"}
                        fontSize={{ base: "5vw", md: "4xl" }}
                        display="inline"
                        mb={2}

                        //  bgGradient="linear-gradient(99.23deg, #EA4335 2.35%, #4285F4 39.86%, #0F9D58 66.07%, #FBBC04 94.29%)"
                      >
                        Hi, my name is {/* <span className="gradient-text"> */}
                        <span>
                          {posArrayTeamLeads[selectedPosTeamLeads]?.id}
                        </span>
                      </Text>
                    </GridItem>
                    <GridItem
                      pl="2"
                      area={"footer"}
                      pb={0}
                      mb={0}
                      display="inline"
                    >
                      <Text
                        mt={{ base: 2, md: 2 }}
                        fontFamily={"Gilroy-Regular"}
                        fontSize={{ base: "2.5vw", md: "md" }}
                        color={"white"}
                        ml={{ base: 0, md: 4 }}
                        className="fade-in"
                        textAlign={"left"}
                        key={posArrayTeamLeads[selectedPosTeamLeads]?.key}
                        // mb={{ base: '0', md: '0' }}

                        // mb = '20px'
                        display={"box"}
                        p={0}
                      >
                        {posArrayTeamLeads[selectedPosTeamLeads]?.content}
                      </Text>
                    </GridItem>
                    <GridItem area={"social"}>
                      <SimpleGrid
                        columns={{ base: 1, md: 2 }}
                        spacingX="20px"
                        spacingY={{ base: "0px", md: "30px" }}
                        ml={{ base: 2, md: 4 }}
                        mt={{ base: 2, md: 2 }}
                        // border = {'4px green solid '}
                      >
                        <Box height="35px">
                          <Box
                            _hover={{ color: "#833AB4" }}
                            color={"white"}
                            width={{ base: "20px", md: "35px" }}
                            height={{ base: "20px", md: "40px" }}
                            display="inline"
                          >
                            <HStack>
                              <Link
                                href={
                                  posArrayTeamLeads[selectedPosTeamLeads]
                                    ?.xtwitter
                                }
                                target="_blank"
                                rel="noreferrer"
                                display={"inline"}
                              >
                                <XIcon
                                  style={{ fontSize: "3.7vw" }}
                                  className="gfg-div"
                                />{" "}
                              </Link>
                              <Link
                                href={
                                  posArrayTeamLeads[selectedPosTeamLeads]
                                    ?.xtwitter
                                }
                                target="_blank"
                                rel="noreferrer"
                                display={"inline"}
                              >
                                <Text
                                  display={"inline"}
                                  fontFamily={"Gilroy-Medium"}
                                  fontSize={{ base: "3vw", md: "1.2vw" }}
                                  mr={1}
                                >
                                  {
                                    posArrayTeamLeads[selectedPosTeamLeads]
                                      ?.xtwitterhandle
                                  }
                                </Text>
                              </Link>
                            </HStack>
                          </Box>
                        </Box>
                        <Box height="35px">
                          <Box
                            _hover={{ color: "#0072b1" }}
                            color={"white"}
                            width={{ base: "20px", md: "35px" }}
                            height={{ base: "20px", md: "40px" }}
                            display="inline"
                          >
                            <HStack>
                              <Link
                                href={
                                  posArrayTeamLeads[selectedPosTeamLeads]
                                    ?.linkedin
                                }
                                display={"inline"}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <FaLinkedin className="gfg-div" />{" "}
                              </Link>
                              <Link
                                href={
                                  posArrayTeamLeads[selectedPosTeamLeads]
                                    ?.linkedin
                                }
                                target="_blank"
                                rel="noreferrer"
                                display={"inline"}
                              >
                                <Text
                                  display={"inline"}
                                  fontFamily={"Gilroy-Medium"}
                                  fontSize={{ base: "3vw", md: "1.2vw" }}
                                >
                                  {
                                    posArrayTeamLeads[selectedPosTeamLeads]
                                      ?.Linkedinhandle
                                  }
                                </Text>
                              </Link>
                            </HStack>
                          </Box>
                        </Box>

                        <Box height="35px">
                          <Box
                            _hover={{ color: "Black" }}
                            color={"white"}
                            width={{ base: "20px", md: "35px" }}
                            height={{ base: "20px", md: "40px" }}
                            display="inline"
                          >
                            <HStack>
                              <Link
                                href={
                                  posArrayTeamLeads[selectedPosTeamLeads]
                                    ?.github
                                }
                                target="_blank"
                                rel="noreferrer"
                                display={"inline"}
                              >
                                <FaGithub className="gfg-div" />
                              </Link>
                              <Link
                                href={
                                  posArrayTeamLeads[selectedPosTeamLeads]
                                    ?.github
                                }
                                target="_blank"
                                rel="noreferrer"
                                display={"inline"}
                              >
                                <Text
                                  display={"inline"}
                                  fontFamily={"Gilroy-Medium"}
                                  fontSize={{ base: "3vw", md: "1.2vw" }}
                                >
                                  {
                                    posArrayTeamLeads[selectedPosTeamLeads]
                                      ?.githubhandle
                                  }
                                </Text>
                              </Link>
                            </HStack>
                          </Box>
                        </Box>
                        <Box height="35px">
                          <Box
                            _hover={{ color: "#7289d9" }}
                            color={"white"}
                            width={{ base: "20px", md: "35px" }}
                            height={{ base: "20px", md: "40px" }}
                            display="inline"
                          >
                            <HStack>
                              <Link
                                href={
                                  posArrayTeamLeads[selectedPosTeamLeads]
                                    ?.discord
                                }
                                target="_blank"
                                rel="noreferrer"
                                display={"inline"}
                              >
                                <FaDiscord className="gfg-div" />{" "}
                              </Link>
                              <Link
                                href={
                                  posArrayTeamLeads[selectedPosTeamLeads]
                                    ?.discord
                                }
                                target="_blank"
                                rel="noreferrer"
                                display={"inline"}
                              >
                                <Text
                                  display={"inline"}
                                  fontFamily={"Gilroy-Medium"}
                                  fontSize={{ base: "3vw", md: "1.2vw" }}
                                >
                                  {
                                    posArrayTeamLeads[selectedPosTeamLeads]
                                      ?.discordhandle
                                  }
                                </Text>
                              </Link>
                            </HStack>
                          </Box>
                        </Box>
                      </SimpleGrid>
                    </GridItem>
                  </Grid>
                </Box>
              </Flex>

              <Flex align={"center"} justify="center">
                <VStack>
                  <Box>
                    <Box textAlign={"center"} alignItems="center">
                      <HStack
                        mt={5}
                        // center align
                        spacing={5}
                        alignItems="center"
                        justifyContent="center"
                      >
                        <VStack
                          onClick={async () => {
                            await setPosArray(Mentors);
                            setSelectedPosTeamLeads(
                              Math.floor((Mentors.length - 1) / 2)
                            );
                            setSelectedTeam("mentors");
                          }}
                          opacity={selectedTeam === "mentors" ? 1 : 0.5}
                          color="white"
                        >
                          <Text
                            fontSize={{ base: "4vw", md: 30 }}
                            fontFamily={"Gilroy-Bold"}
                            className="cursor-pointer"
                            // id="orange-pink"
                            _hover={{
                              bgGradient:
                                // "linear-gradient(99.23deg, #EA4335 2.35%, #4285F4 39.86%, #0F9D58 66.07%, #FBBC04 94.29%)",
                                "linear-gradient(98.84deg, #ffff80 43.27%, #ff82bf 71.84%)",
                              bgClip: "text",
                            }}
                          >
                            Mentors
                          </Text>
                          <ChakraImage
                            src="/Line 3.webp"
                            ml={"auto"}
                            mr={"auto"}
                            align="center"
                            width={{ base: "50%", md: "80%" }}
                          />
                        </VStack>

                        <VStack
                          onClick={async () => {
                            await setPosArray(TeamLeads);
                            setSelectedPosTeamLeads(
                              Math.floor((TeamLeads.length - 1) / 2)
                            );
                            setSelectedTeam("leads");
                          }}
                          opacity={selectedTeam === "leads" ? "1" : "0.5"}
                          color="white"
                        >
                          <Text
                            fontSize={{ base: "4vw", md: 30 }}
                            fontFamily={"Gilroy-Bold"}
                            className="cursor-pointer"
                            // id="orange-pink"
                            _hover={{
                              bgGradient:
                                // "linear-gradient(99.23deg, #EA4335 2.35%, #4285F4 39.86%, #0F9D58 66.07%, #FBBC04 94.29%)",
                                "linear-gradient(98.84deg, #80ffea 43.27%, #8aff81 71.84%)",
                              bgClip: "text",
                            }}
                            //color = {selectedTeam === "core" ? "white" : "gray.600"}
                          >
                            Judges
                          </Text>
                          <ChakraImage
                            src="/Line 3.webp"
                            ml={"auto"}
                            mr={"auto"}
                            align="center"
                            width={{ base: "50%", md: "80%" }}
                          />
                        </VStack>
                        <VStack
                          onClick={() => {
                            setPosArray(CoreTeam);
                            setSelectedPosTeamLeads(
                              Math.floor((CoreTeam.length - 1) / 2)
                            );
                            setSelectedTeam("core");
                          }}
                          opacity={selectedTeam === "core" ? "1" : "0.5"}
                          color="white"
                        >
                          <Text
                            fontSize={{ base: "4vw", md: 30 }}
                            fontFamily={"Gilroy-Bold"}
                            className="cursor-pointer"
                            // id="orange-pink"
                            _hover={{
                              bgGradient:
                                // "linear-gradient(99.23deg, #EA4335 2.35%, #4285F4 39.86%, #0F9D58 66.07%, #FBBC04 94.29%)",
                                "linear-gradient(98.84deg, #a8519f 43.27%, #644ea0 71.84%)",
                              bgClip: "text",
                            }}
                            //color = {selectedTeam === "core" ? "white" : "gray.600"}
                          >
                            Guests
                          </Text>
                          <ChakraImage
                            src="/Line 3.webp"
                            ml={"auto"}
                            mr={"auto"}
                            align="center"
                            width={{ base: "50%", md: "80%" }}
                          />
                        </VStack>
                      </HStack>
                    </Box>
                  </Box>
                  <Flex maxW={"100vw"}>
                    <Box
                      mt={4}
                      alignContent="center"
                      position={"relative"}
                      className="cursor-pointer"
                      w="100%"
                      ml={50}
                    >
                      {mountState ? (
                        <CurrentTeamNav
                          posArrayTeamLeads={posArrayTeamLeads}
                          parentSetSelectedPos={setSelectedPosTeamLeads}
                          selectedPosTeamLeads={selectedPosTeamLeads}
                        />
                      ) : (
                        // This will force a re-render of the component
                        <Box>
                          <CurrentTeamNav
                            posArrayTeamLeads={Mentors}
                            parentSetSelectedPos={setSelectedPosTeamLeadsX}
                            selectedPosTeamLeads={selectedPosTeamLeadsX}
                          />
                        </Box>
                      )}
                    </Box>
                  </Flex>
                </VStack>
              </Flex>
            </VStack>
          </Box>
        </Box>
      </>
    </ChakraProvider>
  );
}

export default Teampage;
