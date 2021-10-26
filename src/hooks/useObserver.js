import {useEffect, useRef} from "react";

export const useObserver = (ref, canLoad, isLoading, callback) => {
    const observer = useRef();

    useEffect(() => {
        if(isLoading) return;
        if(observer.current) observer.current.disconnect();
        let cb = function(entries, observer) {
            //каждый раз при наблюдении соответствующего элемента отрабатывает этот callback
            if (entries[0].isIntersecting && canLoad) {
                callback()
            }

        };
        observer.current = new IntersectionObserver(cb);
        observer.current.observe(ref.current)
    }, [isLoading]);
}