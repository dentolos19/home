import { SignIn } from "@clerk/nextjs";

export default function LoginContainer() {
  return (
    <main className={"grid place-items-center"}>
      <SignIn routing={"hash"} forceRedirectUrl={"/admin"} />
    </main>
  );
}