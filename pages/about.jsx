import React from 'react';
import {
  VStack,
  Text,
  Heading,
} from "@chakra-ui/react";
import PageTransition from "../components/PageTransition";
import Section from "../components/Section";

const About = () => (
    <PageTransition>
    <VStack spacing={8}>
      <Section>
        <VStack align="start">
          <Heading as="h1">About</Heading>
          <Text>
            I started my journey as a programmer trying to learn how to develop games.
            After school, I studied Computers Technical Course. It was at that time, where I found my passion for Design, Technology and being an Entrepreneur. 
            In my free time, I always liked to follow my curiosity, learn new things and explore the far corners of the internet. In my evenings I like to read books, 
            write articles, code things, play some videogames and spend time with my favorite people in life.
          </Text>
        </VStack>
      </Section>
      <Section>
        <VStack align="stretch" spacing={4}>
          <Heading as="h3" size="lg">
            Work
          </Heading>
          
        </VStack>
      </Section>
    </VStack>
  </PageTransition>
)

export default About;