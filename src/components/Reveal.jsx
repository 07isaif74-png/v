import {useEffect,useRef} from 'react'

export default function Reveal({children,d=0,as:T='div',className=''}){
 const r=useRef(null);
 useEffect(()=>{const o=new IntersectionObserver(([e])=>{if(e.isIntersecting){e.target.classList.add('in');o.disconnect()}},{threshold:.15});o.observe(r.current);return()=>o.disconnect()},[]);
 return <T ref={r} className={'rv '+className} style={{'--d':d+'s'}}>{children}</T>;
}
