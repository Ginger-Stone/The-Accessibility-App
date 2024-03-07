interface Props {
  className?: string;
}

export default function Exit({ className }: Props) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10.9375 3.0625L3.0625 10.9375"
        stroke="#6B7280"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.9375 10.9375L3.0625 3.0625"
        stroke="#6B7280"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
