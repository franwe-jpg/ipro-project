const WA_LINK = 'https://wa.me/5491125895328'
const IG_LINK = 'https://www.instagram.com/ipro.arg/'

export default function Logistics() {
  return (
    <section className="logistics-section" id="envios">
      <div className="container">
        <div className="section-label">Logística y cómo comprarnos</div>
        <div className="section-title">Todo lo que necesitás saber</div>
        <p className="section-desc">
          Cómo retirás, cómo recibís y cómo funciona nuestra política de pago. Sin letra chica.
        </p>

        <div className="logistics-grid">
          {/* COL IZQUIERDA: Envíos y retiro */}
          <div className="logistics-col">
            <h3>📦 Retiro y envíos</h3>
            <p className="col-sub">Elegí cómo recibir tu equipo</p>
            <div className="ship-cards">
              <div className="ship-card">
                <div className="ship-card-icon icon-blue">🏢</div>
                <div className="ship-card-body">
                  <h4>Retiro en oficina — con cita previa</h4>
                  <p>
                    Para ingresar a nuestra oficina es necesario coordinar la visita previamente. Escribinos y te damos el
                    horario. La atención es personalizada y el equipo te espera listo en caja sellada.
                  </p>
                  <div className="locations-strip" style={{ marginTop: '10px' }}>
                    <div className="loc-pill">🇦🇷 Belgrano, CABA — Av. del Libertador 6299</div>
                    <div className="loc-pill">🇺🇾 Pocitos, Montevideo</div>
                  </div>
                </div>
              </div>

              <div className="ship-card">
                <div className="ship-card-icon icon-blue">🚗</div>
                <div className="ship-card-body">
                  <h4>Envío personalizado en el día</h4>
                  <p>
                    Si estás en CABA, GBA o Montevideo, coordinamos un delivery personalizado para que lo recibas el
                    mismo día sin salir de casa. Contactanos para organizar.
                  </p>
                </div>
              </div>

              <div className="ship-card">
                <div className="ship-card-icon icon-amber">📦</div>
                <div className="ship-card-body">
                  <h4>Envíos al interior del país</h4>
                  <p>
                    Enviamos a todo el país mediante empresas de logística de confianza. Consultanos por tu ciudad y te
                    damos el detalle.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* COL DERECHA: Reglas importantes */}
          <div className="logistics-col">
            <h3>📋 Cómo funciona la compra</h3>
            <p className="col-sub">Nuestra política, transparente y simple</p>
            <div className="info-rules">
              <div className="rule-card r-green">
                <div className="rule-card-top">
                  <div className="rule-icon">✅</div>
                  <h4>Pagás solo cuando tenés el equipo</h4>
                </div>
                <p>
                  Abonás únicamente cuando retirás en oficina o cuando lo recibís en casa. Aplica a retiro con cita y a
                  envíos del día. Para envíos al interior, se coordina pago contra entrega o previo según la empresa
                  logística.
                </p>
              </div>

              <div className="rule-card r-red">
                <div className="rule-card-top">
                  <div className="rule-icon">🚫</div>
                  <h4>Sin seña, reserva ni pago anticipado</h4>
                </div>
                <p>
                  No trabajamos con señas ni pagos por adelantado bajo ningún concepto. Si alguien te pide eso en nuestro
                  nombre, no somos nosotros. Tu seguridad es lo primero.
                </p>
              </div>

              <div className="rule-card r-blue">
                <div className="rule-card-top">
                  <div className="rule-icon">📅</div>
                  <h4>Cita previa para visitar la oficina</h4>
                </div>
                <p>
                  Para ingresar a nuestra oficina necesitás coordinar la visita por WhatsApp o Instagram. Es un proceso
                  rápido — respondemos al instante y agendamos tu horario.
                </p>
                <div style={{ display: 'flex', gap: '10px', marginTop: '12px', flexWrap: 'wrap' }}>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa" style={{ fontSize: '13px', padding: '8px 16px' }}>
                    <svg width="15" height="15">
                      <use href="#ico-wa" />
                    </svg>
                    WhatsApp
                  </a>
                  <a
                    href={IG_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '7px',
                      background: 'linear-gradient(135deg,#E1306C,#833AB4)',
                      color: '#fff',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      fontSize: '13px',
                      fontWeight: 700,
                      textDecoration: 'none',
                    }}
                  >
                    <img src="/images/logo-insta.png" width={15} height={15} alt="Instagram" style={{ display: 'block' }} />
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
