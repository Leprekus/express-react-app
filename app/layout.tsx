import React, { useEffect, type ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
 
  return (
    <html>
      <body>
        <h1>Test</h1>
        { children }
      </body>
    </html>
  )
}
