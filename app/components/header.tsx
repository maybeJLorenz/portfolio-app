import React from "react";
import Image from "next/image";
import Link from "next/link";

type HeaderProps = {
    name:string,
    pages: {
        id:number,
        label:string,
        link:string
    }[]
}

export const Header = ({ name, pages}: HeaderProps) => {
    return (
        <header className='flex flex-col relative bg-linear-557AFF w-full h-48'>
            <div className='flex flex-col justify-around h-full sm:px-6 px:1 bg-header z-10'> 
                <nav className='text-right flex flex-row sm:gap-6 self-end gap-1'>
                    {pages.map((page) => {
                        return(
                            <Link 
                                aria-label={page.label}
                                key={page.id} 
                                href={page.link}
                                className='px-6 py-2 min-w-100 hover:bg-blue hover:text-black font-oswald uppercase tracking-wide sm:bg-none
								bg-white duration-300 rounded'

                            >
                                {page.label}
                            </Link>
                        );
                    })}
                </nav>
                <h1 className='text-white font-display uppercase'> {name} </h1>
            </div>
            <Image 
                priority 
                height={400}
                width={2000} 
                className='w-full h-48 object-cover object-top absolute
                mb-6' 
                src='/images/city.jpg'
                alt={`Image of ${name}`} 
                aria-label={`Image of ${name}`} 
            />
        </header>);
};