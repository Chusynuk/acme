import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { PopupButton } from "@typeform/embed-react";
import { Header, Container, Content } from "@/styles/styled-components";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ title }: { title: string }) {
  return (
    <>
      <Head>
        <title>ACME</title>
        {/* <div>{title}</div> */}
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        {/* <Content>
          "No" means "No"." Maybe" means "No". Consent is at the core of
          respect, wellbeing and safety. It is not a given and can be withdrawn
          at any point during an interaction. If you do not understand why it is
          a must to ask for explicit permission prior to any form of human
          contact - this space is not for you. Please flag anyone you find in
          breach of this rule immediately with the Safeguarding Team.
        </Content> */}
        <PopupButton
          id="<form-id>"
          style={{ fontSize: 20 }}
          className="my-button"
        >
          click to open form in popup
        </PopupButton>
      </Container>
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      title: "Hey Leute",
    },
  };
}
