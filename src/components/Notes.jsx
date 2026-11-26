import {useState} from 'react'
import Reveal from './Reveal'
import {useL} from '../i18n'
import {IMG,NOTES} from '../data'

export default function Notes(){
 const {t}=useL();
 const [k,setK]=useState('top');
 const idx={top:1,heart:2,base:3}[k];
 const lbl={top:'Top · 0–15 min',heart:'Heart · 1–4 hrs',base:'Base · 6+ hrs'};
 return(<section className="notes wrap"><div className="notes-g">
  <Reveal><div className="nb"><span className="eyebrow tag">Amber Saffron</span><img src={IMG[1]} alt="Amber Saffron eau de parfum"/><div className="bands">{[1,2,3].map(i=><i key={i} className={idx===i?'on':''}/>)}</div></div></Reveal>
  <Reveal d={.15}><div>
   <p className="eyebrow">{t('Fragrance Notes')}</p>
   <h2 style={{marginTop:'1rem'}}>{t('The anatomy of')} <em>Amber Saffron</em></h2>
   <div className="tabs" role="tablist">{['top','heart','base'].map(b=><button key={b} role="tab" aria-selected={k===b} className={k===b?'on':''} onClick={()=>setK(b)}>{t({top:'Top',heart:'Heart',base:'Base'}[b])}</button>)}</div>
   <p className="eyebrow" style={{marginBottom:'.6rem',color:'var(--clay)'}}>{t(lbl[k])}</p>
   <div className="nl" key={k}>{NOTES[k].map((n,i)=><div key={n[0]}><span>0{i+1}</span><div style={{display:'block',border:0,padding:0,animation:'none'}}><h3>{t(n[0])}</h3><p>{t(n[1])}</p></div></div>)}</div>
  </div></Reveal>
 </div></section>);
}
