'use client';

import styled from 'styled-components';

import { Container } from '@Atoms/Container';
import { Button } from '@Atoms/Button';
import { Heading2 } from '@Styles/fonts';
import { BLACK1, GRAY3 } from '@Styles/colors';
import { BLACK1_BACKGROUND } from '@Styles/themes';
import { Box } from '@Atoms/Box';

export const TabContainer = styled(Container)`
    width: fit-content;
    gap: 2px;
    position: relative;
`;

export const TabButton = styled(Button)<{ selected: boolean }>`
    padding: 4px 8px 0px 8px;
    border-radius: 4px;
    background-color: transparent;
    span {
        ${Heading2}
        color: ${({ selected }) => (selected ? BLACK1 : GRAY3)};
    }
`;

export const TabStatusBadge = styled(Box)`
    width: 14px;
    height: 14px;
    position: absolute;
    top: -6px;
    right: -2px;
    z-index: 9;
`;

export const UnderBar = styled(Container)<{ selected: boolean }>`
    height: 2px;
    border-radius: 2px;
    padding: 0px 8px;

    ::after {
        content: '';
        display: block;
        visibility: ${({ selected }) => (selected ? 'visible' : 'hidden')};
        width: 100%;
        height: 2px;

        border-radius: 4px;
        ${BLACK1_BACKGROUND}
    }
`;
