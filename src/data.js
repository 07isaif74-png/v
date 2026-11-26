import vetiver from './assets/smoky-vetiver.jpg'
import amber from './assets/amber-saffron.jpg'
import seaSalt from './assets/sea-salt.jpg'

export const IMG=[vetiver,amber,seaSalt]

export const FRAGS=[
 {n:'01',img:IMG[0],name:'Smoky Vetiver',tag:'Smoked vetiver · Black fig',c:'#3b2a20',liq:['#6b4a2e','#2a1c14'],price:'€285',top:['Black fig','Pink pepper'],heart:['Smoked vetiver','Cedar'],base:['Ash','Tonka']},
 {n:'02',img:IMG[1],name:'Amber Saffron',tag:'Myrrh · Saffron · Amber',c:'#8a5a2b',liq:['#c28a3e','#6e431c'],price:'€310',top:['Saffron','Bergamot'],heart:['Myrrh','Damask rose'],base:['Amber','Labdanum']},
 {n:'03',img:IMG[2],name:'Sea Salt',tag:'Sea salt · Sandalwood',c:'#6f6350',liq:['#d6c29a','#8d7a55'],price:'€265',top:['Sea salt','Juniper'],heart:['Sandalwood','Iris'],base:['White musk','Driftwood']}
];

export const NOTES={
 top:[['Saffron','Dry, leathery threads that open the composition with a quiet spark.'],['Bergamot','A cool, bitter peel to lift the first minutes.']],
 heart:[['Myrrh','Warm, resinous and faintly smoked — the pulse of the blend.'],['Damask rose','Dark petals, more velvet than perfume.']],
 base:[['Amber','Honeyed and slow, it holds the skin for a full day.'],['Labdanum','Balsamic, animalic, softly sweet.']]
};
