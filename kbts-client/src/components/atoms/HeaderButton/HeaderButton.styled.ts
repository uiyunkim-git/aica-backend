'use client';

import { styled } from 'styled-components';

import { Button } from '@Atoms/Button';

export const BaseHeaderButton = styled(Button)<{ isSelected: boolean }>`
    background: none;

    & > span {
        font-size: 18px;
        ${({ isSelected }) =>
            isSelected
                ? `font-weight: 700; opacity: 1; color: #3674FF;`
                : `font-weight: 500; opacity: 0.5; color: white;`}
        line-height: 26.444px;
        letter-spacing: 0.5px;

        transition: all 0.2s;
    }
    &:hover > span {
        opacity: 0.8;
    }
`;
