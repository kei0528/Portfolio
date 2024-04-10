import { type JSX } from 'react'

import { Headline } from '../../uis/Headline'

export const About = (): JSX.Element => {
  return (
    <section>
      <Headline>## Hej!</Headline>
      <div className='grid gap-4'>
        <p>
          Hi, I&apos;m Keisuke – a software developer, father of two wild and wonderful
          boys, and a passionate angler living deep in the Swedish forest in a house
          that&apos;s been standing for over 150 years.
        </p>
        <p>
          By day (and often into the night), I&apos;m fully immersed in code – mostly
          writing TypeScript. But when I&apos;m not at the keyboard, you&apos;ll find me
          fishing in quiet lakes, renovating this charming-but-demanding old house, or
          foraging mushrooms and berries in the forest. Life is a bit like a full-time
          marathon – but my cat makes sure I get my daily moment of peace.
        </p>
        <p>
          Oh! Almost forgot to write – before becoming a developer, I used to work as a
          barista, and I still take coffee very seriously. I enjoy bright and fruity
          coffees with a hint of floral notes – something like a good Ethiopian washed
          brew really hits the spot.
        </p>
        <p>
          I love building things and solving problems – whether it&apos;s software, a
          kitchen cabinet, or the perfect cup of coffee. I find joy in learning,
          improving, and staying close to nature while raising my kids.
        </p>
      </div>
    </section>
  )
}
