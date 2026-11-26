export default function Bottle({liq=['#c28a3e','#6e431c'],name='VELORA',id='b',bands}){
 return(
 <svg viewBox="0 0 200 340" aria-hidden="true">
  <defs>
   <linearGradient id={id+'g'} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={liq[0]}/><stop offset="1" stopColor={liq[1]}/></linearGradient>
   <linearGradient id={id+'s'} x1="0" x2="1"><stop offset="0" stopColor="#fff" stopOpacity=".28"/><stop offset=".25" stopColor="#fff" stopOpacity="0"/><stop offset=".8" stopColor="#000" stopOpacity="0"/><stop offset="1" stopColor="#000" stopOpacity=".3"/></linearGradient>
   <linearGradient id={id+'c'} x1="0" x2="1"><stop offset="0" stopColor="#8a6338"/><stop offset=".4" stopColor="#d1a46a"/><stop offset="1" stopColor="#6b4a28"/></linearGradient>
   <clipPath id={id+'k'}><rect x="34" y="118" width="132" height="204" rx="10"/></clipPath>
  </defs>
  <rect x="70" y="8" width="60" height="62" rx="3" fill={`url(#${id}c)`}/>
  <rect x="70" y="30" width="60" height="1" fill="#000" opacity=".25"/>
  <rect x="86" y="70" width="28" height="48" fill="#d9cdb8" opacity=".5"/>
  <rect x="34" y="118" width="132" height="204" rx="10" fill="#e9dfcf" opacity=".22" stroke="#fff" strokeOpacity=".35"/>
  <g clipPath={`url(#${id}k)`}>
   <rect x="34" y="150" width="132" height="172" fill={`url(#${id}g)`}/>
   {bands&&[0,1,2].map(i=><rect key={i} x="34" y={150+i*57.3} width="132" height="57.3" fill="#E8B878" style={{opacity:bands===i+1?.55:0,transition:'opacity .8s'}}/>)}
  </g>
  <rect x="34" y="118" width="132" height="204" rx="10" fill={`url(#${id}s)`}/>
  <rect x="62" y="205" width="76" height="82" fill="#F3ECE0" opacity=".94"/>
  <text x="100" y="236" textAnchor="middle" fontFamily="Cormorant Garamond,serif" fontSize="13" letterSpacing="5" fill="#1D1410">VELORA</text>
  <line x1="84" y1="246" x2="116" y2="246" stroke="#A67B4B" strokeWidth=".8"/>
  <text x="100" y="264" textAnchor="middle" fontFamily="Jost,sans-serif" fontSize="6" letterSpacing="2" fill="#7A5A3E">{name.toUpperCase()}</text>
  <text x="100" y="277" textAnchor="middle" fontFamily="Jost,sans-serif" fontSize="5" letterSpacing="2" fill="#7A5A3E">EAU DE PARFUM</text>
 </svg>);
}
