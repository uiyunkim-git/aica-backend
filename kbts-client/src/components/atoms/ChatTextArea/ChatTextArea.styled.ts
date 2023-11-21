'use client';

import { styled } from 'styled-components';

import { TextArea } from '@Atoms/TextArea';

export const BaseChatTextArea = styled(TextArea)`
    color: white;
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 300;
    line-height: 27px;

    &::placeholder {
        color: #bdbdbd;
    }
`;
