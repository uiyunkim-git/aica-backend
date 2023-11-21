import { useEffect, useRef, useState } from 'react';
import _ from 'lodash';

export const useScrollManager = (): [
    React.RefObject<HTMLDivElement>,
    number,
] => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollableRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = scrollableRef.current;
        const handleScroll = _.debounce(() => {
            const position = element ? element.scrollTop : 0;
            setScrollPosition(position);
        }, 100);

        element?.addEventListener('scroll', handleScroll);

        return () => {
            element?.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return [scrollableRef, scrollPosition];
};
