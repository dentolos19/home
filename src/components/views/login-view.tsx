import { useAuth } from "@/components/contexts/auth-context";
import FormContainer from "@/components/form-container";
import FormControl from "@/components/ui/form-control";

export default function LoginView() {
  const auth = useAuth();

  const loginAction = async (data: FormData) => {
    const email = data.get("email") as string;
    const password = data.get("password") as string;
    auth.login(email, password);
  };

  return (
    <main className={"grid place-items-center"}>
      <FormContainer title={"Login"} actions={[{ label: "Login", color: "primary", action: loginAction }]}>
        <FormControl label={"Email"}>
          <input className={"input"} type={"email"} name={"email"} required />
        </FormControl>
        <FormControl label={"Password"}>
          <input className={"input"} type={"password"} name={"password"} required />
        </FormControl>
      </FormContainer>
    </main>
  );
}