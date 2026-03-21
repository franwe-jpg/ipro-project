import Logo from './Logo'

const WA_LINK = 'https://wa.me/5491125895328'
const IG_LINK = 'https://www.instagram.com/ipro.arg/'
const MAPS_LINK = 'https://maps.app.goo.gl/Fd4fYiJ8BZ37M1a27'

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Logo />
            <span style={{ fontSize: '10px', color: 'rgba(255,255,255,.3)', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Belgrano · CABA · Argentina
            </span>
          </a>
          <div className="footer-links">
            <a href="#iphones">iPhones</a>
            <a href="#productos">Productos</a>
            <a href="#canje">Plan Canje</a>
            <a href="#envios">Compra y Envíos</a>
            <a href="#resenas">Reseñas</a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">© 2026 iPro | Tech Reseller · Av. del Libertador 6299, Belgrano, CABA</div>
          <div className="footer-socials">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="soc-btn">
              <svg width="18" height="18"><use href="#ico-wa" /></svg>
            </a>
            <a href={IG_LINK} target="_blank" rel="noopener noreferrer" className="soc-btn">
              <img src="/images/logo-insta.png" width={18} height={18} alt="Instagram" style={{ display: 'block' }} />
            </a>
            <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="soc-btn">📍</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
