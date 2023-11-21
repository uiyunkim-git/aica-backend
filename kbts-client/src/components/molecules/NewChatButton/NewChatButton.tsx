import PlusIcon from '@Icons/plus-mini.svg';
import {
    NewChatButtonContainer,
    NewChatButtonText,
} from './NewChatButton.styled';

interface NewChatButtonProp {
    onClick?: () => void;
}

export function NewChatButton({ onClick }: NewChatButtonProp) {
    return (
        <NewChatButtonContainer onClick={onClick}>
            <PlusIcon width={15} height={15} fill="white" />
            <NewChatButtonText>새로운 채팅</NewChatButtonText>
        </NewChatButtonContainer>
    );
}
