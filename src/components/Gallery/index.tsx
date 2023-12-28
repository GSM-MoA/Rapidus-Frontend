import React, { useState, useEffect } from 'react';
import * as S from './style'
import API from '@/api';
import { GalleryImageType } from '@/types/components/GalleryImageType';
import Image from 'next/image';
import * as SVG from '@/../public/svg'

export default function Gallery({ time }: { time: number }) {
    const [images, setImages] = useState<GalleryImageType[]>([]);

    useEffect(() => {
        API.get(`/draw/search/type/${time}`)
            .then(response => {
                setImages(response.data);
            })
            .catch(error => {
                console.error('이미지를 불러오는 중 에러 발생:', error);
            });
    }, [time, images]);

    const handleLike = (id: number) => {
        API.post(`/draw/${id}/like`)
            .catch(error => {
                console.error('이미지를 불러오는 중 에러 발생:', error);
            });
    };

    return (
        <S.GalleryContainer>
            <S.GalleryWrapper>
                {images.map((image, index) => (
                    <S.GalleryFlame key={index}>
                        <S.ThemeStyle>
                            <b>주제:{image.theme}</b>
                        </S.ThemeStyle>
                        <S.ImageStyle>
                            <Image
                                src={image.filePath}
                                alt={`Image ${image.id}`}
                                sizes='100%'
                                fill
                            />
                        </S.ImageStyle>
                        <S.LikesLocation>
                            <span>Likes: {image.likes}</span>
                            <S.LikesButton onClick={() => handleLike(image.id)}>
                                <SVG.LikesIcon/>
                            </S.LikesButton>
                        </S.LikesLocation>
                    </S.GalleryFlame>
                ))}
            </S.GalleryWrapper>
        </S.GalleryContainer>
    );
}
