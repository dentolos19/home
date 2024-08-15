import AccessBlocked from "@/app/(admin)/_components/access-blocked";
import LoginContainer from "@/app/(admin)/_components/login-container";
import AdminContainer from "@/components/admin-container";
import { Protect, SignedIn, SignedOut } from "@clerk/nextjs";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <SignedOut>
        <LoginContainer />
      </SignedOut>
      <SignedIn>
        <Protect condition={(has) => has({ role: "org:admin" })} fallback={<AccessBlocked />}>
          <AdminContainer>{props.children}</AdminContainer>
        </Protect>
      </SignedIn>
    </>
  );
}