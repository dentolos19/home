import clsx from "clsx";

type FormControlProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  label: string;
  errorLabel?: string;
};

export default function FormControl(props: FormControlProps) {
  return (
    <label className={clsx("form-control", props.className)}>
      <div className={"label"}>
        <span className={"label-text"}>{props.label}</span>
      </div>
      {props.children}
      <div className={"label"}>
        {props.errorLabel && <span className={"label-text-alt text-error"}>{props.label}</span>}
      </div>
    </label>
  );
}