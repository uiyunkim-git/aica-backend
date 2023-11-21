'use client';

import styled from 'styled-components';

import { Caption2, WHITE } from '@Styles';
import { Text } from '@Atoms/Typography';

export const PluginExplanationWrapper = styled.div`
    align-self: flex-end;

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: white;
    word-break: keep-all;

    width: 190px;
`;

// TODO: merge into Typography after define new font set
export const PluginExplanationText = styled(Text)`
    color: ${WHITE};
    ${Caption2};
    line-height: 15px;
`;
