import { useMemo, useState } from 'react'
const BASES={ 'Профнастил':1890,'3D-сетка':2350,'Жалюзи':5200,'Евроштакетник':2650 } as const
export default function Calculator(){
  const [type,setType]=useState<keyof typeof BASES>('Профнастил')
  const [length,setLength]=useState(30)
  const [height,setHeight]=useState(2)
  const [gate,setGate]=useState(false)
  const [wicket,setWicket]=useState(true)
  const [install,setInstall]=useState(true)
  const price=useMemo(()=>{const base=BASES[type];const perim=length;const kHeight=0.5+height*0.5;const gateCost=gate?35000:0;const wicketCost=wicket?12000:0;const installCost=install?perim*600:0;const material=perim*base*kHeight;return Math.round(material+gateCost+wicketCost+installCost)},[type,length,height,gate,wicket,install])
  const format=(n:number)=>n.toLocaleString('ru-RU')+' ₽'
  return (<div className="card" style={{background:'#fff',color:'#111'}}>
    <h3 style={{marginTop:0}}>Калькулятор стоимости</h3>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
      <label>Тип:
        <select value={type} onChange={e=>setType(e.target.value as any)} className="input">
          {Object.keys(BASES).map(k=> <option key={k}>{k}</option>)}
        </select>
      </label>
      <label>Длина, м:
        <input type="number" value={length} min={5} onChange={e=>setLength(+e.target.value)} className="input"/>
      </label>
      <label>Высота, м:
        <input type="number" step="0.1" value={height} min={1} onChange={e=>setHeight(+e.target.value)} className="input"/>
      </label>
      <div style={{display:'grid',gap:8,alignContent:'center'}}>
        <label><input type="checkbox" checked={gate} onChange={e=>setGate(e.target.checked)}/> Ворота (+≈35 000)</label>
        <label><input type="checkbox" checked={wicket} onChange={e=>setWicket(e.target.checked)}/> Калитка (+≈12 000)</label>
        <label><input type="checkbox" checked={install} onChange={e=>setInstall(e.target.checked)}/> Монтаж (+≈600 ₽/м)</label>
      </div>
    </div>
    <div style={{marginTop:12,fontSize:18,fontWeight:800}}>Итого: {format(price)}</div>
    <small style={{color:'#667085'}}>Расчёт предварительный. Точный просчёт после замера.</small>
  </div>)
}
