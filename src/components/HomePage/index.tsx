import * as S from "./style";
import * as SVG from '../../../public/svg'
import { useEffect, useState } from "react";
import Image from "next/image";
import { BestGalleryType } from "@/types/components/BestGalleryType";
import API from "@/api";
import Footer from "../Footer";
import axios, { AxiosError } from "axios";


function HomePage() {
    const [bestImg, setBestImg] = useState<BestGalleryType[]>([]);

    useEffect(() => {
        const fetchBestImages = async () => {
          for (let id = 0; id < 3; id++) {
            try {
              const res = await API.get(`/draw/most-liked/type/${id + 1}`);             

              const imageRes = await API.get<Blob>(`/draw/${res.data.id}/image`, { responseType: 'blob' });
      
              const blob = new Blob([imageRes.data]);
              const url = URL.createObjectURL(blob);
      
              setBestImg(prev => [...prev, { key: id, url: url }]);
            } catch (error:any) {
              handleFetchError(error, id);
            }
          }
        };
      
        fetchBestImages();
      }, []);

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


    return (
        <S.HomePageContainer>
            <S.TextContainer>
                <S.HomePageMainText>
                    <p>
                        제한 시간안에 그림을 그려 보세요<br />
                        여러분의 도전을 환영합니다<br />
                    </p>
                </S.HomePageMainText>
                <S.HomePageSubText>
                    <p>
                        저희는 여러분의 더 나은 경험을 위해<br />
                        언제나 노력하고 있습니다<br />
                    </p>
                </S.HomePageSubText>
                <S.HomePageRankText>
                    <span>
                        Best 3rd
                    </span>
                </S.HomePageRankText>
            </S.TextContainer>
            <S.HomePageCanvas>
                {bestImg.map((list) => {
                    return (
                        <div key={list.key}>
                            <SVG.CanvasImage />
                            <S.BestImg>
                                <Image src={list.url} alt="best img" fill sizes="100%" />
                            </S.BestImg>
                        </div>
                    )
                })}
            </S.HomePageCanvas>
            <Footer />
        </S.HomePageContainer>
    )
}

export default HomePage;