import * as S from "./style";
import * as SVG from '../../../public/svg'
import { useEffect, useState } from "react";
import Image from "next/image";
import { BestGalleryType } from "@/types/components/BestGalleryType";
import API from "@/api";


function HomePage() {
    const [bestImg, setBestImg] = useState<BestGalleryType[]>([]);

    useEffect(() => {
        for (let id = 0; id < 3; id++) {
                API.get(`/draw/most-liked/type/${id + 1}`)
                .then((res) => {
                    API.get<Blob>(`/draw/${res.data.id}/image`, { responseType: 'blob' })
                        .then((res) => {
                            const blob = new Blob([res.data]);
                            const url = URL.createObjectURL(blob);
                            setBestImg(prev => [...prev, { key: id, url: url }]);
                        })
                })
        }
    }, [])

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