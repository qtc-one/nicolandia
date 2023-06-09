import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type PassaportSlideProps = {
  href: string
}

export type FrontsideProps = {
  name: string
  image: StaticImageData
}

export type BacksideProps = {
  name: string
  amount: number
  price: number
  background: 'red' | 'green' | 'yellow' | 'blue'
}

export default function PassaportSlide({
  href,
  name,
  image,
  amount,
  price,
  background,
}: FrontsideProps & BacksideProps & PassaportSlideProps) {
  return (
    <Link href={href} className="relative group">
      <Frontside name={name} image={image} />
      <Backside name={name} amount={amount} price={price} background={background} />
    </Link>
  )
}

function Frontside({ name, image }: FrontsideProps) {
  return (
    <div className="transition-all duration-500 rotate-y-0 group-hover:opacity-0 group-hover:rotate-y-180">
      <Image className="rounded-xl" src={image} alt={name} />
    </div>
  )
}

function Backside({ name, amount, price, background }: BacksideProps) {
  const backgrounds = {
    red: 'bg-red',
    green: 'bg-green-200',
    yellow: 'bg-yellow',
    blue: 'bg-blue-200',
  }
  return (
    <div
      className={`absolute ${backgrounds[background]} opacity-0 top-0 left-0 w-full h-full -rotate-y-180 transition-all duration-500 group-hover:opacity-100 group-hover:rotate-y-0 rounded-xl`}
    >
      <div className="p-10 text-center text-gray-200 drop-shadow">
        <h3 className="font-black text-3xl">{name}</h3>
        <p className="font-bold">
          Para {amount} {amount > 1 ? 'pessoas' : 'pessoa'}
        </p>
        <div className="text-sm my-4 space-y-1">
          <p>VÁLIDO POR 30 DIAS.</p>
          <p>VÁLIDO SOMENTE PARA COMPRAS ONLINE</p>
          <p>VÁLIDO DE SEXTA A DOMINGO OU FERIADOS.</p>
          <p>VÁLIDO SOMENTE DENTRO DO CALENDÁRIO OPERACIONAL DO PARQUE.</p>
        </div>
        <p className="text-4xl font-bold">
          {price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
          })}
        </p>
      </div>
    </div>
  )
}
