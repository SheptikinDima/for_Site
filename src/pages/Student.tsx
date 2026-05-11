import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

export default function Student() {
  const navigate = useNavigate()

  const [session, setSession] = useState<any>(null)
  const [registrations, setRegistrations] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        navigate('/account')
        return
      }

      setSession(data.session)
      loadRegistrations(data.session.user.id)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate('/account')
        return
      }

      setSession(session)
      loadRegistrations(session.user.id)
    })

    return () => subscription.unsubscribe()
  }, [])

  async function loadRegistrations(userId: string) {
    setLoading(true)

    const { data } = await supabase
      .from('registrations')
      .select(`
        id,
        registered_at,
        events (
          title,
          description,
          event_date,
          event_time,
          format,
          location,
          image
        )
      `)
      .eq('user_id', userId)
      .order('registered_at', { ascending: false })

    setRegistrations(data || [])
    setLoading(false)
  }

  async function cancelRegistration(id: string) {
    if (!session?.user?.id) return

    await supabase
      .from('registrations')
      .delete()
      .eq('id', id)
      .eq('user_id', session.user.id)

    loadRegistrations(session.user.id)
  }

  async function signOut() {
    await supabase.auth.signOut()
    navigate('/account')
  }

  return (
    <div style={{ background: '#fff', color: '#111' }}>
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 40 }}>
            <div>
              <h1 style={{ fontSize: 52, margin: 0 }}>Личный кабинет студента</h1>
              <p style={{ color: '#667085', fontSize: 18 }}>{session?.user?.email}</p>
            </div>

            <button className="btn btn-outline" onClick={signOut}>
              Выйти
            </button>
          </div>

          <div className="card">
            <h2 style={{ marginTop: 0 }}>Мои мероприятия</h2>

            {loading && <p>Загружаем записи...</p>}

            {!loading && registrations.length === 0 && (
              <p style={{ color: '#667085' }}>Вы пока не записаны ни на одно мероприятие.</p>
            )}

            <div style={{ display: 'grid', gap: 18 }}>
              {registrations.map((item) => (
                <div
                  key={item.id}
                  style={{
                    padding: 20,
                    borderRadius: 18,
                    background: '#f8f9fc',
                    display: 'grid',
                    gridTemplateColumns: '160px 1fr auto',
                    gap: 20,
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={item.events?.image}
                    alt={item.events?.title}
                    style={{
                      width: 160,
                      height: 110,
                      objectFit: 'cover',
                      borderRadius: 14,
                    }}
                  />

                  <div>
                    <h3 style={{ margin: '0 0 8px', fontSize: 24 }}>
                      {item.events?.title}
                    </h3>

                    <p style={{ color: '#667085', margin: '0 0 10px' }}>
                      {item.events?.description}
                    </p>

                    <div style={{ color: '#111' }}>
                      📅 {item.events?.event_date} • 🕒 {item.events?.event_time?.slice(0, 5)}
                    </div>

                    <div style={{ color: '#111', marginTop: 6 }}>
                      📍 {item.events?.location} • {item.events?.format}
                    </div>
                  </div>

                  <button
                    onClick={() => cancelRegistration(item.id)}
                    style={{
                      border: 'none',
                      background: '#ef4444',
                      color: '#fff',
                      padding: '12px 16px',
                      borderRadius: 12,
                      cursor: 'pointer',
                    }}
                  >
                    Отменить
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}