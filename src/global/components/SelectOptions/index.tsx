import React from 'react'
import { Select } from './styles'
import { INumbersProps } from './types'

export function SelectOptionsComponent({
    itensPerPage,
    setItensPerPage,
}: INumbersProps) {
    return (
        <Select
            value={itensPerPage}
            onChange={(event) => setItensPerPage(Number(event.target.value))}
        >
            <option value={3}>3</option>
            <option value={6}>6</option>
            <option value={9}>9</option>
            <option value={12}>12</option>
        </Select>
    )
}
