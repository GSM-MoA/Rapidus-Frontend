import { InformationProps } from '@/types/components/InformationProps';
import SpaceImg from '../../../../public/png/SpaceImg.png'
import InformationPage from '@/components/InformationPage';


export default function InfoMoa() {
    const infoMoa: InformationProps = {
        imageSrc: SpaceImg,
        altText: 'space img',
        title: 'MoA',
        content:(
          <>
            하늘에 떠다니는 구름처럼 다양한 관심사들이 모여 빛을 발하는 동아리 모아입니다. <br />
            우리는 모든 개개인의 관심사를 직접 하나의 웹 프로젝트로 엮어내며 자신의 창의성을 뽐내기 위해 노력합니다. <br />
            저희의 목표는 이 프로젝트를 접하는 사람들이 자신의 상상력을 마음껏 표현하도록 하는 것입니다. <br />
          </>
        ),
        title2:'Team.MOA',
        content2:(
          <div>
           허여준[FE]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;오진서[BE]
          </div>
        ),
      };

  return ( 
    <>
      <InformationPage {...infoMoa}/>
    </>
  )
}
