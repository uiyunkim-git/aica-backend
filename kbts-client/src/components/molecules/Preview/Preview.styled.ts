'use client';

import styled from 'styled-components';

import { Box } from '@Atoms/Box';
import { Button } from '@Atoms/Button';
import { Container } from '@Atoms/Container';
import { Text } from '@Atoms/Typography';
import { Input } from '@Atoms/Input';

export const PreviewContainer = styled(Container)`
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`;

export const PreviewChatContainter = styled(Container)`
    gap: 5px;
    width: 100%;
    height: 200px;

    overflow-y: overlay;
    padding: 10px;
    background: #373737;
`;

export const PreviewInfoContainer = styled(Container)`
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 96px;
    padding: 0 24px;
    background: #616161;
`;

export const PreviewTitleContainer = styled(Box)`
    align-items: center;
    gap: 8px;
    width: 100%;
`;

export const PreviewRenameButton = styled(Button)`
    background: none;
    border-radius: 6px;
    &: hover {
        path {
            opacity: 0.7;
        }
    }
`;

export const PreviewTimeText = styled(Text)`
    color: #b1b1b1;
    font-family: Pretendard Variable;
    font-size: 16;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0.4px;
`;
