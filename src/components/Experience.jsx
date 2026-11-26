import Reveal from './Reveal'
import {useL} from '../i18n'

export default function Experience(){
 const {t}=useL();
 const w=['Slow maceration','Hand-poured','Refillable glass','Ninety days'].map(x=>t(x));
 const line=[...w,...w,...w,...w].map((x,i)=><span key={i}>{x}</span>);
 return(<section className="exp">
  <div className="wrap">
   <Reveal><p className="eyebrow">{t('The Signature Experience')}</p></Reveal>
   <Reveal d={.1}><h2>{t('Wear it like')} <em>{t('a memory')}</em></h2></Reveal>
   <Reveal d={.2}><p className="lead">{t('We design fragrance as an experience of time. Every bottle ships with a fabric-wrapped sample, a handwritten wear note and a lifetime refill — so the ritual outlasts the glass.')}</p></Reveal>
  </div>
  <div className="rings"><i/><i/><i/>
   <div className="pil">
    {[['I','Discover','Sample the three extraits at home for a week.'],['II','Compose','Choose the one that settles into your skin.'],['III','Return','Refill, forever, in the same glass.']].map(p=><Reveal key={p[0]} d={.1}><div><b>{p[0]}</b><strong style={{fontWeight:500,letterSpacing:'.2em',textTransform:'uppercase',fontSize:'.7rem'}}>{t(p[1])}</strong><br/>{t(p[2])}</div></Reveal>)}
   </div>
  </div>
  <div className="marquee"><div>{line}{line}</div></div>
 </section>);
}
