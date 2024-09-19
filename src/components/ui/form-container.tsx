import FormButton from "@/components/ui/form-button";
import clsx from "clsx";

type FormContainerProps = {
  className?: string;
  children: React.ReactNode;
  title: string;
  actions: {
    label: string;
    color: "primary" | "secondary" | "accent" | "success" | "info" | "warning" | "error" | "neutral";
    action: (data: FormData) => void;
  }[];
};

export default function FormContainer(props: FormContainerProps) {
  return (
    <div className={clsx("card w-96 bg-base-300", props.className)}>
      <form className={"card-body"}>
        <h2 className={"card-title self-center"}>{props.title}</h2>
        <div className={"my-2 flex flex-col gap-2"}>{props.children}</div>
        <div className={"card-actions justify-end"}>
          {props.actions.map((action) => (
            <FormButton key={action.label} className={`btn btn-sm btn-${action.color} btn-`} formAction={action.action}>
              {action.label}
            </FormButton>
          ))}
        </div>
      </form>
    </div>
  );
}