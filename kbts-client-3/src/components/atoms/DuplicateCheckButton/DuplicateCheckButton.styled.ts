'use client';

import styled from 'styled-components';

import { Button } from '@Atoms/Button';

export const BaseDuplicateCheckButton = styled(Button)<{ isValid?: boolean }>`
    ${({ isValid }) => getStyle(isValid)}

    background: none;
    flex-direction: row;
    align-items: center;
    gap: 4px;

    border-radius: 4px;

    padding: 3px 5px;

    &: hover {
        background: rgba(255, 255, 255, 0.2);
    }
`;

const getStyle = (isValid: boolean | undefined) => {
    if (isValid === undefined)
        return `color: #757575; path { stroke: #757575; }`;
    if (isValid) return `color: #014CF6; path { stroke: #014CF6; }`;
    return `color: #E10000; path { fill: #E10000; }`;
};
