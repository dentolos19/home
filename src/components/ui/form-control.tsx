import clsx from "clsx";

type FormControlProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  label: string;
  altLabel?: string;
  bottomLeftLabel?: string;
  bottomRightLabel?: string;
};

export default function FormControl(props: FormControlProps) {
  return (
    <label className={clsx("form-control", props.className)}>
      <div className={"label"}>
        <span className={"label-text"}>{props.label}</span>
        {props.altLabel && <span className={"label-text-alt"}>{props.altLabel}</span>}
      </div>
      {props.children}
      {props.bottomLeftLabel && props.bottomRightLabel && (
        <div className={"label"}>
          {props.bottomLeftLabel && <span className={"label-text-alt"}>{props.bottomLeftLabel}</span>}
          {props.bottomRightLabel && <span className={"label-text-alt"}>{props.bottomRightLabel}</span>}
        </div>
      )}
    </label>
  );
}