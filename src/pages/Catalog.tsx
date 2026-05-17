import { useMemo, useState } from 'react'
import { products } from '../data/products'
import { NavLink } from 'react-router-dom'

export default function Catalog() {
  const [type, setType] = useState('Все')
  const [faculty, setFaculty] = useState('Все')
  const [course, setCourse] = useState('Все')
  const [employment, setEmployment] = useState('Все')
  const [salary, setSalary] = useState(125000)

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const typeMatch = type === 'Все' || p.type === type
      const facultyMatch = faculty === 'Все' || p.faculty === faculty
      const courseMatch = course === 'Все' || p.course.includes(course)
      const employmentMatch = employment === 'Все' || p.employment === employment
      const salaryMatch = p.salaryValue <= salary

      return typeMatch && facultyMatch && courseMatch && employmentMatch && salaryMatch
    })
  }, [type, faculty, course, employment, salary])

  return (
    <div className="section" style={{ background: '#fff', color: '#111' }}>
      <div className="container">
        <h1 style={{ marginTop: 0, fontSize: 52 }}>Каталог карьерных возможностей</h1>

        <p style={{ fontSize: 20, color: '#667085', maxWidth: 860, lineHeight: 1.4 }}>
          Практики, стажировки и вакансии от компаний-партнёров Московского Политеха.
          Используйте фильтры, чтобы подобрать подходящее направление.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '280px 1fr',
            gap: 32,
            marginTop: 40,
            alignItems: 'start',
          }}
        >
          <aside
            className="card"
            style={{
              padding: 24,
              position: 'sticky',
              top: 100,
            }}
          >
            <h2 style={{ marginTop: 0, marginBottom: 24 }}>Фильтры</h2>

            <div className="grid" style={{ gap: 18 }}>
              <FilterSelect label="Тип" value={type} setValue={setType} options={['Все', 'Практика', 'Стажировка', 'Вакансия']} />

              <FilterSelect label="Факультет" value={faculty} setValue={setFaculty} options={['Все', 'ИГРИК', 'ПИ', 'ТФ', 'ФИТ', 'ФМ', 'ФУиГХ', 'ФЭиУ']} />

              <FilterSelect label="Курс" value={course} setValue={setCourse} options={['Все', '1', '2', '3', '4']} />

              <FilterSelect label="Занятость" value={employment} setValue={setEmployment} options={['Все', 'Неполная занятость', 'Полная занятость']} />

              <div className="grid" style={{ gap: 8 }}>
                <label>Заработная плата до</label>
                <input
                  type="range"
                  min="0"
                  max="125000"
                  step="5000"
                  value={salary}
                  onChange={(e) => setSalary(Number(e.target.value))}
                />
                <div style={{ color: '#667085' }}>
                  до {salary.toLocaleString('ru-RU')} ₽
                </div>
              </div>

              <button
                className="btn"
                onClick={() => {
                  setType('Все')
                  setFaculty('Все')
                  setCourse('Все')
                  setEmployment('Все')
                  setSalary(125000)
                }}
              >
                Сбросить фильтры
              </button>
            </div>
          </aside>

          <main>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 24,
              }}
            >
              <h2 style={{ margin: 0 }}>Найдено: {filteredProducts.length}</h2>
            </div>

            <div className="grid grid-3" style={{ gap: 22 }}>
              {filteredProducts.map((p) => (
                <div key={p.slug} className="tile" style={{ display: 'flex', flexDirection: 'column' }}>
                  <img src={p.image} alt={p.title} />

                  <div style={{ marginTop: 16 }}>
                    <div
                      style={{
                        display: 'inline-flex',
                        padding: '6px 12px',
                        borderRadius: 999,
                        background: '#f2f3ff',
                        color: 'var(--brand)',
                        fontSize: 13,
                        fontWeight: 700,
                        marginBottom: 12,
                      }}
                    >
                      {p.type}
                    </div>

                    <h3 style={{ marginTop: 0 }}>{p.title}</h3>

                    <div style={{ color: '#667085', marginBottom: 12 }}>
                      {p.company}
                    </div>

                    <div style={{ display: 'grid', gap: 6, color: '#667085', fontSize: 14 }}>
                      <div>Факультет: {p.faculty}</div>
                      <div>Курс: {p.course}</div>
                      <div>Занятость: {p.employment}</div>
                      <div>Доход: {p.salary}</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: 10, marginTop: 'auto', paddingTop: 18 }}>
                    <NavLink to={`/catalog/${p.slug}`} className="btn btn-primary">
                      Подробнее
                    </NavLink>

                    <NavLink to="/contact" className="btn">
                      Консультация
                    </NavLink>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="card" style={{ marginTop: 24 }}>
                По выбранным фильтрам ничего не найдено.
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}

function FilterSelect({
  label,
  value,
  setValue,
  options,
}: {
  label: string
  value: string
  setValue: (value: string) => void
  options: string[]
}) {
  return (
    <div className="grid" style={{ gap: 8 }}>
      <label>{label}</label>
      <select className="input" value={value} onChange={(e) => setValue(e.target.value)}>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}