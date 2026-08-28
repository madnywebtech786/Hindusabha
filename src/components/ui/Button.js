import Link from "next/link";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-body text-sm font-semibold tracking-wide transition-transform duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2";

const variants = {
  primary:
    "text-white bg-[linear-gradient(135deg,#ED6528_0%,#C1262C_100%)] shadow-[0_8px_24px_-8px_rgba(193,38,44,0.55)] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-8px_rgba(193,38,44,0.6)]",
  outline:
    "text-secondary border border-primary/40 hover:border-primary hover:-translate-y-0.5 bg-white",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
