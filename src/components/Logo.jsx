import logoUrl from '../assets/am-logo.png'

// AM Consulting wordmark (blue, for light backgrounds). Local copy of
// am-assets@v2/logo/am-logo-600.png — bundled apps keep their own copies.
export default function Logo({ height = 30 }) {
  return (
    <img
      src={logoUrl}
      alt="AM Consulting"
      style={{ height, width: 'auto', display: 'block' }}
      decoding="async"
    />
  )
}
