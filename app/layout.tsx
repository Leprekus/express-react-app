import React, { useEffect, type ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
 
  return (
    <html>
      <link rel="stylesheet" href="/global.css" />
      <link rel="stylesheet" href="/output.css" />
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>My Social Media Clone</title>
      <body>
        <h1>Test</h1>
        { children }
      </body>
    </html>
  )
}
