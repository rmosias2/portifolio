import React from "react";
import Link from "next/link";
import { format } from "timeago.js";
import {
  Box,
  VStack,
  Text,
  useColorModeValue,
  Tag,
  HStack,
} from "@chakra-ui/react";

interface BlogCardProps  {
    link: string; 
    publishDate: any;
    title: string;
}

const BlogCard = ({ link, publishDate, title } : BlogCardProps) => {
  const dateResult = Math.abs((new Date() as any) - (new Date(publishDate) as any));
  return (
    <Link href={link} passHref={true}>
      <Box
        as="a"
        cursor="pointer"
        w="100%"
        transition="all 0.25s"
        transition-timing-function="spring(1 100 10 10)"
        _hover={{ transform: "translateY(-4px)", shadow: "sm" }}
      >
        <VStack
          align="start"
          p={6}
          bg={useColorModeValue("white", "gray.800")}
          rounded="xl"
          borderWidth="1px"
          borderColor={useColorModeValue("gray.100", "gray.700")}
          spacing={0}
        >
          <HStack>
            <Text
              fontSize="xl"
              color={useColorModeValue("gray.800", "gray.200")}
              pb={1}
            >
              {title}{" "}
              {dateResult < 1000 * 60 * 60 * 24 * 7 ? (
                <Tag size="md" mt={1} ml={1} colorScheme="green">
                  New
                </Tag>
              ) : undefined}
            </Text>
          </HStack>

          <Text fontSize="md" color={useColorModeValue("gray.500", "gray.400")}>
            {format(publishDate)}
          </Text>
        </VStack>
      </Box>
    </Link>
  );
};

export default BlogCard;