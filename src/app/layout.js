import './globals.css'

export const metadata = {
  title: 'Statistic map of USA ',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
