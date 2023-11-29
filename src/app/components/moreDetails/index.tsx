"use client";
import Image from 'next/image';
import artBoard from '@/../public/Artboard.png'
import './moreDetails.scss'
import { Button, Container } from '@mui/material';
import { moreDetailsProps } from '@/app/interface/moreDetailProps';


export default function MoreDetails({
    status,
    title,
    description,
    image,
    content
}:moreDetailsProps) {
    return (
        <section className='main-section-more-details'>
            <Container className='record-box-certified'>
                <h3 className='certified-text'>Eternal Record 3820535 | <span>{status}</span></h3>
                <Button variant="contained" className='button-box-certified'>Print my Record</Button>
            </Container>
            <Container className='title-div-more-details'>
                <Image
                    className='image-title'
                    src={artBoard}
                    alt='artboard'
                    width={94}
                    height={104}
                />    
                <h1 className='title-text'>{title}</h1>
            </Container>
            <Container className='section-content'>
                <p className='paragraph-content'>{description}</p>
                <Image
                    className='image-content'
                    src={image}
                    alt='artboard'
                />
            </Container>
            <Container className='video-section'>
                {content}
            </Container>
        </section>

    )
}