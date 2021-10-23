import React from "react";
import { VStack, Text, Heading, useColorModeValue } from "@chakra-ui/react";
import PageTransition from "../components/PageTransition";
import Section from "../components/Section";
import BlogCard from "../components/BlogCard";
import { getAllStories } from "../services/blog";

interface BlogItem {
  author: string;
  categories: string[];
  content: string;
  description: string;  
  enclosure: {};
  guid: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  title: string;
}

interface BlogProps {
  stories: { 
    items: BlogItem[]
  };
}

export default function Blog({ stories }: BlogProps) {
  const { items } = stories;
  return (
    <PageTransition>
      <Section>
        <VStack spacing={8}>
          <VStack>
            <Heading as="h1">Blog</Heading>
            <Text
              fontSize="2xl"
              color={useColorModeValue("gray.500", "gray.200")}
              maxW="lg"
              textAlign="center"
            >
              Welcome to my blog. Here I share some of my thinking, insights and
              views on life.
            </Text>
          </VStack>
          <VStack w="100%" align="start" spacing={4}>
              {items && items.map((post, index) => (
                <BlogCard key={index} link={post.link} publishDate={post.pubDate} title={post.title} />
              ))}
          </VStack> 
        </VStack>
      </Section>
    </PageTransition>
  );
}

export async function getStaticProps() {
  const { data }  = await getAllStories();
  return {
    props: {
      stories: data,
    },
    revalidate: 10,
  };
}