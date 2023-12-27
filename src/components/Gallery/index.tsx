import React, { useState, useEffect } from 'react';
import { GalleryContainer } from './style';
import Image from 'next/image';
import API from '@/api';
import { GalleryImageType } from '@/types/components/GalleryImageType';

export default function Gallery({ time }:{time:number}) {
  const [images, setImages] = useState<GalleryImageType[]>([]);

  useEffect(() => {
    API.get(`/draw/search/type/${time}`)
      .then(response => {
        setImages(response.data);
      })
      .catch(error => {
        console.error('이미지를 불러오는 중 에러 발생:', error);
      });
  }, [time,images]);

  const handleLike = (id: number) => {
    API.post(`/draw/${id}/like`)
    .then(response => {
      setImages(response.data);
    })
    .catch(error => {
      console.error('이미지를 불러오는 중 에러 발생:', error);
    });
  };

  return (
    <GalleryContainer>
      {images.map((image, index) => (
        <div key={index}>
          <Image src={image.filePath} alt={`Image ${image.id}`} />
            <span>Likes: {image.likes}</span>
            <button onClick={() => handleLike(image.id)}>Like</button>
        </div>
      ))}
    </GalleryContainer>
  );
}
