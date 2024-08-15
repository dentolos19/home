import AccessBlocked from "@/components/access-blocked";
import AdminContainer from "@/components/admin-container";
import { Protect, SignedIn, SignedOut, SignIn } from "@clerk/nextjs";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <SignedOut>
        <main className={"grid place-items-center"}>
          <SignIn routing={"hash"} forceRedirectUrl={"/admin"} />
        </main>
      </SignedOut>
      <SignedIn>
        <Protect condition={(has) => has({ role: "org:admin" })} fallback={<AccessBlocked />}>
          <AdminContainer>{props.children}</AdminContainer>
        </Protect>
      </SignedIn>
    </>
  );
}