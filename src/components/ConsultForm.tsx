import { useState } from 'react'
export default function ConsultForm(){
  const [sent,setSent]=useState(false)
  function submit(e:React.FormEvent<HTMLFormElement>){e.preventDefault();setSent(true)}
  if(sent) return <div>Спасибо! Эксперт перезвонит в течение дня.</div>
  return (<form onSubmit={submit} className="grid-2 grid" style={{alignItems:'end'}}>
    <div className="grid">
      <label>Услуга</label>
      <select className="input" name="service">
        <option>Проектирование крыши</option>
        <option>Монтаж кровли</option>
        <option>Монтаж забора</option>
        <option>Утепление</option>
      </select>
    </div>
    <div className="grid">
      <label>Телефон</label>
      <input className="input" name="phone" placeholder="+7 ___ ___-__-__" />
    </div>
    <button className="btn btn-primary" style={{height:48}}>Заказать консультацию</button>
  </form>)
}
