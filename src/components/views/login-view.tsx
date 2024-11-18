import { SignIn } from "@clerk/nextjs";

export default function LoginView() {
  return (
    <main className={"grid place-items-center"}>
      <SignIn routing={"hash"} forceRedirectUrl={"/admin"} />
    </main>
  );
}