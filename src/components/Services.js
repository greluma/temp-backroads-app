// cspell:disable
import { Title } from './Title'
import { services } from '../data'
import { Service } from './Service'

export const Services = () => {
  return (
    <section className="section services" id="services">
      <Title list={['our', 'services']}></Title>

      <div className="section-center services-center">
        {services.map((service) => {
          return <Service service={service} key={service.id}></Service>
        })}
      </div>
    </section>
  )
}
