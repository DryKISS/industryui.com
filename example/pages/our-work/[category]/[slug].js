/**
 * Our Work - Show
 */

// Next
import Head from 'next/head'

// UI
import { OurWorkShow } from '../../../components/ourWork/show'
import { Page } from '../../../components/common/page/page'
import { PORTFOLIO_FACEBOOK } from '../../../data/portfolio/facebook'
import { PORTFOLIO_MOBILE } from '../../../data/portfolio/mobile'
import { PORTFOLIO_SITES } from '../../../data/portfolio/sites'
import { PORTFOLIO_WORDPRESS } from '../../../data/portfolio/wordpress'

const DATA = [
  ...PORTFOLIO_SITES,
  ...PORTFOLIO_FACEBOOK,
  ...PORTFOLIO_WORDPRESS,
  ...PORTFOLIO_MOBILE
]

const PageOurWorkShow = ({ work }) => {
  const meta = {
    description: work.meta?.description || work.title,
    title: work.meta?.title || work.title,
    author: work.author,
    type: work.type
  }

  return (
    <Page
      heroHeading="Our Work"
      heroSubHeading="Talk to us to transform your projects idea into a working digital products"
      meta={meta}
    >
      <Head>
        <meta content={work.cover} key="og:image" property="og:image" />
      </Head>

      <OurWorkShow data={work} />
    </Page>
  )
}

PageOurWorkShow.defaultProps = {
  work: {}
}

export async function getStaticPaths() {
  return {
    paths: DATA.map((item) => ({ params: { category: item.type, slug: item.slug } })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const { category, slug } = params
  const work = DATA.find((item) => item.type === category && item.slug === slug)

  return {
    props: { work }
  }
}

export default PageOurWorkShow
