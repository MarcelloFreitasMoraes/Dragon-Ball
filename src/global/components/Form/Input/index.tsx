import { useRef, useEffect } from 'react'

import * as S from './styles'
import { IContentProps } from './types'

export function InputComponent({
    onClick,
    onChange,
    placeholder,
    value,
    iconSearch,
    iconSend,
}: IContentProps) {
    const focusInput = useRef<any>(null)

    useEffect(() => {
        focusInput.current.focus()
    }, [])

    return (
        <S.InputField>
            <input
                type="text"
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                ref={focusInput}
            />
            {iconSearch && (
                <button type="submit" onClick={onClick}>
                    <S.SearchIcon />
                </button>
            )}
            {iconSend && (
                <button type="submit" onClick={onClick}>
                    <S.SendIcon />
                </button>
            )}
        </S.InputField>
    )
}
