/**
 * Our Work - Show
 */

// Next
import Head from 'next/head'

// UI
import { CareerShow } from '../../components/careers/show'
import { Page } from '../../components/common/page/page'
import { CAREERS } from '../../data/careers'

const PageCareerShow = ({ career }) => {
  const meta = {
    description: career.meta?.description || career.title,
    title: career.meta?.title || career.title
  }

  return (
    <Page heroHeading="Careers" heroSubHeading={career.title} meta={meta}>
      <Head>
        <meta content={career.cover} key="og:image" property="og:image" />
      </Head>

      <CareerShow data={career} />
    </Page>
  )
}

export async function getStaticPaths() {
  return {
    paths: CAREERS.map((item) => ({ params: { slug: item.slug } })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const career = CAREERS.find((item) => item.slug === slug)

  return {
    props: { career }
  }
}

PageCareerShow.defaultProps = {
  career: {}
}

export default PageCareerShow
