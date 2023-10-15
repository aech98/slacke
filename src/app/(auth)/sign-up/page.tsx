import Link from "next/link";
import UserAuth from "@/components/user-auth";

export default function SignUp() {
  return (
    <div className="flex w-full flex-col justify-center space-y-6">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-3xl font-semibold tracking-tight">
          Welcome to Slacke
        </h1>
        <p className="text-sm max-w-xs mx-auto">
          By continuing, you are setting up a Breadit account and agree to our
          User Agreement and Privacy Policy.
        </p>
      </div>
      <UserAuth />
      <p className="px-8 text-center text-sm text-muted-foreground">
        Already have an account at Slacke?{" "}<br />
        <Link
          href="/sign-in"
          className="hover:text-brand text-sm underline underline-offset-4"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
}
