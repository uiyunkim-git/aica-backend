import {
    ChatRoomButton,
    ChatRoomButtonGroupContainer,
} from './ChatRoomButtonGroup.styled';
import RenameIcon from '@Icons/pencil-square.svg';
import ShareIcon from '@Icons/share.svg';
import DeleteIcon from '@Icons/trash.svg';
import StopIcon from '@Icons/stop-circle.svg';
import { ChatRoomStatusEnum, ChatRoomStatusType } from '@Types/chat';

interface ChatRoomButtonGroupProp {
    status?: ChatRoomStatusType;
    className?: string;
    onClickStop?: () => void;
    onClickDelete?: () => void;
    onClickShare?: () => void;
    onClickRename?: () => void;
}

export function ChatRoomButtonGroup({
    status = ChatRoomStatusEnum.DEFAULT,
    className,
    onClickStop,
    onClickDelete,
    onClickShare,
    onClickRename,
}: ChatRoomButtonGroupProp) {
    if (status === ChatRoomStatusEnum.LOADING)
        return (
            <ChatRoomButtonGroupContainer className={className}>
                <ChatRoomButton onClick={onClickStop} stopPropagation>
                    <StopIcon width={30} height={30} stroke="white" />
                </ChatRoomButton>
            </ChatRoomButtonGroupContainer>
        );

    return (
        <ChatRoomButtonGroupContainer className={className}>
            <ChatRoomButton onClick={onClickRename} stopPropagation>
                <RenameIcon />
            </ChatRoomButton>
            <ChatRoomButton onClick={onClickShare} stopPropagation>
                <ShareIcon />
            </ChatRoomButton>
            <ChatRoomButton onClick={onClickDelete} stopPropagation>
                <DeleteIcon />
            </ChatRoomButton>
        </ChatRoomButtonGroupContainer>
    );
}
