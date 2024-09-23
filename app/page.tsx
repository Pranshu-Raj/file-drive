"use client"
import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";
import {api} from "@/convex/_generated/api"
import { Files } from "lucide-react";

export default function Home() {
  const Files = useQuery(api.files.getFiles)
  const createFile = useMutation(api.files.createFile)
  return (
    
      <>
        <SignedIn>
          <SignOutButton>
            <Button>Sign Out</Button>
          </SignOutButton>
        </SignedIn>

        <SignedOut>
          <SignInButton mode="modal">
            <Button>Sign In</Button>
          </SignInButton>
      </SignedOut>

      {Files?.map(file => {
        return <div key={file._id}>{file.name}</div>
      })}


      <Button onClick={() => createFile({
        name: 'hello world'
      })}>Click me</Button>
      </>
    
  );
}
