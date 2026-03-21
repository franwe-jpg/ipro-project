'use client'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-inner">
        <div>
          <div className="hero-badge">
            <div className="badge-dot" />
            Stock inmediato · Equipos sellados
          </div>
          <h1>
            Tu <span>tech store</span> de confianza en Buenos Aires
          </h1>
          <p className="hero-desc">
            Toda la línea Apple, PS5 y más. Al mejor precio del mercado, con garantía oficial y sin pago por adelantado.
          </p>
          <div className="hero-btns">
            <a href="https://wa.me/5491125895328" target="_blank" rel="noopener noreferrer" className="btn-wa">
              <svg width="18" height="18">
                <use href="#ico-wa" />
              </svg>
              Consultar por WhatsApp
            </a>
            <a href="#productos" className="btn-outline">Ver productos →</a>
          </div>
          <div className="hero-stats">
            <div>
              <div className="hero-stat-num">5.0★</div>
              <div className="hero-stat-label">Rating Google</div>
            </div>
            <div className="hero-stat-div" />
            <div>
              <div className="hero-stat-num">1.767</div>
              <div className="hero-stat-label">Reseñas verificadas</div>
            </div>
            <div className="hero-stat-div" />
            <div>
              <div className="hero-stat-num">24hs</div>
              <div className="hero-stat-label">Seguridad en oficina</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="phones-wrap">
            <div className="phone-float center">
              <img
                src="/images/iPhone-17-Frame-PNG.png"
                alt="iPhone 17 Mist Blue"
              />
              <div className="phone-label">iPhone 17 Pro Max</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
