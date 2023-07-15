import React from 'react'

import * as S from './styles'
import { INumberPages } from './type'

export function PaginationComponent({
    pages,
    setCurrentPage,
    currentPage,
}: INumberPages) {
    return (
        <S.Pagination>
            {Array.from(Array(pages), (item, index) => (
                // eslint-disable-next-line react/jsx-key
                <S.Button
                    onClick={(event: any) =>
                        setCurrentPage(Number(event.target.value))
                    }
                    value={index}
                    index={index}
                    currentPage={currentPage}
                >
                    {index + 1}
                </S.Button>
            ))}
        </S.Pagination>
    )
}
