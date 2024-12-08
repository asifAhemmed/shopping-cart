import { useRef } from 'react';
import { useEffect } from 'react';
const useDebounce = (callBack,delay) => {
    const timerId = useRef();

    useEffect(() => {

        return (
            clearTimeout(timerId.current)
        )
    },[])

    const debounce = (...args) => {
        if(timerId.current){
            clearTimeout(timerId.current)
        }
        
        timerId.current = setTimeout(() => {
            callBack(...args)
        }, delay)
    }
    return debounce;
}

export default useDebounce;