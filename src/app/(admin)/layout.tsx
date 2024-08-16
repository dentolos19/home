import AccessBlocked from "@/app/(admin)/_components/access-blocked";
import LoginView from "@/app/(admin)/_components/login-view";
import AdminContainer from "@/components/admin-container";
import { LayoutProps } from "@/types";
import { Protect, SignedIn, SignedOut } from "@clerk/nextjs";

export default function Layout(props: LayoutProps) {
  return (
    <>
      <SignedOut>
        <LoginView />
      </SignedOut>
      <SignedIn>
        <Protect condition={(has) => has({ role: "org:admin" })} fallback={<AccessBlocked />}>
          <AdminContainer>{props.children}</AdminContainer>
        </Protect>
      </SignedIn>
    </>
  );
}