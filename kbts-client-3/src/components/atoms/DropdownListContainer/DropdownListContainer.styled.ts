'use client';

import { styled } from 'styled-components';

import { Container } from '@Atoms/Container';

export const DropdownListContainer = styled(Container)`
    position: absolute;
    display: none;
    gap: 5px;

    width: fit-content;

    padding: 5px;
    border-radius: 6px;
    background: #181818;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
`;
