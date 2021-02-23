/**
 * Components - Icons - Air Conditioner
 */

// React
import React from 'react'

// UI
import { propTypes } from '../props'
import { IconWrapper } from '../wrapper'

export const AirConditionerIcon = (props) => {
  return (
    <IconWrapper name='iconAirConditioner' {...props} mainSize={60}>
      <path d='m11 10.67c.5522847 0 1-.4477153 1-1v-5.67c0-1.1045695.8954305-2 2-2h3v4c0 2.209139 1.790861 4 4 4h28c2.209139 0 4-1.790861 4-4v-4h3c1.1045695 0 2 .8954305 2 2v17c0 1.1045695-.8954305 2-2 2h-3.142c-.4545933-1.7606851-2.0395884-2.9931852-3.858-3h-15.34c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1h15.34c1.1045695 0 2 .8954305 2 2v2h-16.02c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1h16.02c1.1045695 0 2-.8954305 2-2v-1h3c2.209139 0 4-1.790861 4-4v-17c0-2.209139-1.790861-4-4-4h-42c-2.209139 0-4 1.790861-4 4v5.67c0 .5522847.4477153 1 1 1zm40-8.67v4c0 1.1045695-.8954305 2-2 2h-28c-1.1045695 0-2-.8954305-2-2v-4z' />
      <path d='m52 14h3c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1h-3c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1z' />
      <path d='m52 18h3c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1h-3c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1z' />
      <path d='m43 46v-14c0-.5522847-.4477153-1-1-1s-1 .4477153-1 1v14c0 .5522847.4477153 1 1 1s1-.4477153 1-1z' />
      <path d='m0 28c0 8.836556 7.163444 16 16 16s16-7.163444 16-16-7.163444-16-16-16c-8.8322157.0104696-15.98953038 7.1677843-16 16zm16-14c7.7319865 0 14 6.2680135 14 14s-6.2680135 14-14 14-14-6.2680135-14-14c.00826732-7.7285595 6.27144053-13.9917327 14-14z' />
      <path d='m6.034 26.131c.11683968.4375352.513133.7419344.966.742.0875153.0000462.17463598-.0117268.259-.035l3.229-.865 3.512 2.027-3.512 2.027-3.229-.865c-.3486122-.1036823-.72603054-.0099144-.98558469.2448642-.25955414.2547786-.36031391.6303908-.26312256.9808681.09719136.3504773.37700731.6205514.73070725.7052677l2.664.714-.714 2.665c-.06956524.256888-.03385886.5309094.09921336.7613927s.35253131.3984129.60978664.4666073c.0846917.0233384.17215152.0351119.26.035.4524951-.0005181.8482565-.3048238.965-.742l.865-3.23 3.51-2.031v4.055l-2.364 2.364c-.2599566.2510745-.3642126.6228779-.2726972.9725073.0915155.3496295.3645604.6226744.7141899.7141899.3496294.0915154.7214328-.0127406.9725073-.2726972l1.95-1.95 1.95 1.95c.2510745.2599566.6228779.3642126.9725073.2726972.3496295-.0915155.6226744-.3645604.7141899-.7141899.0915154-.3496294-.0127406-.7214328-.2726972-.9725073l-2.364-2.364v-4.055l3.512 2.027.865 3.23c.1167435.4371762.5125049.7414819.965.742.0878485.0001119.1753083-.0116616.26-.035.5330514-.1429996.8494732-.6908077.707-1.224l-.709-2.665 2.664-.714c.3536999-.0847163.6335159-.3547904.7307072-.7052677.0971914-.3504773-.0035684-.7260895-.2631225-.9808681-.2595542-.2547786-.6369725-.3485465-.9855847-.2448642l-3.229.865-3.517-2.027 3.512-2.027 3.229.865c.084364.0232732.1714847.0350462.259.035.5019729.0002301.9263288-.3717159.991892-.8693888.0655632-.497673-.247986-.9668303-.732892-1.0966112l-2.659-.714.714-2.665c.1398151-.5324122-.1769484-1.0777088-.7087028-1.2200053-.5317543-.1422966-1.0785222.1719204-1.2232972.7030053l-.865 3.23-3.517 2.027v-4.055l2.364-2.364c.3789722-.3923789.3735524-1.0160848-.0121814-1.4018186s-1.0094397-.3911536-1.4018186-.0121814l-1.95 1.95-1.95-1.95c-.3923789-.3789722-1.0160848-.3735524-1.4018186.0121814s-.3911536 1.0094397-.0121814 1.4018186l2.364 2.364v4.055l-3.512-2.027-.865-3.23c-.144775-.5310849-.6915429-.8453019-1.22329723-.7030053-.53175434.1422965-.84851786.6875931-.70870277 1.2200053l.709 2.665-2.664.714c-.53102836.1452098-.84481338.6923221-.702 1.224z' />
      <path d='m31.745 46.1c-.3683851-.411429-1.0005394-.4463497-1.412-.078-1.3701194 1.2257488-1.7283312 3.2275796-.8682981 4.8523966.860033 1.624817 2.7168434 2.4542127 4.5008701 2.0104382 1.7840268-.4437746 3.0358641-2.0464428 3.034428-3.8848348v-17c0-.5522847-.4477153-1-1-1s-1 .4477153-1 1v17c.0000046.9190868-.6263896 1.7198691-1.5184362 1.9411686-.8920466.2212994-1.8200915-.1938566-2.2496648-1.0063758-.4295733-.8125191-.2500828-1.8132214.435101-2.4257928.4094636-.3681023.444331-.997951.078-1.409z' />
      <path d='m48 31c-.5522847 0-1 .4477153-1 1v17c-.0000578 1.83802 1.2524832 3.4395253 3.03637 3.8823181 1.7838867.4427928 3.6399451-.3871022 4.4993974-2.011805.8594523-1.6247027.5010748-3.6260133-.8687674-4.8515131-.4121505-.3621698-1.0391465-.3246171-1.4051229.0841571-.3659763.4087742-.3342398 1.0360915.0711229 1.4058429.6851838.6125714.8646743 1.6132737.435101 2.4257928-.4295733.8125192-1.3576182 1.2276752-2.2496648 1.0063758-.8920466-.2212995-1.5184408-1.0220818-1.5184362-1.9411686v-17c0-.5522847-.4477153-1-1-1z' />
    </IconWrapper>
  )
}

AirConditionerIcon.propTypes = propTypes
