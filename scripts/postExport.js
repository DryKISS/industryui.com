/**
 * Post install script
 */

// Import
import fs from 'fs-extra'

// UI
import { formatDateStandard } from 'industry-ui/components/utils/formatDate'

// Data
import { Canonical } from '../config'
import getPages from '../config/pages'

const directory = 'out'

// Robots
const robotsTxt = `User-agent: *
Sitemap: ${Canonical}/sitemap.xml
Disallow:`

fs.writeFileSync(`${directory}/robots.txt`, robotsTxt)

// Sitemap
const pages = getPages()
const today = formatDateStandard(new Date())

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${Object.keys(pages)
    .map(path => {
      return `<url>
    <loc>${Canonical}${path}</loc>
    <lastmod>${
      pages[path].lastModified ? formatDateStandard(new Date(pages[path].lastModified)) : today
    }</lastmod>
  </url>\n  `
    })
    .join('')}
</urlset>`

fs.writeFileSync(`${directory}/sitemap.xml`, sitemapXml)
