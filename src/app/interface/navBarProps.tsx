import { StaticImageData } from "next/image";

export interface NavBarProps {
    alt: string;
    firstLink: string;
    height: number;
    image: StaticImageData;
    secondLink: string;
    width: number;
    changeTheme?:any;
}