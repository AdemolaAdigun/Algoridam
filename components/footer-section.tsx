import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { NavItem } from '@/types/nav'
import Link from 'next/link'
import React from 'react'
import { Icons } from './icons'
import { Button, buttonVariants } from './ui/button'


interface FooterNavProps {
    items?: NavItem[]
}

const FooterSection = ({ items }: FooterNavProps) => {
    return (
        <div className='container mt-16 block min-h-[100dvh] w-full flex-col pt-80 md:flex md:py-12'>
            <div className='my-36 hidden min-h-[400px] flex-col items-center justify-center bg-accent md:flex'>
                <h1 className='text-center text-3xl font-bold'>Have an idea? Let us get your <br /> project started today!</h1>
                <Button className='mt-10 max-w-[200px]'>Get in touch</Button>
            </div>
            <div className='flex w-full items-center justify-center text-center text-accent'>
                <p>Copyright © 2024 <br />
                    Algoridam. All Rights Reserved</p>
            </div>
            <div className='mt-10 flex min-h-[100px] w-full flex-col items-center justify-center'>
                {items?.length ? (
                    <nav className="flex gap-6 md:flex">
                        {items?.map(
                            (item, index) =>
                                item.href && (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        className={cn(
                                            "flex items-center text-sm font-medium opacity-80 hover:text-accent"
                                        )}
                                    >
                                        {item.title}
                                    </Link>
                                )
                        )}
                    </nav>
                ) : null}

                <nav className="mt-10 flex items-center space-x-1">
                    <Link
                        href={siteConfig.links.linkedin}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div
                            className={buttonVariants({
                                size: "icon",
                                variant: "ghost",
                            })}
                        >
                            <Icons.linkedin className="h-5 w-5" />
                            <span className="sr-only">Linkedin</span>
                        </div>
                    </Link>
                </nav>
            </div>
        </div>
    )
}

export default FooterSection