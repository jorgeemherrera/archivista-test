'use client'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container } from '@mui/material';
import artBoard from '@/../public/Artboard.png'
import './cardList.scss'
import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '../../utils/dateUtils';



export default function CardList({ data }: any) {
  const recordsData = data.records;
  return (
    <Container className="card-container">
      {recordsData.map((item: any) => (
        <Link href={item.id}>
          <Card key={item.id} sx={{ maxWidth: 345 }} className="single-card">
            <CardActionArea>
              <CardMedia
                component="img"
                image={item.metadata.image}
                alt={item.metadata.title}
                width={309}
                height={256}
              />
              <CardContent className='container-second-content-card'>
                <Container className='container-second-content-card-text'>
                  <Typography className='title-card-list' gutterBottom variant="h5" component="div">
                    {item.metadata.title}
                  </Typography>
                  <Typography className='record-id' variant="body2" color="text.secondary">
                    Eternal Record &middot; {formatDate(item.createdAt)}
                  </Typography>
                </Container>
                <Image
                  className='image-board'
                  src={artBoard}
                  alt='Record image'
                  width={47}
                  height={52}
                />
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>

      ))}
    </Container>
  );
}