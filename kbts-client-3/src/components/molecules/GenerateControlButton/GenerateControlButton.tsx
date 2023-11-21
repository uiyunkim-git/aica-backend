import StopIcon from '@Icons/stop-circle.svg';
import ContinueIcon from '@Icons/continue.svg';
import RetryIcon from '@Icons/arrow-path-mini.svg';
import { BaseGenerateControlButton } from './GenerateControlButton.styled';
import { ChatRoomStatusEnum, ChatRoomStatusType } from '@Types/chat';

export type GenerateStatusType = 'loading' | 'pending' | 'done';

interface GenerateControlButtonProp {
    status?: ChatRoomStatusType;
    onClickStop?: () => void;
    onClickContinue?: () => void;
    onClickRegenerate?: () => void;
}

export function GenerateControlButton({
    status,
    onClickStop,
    onClickContinue,
    onClickRegenerate,
}: GenerateControlButtonProp) {
    switch (status) {
        case ChatRoomStatusEnum.LOADING:
            return (
                <BaseGenerateControlButton onClick={onClickStop}>
                    <StopIcon width={24} height={24} stroke="#BDBDBD" />
                    중단하기
                </BaseGenerateControlButton>
            );
        case ChatRoomStatusEnum.ERROR:
            return (
                <BaseGenerateControlButton onClick={onClickContinue}>
                    <ContinueIcon />
                    이어서 진행하기
                </BaseGenerateControlButton>
            );
        case ChatRoomStatusEnum.STOPPED:
        default:
            return (
                <BaseGenerateControlButton onClick={onClickRegenerate}>
                    <RetryIcon />
                    다시 생성하기
                </BaseGenerateControlButton>
            );
    }
}
