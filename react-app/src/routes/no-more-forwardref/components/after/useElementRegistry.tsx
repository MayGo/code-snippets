import { useState } from 'react';

export function useElementRegistry<T extends HTMLElement>() {
    const [element, setElement] = useState<T | null>(null);

    const registerElement = (el: T | null) => {
        if (el) setElement(el);
    };

    return { element, registerElement };
}
