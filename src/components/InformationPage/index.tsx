import React from 'react';
import Image from 'next/image';
import { InformationProps } from '@/types/components/InformationProps';
import * as S from './style';

export default function InformationPage({ 
    imageSrc, 
    altText, 
    title, 
    content, 
    title2,
    content2,
}: InformationProps) {
  return (
    <S.InformatinContainer>
      <S.InfoImageStyle>
        <Image src={imageSrc} alt={altText} fill sizes='100%' priority />
      </S.InfoImageStyle>
      <S.ExplanText>
        <S.Subtitle>
          {title}
        </S.Subtitle>
        <S.ContentsStyle>
          {content}
        </S.ContentsStyle>
      </S.ExplanText>

      <S.ExplanText>
        <S.Subtitle>
          {title2}
        </S.Subtitle>
        <S.ContentsStyle>
          {content2}
        </S.ContentsStyle>
      </S.ExplanText>
    </S.InformatinContainer>
  );
}
