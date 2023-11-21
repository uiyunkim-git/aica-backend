import { Tooltip } from '@Atoms/Tooltip';
import { Badge } from '@Atoms/Badge';
import {
    SubheaderContainer,
    HeaderSubBox,
    HeaderTitleBox,
} from './Subheader.styled';

interface HeaderProp {
    title: string;
    hint?: string | string[];
    children?: React.ReactNode;
}

export function Subheader({ title, hint, children }: HeaderProp) {
    return (
        <SubheaderContainer>
            <HeaderTitleBox>
                {title}
                {hint && (
                    <Tooltip
                        size="small"
                        color="black1"
                        content={hint}
                        direction="top-center"
                    >
                        <Badge type="help" />
                    </Tooltip>
                )}
            </HeaderTitleBox>
            <HeaderSubBox>{children}</HeaderSubBox>
        </SubheaderContainer>
    );
}
