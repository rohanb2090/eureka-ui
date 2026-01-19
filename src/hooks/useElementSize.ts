import { useState, useCallback, useLayoutEffect } from 'react';

interface Size {
    width: number;
    height: number;
}

export function useElementSize<T extends HTMLElement = HTMLDivElement>(): [
    (node: T | null) => void,
    Size
] {
    const [size, setSize] = useState<Size>({
        width: 0,
        height: 0,
    });

    const [node, setRef] = useState<T | null>(null);

    const onRef = useCallback((newNode: T | null) => {
        setRef(newNode);
    }, []);

    useLayoutEffect(() => {
        if (!node) {
            return;
        }

        const handleResize = () => {
            setSize({
                width: node.offsetWidth,
                height: node.offsetHeight,
            });
        };

        handleResize();

        const resizeObserver = new ResizeObserver(() => handleResize());
        resizeObserver.observe(node);

        return () => {
            resizeObserver.disconnect();
        };
    }, [node]);

    return [onRef, size];
}
