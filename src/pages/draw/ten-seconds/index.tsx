import DrawPage from '@/components/DrawPage'
import Footer from '@/components/Footer'
import { useState } from 'react';

export default function TenSecondsDraw() {
  
  return (
   <>
     <DrawPage time={1} />
      <Footer/>
   </>
  )
}
