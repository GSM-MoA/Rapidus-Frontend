import { StaticImageData } from "next/image";

export interface InformationProps {
    imageSrc: StaticImageData;
    altText: string;
    title: string;
    content: React.ReactNode;
    title2?: string;
    content2?:React.ReactNode;
}