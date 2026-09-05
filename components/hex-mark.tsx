type HexMarkProps = {
  className?: string;
  title?: string;
};

export function HexMark({ className, title }: HexMarkProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      className={className}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M16 2.5 28 9.4v13.2L16 29.5 4 22.6V9.4L16 2.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M9.5 19.2 16 8.8l6.5 10.4H9.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
