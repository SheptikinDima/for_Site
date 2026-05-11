import { useEffect, useState } from 'react'
import { supabase } from './lib/supabase'

export default function Admin() {
  const [events, setEvents] = useState<any[]>([])
  const [registrations, setRegistrations] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

const [session, setSession] = useState<any>(null)

const [authForm, setAuthForm] = useState({
  email: '',
  password: '',
})

  const [form, setForm] = useState({
    title: '',
    description: '',
    event_date: '',
    event_time: '',
    format: '',
    location: '',
    image: '',
    capacity: '',
  })

  async function loadData() {
    setLoading(true)

    const { data: eventsData } = await supabase
      .from('events')
      .select('*')
      .order('event_date', { ascending: true })

    const { data: registrationsData } = await supabase
      .from('registrations')
      .select('*')
      .order('registered_at', { ascending: false })

    setEvents(eventsData || [])
    setRegistrations(registrationsData || [])

    setLoading(false)
  }

  useEffect(() => {
  supabase.auth.getSession().then(({ data }) => {
    setSession(data.session)

    if (data.session) {
      loadData()
    } else {
      setLoading(false)
    }
  })

  const {
    data: { subscription },
  } = supabase.auth.onAuthStateChange((_event, session) => {
    setSession(session)

    if (session) {
      loadData()
    }
  })

  return () => {
    subscription.unsubscribe()
  }
}, [])

  async function createEvent(e: React.FormEvent) {
    e.preventDefault()

    await supabase.from('events').insert({
      title: form.title,
      description: form.description,
      event_date: form.event_date,
      event_time: form.event_time,
      format: form.format,
      location: form.location,
      image: form.image,
      capacity: Number(form.capacity),
    })

    setForm({
      title: '',
      description: '',
      event_date: '',
      event_time: '',
      format: '',
      location: '',
      image: '',
      capacity: '',
    })

    loadData()
  }

  async function deleteEvent(id: string) {
    await supabase
      .from('events')
      .delete()
      .eq('id', id)

    loadData()
  }

 async function signIn(e: React.FormEvent) {
  e.preventDefault()

  const { error } = await supabase.auth.signInWithPassword({
    email: authForm.email,
    password: authForm.password,
  })

  if (error) {
    alert('Неверный логин или пароль')
  }
}

async function signOut() {
  await supabase.auth.signOut()
  setSession(null)
}
if (!session) {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f5f7fb',
        padding: 20,
      }}
    >
      <div
        className="card"
        style={{
          width: '100%',
          maxWidth: 420,
          padding: 32,
        }}
      >
        <h1 style={{ marginTop: 0 }}>
          Вход в админ-панель
        </h1>

        <p
          style={{
            color: '#667085',
            marginBottom: 24,
          }}
        >
          Авторизация преподавателя или сотрудника Центра карьеры
        </p>

        <form
          onSubmit={signIn}
          className="grid"
          style={{ gap: 16 }}
        >
          <input
            className="input"
            type="email"
            placeholder="Email"
            value={authForm.email}
            onChange={(e) =>
              setAuthForm({
                ...authForm,
                email: e.target.value,
              })
            }
          />

          <input
            className="input"
            type="password"
            placeholder="Пароль"
            value={authForm.password}
            onChange={(e) =>
              setAuthForm({
                ...authForm,
                password: e.target.value,
              })
            }
          />

          <button
            className="btn btn-primary"
            style={{ height: 52 }}
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  )
}
  return (
    <div style={{ background: '#fff', color: '#111' }}>
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: 48 }}>
            <div
  style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  }}
>
  <h1 style={{ fontSize: 52, margin: 0 }}>
    Админ-панель
  </h1>

  <button
    onClick={signOut}
    className="btn btn-outline"
  >
    Выйти
  </button>
</div>

            <p style={{ color: '#667085', fontSize: 20 }}>
              Управление карьерными мероприятиями и заявками студентов
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '420px 1fr',
              gap: 32,
              alignItems: 'start',
            }}
          >
            <div className="card">
              <h2 style={{ marginTop: 0 }}>
                Создать мероприятие
              </h2>

              <form
                onSubmit={createEvent}
                className="grid"
                style={{ gap: 14 }}
              >
                <input
                  className="input"
                  placeholder="Название"
                  value={form.title}
                  onChange={(e) =>
                    setForm({ ...form, title: e.target.value })
                  }
                  required
                />

                <textarea
                  className="input"
                  placeholder="Описание"
                  value={form.description}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                  style={{ minHeight: 120 }}
                  required
                />

                <input
                  className="input"
                  type="date"
                  value={form.event_date}
                  onChange={(e) =>
                    setForm({ ...form, event_date: e.target.value })
                  }
                  required
                />

                <input
                  className="input"
                  type="time"
                  value={form.event_time}
                  onChange={(e) =>
                    setForm({ ...form, event_time: e.target.value })
                  }
                  required
                />

                <input
                  className="input"
                  placeholder="Формат (очно / онлайн)"
                  value={form.format}
                  onChange={(e) =>
                    setForm({ ...form, format: e.target.value })
                  }
                  required
                />

                <input
                  className="input"
                  placeholder="Место"
                  value={form.location}
                  onChange={(e) =>
                    setForm({ ...form, location: e.target.value })
                  }
                  required
                />

                <input
                  className="input"
                  placeholder="/events/image.jpg"
                  value={form.image}
                  onChange={(e) =>
                    setForm({ ...form, image: e.target.value })
                  }
                  required
                />

                <input
                  className="input"
                  type="number"
                  placeholder="Количество мест"
                  value={form.capacity}
                  onChange={(e) =>
                    setForm({ ...form, capacity: e.target.value })
                  }
                  required
                />

                <button
                  className="btn btn-primary"
                  style={{ height: 52 }}
                >
                  Создать мероприятие
                </button>
              </form>
            </div>

            <div>
              <div className="card" style={{ marginBottom: 24 }}>
                <h2 style={{ marginTop: 0 }}>
                  Мероприятия
                </h2>

                {loading ? (
                  <p>Загрузка...</p>
                ) : (
                  <div
                    style={{
                      display: 'grid',
                      gap: 14,
                    }}
                  >
                    {events.map((event) => (
                      <div
                        key={event.id}
                        style={{
                          padding: 18,
                          borderRadius: 16,
                          background: '#f8f9fc',
                          display: 'flex',
                          justifyContent: 'space-between',
                          gap: 20,
                        }}
                      >
                        <div>
                          <div
                            style={{
                              fontSize: 20,
                              fontWeight: 700,
                              marginBottom: 6,
                            }}
                          >
                            {event.title}
                          </div>

                          <div style={{ color: '#667085' }}>
                            {event.event_date} • {event.event_time}
                          </div>
                        </div>

                        <button
                          onClick={() => deleteEvent(event.id)}
                          style={{
                            border: 'none',
                            background: '#ef4444',
                            color: '#fff',
                            padding: '10px 16px',
                            borderRadius: 12,
                            cursor: 'pointer',
                          }}
                        >
                          Удалить
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="card">
                <h2 style={{ marginTop: 0 }}>
                  Регистрации студентов
                </h2>

                <div
                  style={{
                    overflowX: 'auto',
                  }}
                >
                  <table
                    style={{
                      width: '100%',
                      borderCollapse: 'collapse',
                    }}
                  >
                    <thead>
                      <tr>
                        <th align="left">ФИО</th>
                        <th align="left">Группа</th>
                        <th align="left">Телефон</th>
                        <th align="left">Email</th>
                      </tr>
                    </thead>

                    <tbody>
                      {registrations.map((item) => (
                        <tr key={item.id}>
                          <td style={{ padding: '14px 0' }}>
                            {item.full_name}
                          </td>

                          <td>{item.group_name}</td>

                          <td>{item.phone}</td>

                          <td>{item.email}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}