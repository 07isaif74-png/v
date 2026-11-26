import {useEffect,useRef} from 'react'
import Bottle from './Bottle'
import {useL} from '../i18n'

export default function Hero(){
 const {t,lang}=useL();
 const r=useRef(null);
 useEffect(()=>{const f=()=>r.current&&r.current.style.setProperty('--p',Math.min(scrollY/innerHeight,1));f();addEventListener('scroll',f,{passive:true});return()=>removeEventListener('scroll',f)},[]);
 return(<header className="hero" id="top" ref={r}>
  <div className="halo"/><div className="halo b"/>
  <div className="bottle"><Bottle id="h" name="Amber Saffron" liq={['#d09a4a','#5d3817']}/></div>
  <span className="scroll">{t('Scroll')}</span>
  <div className="wrap hero-copy">
   <p className="eyebrow" style={{marginBottom:'1.6rem',opacity:0,animation:'fade 1.2s .6s forwards'}}>{t('Maison de parfum · Est. 2019')}</p>
   <h1><span className="ln"><span>{t('Scent that')}</span></span><span className="ln"><span>{t('stays.')}</span></span></h1>
   <div className="sub">
    <p>{t('Three extraits composed slowly, in small batches, to linger on skin, wool and memory long after you’ve left the room.')}</p>
    <a href="#collection" className="btn">{t('Discover the collection')} <span>{lang==='ar'?'←':'→'}</span></a>
   </div>
  </div>
 </header>);
}
