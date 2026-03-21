'use client'

import { useState } from 'react'
import Logo from './Logo'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  function toggleMenu() {
    setMenuOpen((prev) => !prev)
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <nav>
      <div className="nav-inner">
        <a href="#" className="nav-logo">
          <Logo bgColor="#0D1B3E" />
        </a>
        <div
          className="nav-links"
          style={
            menuOpen
              ? {
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'absolute',
                  top: '64px',
                  left: 0,
                  right: 0,
                  background: 'rgba(13,27,62,0.98)',
                  padding: '20px 24px',
                  gap: '16px',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                }
              : undefined
          }
        >
          <a href="#iphones" onClick={closeMenu}>iPhones</a>
          <a href="#productos" onClick={closeMenu}>Productos</a>
          <a href="#canje" onClick={closeMenu}>Plan Canje</a>
          <a href="#envios" onClick={closeMenu}>Compra y Envíos</a>
          <a href="#resenas" onClick={closeMenu}>Reseñas</a>
          <a href="#contacto" className="nav-cta" onClick={closeMenu}>Consultar →</a>
        </div>
        <button className="hamburger" onClick={toggleMenu} aria-label="Abrir menú">
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
