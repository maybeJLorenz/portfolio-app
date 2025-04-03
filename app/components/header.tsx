import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Header = ({data}) => {
    return (
        <header>
            <div> 
                <nav>
                    {data.map(page) => {
                        <Link 
                            aria-label={page.label}
                            key={page.id} 
                            href={page.link}
                            className=''
                        >
                            {" "}
                            {page.label}{" "}
                        </Link>
                    })}
                </nav>
                <h1 className=''> {data.name} </h1>
            </div>
            <Image 
                priority 
                height={400} 
                width={2000} 
                className='' 
                src=''
                alt='' 
                aria-label=""
            />
        </header>);
};