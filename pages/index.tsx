import React from "react";
import {
  Button,
  Box,
  VStack,
  Text,
  Link,
  Heading,
} from "@chakra-ui/react";
import PageTransition from "../components/PageTransition";
import Section from "../components/Section";
import { TwitterLogo } from "phosphor-react";

const Home = () => (
  <Box>
    <PageTransition>
      <VStack spacing={12}>
        <Section>
          <VStack spacing={4} align="start" fontSize="2xl">
            <Heading size="xl">Hey, I'm Rafael 👋</Heading>
            <VStack>
              <Text>
                I live in Ribeirão Preto Brazil, 
                I have been working as a developer for 5 years, I am graduated in Computer Systems Analyst.
              </Text>
              <Text>
                I'm working in the helthcare filed where I'm currently building features such as electronic health record, online appointment and prescription, 
                I usually work with technologies such as javascript, react, redux, typescript and react native.
              </Text>
              
            </VStack>
            <Link href="https://twitter.com/mosias2" isExternal>
              <Button
                colorScheme="blue"
                rounded="xl"
                size="lg"
                leftIcon={<TwitterLogo weight="fill" />}
                mt={4}
              >
                Follow me on Twitter
              </Button>
            </Link>
          </VStack>
        </Section>
      </VStack>
    </PageTransition>
  </Box>
);

export default Home;