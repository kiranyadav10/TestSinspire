import SignUpPage from "@/components/Signup";
import type { NextPage } from "next";
import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import { useEffect, useState } from "react";
import NewWindow from "react-new-window";

const SignupPage: NextPage = () => {
 

  return (
    <div>
      <Head>
        <title>Dropshipping : Register Page</title>
        <meta name="description" content="Dropshipping : Register Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SignUpPage  />

    </div>
  );
};

export default SignupPage;

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
