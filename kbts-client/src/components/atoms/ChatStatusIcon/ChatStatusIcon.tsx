import { ChatStatusIconWrapper, NewBadge } from './ChatStatusIcon.styled';
import ChatBubbleStopped from '@Icons/chat-bubble-stop.svg';
import ChatBubbleDefault from '@Icons/chat-bubble-default.svg';
import ChatBubbleLoading from '@Icons/chat-bubble-loading.svg';
import { ChatRoomStatusEnum, ChatRoomStatusType } from '@Types/chat';

interface ChatStatusIconProp {
    status?: ChatRoomStatusType;
}

const getStatusIcon = (status: ChatRoomStatusType) => {
    switch (status) {
        case ChatRoomStatusEnum.LOADING:
            return <ChatBubbleLoading />;
        case ChatRoomStatusEnum.STOPPED:
            return <ChatBubbleStopped />;
        case ChatRoomStatusEnum.NEW:
        case ChatRoomStatusEnum.DEFAULT:
        default:
            return <ChatBubbleDefault />;
    }
};

export function ChatStatusIcon({
    status = ChatRoomStatusEnum.DEFAULT,
}: ChatStatusIconProp) {
    return (
        <ChatStatusIconWrapper>
            {status === ChatRoomStatusEnum.NEW && <NewBadge />}
            {getStatusIcon(status)}
        </ChatStatusIconWrapper>
    );
}
