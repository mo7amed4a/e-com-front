import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"
import { Cairo } from "next/font/google"
const cairo = Cairo({
  subsets: ["latin", "arabic"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  variable: "--font-cairo",
})

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" data-mode="light">
      <body>
        <main className={`relative  ${cairo.className} ${cairo.variable}`}>{props.children}</main>
      </body>
    </html>
  )
}
