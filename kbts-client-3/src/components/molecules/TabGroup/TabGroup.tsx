import React from 'react';

import { Tab, TabStatusType } from '@Molecules/Tab/Tab';
import { TabGroupContainer } from './TabGroup.styled';

export interface ITab {
    label: string;
    value: string;
    status: TabStatusType;
}

interface TabGroupProp {
    currentTab: string;
    setCurrentTab: (currentTab: string) => void;
    tabs: ITab[];
    className?: string;
    width?: string;
}

export function TabGroup({
    currentTab,
    setCurrentTab,
    tabs,
    className,
    width,
}: TabGroupProp) {
    const onClick = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        tab: ITab,
    ) => {
        e.stopPropagation();
        setCurrentTab(tab.value);
    };
    return (
        <TabGroupContainer className={className} width={width}>
            {tabs.map((tab) => (
                <Tab
                    key={tab.value}
                    title={tab.label}
                    selected={currentTab === tab.value}
                    onClick={(e) => onClick(e, tab)}
                    status={tab.status}
                />
            ))}
        </TabGroupContainer>
    );
}
