interface Props {
  label: string;
  variant: "primary" | "secondary";
  onClick?: () => void;
  type?: "submit" | "button";
}

export default function Button({ label, variant, onClick, type = "submit" }: Props) {
  return (
    <button
      className={`${variant === "primary" ? "btn--primary" : "btn--secondary"} btn`}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
