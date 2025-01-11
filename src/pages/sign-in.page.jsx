import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 ">
      <SignIn />
    </main>
  );
}
