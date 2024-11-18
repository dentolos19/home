import AdminShell from "@/components/shells/admin-shell";
import AccessDeniedView from "@/components/views/access-denied-view";
import LoginView from "@/components/views/login-view";
import { LayoutProps } from "@/types";
import { Protect, SignedIn, SignedOut } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dennise's Administration",
  robots: {
    index: false,
  },
};

export default function Layout(props: LayoutProps) {
  return (
    <>
      <SignedIn>
        <Protect condition={(has) => has({ role: "org:admin" })} fallback={<AccessDeniedView />}>
          <AdminShell>{props.children}</AdminShell>
        </Protect>
      </SignedIn>
      <SignedOut>
        <LoginView />
      </SignedOut>
    </>
  );
}