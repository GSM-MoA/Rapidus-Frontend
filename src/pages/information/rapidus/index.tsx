import { InformationProps } from '@/types/components/InformationProps';
import InformationPage from '@/components/InformationPage';
import RapidusImg from '@/../public/png/RapidusImg.png'

export default function InfoRapidus() {
  const infoRapidus: InformationProps = {
    imageSrc: RapidusImg,
    altText: 'rapidus img',
    title: 'Rapidus',
    content: (
      <div>
        래피더스는 랜덤한 주제로 단 <b>10</b>초, <b>30</b>초, <b>1</b>분이라는 짧은 시간 동안 <br />
        잠재된 창의력을 발휘하고 예술적 소질을 펼칠 수 있는 독특한 프로젝트 입니다. <br />
        여러분이 그린 작품들은 갤러리에서 다른 사용자들과 공유되어, 전 세계 어디서든 <br />
        지금껏 경험하지 못했던 새롭고 창조적인 다양한 예술 작품을 즐길 수 있습니다. <br />
        여러분의 창의력과 예술적 역량을 마음껏 펼치며, 래피더스와 함께 예술의 새로운 지평을 열어보세요! <br />
      </div>
    ),
  };

  return <InformationPage
    imageSrc={infoRapidus.imageSrc}
    altText={infoRapidus.altText}
    title={infoRapidus.title}
    content={infoRapidus.content}
    title2={infoRapidus.title2}
    content2={infoRapidus.content2}
  />;
}
