/**
 * Accordion
 */

// React
import React from 'react'

// UI
import Accordion from '../accordion'
import AccordionItem from '../components/accordionItem'
import Readme from '../README.md'
import { Data } from '../__mocks__/accordion'

export default {
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Molecules/Accordion'
}

export const main = (args) => (
  <Accordion {...args}>
    <AccordionItem title="Item 1">
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
      squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
      nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
      single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer
      labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
      Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
      haven't heard of them accusamus labore sustainable VHS.
    </AccordionItem>

    <AccordionItem title="Item 2">
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
      squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
      nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
      single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer
      labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
      Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
      haven't heard of them accusamus labore sustainable VHS.
    </AccordionItem>

    <AccordionItem title="Item 3">
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
      squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
      nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
      single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer
      labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
      Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
      haven't heard of them accusamus labore sustainable VHS.
    </AccordionItem>
  </Accordion>
)

export const open = () => <Accordion data={Data} />
export const closeOtherAccordsOnOneAccordOpening = () => <Accordion data={Data} closeOthersOnOpen />
