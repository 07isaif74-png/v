import {useEffect,useState} from 'react'
import {useL} from '../i18n'

export default function Nav(){
 const {t,lang,setLang}=useL();
 const [s,setS]=useState(false);
 useEffect(()=>{const f=()=>setS(scrollY>40);f();addEventListener('scroll',f,{passive:true});return()=>removeEventListener('scroll',f)},[]);
 return(<nav className={s?'solid':''}>
  <div className="links"><a href="#collection">{t('Collection')}</a></div>
  <a href="#top" className="logo">VELORA</a>
  <div className="links"><a href="#story">{t('Our Story')}</a><button className="lang" onClick={()=>setLang(lang==='ar'?'en':'ar')} aria-label="Language">{lang==='ar'?'EN':'عربي'}</button></div>
 </nav>);
}
