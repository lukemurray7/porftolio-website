
"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const images = [
    "https://utfs.io/f/r8fCrmqCJfTGhXfwlDmUBMKPspwEu0lImxfYR5J2niaFOhWT",
    "https://utfs.io/f/r8fCrmqCJfTGa24lTKJ0tQrUnVhxusijzH7ZpKTCIL5OFMRP",
    "https://utfs.io/f/r8fCrmqCJfTGrJrUEtqCJfTGj6ynYFzuxVc3EZIib5lU8qAp",
    "https://utfs.io/f/r8fCrmqCJfTGgFZ6xo7AFiyfRZcKhk4lHeGqb3JUWNpX9P7x",
  ];

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{ opacity: 0, y: -50, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? 3 : -3 }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 lg:h-40 xl:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl">
        <Paragraph className="mt-4">
          Hey! I&apos;m Luke Murray – a software engineer, outdoor enthusiast,
          gamer and lifelong learner.
        </Paragraph>
        <Paragraph className="mt-4">
          My journey into programming started as a hobby, solving code katas on
          Codewars and taking on challenges like Advent of Code. In 2017, I took
          a 3-month bootcamp where I learned how to build full-stack
          applications, and since then, I&apos;ve been working with startups,
          constantly learning, iterating, and building products. I&apos;ve also
          built projects as a freelancer and for fun.
        </Paragraph>
        <Paragraph className="mt-4">
          Outside of work, I enjoy spending time outdoors. I recently moved to
          the countryside in Anglesey, Wales, and got a puppy (called Console
          lol). We&apos;ve been setting up a garden, renovating our house, and
          trying (with mixed results) to train Console and generally just
          enjoying life.
        </Paragraph>
        <Paragraph className="mt-4">
          I&apos;m always eager to learn and build new things. Lately, I&apos;ve
          been closely following the advancements in AI and its potential to
          reshape industries and society for the better (hopefully!). Blockchain
          is another area that interests me—there&apos;s so much potential that
          we&apos;ve barely scratched the surface of, not just financial
          projects but I think it&apos;s potentially a really powerful tool for
          community building and decentralised ownership.
        </Paragraph>
        <Paragraph className="mt-4">
          If you&apos;d like to connect, feel free to reach out to me on
          LinkedIn or fill out the contact form on the website.
        </Paragraph>
      </div>
    </div>
  );
}
