import { OrganizationSwitcher, SignOutButton } from "@clerk/nextjs";

export default function AccessDeniedView() {
  return (
    <main className={"grid place-items-center"}>
      <div className={"card bg-base-300"}>
        <div className={"card-body items-center text-center"}>
          <div className={"card-title"}>Oops!</div>
          <div>You do not have the permission required to access this page!</div>
          <div>
            <OrganizationSwitcher />
          </div>
          <div className={"card-actions"}>
            <SignOutButton>
              <button className={"btn btn-error btn-sm"}>Logout</button>
            </SignOutButton>
          </div>
        </div>
      </div>
    </main>
  );
}