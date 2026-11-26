import {createContext,useContext} from 'react'

export const AR={
'Collection':'المجموعة','Our Story':'قصتنا',
'Maison de parfum · Est. 2019':'دار عطور · منذ ٢٠١٩','Scent that':'عطرٌ','stays.':'يبقى.','Scroll':'مرّر',
'Three extraits composed slowly, in small batches, to linger on skin, wool and memory long after you’ve left the room.':'ثلاثة عطور مركّزة صُنعت على مهل وبكميات صغيرة، لتبقى على البشرة والصوف والذاكرة طويلًا بعد مغادرتك المكان.',
'Discover the collection':'اكتشف المجموعة',
'The Collection':'المجموعة','Three':'ثلاث','signatures':'بصمات',
'Each composition begins with a single raw material and is left to macerate for ninety days.':'تبدأ كل تركيبة بمادة خام واحدة، وتُترك لتنضج تسعين يومًا.',
'Eau de parfum · 50 ml':'ماء عطر · ٥٠ مل','Add +':'أضف +',
'Smoked vetiver · Black fig':'نجيل مدخّن · تين أسود','Myrrh · Saffron · Amber':'مرّ · زعفران · عنبر','Sea salt · Sandalwood':'ملح البحر · خشب الصندل',
'Fig. I — The first maceration, Grasse':'الشكل ١ — أول تخمير، غراس',
'Made for':'صُنع لأجل','the hour':'ساعة','after dusk':'ما بعد الغروب',
'VELORA began in a rented studio above a leather workshop, with one conviction: a fragrance should not announce itself. It should arrive a moment after you do, and remain a moment after you’ve gone.':'بدأت فيلورا في استوديو مستأجر فوق ورشة جلود، بقناعة واحدة: العطر لا يعلن عن نفسه. يصل بعد وصولك بلحظة، ويبقى بعد رحيلك بلحظة.',
'We work with a handful of growers, source resins and woods by the kilogram rather than the tonne, and refuse anything that cannot age gracefully on skin.':'نعمل مع حفنة من المزارعين، ونشتري الراتنجات والأخشاب بالكيلوغرام لا بالطن، ونرفض كل ما لا يتقدّم بأناقة على البشرة.',
'Inès Valcourt, founder & perfumer':'إينيس فالكور، المؤسِّسة وخبيرة العطور',
'Fragrance Notes':'مكوّنات العطر','The anatomy of':'تشريح عطر','Top':'القمة','Heart':'القلب','Base':'القاعدة',
'Top · 0–15 min':'القمة · ٠–١٥ دقيقة','Heart · 1–4 hrs':'القلب · ١–٤ ساعات','Base · 6+ hrs':'القاعدة · ٦+ ساعات',
'Saffron':'زعفران','Dry, leathery threads that open the composition with a quiet spark.':'خيوط جافة بلمسة جلدية تفتتح التركيبة بشرارة هادئة.',
'Bergamot':'برغموت','A cool, bitter peel to lift the first minutes.':'قشرة باردة مُرّة ترفع اللحظات الأولى.',
'Myrrh':'مرّ','Warm, resinous and faintly smoked — the pulse of the blend.':'دافئ راتنجي وبه أثر دخان خفيف — نبض التركيبة.',
'Damask rose':'ورد دمشقي','Dark petals, more velvet than perfume.':'بتلات داكنة، أقرب إلى المخمل منها إلى العطر.',
'Amber':'عنبر','Honeyed and slow, it holds the skin for a full day.':'عسلي وبطيء، يلازم البشرة يومًا كاملًا.',
'Labdanum':'لادن','Balsamic, animalic, softly sweet.':'بلسمي حيواني بحلاوة ناعمة.',
'The Signature Experience':'التجربة الخاصة','Wear it like':'ارتدِه كأنه','a memory':'ذكرى',
'We design fragrance as an experience of time. Every bottle ships with a fabric-wrapped sample, a handwritten wear note and a lifetime refill — so the ritual outlasts the glass.':'نصمّم العطر كتجربة مع الزمن. تصلك كل زجاجة مع عيّنة ملفوفة بالقماش، وبطاقة مكتوبة بخط اليد، وإعادة تعبئة مدى الحياة — ليبقى الطقس أطول من الزجاج.',
'Discover':'اكتشف','Sample the three extraits at home for a week.':'جرّب العطور الثلاثة في بيتك لمدة أسبوع.',
'Compose':'اختر','Choose the one that settles into your skin.':'اختر العطر الذي يستقر على بشرتك.',
'Return':'عُد','Refill, forever, in the same glass.':'أعد التعبئة للأبد، في الزجاجة نفسها.',
'Slow maceration':'تخمير بطيء','Hand-poured':'صبّ يدوي','Refillable glass':'زجاج قابل للتعبئة','Ninety days':'تسعون يومًا',
'Instagram':'إنستغرام','Pinterest':'بنترست','Journal':'المجلة',
'© 2026 Velora Parfums':'© ٢٠٢٦ فيلورا بارفان','Paris · Grasse · Cairo':'باريس · غراس · القاهرة'
};
export const L=createContext({lang:'en',setLang:()=>{},t:s=>s});
export const useL=()=>useContext(L);
