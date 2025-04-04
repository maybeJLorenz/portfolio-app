import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Header = ({ name, pages}) => {
    return (
        <header className='flex flex-col reletive bg-linear-557AFF w-full h-48'>
            <div className=''> 
                <nav className=''>
                    {pages.map((page) => {
                        return(
                            <Link 
                                aria-label={page.label}
                                key={page.id} 
                                href={page.link}
                                className=''
                            >
                                {page.label}
                            </Link>
                        );
                    })}
                </nav>
                <h1 className=''> {name} </h1>
            </div>
            <Image 
                priority 
                height={400} 
                width={400} 
                className='' 
                src='/images/me.jpeg'
                alt={`Image of ${name}`} 
                aria-label={`Image of ${name}`} 
            />
        </header>);
};