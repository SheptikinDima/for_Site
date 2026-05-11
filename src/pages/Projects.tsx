import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

type EventItem = {
  id: string
  title: string
  description: string
  event_date: string
  event_time: string
  format: string
  location: string
  image: string
  capacity: number
}

export default function Projects() {
  const navigate = useNavigate()

  const [events, setEvents] = useState<EventItem[]>([])
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null)
  const [session, setSession] = useState<any>(null)

  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(true)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const savedStudent = JSON.parse(localStorage.getItem('studentData') || '{}')

  useEffect(() => {
    loadEvents()

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  async function loadEvents() {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('event_date', { ascending: true })

    if (error) {
      setError('Не удалось загрузить мероприятия')
    } else {
      setEvents(data || [])
    }

    setLoading(false)
  }

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!session?.user) {
      navigate('/account')
      return
    }

    setSending(true)
    setError('')

    const form = e.currentTarget

    const studentData = {
      name: form.fullName.value,
      group: form.group.value,
      phone: form.phone.value,
      email: session.user.email,
    }

    localStorage.setItem('studentData', JSON.stringify(studentData))

    const { error } = await supabase.from('registrations').insert({
      event_id: selectedEvent?.id,
      user_id: session.user.id,
      full_name: studentData.name,
      group_name: studentData.group,
      phone: studentData.phone,
      email: studentData.email,
      consent: true,
    })

    if (error) {
      if (error.code === '23505') {
        setError('Вы уже записаны на это мероприятие.')
      } else {
  setError(error.message)
      }

      setSending(false)
      return
    }

    setSent(true)
    setSending(false)
  }

  function formatDate(date: string) {
    return new Date(date).toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }

  return (
    <div style={{ background: '#fff', color: '#111' }}>
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: 48 }}>
            <h1 style={{ fontSize: 52, marginTop: 0, marginBottom: 16 }}>
              Карьерные мероприятия
            </h1>

            <p style={{ fontSize: 22, lineHeight: 1.4, maxWidth: 860, color: '#667085' }}>
              Записывайтесь на карьерные события, консультации, мастер-классы и встречи
              с работодателями. Для записи необходимо войти в аккаунт студента.
            </p>
          </div>

          {loading && <p>Загружаем мероприятия...</p>}

          {error && (
            <div
              style={{
                padding: 18,
                borderRadius: 16,
                background: '#fff1f1',
                color: '#b42318',
                marginBottom: 24,
              }}
            >
              {error}
            </div>
          )}

          <div className="grid grid-3" style={{ gap: 22 }}>
            {events.map((event) => (
              <div
                key={event.id}
                className="card"
                style={{ overflow: 'hidden', padding: 0, display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                  <img
                    src={event.image}
                    alt={event.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                <div style={{ padding: 22, display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignSelf: 'flex-start',
                      padding: '6px 12px',
                      borderRadius: 999,
                      background: '#f2f3ff',
                      color: 'var(--brand)',
                      fontSize: 14,
                      fontWeight: 700,
                      marginBottom: 14,
                    }}
                  >
                    {event.format}
                  </div>

                  <h3 style={{ fontSize: 24, margin: '0 0 12px' }}>{event.title}</h3>

                  <p style={{ color: '#667085', lineHeight: 1.45, marginBottom: 18 }}>
                    {event.description}
                  </p>

                  <div style={{ marginTop: 'auto' }}>
                    <p style={{ margin: '0 0 6px' }}>
                      <b>Дата:</b> {formatDate(event.event_date)}, {event.event_time?.slice(0, 5)}
                    </p>

                    <p style={{ margin: '0 0 6px' }}>
                      <b>Место:</b> {event.location}
                    </p>

                    <p style={{ margin: '0 0 20px' }}>
                      <b>Мест:</b> {event.capacity}
                    </p>

                    <button
                      className="btn btn-primary"
                      style={{ width: '100%', height: 48 }}
                      onClick={() => {
                        if (!session?.user) {
                          navigate('/account')
                          return
                        }

                        setSelectedEvent(event)
                        setSent(false)
                        setError('')
                      }}
                    >
                      Записаться
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedEvent && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.55)',
            zIndex: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
          }}
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="card"
            style={{ width: '100%', maxWidth: 560, padding: 32, background: '#fff', color: '#111' }}
            onClick={(e) => e.stopPropagation()}
          >
            {!sent ? (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}>
                  <div>
                    <h2 style={{ margin: '0 0 8px' }}>Запись на мероприятие</h2>
                    <p style={{ margin: 0, color: '#667085' }}>{selectedEvent.title}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedEvent(null)}
                    style={{ border: 'none', background: 'transparent', fontSize: 28, cursor: 'pointer' }}
                  >
                    ×
                  </button>
                </div>

                <form onSubmit={submit} className="grid" style={{ gap: 16 }}>
                  <div className="grid">
                    <label>ФИО</label>
                    <input
                      className="input"
                      name="fullName"
                      defaultValue={savedStudent.name || ''}
                      placeholder="Иванов Иван Иванович"
                      required
                    />
                  </div>

                  <div className="grid">
                    <label>Группа</label>
                    <input
                      className="input"
                      name="group"
                      defaultValue={savedStudent.group || ''}
                      placeholder="например, 221-323"
                      required
                    />
                  </div>

                  <div className="grid">
                    <label>Телефон</label>
                    <input
                      className="input"
                      name="phone"
                      defaultValue={savedStudent.phone || ''}
                      placeholder="+7 ___ ___-__-__"
                      required
                    />
                  </div>

                  <div className="grid">
                    <label>Email аккаунта</label>
                    <input
                      className="input"
                      value={session?.user?.email || ''}
                      disabled
                    />
                  </div>

                  <label style={{ display: 'flex', gap: 10, fontSize: 14, color: '#667085' }}>
                    <input type="checkbox" required />
                    <span>
                      Я даю согласие на обработку персональных данных и использование
                      контактной информации для связи по вопросам мероприятия.
                    </span>
                  </label>

                  <button className="btn btn-primary" style={{ height: 52 }} disabled={sending}>
                    {sending ? 'Отправка...' : 'Отправить заявку'}
                  </button>
                </form>
              </>
            ) : (
              <div>
                <h2 style={{ marginTop: 0 }}>Вы записаны!</h2>

                <p style={{ fontSize: 18, lineHeight: 1.4, color: '#667085' }}>
                  Мероприятие появится в вашем личном кабинете студента.
                </p>

                <button
                  className="btn btn-primary"
                  style={{ height: 48, marginTop: 16 }}
                  onClick={() => setSelectedEvent(null)}
                >
                  Готово
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}