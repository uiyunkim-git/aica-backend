import { ChangeEvent } from 'react';

import PlusIcon from '@Icons/plus-mini.svg';
import SendIcon from '@Icons/paper-airplane-solid.svg';
import {
    ChatButtonContainer,
    ChatInputContainer,
    PlusButton,
    SendButton,
} from './ChatInput.styled';
import { ChatTextArea } from '@Atoms/ChatTextArea';

interface ChatInputProp {
    text?: string;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    onClickSend?: () => void;
    onClickPlus?: () => void;
}

export function ChatInput({
    text,
    onChange,
    onClickSend,
    onClickPlus,
}: ChatInputProp) {
    return (
        <ChatInputContainer>
            <ChatTextArea onChange={onChange} text={text} />
            <ChatButtonContainer>
                <PlusButton onClick={onClickPlus}>
                    <PlusIcon width={25} height={25} fill="#1A1A1A" />
                </PlusButton>
                <SendButton onClick={onClickSend}>
                    <SendIcon />
                </SendButton>
            </ChatButtonContainer>
        </ChatInputContainer>
    );
}
