// cspell:disable

import { Title } from './Title'
import { tours } from '../data'
import { Tour } from './Tour'

export const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title list={['features', 'tours']}></Title>

      <div className="section-center featured-center">
        {tours.map((tour) => {
          return <Tour tour={tour} key={tour.id}></Tour>
        })}
      </div>
    </section>
  )
}
