import {useEffect} from 'react'

export default function useScrollVar(ref,range=1){
 useEffect(()=>{let f;const on=()=>{cancelAnimationFrame(f);f=requestAnimationFrame(()=>{const el=ref.current;if(!el)return;const b=el.getBoundingClientRect(),h=window.innerHeight;
  el.style.setProperty('--p',((h/2-(b.top+b.height/2))/h*range).toFixed(3))})};on();addEventListener('scroll',on,{passive:true});return()=>removeEventListener('scroll',on)},[]);
}
