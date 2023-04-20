import Passaport from '@/components/Passaport'
import PassaporteAntecipado from '@/public/images/tickets/antecipado.png'
import PassaporteEncantado from '@/public/images/tickets/encantado.png'
import PassaporteEspetacular from '@/public/images/tickets/espetacular.png'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Passaports() {
  return (
    <section>
      <div className="container mx-auto py-8">
        <h2 className="font-black text-3xl text-blue-100 mb-5">Passaportes</h2>
        <Swiper spaceBetween={20}>
          <SwiperSlide className="max-w-[600px]">
            <Passaport
              price={39.97}
              amount={1}
              name="Passaporte Antecipado"
              background="yellow"
              image={PassaporteAntecipado}
              href="https://pague.yuupe.com/produtos/7"
            />
          </SwiperSlide>
          <SwiperSlide className="max-w-[600px]">
            <Passaport
              price={109.97}
              amount={2}
              background="red"
              name="Passaporte Encantado"
              image={PassaporteEncantado}
              href="https://pague.yuupe.com/produtos/3"
            />
          </SwiperSlide>
          <SwiperSlide className="max-w-[600px]">
            <Passaport
              price={149.97}
              amount={3}
              background="green"
              name="Passaporte Espetacular"
              image={PassaporteEspetacular}
              href="https://pague.yuupe.com/produtos/4"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}