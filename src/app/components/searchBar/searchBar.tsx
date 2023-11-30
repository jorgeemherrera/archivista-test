"use client";

import Image from 'next/image';
import './searchBar.scss'
import { searchBarProps } from '@/app/interface/searchBarProps';
import { useState } from 'react';


export default function SearchBar({
    title,
    icon,
    alt,
    width,
    height,
    placeholder,
    iconGrid,
    iconColumn,
    onChangeView,
    onSearch

}: searchBarProps) {
    const [view, setView] = useState('list');

    const onClickView = ( nuevaVista:any) => {
        setView(nuevaVista);
    };

    const handleInputChange = (e:any) => {
        const inputValue = e.target.value;
        onSearch(inputValue);
    };
    
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
                        data-testid="icon"
                    />
                    <input className="input-field-search" type="search" onChange={handleInputChange} placeholder={placeholder} />
                </div>
            </div>
            <div className='images-order'>
                <Image 
                    onClick={() => {
                        onClickView('list');
                        onChangeView('list');
                    }}
                    className={`icon-column-image list ${view === 'list' ? "active" : "inactive"}`}
                    src={iconColumn}
                    alt={alt}
                    width={width}
                    height={height}
                    data-testid="list-icon"
                />
                <Image
                    onClick={() => {
                        onClickView('cards');
                        onChangeView('cards'); 
                    }}
                    className={`icon-grid-image ${view === 'cards' ? "active" : "inactive"}`}
                    src={iconGrid}
                    alt={alt}
                    width={width}
                    height={height}
                    data-testid="grid-icon"
                />
            </div>

        </section>
    )
}