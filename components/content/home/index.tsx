import { Text, Avatar, Card, Button, Link } from "@nextui-org/react";
import { Box } from "../../styles/box";
import { Flex } from "../../styles/flex";
import { GithubIcon } from "../../icons/github-icon";
import { LinkedinIcon } from "../../icons/linkedin-icon";
import { SectionAnimation } from "../../animations/section";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { LinkIcon } from "../../icons/link-icon";
import { GridContainer } from "../../styles/grid";

export const Home = () => {
  const router = useRouter();

  return (
    <Box css={{ px: "$12", "@xsMax": { px: "$10" }, width: "100%" }}>
      {/* <Card variant="flat" css={{ marginBottom: "$10" }}>
        <Card.Body css={{ backgroundColor: "$accents2" }}>
          <Text css={{ fontFamily: "inherit", textAlign: "center" }} as={"p"}>
            Bonjour, je m'appelle Nghia Tran. Etudiant en premiere annee de BU
          </Text>
        </Card.Body>
      </Card> */}
      <Flex justify={"between"} css={{ pb: "$10" }}>
        <Box css={{ alignSelf: "center" }}>
          <Text h2 css={{ my: "$0" }}>
            Nghia Tran
          </Text>
          <Text css={{ fontFamily: "inherit" }}>
            Etudiant en Infomatique a IUT de Nantes
          </Text>
        </Box>

        {/* <Avatar
          css={{ "--nextui--avatarXl": "7.5rem" }}
          pointer
          bordered
          size={"xl"}
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        /> */}
      </Flex>
      <SectionAnimation delay={0.1}>
        <Box css={{ mb: "$10" }}>
          <Text h3>Qui suis-je</Text>
          <Text>
          Etudiant en première année d'IUT Informatique, je suis inspiré par le domaine de la data science et aspire à devenir un data scientist. 
          </Text>
          <Flex justify={"center"} css={{ mt: "$8" }}>
            <NextLink href="./resume_TRAN.pdf">
              <Link block css={{ gap: "$4" }}>
                Résume <LinkIcon />
              </Link>
            </NextLink>
            <NextLink href="./lettre_de_motivation.pdf">
              <Link block css={{ gap: "$4" }}>
                Lettre de motivation <LinkIcon />
              </Link>
            </NextLink>
          </Flex>
        </Box>
      </SectionAnimation>

      <SectionAnimation delay={0.2}>
        <Box css={{ mb: "$10" }}>
          <Text h3>A propos de moi</Text>

          <Box as={"ul"} css={{ m: 0 }}>
            <Box as={"li"} css={{ textIndent: "-3.4em", pl: "3.4em" }}>
              <Text span css={{ mr: "1em" }} weight={"bold"}>
                2005
              </Text>
              <Text span>Né à Hanoï, Vietnam.</Text>
            </Box>
            <Box as={"li"} css={{ textIndent: "-3.4em", pl: "3.4em" }}>
              <Text span css={{ mr: "1em" }} weight={"bold"}>
                2016 - 2020
              </Text>
              <Text span>Etude secondaire aux Etats-Unis.</Text>
            </Box>
            <Box as={"li"} css={{ textIndent: "-3.4em", pl: "3.4em" }}>
              <Text span css={{ mr: "1em" }} weight={"bold"}>
                2020 - 2023
              </Text>
              <Text span>Baccalauréat général en France.</Text>
            </Box>
            <Box as={"li"} css={{ textIndent: "-3.4em", pl: "3.4em" }}>
              <Text span css={{ mr: "1em" }} weight={"bold"}>
                2023 - Present
              </Text>
              <Text span>Etudiant en Infomatique a IUT de Nantes.</Text>
            </Box>
          </Box>
        </Box>
      </SectionAnimation>

      <SectionAnimation delay={0.3}>
        <Box css={{ mb: "$10" }}>
          <Text h3>J' ❤️ </Text>
          <Text as={"span"} css={{ textIndent: "1em" }}>
          J'adore apprendre de nouvelles choses, je suis passionné par la technologie et j'essaie toujours d'apprendre quelque chose de nouveau chaque jour. 
          J'aime résoudre des problèmes et je suis toujours à la recherche de nouveaux défis.          
          </Text>
        </Box>
      </SectionAnimation>

      <SectionAnimation delay={0.3}>
        <Box css={{ mb: "$10" }}>
          <Text h3>Skills</Text>
          <GridContainer
            as={"ul"}
            gap={"md"}
            css={{
              m: 0,
              px: 0,
              gridTemplateColumns: "repeat(4, 1fr)",
              "@xsMax": {
                gridTemplateColumns: "repeat(2, 1fr)",
              },
            }}
          >
            <Box as={"li"}>ReactJS</Box>
            <Box as={"li"}>NextJS</Box>
             <Box as={"li"}>Graphql</Box>
              <Box as={"li"}>React Native</Box>
            <Box as={"li"}>NodeJS</Box>
            <Box as={"li"}>NestJS</Box>
            <Box as={"li"}>TypeScript</Box>
            <Box as={"li"}>C# / .NET Core</Box>
            <Box as={"li"}>Git</Box>
            <Box as={"li"}>Git</Box>
            <Box as={"li"}>SQL</Box>
            <Box as={"li"}>Windows/Linux</Box>
            <Box as={"li"}>C++</Box>
          </GridContainer>
        </Box>
      </SectionAnimation>

      <SectionAnimation delay={0.3}>
        <Box css={{ mb: "$10" }}>
          <Text h3>Languages</Text>
          <GridContainer as={"ul"} gap={"md"} css={{ m: 0, px: 0 }}>
            <Box as={"li"}>Espagnol </Box>
            <Box as={"li"}>Anglais </Box>
            <Box as={"li"}>Français </Box>
            <Box as={"li"}>Vietnamien </Box>
          </GridContainer>
        </Box>
      </SectionAnimation>

      <SectionAnimation delay={0.3}>
        <Box css={{ mb: "$10" }}>
          <Text h3>On the Web </Text>
          <Box as={"ul"} css={{ m: 0 }}>
            <Box as={"li"}>
              <Link
                block
                target={"_blank"}
                color="primary"
                href="https://github.com/h1eutran"
              >
                <Button
                  light
                  color="primary"
                  auto
                  icon={<GithubIcon />}
                  ripple={false}
                  css={{ pl: "$3" }}
                >
                  @h1eutran
                </Button>
              </Link>
            </Box>
            <Box as={"li"}>
              <Link
                block
                target={"_blank"}
                color="primary"
                href="https://www.linkedin.com/in/hieunghiatran/"
              >
                <Button
                  light
                  color="primary"
                  auto
                  icon={<LinkedinIcon />}
                  ripple={false}
                  css={{ pl: "$3" }}
                >
                  @Nghia Tran
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </SectionAnimation>
    </Box>
  );
};
