import { Oval } from 'react-loader-spinner';
import { useCallback, useRef } from 'react';

import { ChatStatusIcon } from '@Atoms/ChatStatusIcon';
import {
    ChatRoomItemContainer,
    ChatRoomSpinnerWrapper,
    ChatRoomTitleInput,
} from './ChatRoomItem.styled';
import { ChatRoomButtonGroup } from '@Molecules/ChatRoomButtonGroup';
import { ChatRoomStatusEnum, ChatRoomStatusType } from '@Types/chat';

interface ChatRoomItemProp {
    status?: ChatRoomStatusType;
    title?: string;
    $isFocused?: boolean;
    onClick?: () => void;
    onClickStop?: () => void;
    onClickDelete?: () => void;
    onClickShare?: () => void;
}

export function ChatRoomItem({
    status,
    title,
    $isFocused = false,
    onClick,
    onClickStop,
    onClickDelete,
    onClickShare,
}: ChatRoomItemProp) {
    const titleRef = useRef<HTMLInputElement | null>(null);

    const renameTitle = useCallback(() => {
        if (titleRef.current === null) return;
        titleRef.current.focus();
    }, []);

    return (
        <ChatRoomItemContainer $isFocused={$isFocused} onClick={onClick}>
            <ChatStatusIcon status={status} />
            <ChatRoomTitleInput
                ref={titleRef}
                defaultValue={title}
                placeholder="제목 입력"
            />
            {status === ChatRoomStatusEnum.LOADING && (
                <ChatRoomSpinnerWrapper className="loadingSpinner">
                    <Oval
                        height={24}
                        width={24}
                        color="white"
                        secondaryColor="white"
                        strokeWidth={5}
                        strokeWidthSecondary={5}
                    />
                </ChatRoomSpinnerWrapper>
            )}
            <ChatRoomButtonGroup
                className="buttonGroup"
                status={status}
                onClickStop={onClickStop}
                onClickDelete={onClickDelete}
                onClickShare={onClickShare}
                onClickRename={renameTitle}
            />
        </ChatRoomItemContainer>
    );
}
