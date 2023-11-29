import { StaticImageData } from "next/image";

export interface searchBarProps {
    title:string
    icon: StaticImageData;
    alt: string;
    width: number;
    height: number;
    placeholder?: string;
    iconGrid: StaticImageData;
    iconColumn: StaticImageData;
}