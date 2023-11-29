"use client";
import Image from "next/image";
import menu from '@/../public/menu.png';
import { NavBarProps } from "@/app/interface/navBarProps";
import { useState } from "react";
import './navBar.scss'


export default function NavBar({
  image,
  alt,
  width,
  height,
  firstLink,
  secondLink
}: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="nav-bar">
      <div className="logo">
        <Image
          className="image-logo"
          src={image}
          alt={alt}
          width={width}
          height={height}
        />
      </div>
      <div className="links">
        <a className="first-link" >{firstLink}</a>
        <a>{secondLink}</a>
      </div>
      <div className='icon-menu-mobile' onClick={() => setIsOpen(!isOpen)}>
        <Image
          src={menu}
          alt='menu'
          width='25'
          height='25'
        />
      </div>
      <div className={`menu-mobile ${isOpen ? "open" : "close"}`}>
        <a>{firstLink}</a>
        <a>{secondLink}</a>
      </div>
    </nav>
  )
}