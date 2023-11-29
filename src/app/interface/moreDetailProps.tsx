import { StaticImageData } from "next/image";

export interface moreDetailsProps {
    status: string;
    title: string;
    description: string;
    image: StaticImageData;
    content?: string;
}