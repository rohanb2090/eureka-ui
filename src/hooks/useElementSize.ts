import { useState, useCallback, useLayoutEffect, useEffect } from 'react';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

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

    useIsomorphicLayoutEffect(() => {
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

        if (typeof ResizeObserver !== 'undefined') {
            const resizeObserver = new ResizeObserver(() => handleResize());
            resizeObserver.observe(node);

            return () => {
                resizeObserver.disconnect();
            };
        }
    }, [node]);

    return [onRef, size];
}
