'use client';
import { buttonVariants } from "@/components/ui/Button";
import SignIn from "@/components/ui/SignIn";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

const SignInPage: FC = () => {
  return (
    <div className="absolute inset-0">
      <div className="h-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-20">
        <Link href={'/'} className={cn(buttonVariants({ variant: 'ghost' }), 'self-start -mt-20')}></Link>
        
        <SignIn />
      </div>
    </div>
  )
}

export default SignInPage;