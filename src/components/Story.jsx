import {useRef} from 'react'
import Reveal from './Reveal'
import useScrollVar from '../useScrollVar'
import {useL} from '../i18n'

export default function Story(){
 const {t}=useL();
 const r=useRef(null);useScrollVar(r,-60);
 return(<section className="story" id="story"><div className="wrap story-g">
  <Reveal><figure className="plate" ref={r}>
   <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" style={{transform:'scale(1.12) translateY(calc(var(--p,0)*1px))'}}>
    <defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#2b1d15"/><stop offset=".55" stopColor="#8a5a33"/><stop offset="1" stopColor="#d9a463"/></linearGradient></defs>
    <rect width="400" height="500" fill="url(#sky)"/>
    <circle cx="260" cy="250" r="62" fill="#F3ECE0" opacity=".85"/>
    <path d="M0 330 C90 290 160 330 240 305 S360 290 400 310 V500 H0Z" fill="#5a3b25"/>
    <path d="M0 390 C80 350 170 410 260 370 S360 360 400 380 V500 H0Z" fill="#3a2518"/>
    <path d="M0 450 C100 420 200 470 400 430 V500 H0Z" fill="#1D1410"/>
   </svg><figcaption>{t('Fig. I — The first maceration, Grasse')}</figcaption></figure></Reveal>
  <div>
   <Reveal><p className="eyebrow">{t('Our Story')}</p></Reveal>
   <Reveal d={.1}><h2>{t('Made for')} <em>{t('the hour')}</em> {t('after dusk')}</h2></Reveal>
   <Reveal d={.2}><p>{t('VELORA began in a rented studio above a leather workshop, with one conviction: a fragrance should not announce itself. It should arrive a moment after you do, and remain a moment after you’ve gone.')}</p></Reveal>
   <Reveal d={.3}><p>{t('We work with a handful of growers, source resins and woods by the kilogram rather than the tonne, and refuse anything that cannot age gracefully on skin.')}</p></Reveal>
   <Reveal d={.4}><div className="sig">— {t('Inès Valcourt, founder & perfumer')}</div></Reveal>
  </div>
 </div></section>);
}
