import { HeaderButton } from '@Atoms/HeaderButton';
import { HeaderNavContainer } from './HeaderNavGroup.styled';

type NavItemType = {
    text: string;
    onClick: () => void;
    isSelected: boolean;
};
interface HeaderNavGroupProp {
    navItems: NavItemType[];
}

export function HeaderNavGroup({ navItems }: HeaderNavGroupProp) {
    return (
        <HeaderNavContainer>
            {navItems.map((item, index) => (
                <HeaderButton
                    key={index}
                    text={item.text}
                    onClick={item.onClick}
                    isSelected={item.isSelected}
                />
            ))}
        </HeaderNavContainer>
    );
}
