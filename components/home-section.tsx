import React from 'react'
import { Button } from './ui/button'

const HomeSection = () => {
  return (
    <section className="container block min-h-[100dvh] w-full md:flex md:py-12">
        <div className='mt-16 flex w-full flex-col'>
            <p className='mt-10 text-4xl font-bold md:pr-64'>Let&apos;s build e-commerce & Saas solutions</p>
            <p className='mt-10 md:pr-56'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget ligula ac metus pretium molestie quis scelerisque tellus. Nullam pellentesque sapien in felis iaculis tempor. Quisque eget magna in libero placerat tincidunt a eu magna. Duis eget congue velit, quis auctor mi. Pellentesque habitant morbi tristique senectus et netus et.</p>
            <div className='flex gap-5'>
            <Button size={'lg'} className='mt-10 max-w-[200px]'>Lets talk</Button><Button size={'lg'} variant={'secondary'} className='mt-10 max-w-[200px]'>Our services</Button>
            </div>
        </div>
        <div className='mt-28 flex min-h-[300px] w-full items-center justify-center bg-accent md:max-h-[350px]'>Algoridam</div>
    </section>
  )
}

export default HomeSection