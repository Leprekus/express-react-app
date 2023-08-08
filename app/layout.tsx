import React, { useEffect, type ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
 
  return (
    <html>
      <link rel="stylesheet" href="global.css" />
      <link rel="stylesheet" href="output.css" />
      <body>
        <h1 className='text-red-500'>Test</h1>
        { children }
      </body>
    </html>
  )
}
