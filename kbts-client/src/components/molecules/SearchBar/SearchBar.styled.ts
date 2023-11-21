'use client';

import styled from 'styled-components';

import { RowContainer } from '@Atoms/RowContainer';
import { Body2, Caption1 } from '@Styles/fonts';
import { BLACK1, GRAY3, GRAY4, LIGHT_GRAY } from '@Styles/colors';
import { SHADOW_SOFT, WHITE_BACKGROUND } from '@Styles/themes';

export const SearchBarContainer = styled(RowContainer)<{ width?: string }>`
    flex: 1;

    width: ${({ width }) => width};
    height: 40px;
    gap: 8px;
`;

export const SearchTextFieldContainer = styled(RowContainer)<{
    $isFocused: boolean;
    border?: boolean;
    noShadow?: boolean;
}>`
    flex: 1;
    height: 100%;
    padding: 8px;
    gap: 8px;
    border: ${({ border }) => (border ? `1px solid ${LIGHT_GRAY}` : 'none')};
    border-radius: 8px;
    ${WHITE_BACKGROUND}
    ${({ noShadow }) => (noShadow ? '' : SHADOW_SOFT)}
  svg {
        path {
            fill: ${({ $isFocused }) => ($isFocused ? BLACK1 : GRAY3)};
        }
    }
`;

export const SearhTextField = styled.input`
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    border: none;

    flex: 1;
    color: ${BLACK1};
    ${Body2}

    &::placeholder {
        color: ${GRAY4};
    }
    :focus {
        outline: none;
    }
    :disabled {
        background: none;
    }
`;

export const EnterButton = styled.button<{ $isFocused: boolean }>`
    display: ${({ $isFocused }) => ($isFocused ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    padding: 0px;
    background: none;

    cursor: pointer;
    padding-right: 4px;
    gap: 4px;

    ${Caption1}
    color: ${GRAY4};

    ::before {
        content: '\u21b5';
        /* transform: scaleX(-1); */
    }
`;
