import Section from "@/components/Section";
import Paragraph from "@/components/Paragraph";
import Heading from "@/components/Heading";
import { BioSection, BioYear } from "@/components/Bio";
import NextLink from "next/link";
import { IoLogoGithub, IoLogoTwitter } from "react-icons/io5";

export default function Home() {
  return (
    <div className="flex flex-col mx-auto px-4 sm:px-6 lg:px-8 max-w-lg">
      <div>
        <h2 className="text-2xl font-bold font-heading">Yuichi Nakamura</h2>
        <p>Software Engineer</p>
      </div>
      <Section delay={0.1}>
        <Heading>About Me</Heading>
        <Paragraph>
          I&apos;m a software engineer based in Fukuoka, working as a
          freelancer. Throughout my career, I have been involved in the
          development of web services. I have extensive experience in all phases
          of software development, from design to implementation, testing, and
          maintenance. My areas of expertise include TypeScript, React, Ruby,
          Ruby on Rails, Next.js, React Native, and AWS. I decided to become a
          freelance engineer to experience more software development
          environments.
        </Paragraph>
      </Section>
      <Section delay={0.2}>
        <Heading>Bio</Heading>
        <BioSection>
          <BioYear>1989</BioYear>
          Born in Yamaguchi (山口), Japan.
        </BioSection>
        <BioSection>
          <BioYear>2013</BioYear>
          Completed the Master&apos;s Program in Information and Media Studies,
          School of Tokyo Denki University
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Worked at Jimoty, inc
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Worked at Apollo, inc(Startup company)
        </BioSection>
        <BioSection>
          <BioYear>2024 to present</BioYear>
          Working as a freelancer
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading>Hobbies</Heading>
        <Paragraph>
          Mahjong, solo travel, weight training, movie watching
        </Paragraph>
      </Section>
      <Section delay={0.4}>
        <Heading>Links</Heading>
        <ul>
          <li className="mb-3">
            <NextLink
              href="https://github.com/nakamurau1"
              className="flex items-center text-blue-300 hover:text-blue-600"
              target="_blank"
              passHref
            >
              <IoLogoGithub className="mr-2" /> @nakamurau1
            </NextLink>
          </li>
          <li className="mb-3">
            <NextLink
              href="https://twitter.com/NakamuraYuich1"
              className="flex items-center text-blue-300 hover:text-blue-600"
              target="_blank"
              passHref
            >
              <IoLogoTwitter className="mr-2" /> @NakamuraYuich1
            </NextLink>
          </li>
        </ul>
      </Section>
    </div>
  );
}
