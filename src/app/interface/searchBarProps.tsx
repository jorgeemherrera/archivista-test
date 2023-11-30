import { StaticImageData } from "next/image";

export interface searchBarProps {
    alt: string;
    height: number;
    icon: StaticImageData;
    iconColumn: StaticImageData;
    iconGrid: StaticImageData;
    placeholder?: string;
    title:string
    width: number;
    onChangeView:any;
    onSearch:any;
}