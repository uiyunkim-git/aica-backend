'use client';

import { styled } from 'styled-components';

import { Box } from '@Atoms/Box';
import { Input } from '@Atoms/Input';

export const ChatRoomItemContainer = styled(Box)<{ $isFocused: boolean }>`
    background: black;
    opacity: 0.4;
    flex-shrink: 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 14px;

    width: 100%;
    height: 70px;
    border-radius: 10px;

    padding: 0 20px;

    cursor: pointer;
    transition: all 0.2s;

    ${({ $isFocused }) =>
        $isFocused
            ? `
    background: #575757;
        opacity: 1;
        .loadingSpinner {
            display: none;
        }
        .buttonGroup {
            display: flex;
        }
    `
            : `
    &: hover {
        background: #373737;
        opacity: 1;
        .loadingSpinner {
            display: none;
        }
        .buttonGroup {
            display: flex;
        }
    }`}
`;

export const ChatRoomTitleInput = styled(Input)`
    box-sizing: border-box;
    width: 100%;
    height: 26px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    text-align: left;
    color: white;
    font-size: 16px;
    font-family: Pretendard Variable;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.5px;
    pointer-events: none;

    &: focus {
        border: 1px solid #979797;
        pointer-events: auto;
    }
`;

export const ChatRoomSpinnerWrapper = styled(Box)`
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
`;
