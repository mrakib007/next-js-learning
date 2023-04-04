import React from 'react'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <footer>
        <p>&copy; {year} Time to Code With Next.js </p>
    </footer>
  )
}

export default Footer
