"use client"

import { useId } from "react"
import type { ProjectArt } from "@/data/types"

/**
 * Generated project covers: one architecture diagram per project, drawn in a
 * shared visual language (dark field, violet glow, mono labels). Pure SVG;
 * only stroke-dashoffset animates. Viewbox 480x270 matches the 16:9 gallery
 * and survives the 4:3 card crop (content stays inside x 40..440).
 */

const MONO = "var(--font-mono-code), monospace"

function Defs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={`${id}-g`} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="480" y2="0">
        <stop offset="0%" stopColor="#c4a1ff" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
      <radialGradient id={`${id}-bg`} cx="50%" cy="45%" r="65%">
        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.34" />
        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
      </radialGradient>
    </defs>
  )
}

function Backdrop({ id }: { id: string }) {
  return (
    <>
      <rect width="480" height="270" fill="#07050d" />
      <rect width="480" height="270" fill={`url(#${id}-bg)`} />
    </>
  )
}

/** Rounded node with a centred mono label; `hot` fills it with the accent. */
function Node({ x, y, w = 84, h = 44, label, sub, hot }: { x: number; y: number; w?: number; h?: number; label: string; sub?: string; hot?: boolean }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect
        width={w}
        height={h}
        rx="10"
        fill={hot ? "#8b5cf6" : "#ffffff"}
        fillOpacity={hot ? 0.28 : 0.05}
        stroke={hot ? "#c4a1ff" : "#ffffff"}
        strokeOpacity={hot ? 0.7 : 0.2}
      />
      <text x={w / 2} y={sub ? h / 2 - 2 : h / 2 + 4} textAnchor="middle" fontSize="11" fontFamily={MONO} fill="#ffffff" fillOpacity="0.92">
        {label}
      </text>
      {sub && (
        <text x={w / 2} y={h / 2 + 12} textAnchor="middle" fontSize="8" fontFamily={MONO} fill="#ffffff" fillOpacity="0.5">
          {sub}
        </text>
      )}
    </g>
  )
}

/** Animated dashed connector. */
function Link({ id, d }: { id: string; d: string }) {
  return <path d={d} fill="none" stroke={`url(#${id}-g)`} strokeWidth="2" strokeLinecap="round" strokeDasharray="4 9" className="group-hover:animate-dash" />
}

function Svg({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <svg viewBox="0 0 480 270" className={className} aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      {children}
    </svg>
  )
}

/** Device -> Kafka -> consumer -> MongoDB, with a geo query coming back. */
function GpsArt({ className }: { className?: string }) {
  const id = useId().replace(/:/g, "")
  return (
    <Svg className={className}>
      <Defs id={id} />
      <Backdrop id={id} />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(52 ${72 + i * 42})`}>
          <circle r="5" cx="6" cy="6" fill="#c4a1ff" />
          <circle r="11" cx="6" cy="6" fill="none" stroke="#c4a1ff" strokeOpacity="0.35" />
          <Link id={id} d="M20 6 H64" />
        </g>
      ))}
      <Node x={118} y={106} w={92} h={58} label="Kafka" sub="gps-pings" hot />
      <Link id={id} d="M210 135 H250" />
      <Node x={250} y={113} w={80} h={44} label="consumer" sub="batch" />
      <Link id={id} d="M330 135 H356" />
      <Node x={356} y={106} w={84} h={58} label="MongoDB" sub="2dsphere" />
      <text x="398" y="88" textAnchor="middle" fontSize="9" fontFamily={MONO} fill="#c4a1ff" fillOpacity="0.8">
        GET /nearby
      </text>
    </Svg>
  )
}

/** Upload -> validation (size + Tika) -> Firebase Storage, metadata to Postgres. */
function FirebaseArt({ className }: { className?: string }) {
  const id = useId().replace(/:/g, "")
  return (
    <Svg className={className}>
      <Defs id={id} />
      <Backdrop id={id} />
      <Node x={40} y={113} w={72} h={44} label="upload" sub="image" />
      <Link id={id} d="M112 135 H146" />
      <Node x={146} y={100} w={104} h={70} label="validate" sub="5MB · Tika MIME" hot />
      <Link id={id} d="M250 122 C280 122 290 82 322 82" />
      <Link id={id} d="M250 148 C280 148 290 188 322 188" />
      <Node x={322} y={60} w={118} h={44} label="Firebase" sub="Cloud Storage" />
      <Node x={322} y={166} w={118} h={44} label="PostgreSQL" sub="metadata" />
    </Svg>
  )
}

/** Excel -> pandas/CSV -> Wix Data. */
function PipelineArt({ className }: { className?: string }) {
  const id = useId().replace(/:/g, "")
  return (
    <Svg className={className}>
      <Defs id={id} />
      <Backdrop id={id} />
      <Node x={40} y={113} w={74} h={44} label=".xlsx" sub="OpenPyXL" />
      <Link id={id} d="M114 135 H152" />
      <Node x={152} y={100} w={96} h={70} label="pandas" sub="clean · map" hot />
      <Link id={id} d="M248 135 H282" />
      <Node x={282} y={113} w={58} h={44} label=".csv" />
      <Link id={id} d="M340 135 H366" />
      <Node x={366} y={113} w={74} h={44} label="Wix" sub="Data API" />
    </Svg>
  )
}

/** Phone app talking to a Spring API backed by Postgres. */
function MobileArt({ className }: { className?: string }) {
  const id = useId().replace(/:/g, "")
  return (
    <Svg className={className}>
      <Defs id={id} />
      <Backdrop id={id} />
      {/* Phone */}
      <g transform="translate(58 60)">
        <rect width="64" height="130" rx="12" fill="#ffffff" fillOpacity="0.05" stroke="#ffffff" strokeOpacity="0.25" />
        <rect x="22" y="7" width="20" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.3" />
        <rect x="9" y="24" width="46" height="16" rx="4" fill="#c4a1ff" fillOpacity="0.5" />
        <rect x="9" y="46" width="46" height="16" rx="4" fill="#ffffff" fillOpacity="0.14" />
        <rect x="9" y="68" width="46" height="16" rx="4" fill="#ffffff" fillOpacity="0.14" />
      </g>
      <Link id={id} d="M122 125 H176" />
      <Node x={176} y={96} w={96} h={58} label="Spring API" sub="JWT" hot />
      <Link id={id} d="M272 125 H318" />
      <Node x={318} y={103} w={90} h={44} label="PostgreSQL" />
      <text x="272" y="84" textAnchor="middle" fontSize="9" fontFamily={MONO} fill="#ffffff" fillOpacity="0.45">
        Azure · Docker · K8s
      </text>
    </Svg>
  )
}

/** Browser window fanning out to the services GM Solutions builds. */
function WebsiteArt({ className }: { className?: string }) {
  const id = useId().replace(/:/g, "")
  return (
    <Svg className={className}>
      <Defs id={id} />
      <Backdrop id={id} />
      <g transform="translate(46 70)">
        <rect width="150" height="130" rx="12" fill="#ffffff" fillOpacity="0.05" stroke="#c4a1ff" strokeOpacity="0.6" />
        <path d="M0 24 H150" stroke="#ffffff" strokeOpacity="0.18" />
        {[12, 24, 36].map((x) => (
          <circle key={x} cx={x} cy="12" r="3" fill="#c4a1ff" fillOpacity="0.7" />
        ))}
        <rect x="14" y="38" width="86" height="10" rx="3" fill="#c4a1ff" fillOpacity="0.55" />
        <rect x="14" y="56" width="120" height="6" rx="3" fill="#ffffff" fillOpacity="0.2" />
        <rect x="14" y="68" width="100" height="6" rx="3" fill="#ffffff" fillOpacity="0.2" />
        <rect x="14" y="88" width="46" height="22" rx="6" fill="#8b5cf6" fillOpacity="0.5" stroke="#c4a1ff" strokeOpacity="0.7" />
      </g>
      <Link id={id} d="M196 135 C232 135 238 92 270 92" />
      <Link id={id} d="M196 135 H270" />
      <Link id={id} d="M196 135 C232 135 238 178 270 178" />
      <Node x={270} y={70} w={104} h={44} label="catálogo" sub="WhatsApp" hot />
      <Node x={270} y={113} w={104} h={44} label="agenda" sub="online" />
      <Node x={270} y={156} w={104} h={44} label="gestão" sub="sob medida" />
      <text x="322" y="56" textAnchor="middle" fontSize="9" fontFamily={MONO} fill="#c4a1ff" fillOpacity="0.8">
        usegmsolutions.com.br
      </text>
    </Svg>
  )
}

const ART: Record<ProjectArt, (p: { className?: string }) => React.JSX.Element> = {
  website: WebsiteArt,
  gps: GpsArt,
  firebase: FirebaseArt,
  pipeline: PipelineArt,
  mobile: MobileArt,
}

export function ProjectArtSvg({ art, className }: { art: ProjectArt; className?: string }) {
  const Art = ART[art]
  return <Art className={className} />
}
