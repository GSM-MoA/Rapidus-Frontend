import DrawPage from '@/components/DrawPage'
import Footer from '@/components/Footer'
import { useState } from 'react';

export default function ThirtySecondsDraw() {
    return (
     <>
       <DrawPage time={2} />
        <Footer/>
     </>
    )
}
