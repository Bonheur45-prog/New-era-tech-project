import { IconWrapper } from "./IconWrapper";

export function SpeedIcon({ size }) {
  return (
    <IconWrapper size={size}>
      <svg
        width={size}
        height={size}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 3L4 14h6l-1 7 9-11h-6l1-7z"
        />
      </svg>
    </IconWrapper>
  );
}
