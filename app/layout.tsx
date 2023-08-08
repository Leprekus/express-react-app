import React, { useEffect, type ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
 
  return (
    <html>
      <link rel="stylesheet" href="globals.css" />
      <body>
        <h1>Test</h1>
        { children }
      </body>
    </html>
  )
}
