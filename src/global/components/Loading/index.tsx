import React from 'react'
import Image from 'next/image'

import Loading from '../../../../public/loading.gif'

import { Background } from './styles'

export function LoadingComponent() {
    return (
        <Background>
            <Image src={Loading} width={300} height={300} alt="Loading..." />
        </Background>
    )
}
