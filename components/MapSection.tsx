const MAPS_LINK = 'https://maps.app.goo.gl/Fd4fYiJ8BZ37M1a27'

export default function MapSection() {
  return (
    <section className="map-section" id="ubicacion">
      <div className="container">
        <div className="section-label">Dónde encontrarnos</div>
        <div className="section-title">Nuestra oficina en Belgrano</div>
        <p className="section-desc">
          Coordinar visita previamente es obligatorio. Escribinos y te agendamos al instante.
        </p>

        <div className="map-wrap">
          <div className="map-head">
            <div>
              <h3>iPro | Tech Reseller — Belgrano, CABA</h3>
              <p>Av. del Libertador 6299, Buenos Aires · Cita previa requerida</p>
            </div>
            <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="btn-consult">
              Abrir en Google Maps →
            </a>
          </div>

          <iframe
            className="map-iframe"
            src="https://maps.google.com/maps?q=Av.+del+Libertador+6299,+Buenos+Aires,+Argentina&output=embed&z=15"
            style={{ width: '100%', height: '400px', border: 'none', display: 'block' }}
            allowFullScreen
            loading="lazy"
            title="Ubicación iPro Belgrano"
          />

          <div className="map-info-row">
            <div className="map-info-item">
              <div className="map-info-label">Dirección</div>
              <div className="map-info-val">Av. del Libertador 6299</div>
              <div className="map-info-sub">Belgrano, CABA</div>
            </div>
            <div className="map-info-item">
              <div className="map-info-label">Horario</div>
              <div className="map-info-val">Lun–Sáb 10:00–20:00</div>
              <div className="map-info-sub">Domingos cerrado</div>
            </div>
            <div className="map-info-item">
              <div className="map-info-label">WhatsApp</div>
              <div className="map-info-val">+54 9 11 2589-5328</div>
              <div className="map-info-sub">Coordinar cita</div>
            </div>
            <div className="map-info-item">
              <div className="map-info-label">Segunda sede</div>
              <div className="map-info-val">Pocitos, Montevideo</div>
              <div className="map-info-sub">Uruguay</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
