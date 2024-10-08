import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Luke</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a senior full-stack software engineer that loves{" "}
        <Highlight>building products</Highlight> using the latest
        technologies.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I have over <Highlight>8 years of experience</Highlight> building scalable web apps
        and enterprise products in startup environments, utilising a modern tech stack.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
