const WA_LINK = 'https://wa.me/5491125895328'

export default function Canje() {
  return (
    <section className="canje-section" id="canje">
      <div className="container">
        <div className="canje-inner">
          <div className="canje-text">
            <div className="section-label">Renovación fácil</div>
            <div className="section-title">Plan Canje</div>
            <p className="section-desc">
              Dejá tu equipo usado como parte de pago y renovate al mejor precio del mercado.
            </p>
            <div className="req-tags">
              <div className="req-tag">📱 Desde iPhone 13</div>
              <div className="req-tag">🔋 Batería ≥ 85%</div>
              <div className="req-tag">✅ Buen estado</div>
            </div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa"
              style={{ marginTop: '28px', display: 'inline-flex' }}
            >
              <svg width="18" height="18">
                <use href="#ico-wa" />
              </svg>
              Consultar mi canje
            </a>
          </div>

          <div className="canje-cards">
            <div className="canje-card">
              <div className="canje-icon">🔄</div>
              <div>
                <h4>Tu usado como parte de pago</h4>
                <p>Tasamos tu equipo y descontamos el valor del nuevo directamente.</p>
              </div>
            </div>
            <div className="canje-card">
              <div className="canje-icon">💰</div>
              <div>
                <h4>Al mejor precio del mercado</h4>
                <p>Pagás solo la diferencia. Sin sorpresas ni costos ocultos.</p>
              </div>
            </div>
            <div className="canje-card">
              <div className="canje-icon">⚡</div>
              <div>
                <h4>Proceso rápido y seguro</h4>
                <p>Todo en nuestra oficina o coordinando el envío del mismo día.</p>
              </div>
            </div>
            <div className="canje-card">
              <div className="canje-icon">🛡️</div>
              <div>
                <h4>Siempre sellado · Garantía oficial</h4>
                <p>Salís con equipo 100% original, sellado de fábrica y con garantía.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
