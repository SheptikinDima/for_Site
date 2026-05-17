import { useParams, NavLink } from 'react-router-dom'
import { products } from '../data/products'

export default function Product() {
  const { slug } = useParams()
  const p = products.find((x) => x.slug === slug)

  if (!p) {
    return (
      <div className="section">
        <div className="container">Возможность не найдена</div>
      </div>
    )
  }

  return (
    <div className="section" style={{ background: '#fff', color: '#111' }}>
      <div
        className="container"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr .9fr',
          gap: 40,
          alignItems: 'start',
        }}
      >
        <div>
          <div
            style={{
              aspectRatio: '4/3',
              overflow: 'hidden',
              borderRadius: 24,
              border: '1px solid #e5e7eb',
              background: '#f8f9fc',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 40,
            }}
          >
            <img
              src={p.image}
              alt={p.title}
              style={{
                maxWidth: '80%',
                maxHeight: '80%',
                objectFit: 'contain',
              }}
            />
          </div>
        </div>

        <div>
          <div
            style={{
              display: 'inline-flex',
              padding: '8px 14px',
              borderRadius: 999,
              background: '#f2f3ff',
              color: 'var(--brand)',
              fontWeight: 700,
              marginBottom: 18,
            }}
          >
            {p.category}
          </div>

          <h1 style={{ marginTop: 0, fontSize: 44, lineHeight: 1.05 }}>
            {p.title}
          </h1>

          <p style={{ color: '#667085', fontSize: 20, lineHeight: 1.45 }}>
            {p.description}
          </p>

          <div
            className="card"
            style={{
              marginTop: 28,
              padding: 24,
              background: '#f8f9fc',
            }}
          >
            <h3 style={{ marginTop: 0 }}>Основная информация</h3>

            <ul style={{ paddingLeft: 0, listStyle: 'none', display: 'grid', gap: 10 }}>
              {p.specs.map((x) => (
                <li key={x}>• {x}</li>
              ))}
            </ul>
          </div>

          <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
            <NavLink to="/contact" className="btn btn-primary">
              Получить консультацию
            </NavLink>

            <NavLink to="/catalog" className="btn">
              Назад к каталогу
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}