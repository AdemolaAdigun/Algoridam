import React from 'react'
import { Icons } from './icons'
import Image from 'next/image'
import { Button } from './ui/button'

const HomeSection = () => {
  return (
    <section className="block min-h-screen w-full p-7 md:flex md:p-32">
        <div className='flex w-full flex-col'>
            <p className='mt-10 text-4xl font-bold md:pr-64'>Let&apos;s Build Ecommerce & Saas solutions</p>
            <p className='mt-10 md:pr-56'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget ligula ac metus pretium molestie quis scelerisque tellus. Nullam pellentesque sapien in felis iaculis tempor. Quisque eget magna in libero placerat tincidunt a eu magna. Duis eget congue velit, quis auctor mi. Pellentesque habitant morbi tristique senectus et netus et.</p>
            <Button className='mt-10 max-w-[200px]'>Lets talk 📞</Button>
        </div>
        <div className='mt-10 flex min-h-[200px] w-full items-center justify-center bg-gray-500'>Hi</div>
    </section>
  )
}

export default HomeSection