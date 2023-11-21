import {
    PercentageBox,
    Progress,
    ProgressBarContainer,
    ProgressBarWrapper,
} from './ProgressBar.styled';

interface ProgressBarProp {
    progress: number;
    width?: string;
    hidePercentage?: boolean;
    isInfinity?: boolean;
    className?: string;
}

export function ProgressBar({
    progress,
    width = '160px',
    hidePercentage,
    isInfinity,
    className,
}: ProgressBarProp) {
    return (
        <ProgressBarWrapper className={className}>
            <ProgressBarContainer width={width}>
                <Progress progress={progress} isInfinity={isInfinity} />
            </ProgressBarContainer>
            {!hidePercentage && (
                <PercentageBox>
                    {isInfinity ? `∞` : `${progress}%`}
                </PercentageBox>
            )}
        </ProgressBarWrapper>
    );
}
