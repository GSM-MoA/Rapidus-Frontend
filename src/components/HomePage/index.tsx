import axios, { AxiosError } from "axios";
import * as SVG from "@/../public/svg";
import { useEffect, useState } from "react";
import Image from "next/image";
import API from "@/api";
import { BestGalleryType } from '@/types/components/BestGalleryType';
import Footer from "../Footer";
import * as S from "./style";


function HomePage() {
  const [bestImg, setBestImg] = useState<BestGalleryType[]>([]);

  const handleFetchError = (error: AxiosError, id: number) => {
    if (axios.isAxiosError(error) && error.response) {
      if (error.response.status === 404) {
        console.warn(`Image for ID ${id} not found. Skipping...`);
      } else {
        console.error(`Error fetching image for ID ${id}:`, error);
      }
    } else {
      console.error(`Non-Axios error fetching image for ID ${id}:`, error);
    }
  };

  useEffect(() => {
    const fetchBestImages = async () => {
      for (let id = 0; id < 3; id += 1) {
        try {
          const image = await API.get<BestGalleryType>(`/draw/most-liked/type/${id + 1}`);
          console.log(image)
          setBestImg((prev) => [...prev, {
             id: image.data.id,
             filePath: image.data.filePath,
             likes:image.data.likes,
             theme:image.data.theme,
             type:image.data.type 
            }]);
        } catch (error: any) {
          handleFetchError(error, id);
        }
      }
    };

    fetchBestImages();
  }, []);

  return (
    <S.HomePageContainer>
      <S.TextContainer>
        <S.HomePageMainText>
          <p>
            제한 시간 안에 그림을 그려 보세요
            <br />
            여러분의 도전을 환영합니다
            <br />
          </p>
        </S.HomePageMainText>
        <S.HomePageSubText>
          <p>
            저희는 여러분의 더 나은 경험을 위해
            <br />
            언제나 노력하고 있습니다
            <br />
          </p>
        </S.HomePageSubText>
        <S.HomePageRankText>
          <span>Best 3rd</span>
        </S.HomePageRankText>
      </S.TextContainer>
      <S.HomePageCanvas>
        {bestImg.map((list) => (
          <S.ImageFrame key={list.id}>
            <SVG.CanvasImage />
            <S.ThemeStyle>주제:{list.theme}</S.ThemeStyle>
            <S.BestImg>
              <Image src={list.filePath} alt="best img" fill sizes="100%" priority/>
            </S.BestImg>
            <S.LikesStyle>Likes:{list.likes}</S.LikesStyle>
          </S.ImageFrame>
        ))}
      </S.HomePageCanvas>
      <Footer />
    </S.HomePageContainer>
  );
}

export default HomePage;
