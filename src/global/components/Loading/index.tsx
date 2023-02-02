import React from 'react'
import Image from 'next/image';

import Loading from '../../assets/loading.gif';

import { Background } from './styles'

export function LoadingComponent() {
  return (
    <Background>
      <Image src={Loading} width={200} height={200} alt="Loading..." />
    </Background>
  )
}
