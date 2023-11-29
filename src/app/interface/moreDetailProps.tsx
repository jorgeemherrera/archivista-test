import { StaticImageData } from "next/image";

export interface moreDetailsProps {
    content?: string;
    description: string;
    image: StaticImageData;
    status: string;
    title: string;
}