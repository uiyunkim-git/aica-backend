'use client';

import styled from 'styled-components';

export const ButtonContainer = styled.button`
    cursor: pointer;
    border: none;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    &: disabled {
        pointer-events: none;
    }

    transition: all 0.2s;

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    white-space: nowrap;

    user-select: none;
`;
