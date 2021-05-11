/**
 * Components - Home - Testimonial
 */

// UI
import { Carousel, Container } from '@drykiss/industry-ui'

// Components
import { CarouselNav } from '../../common/carouselNav/carouselNav'
import { SectionHeading } from '../../common/typography/sectionHeading'
import { TestimonialItem } from './item'
import { testimonialData } from './data'

export const HomeTestimonial = () => {
  return (
    <Container>
      <SectionHeading content="Testimonials" />

      <Carousel
        fullWidth
        leftNavComponent={<CarouselNav left />}
        rightNavComponent={<CarouselNav right />}
        height="75px"
        numberOfItems={1}
        slides={testimonialData.map((testimonial) => ({
          node: <TestimonialItem key={testimonial.name} {...testimonial} />,
          text: ' '
        }))}
      />
    </Container>
  )
}
