import { PropsWithChildren } from "react";
import Link from "next/link";
import { Icons } from "@/assets/icons";

interface AuthLayoutProps extends PropsWithChildren {}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen container max-w-6xl mx-auto flex flex-col items-center justify-center pb-20 sm:w-[400px]">
      <div className="mb-2">
        <Link href={"/"} className="flex items-center text-lg font-bold">
          <Icons.logo className="w-8 h-8 mr-2" />
          Slacke
        </Link>
      </div>
      {children}
    </div>
  );
}
