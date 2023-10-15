"use client";

import { FC, useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { PropsWithClassName } from "@/lib/classname";
import { Icons } from "@/assets/icons";

interface UserAuthProps extends PropsWithClassName {}

const UserAuth: FC<UserAuthProps> = ({ className }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handeGoogleAuth = async () => {
    try {
      setIsLoading(true);
      await signIn("google", { callbackUrl: "/" });
    } catch (error) {
      toast.error("Google authentication failed. Try again later!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex justify-between", className)}>
      <Button
        size={"lg"}
        isLoading={isLoading}
        onClick={handeGoogleAuth}
        className="w-full flex items-center"
      >
        {!isLoading ? <Icons.google className="w-4 h-4 mr-2" /> : null}
        Google
      </Button>
    </div>
  );
};

export default UserAuth;
