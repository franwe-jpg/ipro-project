const WA_LINK = 'https://wa.me/5491125895328'

interface Spec {
  key: string
  val: string
}

interface ProductCardProps {
  imgSrc: string
  imgAlt: string
  imgBg: 'dark' | 'light'
  tag: string
  tagType: 'apple' | 'ps'
  title: string
  desc: string
  specs: Spec[]
  sealedLabel: string
}

function ProductCard({ imgSrc, imgAlt, imgBg, tag, tagType, title, desc, specs, sealedLabel }: ProductCardProps) {
  return (
    <div className="product-card">
      <div className={`product-card-img ${imgBg}`}>
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div className="product-card-body">
        <div className={`product-tag tag-${tagType}`}>{tag}</div>
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className="specs-mini">
          {specs.map((s) => (
            <div key={s.key} className="spec-r">
              <span className="spec-k">{s.key}</span>
              <span className="spec-v">{s.val}</span>
            </div>
          ))}
        </div>
        <div className="p-cta">
          <div className="badge-sealed">✓ {sealedLabel}</div>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-consult">
            Consultar →
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Products() {
  return (
    <section className="products-section" id="productos">
      <div className="container">
        <div className="section-label">Catálogo completo</div>
        <div className="section-title">Toda la línea Apple y más</div>
        <p className="section-desc">Equipos sellados con garantía oficial. Consultá por disponibilidad y modelos.</p>

        <div className="products-grid">
          <ProductCard
            imgSrc="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=904&hei=840&fmt=jpeg&qlt=90"
            imgAlt="MacBook Air"
            imgBg="dark"
            tag="Apple"
            tagType="apple"
            title="MacBook Air M4"
            desc="Ultradelgada, potente y con hasta 18 horas de autonomía. La más popular de Apple."
            specs={[
              { key: 'Chip', val: 'Apple M4' },
              { key: 'Pantalla', val: '13" / 15" Liquid Retina' },
              { key: 'Autonomía', val: 'Hasta 18 horas' },
            ]}
            sealedLabel="Sellada"
          />

          <ProductCard
            imgSrc="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90"
            imgAlt="MacBook Pro"
            imgBg="dark"
            tag="Apple"
            tagType="apple"
            title="MacBook Pro M4"
            desc="Para creadores y profesionales. Pantalla Liquid Retina XDR y chip M4 Pro."
            specs={[
              { key: 'Chip', val: 'M4 / M4 Pro' },
              { key: 'Pantalla', val: '14" / 16" XDR' },
              { key: 'ProMotion', val: 'Hasta 120Hz' },
            ]}
            sealedLabel="Sellada"
          />

          <ProductCard
            imgSrc="/images/apple-watch-s10.jpg"
            imgAlt="Apple Watch"
            imgBg="light"
            tag="Apple"
            tagType="apple"
            title="Apple Watch Series 10"
            desc="El más delgado de Apple. Detección de apnea del sueño, ECG y GPS."
            specs={[
              { key: 'Tamaños', val: '41mm / 45mm OLED' },
              { key: 'Resistencia', val: '100m waterproof' },
              { key: 'Sensores', val: 'ECG + SpO2 + Apnea' },
            ]}
            sealedLabel="Sellado"
          />

          <ProductCard
            imgSrc="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=600&hei=600&fmt=jpeg&qlt=90"
            imgAlt="AirPods Pro 2"
            imgBg="light"
            tag="Apple"
            tagType="apple"
            title="AirPods Pro 2"
            desc="Cancelación de ruido activa H2, audio adaptativo y hasta 30 horas de autonomía."
            specs={[
              { key: 'Chip', val: 'H2 — ANC avanzado' },
              { key: 'Autonomía', val: '30h con estuche' },
              { key: 'Resistencia', val: 'IP54' },
            ]}
            sealedLabel="Sellados"
          />

          <ProductCard
            imgSrc="/images/airpods-max.jpg"
            imgAlt="AirPods Max"
            imgBg="light"
            tag="Apple"
            tagType="apple"
            title="AirPods Max"
            desc="Over-ear premium con audio espacial Dolby Atmos y cancelación activa de ruido."
            specs={[
              { key: 'Driver', val: '40mm personalizado' },
              { key: 'Audio', val: 'Dolby Atmos' },
              { key: 'Autonomía', val: '20 horas' },
            ]}
            sealedLabel="Sellados"
          />

          <ProductCard
            imgSrc="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-finish-select-202212-11inch-space-gray?wid=600&hei=600&fmt=jpeg&qlt=90"
            imgAlt="iPad Pro"
            imgBg="light"
            tag="Apple"
            tagType="apple"
            title="iPad / iPad Pro M4"
            desc="Desde el iPad base hasta el Pro con chip M4 y pantalla OLED Ultra Retina XDR."
            specs={[
              { key: 'Líneas', val: 'iPad / Air / Pro / mini' },
              { key: 'Chip Pro', val: 'Apple M4' },
              { key: 'Pantalla Pro', val: 'OLED 11" / 13"' },
            ]}
            sealedLabel="Sellado"
          />

          <ProductCard
            imgSrc="https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$800px$"
            imgAlt="PS5 Digital"
            imgBg="dark"
            tag="PlayStation"
            tagType="ps"
            title="PS5 Digital Edition"
            desc="Solo juegos digitales. La consola más potente de Sony en su versión más compacta."
            specs={[
              { key: 'Unidad', val: 'Digital (sin disco)' },
              { key: 'Almacenamiento', val: '825 GB – 1 TB SSD' },
              { key: 'Peso', val: '3,9 kg' },
            ]}
            sealedLabel="Sellada"
          />

          <ProductCard
            imgSrc="https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$800px$"
            imgAlt="PS5 Física"
            imgBg="dark"
            tag="PlayStation"
            tagType="ps"
            title="PS5 Edición Física"
            desc="Lector Blu-ray 4K incorporado. Compatible con juegos físicos de PS4 y PS5."
            specs={[
              { key: 'Unidad', val: 'Lector Blu-ray 4K' },
              { key: 'Compatibilidad', val: 'PS4 + PS5 físicos' },
              { key: 'Peso', val: '4,5 kg' },
            ]}
            sealedLabel="Sellada"
          />
        </div>
      </div>
    </section>
  )
}
