'use client';

import { styled } from 'styled-components';

import { Button } from '@Atoms/Button';

export const BaseGenerateControlButton = styled(Button)`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5px;

    width: 220px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 3px;
    border: 1px solid #616161;
    background: #373737;

    color: #bdbdbd;
    font-family: Pretendard Variable;
    font-size: 12px;
    font-weight: 500;
    line-height: 10px;

    &: hover {
        background: #676767;
    }
`;
