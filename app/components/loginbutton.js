"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginButton() {
    const { data: session, status } = useSession();

    if (status === "loading") return <p>Loading...</p>;

    return session ? (
        <button onClick={() => signOut()}>Sign Out</button>
    ) : (
        <button onClick={() => signIn("google")}>Sign in with Google</button>
    );
}
