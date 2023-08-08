import React from 'react'

export default function NotFound() {
    const divStyle = {
        minWidth: '100vw',
        minHeight: '100vh',
        background: 'black',
        color : 'white',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    }
  return (
    <html>
        <link rel="stylesheet" href="global.css" />
        <link rel="stylesheet" href="output.css" />
        <body>
            <div style={divStyle}>
                
                <h2 style={{ fontSize: '3rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem'}}>404 | <span style={{ fontSize: '1rem' }}>Not found</span></h2>
            </div>
        </body>
    </html>
  )
}
