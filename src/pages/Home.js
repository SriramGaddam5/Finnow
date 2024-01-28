import { Text, VStack, HStack } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import InfoCard from "../components/InfoCard";
import "../styles/Home.css";

function Home() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
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
      particles: {
        color: {
          value: "#B8E5FA",
        },
        links: {
          color: "#2B3990",
          distance: 150,
          enable: true,
          opacity: 1,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
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
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <div id="Body">
        <Particles
          id="particles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
        <VStack>
          <Text
            id="title"
            bgGradient="linear(to-r, blue.200, blue.900)"
            bgClip="text"
            fontSize="100"
            fontWeight="extrabold"
            mt={10}>
            Finnow
          </Text>
          <HStack gap={20}>
            <InfoCard
              imageSrc="/images/Minnow.svg"
              imageWidth={200}
              imageHeight={200}
              imageAlt="Learning image"
              cardTitle="Tell Finnow about yourself"
              cardDescription="Get started with Finnow here"
              cardLink="/data"
            />
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
}

export default Home;
