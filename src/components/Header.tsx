"use client";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";
import { FilePlus2 } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

function Header() {
  const { theme } = useTheme();
  return (
    <div className="flex justify-between items-center shadow-sm p-5">
      <Link href="/dashboard" className="text-2xl">
        DOC <span className="text-indigo-600">Chat</span>
      </Link>

      <SignedIn>
        <div className="flex items-center space-x-2">
          <Button asChild variant="link" className="hidden md:flex">
            <Link href="/dashboard/upgrade">Pricing</Link>
          </Button>

          <Button asChild variant="outline">
            <Link href="/dashboard">My Documents</Link>
          </Button>

          <Button asChild variant="outline" className="border-indigo-600">
            <Link href="/dashboard/upload">
              <FilePlus2 className="text-indigo-600" />
            </Link>
          </Button>

          <ThemeToggle />

          <UserButton
            appearance={{
              baseTheme: theme === "dark" ? dark : undefined,
            }}
          />
        </div>
      </SignedIn>
    </div>
  );
}
export default Header;
