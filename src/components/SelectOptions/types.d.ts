import React, { SetStateAction } from 'react';

export interface INumbersProps {
    itensPerPage: number;
    setItensPerPage: React.Dispatch<SetStateAction<number>>;
}