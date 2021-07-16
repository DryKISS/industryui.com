/**
 * Components - Form - Rich Text Editor
 */

// Next
import dynamic from 'next/dynamic'

const RichTextInput = dynamic(() => import('./richEditor').then((mod) => mod.RichTextInput), {
  ssr: false
})

export { RichTextInput }
