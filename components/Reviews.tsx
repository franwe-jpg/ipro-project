const MAPS_LINK = 'https://maps.google.com/?cid=10388768660886644765'

interface ReviewCardProps {
  initials: string
  text: string
  name: string
  date: string
}

function ReviewCard({ initials, text, name, date }: ReviewCardProps) {
  return (
    <div className="rev-card">
      <div className="rev-stars">
        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
      </div>
      <p className="rev-text">&ldquo;{text}&rdquo;</p>
      <div className="rev-author">
        <div className="rev-av">{initials}</div>
        <div>
          <div className="rev-name">{name}</div>
          <div className="rev-date">{date}</div>
        </div>
      </div>
    </div>
  )
}

export default function Reviews() {
  return (
    <section className="reviews-section" id="resenas">
      <div className="container">
        <div className="section-label">Lo que dicen nuestros clientes</div>
        <div className="section-title">Reseñas verificadas</div>
        <p className="section-desc">Más de 1.700 clientes satisfechos en Google Maps.</p>

        <div className="rating-row">
          <div className="rating-big">5.0</div>
          <div>
            <div className="stars-row">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <div className="rating-sub">Basado en 1.767 reseñas de Google Maps</div>
          </div>
        </div>

        <div className="reviews-grid">
          <ReviewCard
            initials="MG"
            text="Mi hijo y yo fuimos a buscar la PS5. Todo muy rápido, prolijo y seguro. No piden seña, el equipo ya estaba listo en caja sellada. El precio fue uno de los mejores. ¡Los recomiendo!"
            name="Marcela G."
            date="Google Maps · Verificada"
          />
          <ReviewCard
            initials="JL"
            text="Servicio de súper calidad. Muy recomendable si querés comprar dispositivos electrónicos oficiales en Argentina. Todo transparente y rápido."
            name="Javier L."
            date="Google Maps · Verificada"
          />
          <ReviewCard
            initials="IT"
            text="Good store, found all the necessary electronics. Nice and helpful staff. The experience was smooth from WhatsApp to pickup. Highly recommend!"
            name="Iago T."
            date="Google Maps · Verificada"
          />
          <ReviewCard
            initials="SR"
            text="Excelente atención, me respondieron al instante por WhatsApp. El iPhone llegó sellado, con garantía y al mejor precio que encontré. Sin dudas volvería a comprar."
            name="Sofía R."
            date="Google Maps · Verificada"
          />
        </div>

        <div style={{ textAlign: 'center', marginTop: '36px' }}>
          <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ display: 'inline-flex' }}>
            Ver todas las reseñas en Google →
          </a>
        </div>
      </div>
    </section>
  )
}
