interface LogoIconProps {
  size?: number
  className?: string
  instanceId?: string
}

/**
 * Reekko logomark — K letterform with integrated lightning bolt.
 * The two right arms of the K form a lightning bolt shape:
 * - Outer tip at the bar junction (the bolt's left point)
 * - Inner kink offset (the bolt's characteristic break)
 * instanceId: used to give unique gradient IDs when rendered multiple times inline.
 */
export default function LogoIcon({
  size = 32,
  className,
  instanceId = 'default',
}: LogoIconProps) {
  const gradId = `reekko-grad-${instanceId}`

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Logo Reekko"
      role="img"
    >
      <defs>
        <linearGradient
          id={gradId}
          x1="0"
          y1="0"
          x2="100"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6366f1" />
          <stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
      </defs>

      {/* Background rounded square */}
      <rect width="100" height="100" rx="22" fill={`url(#${gradId})`} />

      {/* K: left vertical bar */}
      <rect x="18" y="15" width="14" height="70" rx="3" fill="white" />

      {/* K arms merged as a lightning bolt:
          - Outer tip  (26, 50) — nestled into the bar for visual continuity
          - Inner kink (46, 50) — the lightning bolt's characteristic break
          - Upper arm: (82,15)→(26,50)  /  inner: (82,29)→(46,50)
          - Lower arm: (26,50)→(82,85)  /  inner: (46,50)→(82,71)     */}
      <path d="M82,15 L26,50 L82,85 L82,71 L46,50 L82,29 Z" fill="white" />
    </svg>
  )
}
