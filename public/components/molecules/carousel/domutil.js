
// global list of loaded js and css
let _loaded_js = []
let _loaded_css = []


export function loadjs(src, params={async: false}) {
  if (_loaded_js.includes(src)) {
    console.debug(src, 'already loaded')
    return Promise.resolve()
  }

  return new Promise( (resolve, reject) => {
    const script = document.createElement('script')
    script.src = src
    if (params.async) script.async = 1
    script.onload = () => {_loaded_js.push(src); resolve()}
    script.onerror = reject
    document.body.appendChild(script)
  })
}


export function loadcss(href, params={}) {
  if (_loaded_css.includes(href)) {
    console.debug(href, 'already loaded')
    return Promise.resolve()
  }

  return new Promise( (resolve, reject) => {
    let link  = document.createElement('link')
    link.rel  = 'stylesheet'
    link.type = 'text/css'
    link.href = href
    link.onload = () => {_loaded_css.push(href); resolve()}
    link.onerror = reject
    //? link.media = 'all'
    document.head.appendChild(link)
  })
}


// https://stackoverflow.com/a/32598826/1948511
export const canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement)
