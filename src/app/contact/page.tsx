import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Metadata } from "next";
import Link from "next/link";
import { socials } from "@/constants/socials";

export const metadata: Metadata = {
  title: "Contact | Luke Murray",
  description: "Get in touch with Luke Murray through various social media platforms or email.",
};

export default function Contact() {
  return (
    <Container>
      <Heading className="font-black mb-4">Contact Me</Heading>
      <Paragraph className="mb-8 max-w-xl">
        Feel free to reach out through any of the platforms below or send me an email. I&apos;ll get back to you as soon as possible!
      </Paragraph>
      
      <ul className="space-y-4 mb-8">
        {socials.map((link) => (
          <li key={link.label}>
            <Link href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:underline">
              <link.icon className="w-6 h-6" />
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
