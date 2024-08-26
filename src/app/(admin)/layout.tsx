import AdminContainer from "@/components/admin-container";
import { LayoutProps } from "@/types";
import { OrganizationSwitcher, Protect, SignedIn, SignedOut, SignIn, SignOutButton } from "@clerk/nextjs";

function ProtectionFallback() {
  return (
    <main className={"grid place-items-center"}>
      <div className={"card bg-base-300"}>
        <div className={"card-body items-center text-center"}>
          <h2 className={"card-title"}>Oops!</h2>
          <p>You do not have the permission to access this feature!</p>
          <div>
            <OrganizationSwitcher />
          </div>
          <div className={"card-actions"}>
            <SignOutButton>
              <button className={"btn btn-sm btn-error"}>Logout</button>
            </SignOutButton>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <SignedOut>
        <main className={"grid place-items-center"}>
          <SignIn routing={"hash"} forceRedirectUrl={"/admin"} />
        </main>
      </SignedOut>
      <SignedIn>
        <Protect condition={(has) => has({ role: "org:admin" })} fallback={<ProtectionFallback />}>
          <AdminContainer>{props.children}</AdminContainer>
        </Protect>
      </SignedIn>
    </>
  );
}