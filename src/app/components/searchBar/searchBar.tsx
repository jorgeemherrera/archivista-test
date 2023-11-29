"use client";

import Image from 'next/image';
import './searchBar.scss'
import { searchBarProps } from '@/app/interface/searchBarProps';


export default function SearchBar({
    title,
    icon,
    alt,
    width,
    height,
    placeholder,
    iconGrid,
    iconColumn
}: searchBarProps) {
    return (
        <section className='section-search-bar'>
            <div className='title-search'>
                <h1>{title}</h1>
                <div className='search-bar-parent'>
                    <Image
                        src={icon}
                        alt={alt}
                        width={width}
                        height={height}
                    />
                    <input className="input-field-search" type="search" placeholder={placeholder} />
                </div>
            </div>
            <div className='images-order'>
                <Image 
                    className='icon-column-image'
                    src={iconColumn}
                    alt={alt}
                    width={width}
                    height={height}
                />
                <Image
                    className='icon-grid-image'
                    src={iconGrid}
                    alt={alt}
                    width={width}
                    height={height}
                />
            </div>

        </section>
    )
}