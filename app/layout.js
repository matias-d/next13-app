
import { Navigation } from '../components/Navigation'
import '../styles/globals.css'

export default function RootLayout ({ children }) {
  return (
    <html>
      <head>
        <title>My first app with Next 13</title>
      </head>
      <body class='bg-zinc-900 h-screen text-white p-8 flex flex-col items-center gap-4 '>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
