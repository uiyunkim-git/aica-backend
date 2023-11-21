'use client';

import styled from 'styled-components';

export const BoxContainer = styled.div`
    display: flex;
    background: none;
    border: none;
`;

// For Storybook sample of Layout Components (Box, Container, RowContainer)
export const SampleContent = styled.div`
    width: 80px;
    height: 80px;
    padding: 4px;

    background-color: rgb(240, 240, 240);
`;

export const SampleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding-right: 32px;
`;
