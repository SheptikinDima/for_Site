import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

const ADMIN_EMAILS = ['dshepticin@gmail.com']

export default function Account() {
  const navigate = useNavigate()

  const [mode, setMode] = useState<'login' | 'register'>('login')
  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState({
    email: '',
    password: '',
    consent: false,
  })

  function redirectByRole(email: string) {
    const normalizedEmail = email.trim().toLowerCase()

    if (ADMIN_EMAILS.includes(normalizedEmail)) {
      navigate('/admin')
    } else {
      navigate('/student')
    }
  }

  async function signIn(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: form.email.trim().toLowerCase(),
        password: form.password,
      })

      if (error) {
        alert('Неверный email или пароль')
        return
      }

      if (data.user?.email) {
        redirectByRole(data.user.email)
      }
    } catch (error) {
      alert('Ошибка подключения к Supabase. Проверь интернет, VPN, URL и ключ проекта.')
    } finally {
      setLoading(false)
    }
  }

  async function signUp(e: React.FormEvent) {
    e.preventDefault()

    if (!form.consent) {
      alert('Нужно дать согласие на обработку персональных данных')
      return
    }

    if (form.password.length < 6) {
      alert('Пароль должен быть не короче 6 символов')
      return
    }

    setLoading(true)

    try {
      const { data, error } = await supabase.auth.signUp({
        email: form.email.trim().toLowerCase(),
        password: form.password,
        options: {
          data: {
            role: 'student',
            consent_personal_data: true,
          },
        },
      })

      if (error) {
        alert(error.message)
        return
      }

      if (data.user) {
        alert('Аккаунт создан. Теперь войдите в систему.')
        setMode('login')
        setForm({
          email: form.email,
          password: '',
          consent: false,
        })
      }
    } catch (error) {
      alert('Ошибка подключения к Supabase. Проверь интернет, VPN, URL и ключ проекта.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#f5f7fb',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      }}
    >
      <div className="card" style={{ width: '100%', maxWidth: 460, padding: 36 }}>
        <h1 style={{ marginTop: 0, marginBottom: 12 }}>
          {mode === 'login' ? 'Вход в аккаунт' : 'Регистрация студента'}
        </h1>

        <p style={{ color: '#667085', marginBottom: 28, lineHeight: 1.4 }}>
          {mode === 'login'
            ? 'Войдите, чтобы перейти в личный кабинет или админ-панель.'
            : 'Создайте аккаунт, чтобы записываться на мероприятия и видеть свои записи.'}
        </p>

        <form
          onSubmit={mode === 'login' ? signIn : signUp}
          className="grid"
          style={{ gap: 16 }}
        >
          <input
            className="input"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />

          <input
            className="input"
            type="password"
            placeholder="Пароль"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />

          {mode === 'register' && (
            <label
              style={{
                display: 'flex',
                gap: 10,
                alignItems: 'flex-start',
                fontSize: 14,
                color: '#667085',
                lineHeight: 1.35,
              }}
            >
              <input
                type="checkbox"
                checked={form.consent}
                onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                style={{ marginTop: 3 }}
              />
              <span>
                Я даю согласие на обработку персональных данных и использование
                контактной информации для записи на карьерные мероприятия.
              </span>
            </label>
          )}

          <button className="btn btn-primary" style={{ height: 52 }} disabled={loading}>
            {loading
              ? 'Подождите...'
              : mode === 'login'
                ? 'Войти'
                : 'Зарегистрироваться'}
          </button>
        </form>

        <button
          type="button"
          onClick={() => {
            setMode(mode === 'login' ? 'register' : 'login')
            setForm({
              email: '',
              password: '',
              consent: false,
            })
          }}
          style={{
            marginTop: 18,
            border: 'none',
            background: 'transparent',
            color: 'var(--brand)',
            cursor: 'pointer',
            fontWeight: 700,
          }}
        >
          {mode === 'login'
            ? 'Создать аккаунт студента'
            : 'У меня уже есть аккаунт'}
        </button>
      </div>
    </div>
  )
}