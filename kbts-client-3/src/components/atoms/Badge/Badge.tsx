import CheckIcon from '@Icons/check.svg';
import ErrorIcon from '@Icons/error.svg';
import QuestionIcon from '@Icons/question.svg';

import { BadgeContainer, BadgeSizeType, BadgeType } from './Badge.styled';

interface BadgeProp {
    type: BadgeType;
    size?: BadgeSizeType;
    className?: string;
}

export function Badge({ type, size = 'medium', className }: BadgeProp) {
    return (
        <BadgeContainer className={className} type={type} size={size}>
            {pickBadgeIcon(type)}
        </BadgeContainer>
    );
}

const pickBadgeIcon = (type: BadgeType) => {
    switch (type) {
        case 'help':
            return <QuestionIcon />;
        case 'error':
        case 'yellowError':
        case 'whiteError':
        case 'warning':
            return <ErrorIcon />;
        case 'complete':
        default:
            return <CheckIcon />;
    }
};
