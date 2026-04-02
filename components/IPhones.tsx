'use client'

const WA_LINK = 'https://wa.me/5491125895328'

interface GenModel {
  name: string
  chip: string
  chipType: 'blue' | 'purple'
  size: string
}

interface GenCardProps {
  headerClass: string
  badge: string
  badgeType: 'new' | 'pop' | 'val'
  imgSrc: string
  imgFallback: string
  imgAlt: string
  title: string
  models: GenModel[]
  featured?: boolean
}

function GenCard({ headerClass, badge, badgeType, imgSrc, imgFallback, imgAlt, title, models, featured }: GenCardProps) {
  return (
    <div className={`gen-card${featured ? ' featured' : ''}`}>
      <div className={`gen-header ${headerClass}`}>
        <div className={`gen-badge ${badgeType}`}>{badge}</div>
        <img

          className="gen-phone-img w-full h-[180px] object-contain"
          src={imgSrc}
          alt={imgAlt}
          onError={(e) => {
            ;(e.target as HTMLImageElement).src = imgFallback
          }}
        />
        <div className="gen-title">{title}</div>
      </div>
      <div className="gen-body">
        <div className="gen-models">
          {models.map((m) => (
            <div key={m.name} className="gen-model-row">
              <span className="gen-model-name">{m.name}</span>
              <div className="gen-model-chips">
                <span className={`gen-chip chip-${m.chipType}`}>{m.chip}</span>
                <span className="gen-chip chip-blue">{m.size}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="gen-cta">
          <div className="avail-badge">
            <div className="avail-dot" />
            En stock
          </div>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-consult">
            Consultar →
          </a>
        </div>
      </div>
    </div>
  )
}

export default function IPhones() {
  return (
    <section id="iphones">
      <div className="container">
        <div className="section-label">Línea iPhone</div>
        <div className="section-title">Elegí tu generación</div>
        <p className="section-desc">
          Todos los modelos en stock, sellados con garantía oficial Apple. Nuevos y semi-nuevos disponibles.
        </p>

        <div className="gen-grid">
          <GenCard
            featured
            headerClass="g17"
            badge="✦ NUEVO 2026"
            badgeType="new"
            imgSrc="/images/all-iphones-17.png"
            imgFallback="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-blacktitanium?wid=800&hei=1000&fmt=p-jpg&qlt=80"
            imgAlt="iPhone 17 Pro"
            title="Linea iPhone 17"
            models={[
              { name: 'iPhone 17', chip: 'A18', chipType: 'blue', size: '6.1"' },
              { name: 'iPhone 17 Air', chip: 'A18', chipType: 'blue', size: '6.6"' },
              { name: 'iPhone 17 Pro', chip: 'A18 Pro', chipType: 'purple', size: '6.3"' },
              { name: 'iPhone 17 Pro Max', chip: 'A18 Pro', chipType: 'purple', size: '6.9"' },
            ]}
          />

          <GenCard
            headerClass="g16"
            badge="⭐ MÁS VENDIDO"
            badgeType="pop"
            imgSrc="/images/all-iphones-16.png"
            imgFallback="https://images.macrumors.com/t/Zz8LBpnLwnhx-O8MfJm_zq8_Jmc=/1600x/article-new/2024/09/iPhone-16-Pro-Feature-Purple.jpg"
            imgAlt="iPhone 16 Pro"
            title="Linea iPhone 16"
            models={[
              { name: 'iPhone 16', chip: 'A18', chipType: 'blue', size: '6.1"' },
              { name: 'iPhone 16 Plus', chip: 'A18', chipType: 'blue', size: '6.7"' },
              { name: 'iPhone 16 Pro', chip: 'A18 Pro', chipType: 'purple', size: '6.3"' },
              { name: 'iPhone 16 Pro Max', chip: 'A18 Pro', chipType: 'purple', size: '6.9"' },
            ]}
          />

          <GenCard
            headerClass="g15"
            badge="💰 MEJOR VALOR"
            badgeType="val"
            imgSrc="/images/all-iphones-15.png"
            imgFallback="https://images.macrumors.com/t/Zz8LBpnLwnhx-O8MfJm_zq8_Jmc=/1600x/article-new/2024/09/iPhone-16-Pro-Feature-Purple.jpg"
            imgAlt="iPhone 15 Pro"
            title="Linea iPhone 15"
            models={[
              { name: 'iPhone 15', chip: 'A16', chipType: 'blue', size: '6.1"' },
              { name: 'iPhone 15 Plus', chip: 'A16', chipType: 'blue', size: '6.7"' },
              { name: 'iPhone 15 Pro', chip: 'A17 Pro', chipType: 'purple', size: '6.1"' },
              { name: 'iPhone 15 Pro Max', chip: 'A17 Pro', chipType: 'purple', size: '6.7"' },
            ]}
          />
        </div>

        <div className="more-iphones-banner">
          <div>
            <h3>¿Buscás otro modelo? También tenemos iPhones 13, 14 y semi-nuevos</h3>
            <p>Consultanos por WhatsApp para ver disponibilidad de modelos anteriores, colores y condición de los equipos.</p>
          </div>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa">
            <svg width="18" height="18">
              <use href="#ico-wa" />
            </svg>
            Consultar más modelos
          </a>
        </div>
      </div>
    </section>
  )
}
