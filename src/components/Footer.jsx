import {useL} from '../i18n'

export default function Footer(){
 const {t}=useL();
 return(<footer><div className="wrap">
  <div className="big">VELORA</div>
  <div className="fg">
   <ul><li><a href="#collection">{t('Collection')}</a></li><li><a href="#story">{t('Our Story')}</a></li></ul>
   <ul><li><a href="#top">{t('Instagram')}</a></li><li><a href="#top">{t('Pinterest')}</a></li><li><a href="#top">{t('Journal')}</a></li></ul>
  </div>
  <div className="fine"><span>{t('© 2026 Velora Parfums')}</span><span>{t('Paris · Grasse · Cairo')}</span></div>
 </div></footer>);
}
