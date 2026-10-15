// Minimal inline SVG icons (stroke-based), no dependencies.
const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }

export const ArrowUpRight = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M7 17 17 7M8 7h9v9" /></svg>
)
export const ArrowRight = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)
export const Check = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M5 13l4 4L19 7" /></svg>
)
export const Lock = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>
)

// Pillar + feature icons
export const Target = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3.4" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3" /></svg>
)
export const Data = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><ellipse cx="12" cy="6" rx="7" ry="3" /><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" /></svg>
)
export const Network = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><circle cx="12" cy="5" r="2.4" /><circle cx="5" cy="19" r="2.4" /><circle cx="19" cy="19" r="2.4" /><path d="M12 7.4v4.6M12 12 6.6 17M12 12l5.4 5" /></svg>
)
export const People = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><circle cx="9" cy="8" r="3" /><path d="M3.5 19a5.5 5.5 0 0 1 11 0M16 6.2a3 3 0 0 1 0 5.6M16.5 19a5.5 5.5 0 0 0-2.8-4.8" /></svg>
)
export const Shield = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" /><path d="M9 12l2 2 4-4" /></svg>
)
export const Gauge = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M4 18a8 8 0 1 1 16 0" /><path d="M12 18l4-5" /></svg>
)
export const Bolt = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M13 3 5 13h5l-1 8 8-10h-5z" /></svg>
)
export const ChartUp = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M4 19V5M4 19h16M8 16l3-4 3 2 4-6" /></svg>
)

export const Phone = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4z" /></svg>
)
export const Calendar = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><rect x="4" y="5" width="16" height="16" rx="2" /><path d="M4 9h16M8 3v4M16 3v4" /></svg>
)

// Brand glyphs (filled, from Simple Icons)
export const WhatsApp = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
)
export const LinkedIn = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
)

export const PILLAR_ICONS = { target: Target, data: Data, network: Network, people: People, shield: Shield }
