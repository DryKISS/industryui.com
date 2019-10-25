// global list of loaded js and css
const _loadedJs = []
const _loadedCss = []

export function loadjs (src, params = { async: false }) {
  if (_loadedJs.includes(src)) {
    return Promise.resolve()
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = src
    if (params.async) script.async = 1
    script.onload = () => { _loadedJs.push(src); resolve() }
    script.onerror = reject
    document.body.appendChild(script)
  })
}

export function loadcss (href, params = {}) {
  if (_loadedCss.includes(href)) {
    return Promise.resolve()
  }

  return new Promise((resolve, reject) => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = href
    link.onload = () => { _loadedCss.push(href); resolve() }
    link.onerror = reject
    // ? link.media = 'all'
    document.head.appendChild(link)
  })
}

// https://stackoverflow.com/a/32598826/1948511
export const canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement)
