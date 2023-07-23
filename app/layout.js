import './globals.css'

export const metadata = {
  title: 'Stuchers',
  description: 'Tuition Web Application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
