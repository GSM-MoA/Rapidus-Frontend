import axios, { AxiosError } from "axios";
import * as S from "./style";
import * as SVG from "@/../public/svg";
import { useEffect, useState } from "react";
import Image from "next/image";
import { BestGalleryType } from "@/types/components/BestGalleryType";
import API from "@/api";
import Footer from "../Footer";

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
      for (let id = 0; id < 3; id++) {
        try {
          const res = await API.get(`/draw/most-liked/type/${id + 1}`);
          const image: string = await API.get(`/draw/${res.data.id}/image`);
          setBestImg((prev) => [...prev, { key: id, url: image }]);
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
          <div key={list.key}>
            <SVG.CanvasImage />
            <S.BestImg>
              <Image src={list.url} alt="best img" fill sizes="100%" />
            </S.BestImg>
          </div>
        ))}
      </S.HomePageCanvas>
      <Footer />
    </S.HomePageContainer>
  );
}

export default HomePage;
