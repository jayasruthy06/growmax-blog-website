export const metadata = {
  title: 'Growmax',
  description: 'Growmax Webpage',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
