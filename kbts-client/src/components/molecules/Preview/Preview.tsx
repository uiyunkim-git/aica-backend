import { useCallback, useRef } from 'react';

import { ChatCard } from '@Organisms/ChatCard';
import {
    PreviewChatContainter,
    PreviewContainer,
    PreviewInfoContainer,
    PreviewRenameButton,
    PreviewTimeText,
    PreviewTitleContainer,
} from './Preview.styled';
import RenameIcon from '@Icons/pencil-square.svg';
import { ChatCardProp } from '@Organisms/ChatCard/ChatCard';
import { ChatRoomTitleInput } from '@Molecules/ChatRoomItem';

interface PreviewProp {
    chatList?: ChatCardProp[];
    title?: string;
    time?: string;
}

export function Preview({ chatList, title, time }: PreviewProp) {
    const titleRef = useRef<HTMLInputElement | null>(null);

    const renameTitle = useCallback(() => {
        if (titleRef.current === null) return;
        titleRef.current.focus();
    }, []);

    return (
        <PreviewContainer>
            <PreviewChatContainter>
                {chatList?.map((item, index) => (
                    <ChatCard
                        key={index}
                        name={item.name}
                        time={item.time}
                        $isBot={item.$isBot}
                        $isPreview
                    >
                        {item.children}
                    </ChatCard>
                ))}
            </PreviewChatContainter>
            <PreviewInfoContainer>
                <PreviewTitleContainer>
                    <ChatRoomTitleInput
                        ref={titleRef}
                        defaultValue={title}
                        placeholder="제목 입력"
                    />
                    <PreviewRenameButton onClick={renameTitle}>
                        <RenameIcon />
                    </PreviewRenameButton>
                </PreviewTitleContainer>
                <PreviewTimeText>{time}</PreviewTimeText>
            </PreviewInfoContainer>
        </PreviewContainer>
    );
}
