import React from 'react'

const SaferLink = ({ children, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
)

export default SaferLink
