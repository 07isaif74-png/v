import {useEffect,useState} from 'react'
import {AR,L} from './i18n'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Collection from './components/Collection'
import Story from './components/Story'
import Notes from './components/Notes'
import Experience from './components/Experience'
import Footer from './components/Footer'

export default function App(){
 const [lang,setLang]=useState(()=>{try{return localStorage.getItem('v-lang')||'en'}catch(e){return 'en'}});
 useEffect(()=>{document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';try{localStorage.setItem('v-lang',lang)}catch(e){}},[lang]);
 const t=s=>(lang==='ar'&&AR[s])||s;
 return(<L.Provider value={{lang,setLang,t}}><Nav/><Hero/><Collection/><Story/><Notes/><Experience/><Footer/></L.Provider>);
}
