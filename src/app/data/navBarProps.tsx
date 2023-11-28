import { StaticImageData } from "next/image";

export interface NavBarProps {
    image: StaticImageData;
    alt: string;
    width: number;
    height: number;
    firstLink: string;
    secondLink: string;
}