import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";

const GoogleAuthHandler = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status !== "loading" && !session) void signIn("google");
    if (status !== "loading" && session) window.close();
  }, [session, status]);

  return null;
};

export default GoogleAuthHandler;
