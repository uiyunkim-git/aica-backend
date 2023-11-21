import ThumbUpSolid from '@Icons/thumb-up-solid.svg';
import ThumbUpLine from '@Icons/thumb-up-outline.svg';
import ThumbDownSolid from '@Icons/thumb-down-solid.svg';
import ThumbDownLine from '@Icons/thumb-down-outline.svg';

export type ThumbType = 'up' | 'down';

interface ThumbToggleProp {
    type: ThumbType;
    isSelected?: boolean;
}

export function ThumbIcon({ type, isSelected = false }: ThumbToggleProp) {
    switch (type) {
        case 'up':
            return (isSelected ? <ThumbUpSolid /> : <ThumbUpLine />);
        case 'down':
        default:
            return (isSelected ? <ThumbDownSolid /> : <ThumbDownLine />);
    }
}