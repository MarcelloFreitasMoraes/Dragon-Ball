import React, { useEffect } from 'react'
import { animated } from 'react-spring'

import { IOpenProps } from './type'

import * as S from './styles'

export function ModalComponent({ isOpen, children, isModalDark, animation, handleKeyPress }: IOpenProps) {

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [handleKeyPress]);

  return (
    <S.Background>
      <animated.div style={animation}>
        <S.Content isModalDark={isModalDark}>
          <S.Close onClick={isOpen} isModalDark={isModalDark} />
          {children}
        </S.Content>
      </animated.div>
    </S.Background>
  )
}
