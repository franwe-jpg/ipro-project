const WA_LINK = 'https://wa.me/5491125895328'
const IG_LINK = 'https://www.instagram.com/ipro.arg/'
const MAPS_LINK = 'https://maps.app.goo.gl/Fd4fYiJ8BZ37M1a27'

export default function Contact() {
  return (
    <section className="contact-section" id="contacto">
      <div className="container">
        <div className="contact-inner">
          <div className="contact-text">
            <div className="section-label">Contacto</div>
            <div className="section-title">¿Listo para tu próximo equipo?</div>
            <p className="section-desc">
              Escribinos, coordinamos tu visita o envío y te respondemos al instante. Sin señas ni pagos anticipados.
            </p>
            <div className="open-pill" style={{ marginTop: '18px' }}>
              <div className="badge-dot" />
              Abierto · Lun a Sáb 10–20hs
            </div>

            <div className="channels">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="ch-card">
                <div className="ch-icon ch-wa">
                  <svg width="22" height="22"><use href="#ico-wa" /></svg>
                </div>
                <div className="ch-text">
                  <h4>WhatsApp</h4>
                  <p>+54 9 11 2589-5328 · Respuesta inmediata</p>
                </div>
                <div className="ch-arrow">→</div>
              </a>

              <a href={IG_LINK} target="_blank" rel="noopener noreferrer" className="ch-card">
                <div className="ch-icon ch-ig">
                  <img src="/images/logo-insta.png" width={22} height={22} alt="Instagram" style={{ display: 'block' }} />
                </div>
                <div className="ch-text">
                  <h4>Instagram</h4>
                  <p>@ipro.arg · Stock y novedades</p>
                </div>
                <div className="ch-arrow">→</div>
              </a>

              <a href="mailto:iprocomexsoluciones@gmail.com" className="ch-card">
                <div className="ch-icon ch-email">✉️</div>
                <div className="ch-text">
                  <h4>Email</h4>
                  <p>iprocomexsoluciones@gmail.com</p>
                </div>
                <div className="ch-arrow">→</div>
              </a>

              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="ch-card">
                <div className="ch-icon ch-maps">📍</div>
                <div className="ch-text">
                  <h4>Oficina Belgrano</h4>
                  <p>Av. del Libertador 6299 · Con cita previa</p>
                </div>
                <div className="ch-arrow">→</div>
              </a>
            </div>
          </div>

          <div>
            <div className="hours-box">
              <div className="hours-box-title">🕐 Horarios de atención</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
                {[
                  { day: 'Lunes', time: '10:00 – 20:00' },
                  { day: 'Martes', time: '10:00 – 20:00' },
                  { day: 'Miércoles', time: '10:00 – 20:00' },
                  { day: 'Jueves', time: '10:00 – 20:00' },
                  { day: 'Viernes', time: '10:00 – 20:00' },
                  { day: 'Sábado', time: '10:00 – 20:00' },
                  { day: 'Domingo', time: null },
                ].map(({ day, time }) => (
                  <div key={day} className="hours-row">
                    <span className="h-day">{day}</span>
                    {time ? (
                      <span className="h-time">{time}</span>
                    ) : (
                      <span className="h-time h-closed">Cerrado</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="guarantees">
              <div className="g-title">🏅 Nuestras garantías</div>
              {[
                'Equipos 100% sellados · Garantía oficial',
                'Stock inmediato disponible',
                'Oficina con seguridad 24 horas',
                'Sin pago adelantado bajo ningún concepto',
                'Cita previa para atención personalizada',
              ].map((text) => (
                <div key={text} className="g-row">
                  <span className="g-check">✓</span>
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
