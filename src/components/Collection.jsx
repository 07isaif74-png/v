import Reveal from './Reveal'
import {useL} from '../i18n'
import {FRAGS} from '../data'

export default function Collection(){
 const {t}=useL();
 return(<section className="collection wrap" id="collection">
  <div className="head">
   <Reveal><p className="eyebrow">{t('The Collection')}</p><h2 style={{marginTop:'1rem'}}>{t('Three')} <em>{t('signatures')}</em></h2></Reveal>
   <Reveal d={.15}><p>{t('Each composition begins with a single raw material and is left to macerate for ninety days.')}</p></Reveal>
  </div>
  <div className="rows">
   {FRAGS.map((f,i)=>(
    <Reveal key={f.n} d={i*.12}>
     <a href="#collection" className="frag" style={{'--c':f.c}}>
      <div className="stage" data-n={f.n}><img src={f.img} alt={f.name+' — VELORA eau de parfum'} loading="lazy"/>
       <div className="veil"><span>{t('Eau de parfum · 50 ml')}</span><span>{t('Add +')}</span></div></div>
      <div className="meta"><div><h3>{f.name}</h3><small>{t(f.tag)}</small></div><span className="price">{f.price}</span></div>
     </a>
    </Reveal>))}
  </div>
 </section>);
}
