"use client";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Badge } from "@/components/Badge";
import { Paragraph } from "@/components/Paragraph";
import { WorkHistory } from "@/components/WorkHistory";
import { Highlight } from "@/components/Highlight";

export default function Home() {
  return (
    <Container>
      <div className="relative mb-8 flex justify-end">
        <Badge
          href="/lukemurraycv.pdf"
          text="View as PDF"
        />
      </div>
      <span className="text-4xl">💼</span>
      <Heading className="font-black mb-4">Work History</Heading>
      <Paragraph className="max-w-xl mt-4">
        I am a highly motivated{" "}
        <Highlight>senior full-stack engineer</Highlight>. I have worked on
        complex and interesting projects using a varied tech stack. I love
        solving hard problems <Highlight>collaboratively</Highlight> using
        cutting edge technologies and am always eager to{" "}
        <Highlight>learn and improve</Highlight>. Strong supporter of improving{" "}
        <Highlight>equality and diversity</Highlight> in tech
      </Paragraph>
      <WorkHistory />
    </Container>
  );
}
