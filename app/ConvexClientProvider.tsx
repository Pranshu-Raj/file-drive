"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ReactNode } from "react";
import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
     const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

     if (!publishableKey) {
       throw new Error("NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY is not defined");
     }


  return (
    <ClerkProvider
       publishableKey={publishableKey}
    >
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}
