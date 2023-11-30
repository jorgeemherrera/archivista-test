"use client"
import Image from 'next/image';
import logoImage from '../../../public/EternalRecordsLogo.png'
import artBoard from '@/../public/Artboard.png'
import './moreDetails.scss'
import { Button, Container } from '@mui/material';
import { usePathname } from 'next/navigation';
import data from '../api/data.json';

export default function MoreDetails({ dataRecords }: any) {
    dataRecords = data?.records;
    let statusItem: string = '';
    let metadataItem: any;

    const pathname = usePathname()

    const id = pathname.slice(1);

    const filteredData: any = dataRecords.filter((item: { id: string; }) => item.id === id);

    if (filteredData.length > 0) {
        const { id, status, createdAt, metadata } = filteredData[0];
        statusItem = status
        metadataItem = metadata
        console.log('filtrados', id, status, createdAt)
    }

    return (
        <>
            {
                filteredData.length > 0 ?
                    <section className='main-section-more-details'>
                        <Container className='record-box-certified'>
                            <h3 className='certified-text'>Eternal Record {id} | <span>{statusItem}</span></h3>
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
                            <h1 className='title-text'>{metadataItem.title}</h1>
                        </Container>
                        <Container className='section-content'>
                            <p className='paragraph-content'>{metadataItem.description}</p>
                            <Image
                                className='image-content'
                                src={metadataItem.image}
                                alt={metadataItem.title}
                                width={463}
                                height={353}
                            />
                        </Container>
                        <Container className='video-section'>
                            <div id="dangerouslySet" dangerouslySetInnerHTML={{ __html: metadataItem.additional_properties.content[0].content }}>
                            </div>
                            {metadataItem.description}
                        </Container>
                        <Container>
                            <hr></hr>
                            <Image
                                className="image-logo"
                                src={logoImage}
                                alt='logo-image'
                                width={253}
                                height={55}
                            />
                        </Container>

                    </section> : null
            }
        </>
    )
}