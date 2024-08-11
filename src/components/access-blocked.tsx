import { OrganizationSwitcher, SignOutButton } from "@clerk/nextjs";

export default function AccessBlocked() {
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