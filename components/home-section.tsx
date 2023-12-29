import React from 'react'
import { Button } from './ui/button'

const HomeSection = () => {
  return (
    <section className="container block min-h-[100dvh] w-full md:flex md:gap-10 md:py-12">
      <div className='mt-28 flex min-h-[300px] w-full items-center justify-center border-[1px] border-accent md:max-h-[59dvh]'></div>
        <div className='mt-16 flex w-full flex-col'>
            <p className='mt-10 text-4xl font-bold md:pr-28'>Let&apos;s build e-commerce & Saas solutions</p>
            <p className='mt-10 md:pr-56'>Revolutionizing Digital Commerce: Your Gateway to Affordable and Innovative E-commerce & SaaS Solutions. Leveraging the Dutch software development market&apos;s acumen combined with global talent from our NestedLoop community, we bring you cost-effective, expert-driven solutions. By tapping into the skills of dedicated professionals in developing countries, we don&apos;t just create job opportunities but also ensure your business thrives on top-notch technology and creativity without breaking the bank.</p>
            <div className='flex gap-5'>
            <Button size={'lg'} className='mt-10 max-w-[200px]'>Lets talk</Button><Button size={'lg'} variant={'secondary'} className='mt-10 max-w-[200px]'>Our services</Button>
            </div>
        </div>
    </section>
  )
}

export default HomeSection