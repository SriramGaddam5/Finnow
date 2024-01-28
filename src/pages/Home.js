import { Text, VStack, HStack } from "@chakra-ui/react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import InfoCard from "../components/InfoCard";
import "../styles/Home.css";

function Home() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div id="Body">
      <Particles
        id="particles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: {
            enable: false,
            zIndex: 0,
          },
          particles: {
            number: {
              value: 200,
              limit: 300,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "polygon",
              stroke: {
                width: 1,
                color: "#ffffff",
              },
              polygon: {
                nb_sides: 6,
              },
            },
            opacity: {
              value: 0,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false,
              },
            },
            size: {
              value: { min: 1, max: 5 },
              random: true,
              anim: {
                enable: true,
                speed: 10,
                size_min: 1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 100,
              color: "#ffffff",
              opacity: 1,
              width: 1,
            },
            move: {
              enable: true,
              speed: { min: 1, max: 3 },
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: "bubble",
                parallax: {
                  enable: false,
                  force: 60,
                  smooth: 10,
                },
              },
              onClick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 30,
                size: 20,
                duration: 2,
                opacity: 1,
                speed: 2,
              },
              push: {
                particles_nb: 1,
              },
            },
          },
          backgroundMask: {
            enable: true,
            cover: {
              color: {
                value: {
                  r: 255,
                  g: 255,
                  b: 255,
                },
              },
              opacity: 1,
            },
          },
          retina_detect: true,
          fps_limit: 60,
          background: {
            image:
              "url('https://static.vecteezy.com/system/resources/thumbnails/001/217/366/small/polygonal-blue-background.jpg')",
          },
        }}
      />
      <VStack>
        <Text
          id="title"
          bgGradient="linear(to-r, blue.200, blue.900)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
          mt={10}>
          Finnow
        </Text>
        <HStack gap={20}>
          <InfoCard
            imageSrc="/images/Piggy bank.svg"
            imageWidth={200}
            imageHeight={200}
            imageAlt="Learning image"
            cardTitle="Start learning"
            cardDescription="Learn more about finance"
            cardLink="/learn"
          />
          <InfoCard
            imageSrc="/images/Shark fin.svg"
            imageWidth={200}
            imageHeight={200}
            imageAlt="About image"
            cardTitle="About us"
            cardDescription="Learn more about Finnow"
            cardLink="/about"
          />
        </HStack>
      </VStack>
    </div>
  );
}

export default Home;
