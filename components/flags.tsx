export function BrazilFlag({ className = "w-6 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 36 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Green background */}
      <rect width="36" height="24" rx="2" fill="#009739" />
      {/* Yellow diamond */}
      <path d="M18 3L33 12L18 21L3 12L18 3Z" fill="#FEDD00" />
      {/* Blue circle */}
      <circle cx="18" cy="12" r="5.5" fill="#012169" />
      {/* White band */}
      <path
        d="M12.5 11.5C14.5 10 21.5 10 23.5 11.5"
        stroke="white"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M12.5 12.5C14.5 14 21.5 14 23.5 12.5"
        stroke="white"
        strokeWidth="1"
        fill="none"
      />
      <rect x="12.5" y="11" width="11" height="2" rx="1" fill="white" />
    </svg>
  )
}

export function USAFlag({ className = "w-6 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 36 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Red and white stripes */}
      <rect width="36" height="24" rx="2" fill="#B22234" />
      <rect y="1.85" width="36" height="1.85" fill="white" />
      <rect y="5.54" width="36" height="1.85" fill="white" />
      <rect y="9.23" width="36" height="1.85" fill="white" />
      <rect y="12.92" width="36" height="1.85" fill="white" />
      <rect y="16.62" width="36" height="1.85" fill="white" />
      <rect y="20.31" width="36" height="1.85" fill="white" />
      {/* Blue canton */}
      <rect width="14.4" height="12.92" rx="1" fill="#3C3B6E" />
      {/* Stars (simplified) */}
      <g fill="white">
        <circle cx="2.4" cy="1.85" r="0.6" />
        <circle cx="4.8" cy="1.85" r="0.6" />
        <circle cx="7.2" cy="1.85" r="0.6" />
        <circle cx="9.6" cy="1.85" r="0.6" />
        <circle cx="12" cy="1.85" r="0.6" />
        <circle cx="3.6" cy="3.7" r="0.6" />
        <circle cx="6" cy="3.7" r="0.6" />
        <circle cx="8.4" cy="3.7" r="0.6" />
        <circle cx="10.8" cy="3.7" r="0.6" />
        <circle cx="2.4" cy="5.54" r="0.6" />
        <circle cx="4.8" cy="5.54" r="0.6" />
        <circle cx="7.2" cy="5.54" r="0.6" />
        <circle cx="9.6" cy="5.54" r="0.6" />
        <circle cx="12" cy="5.54" r="0.6" />
        <circle cx="3.6" cy="7.39" r="0.6" />
        <circle cx="6" cy="7.39" r="0.6" />
        <circle cx="8.4" cy="7.39" r="0.6" />
        <circle cx="10.8" cy="7.39" r="0.6" />
        <circle cx="2.4" cy="9.23" r="0.6" />
        <circle cx="4.8" cy="9.23" r="0.6" />
        <circle cx="7.2" cy="9.23" r="0.6" />
        <circle cx="9.6" cy="9.23" r="0.6" />
        <circle cx="12" cy="9.23" r="0.6" />
        <circle cx="3.6" cy="11.08" r="0.6" />
        <circle cx="6" cy="11.08" r="0.6" />
        <circle cx="8.4" cy="11.08" r="0.6" />
        <circle cx="10.8" cy="11.08" r="0.6" />
      </g>
    </svg>
  )
}
