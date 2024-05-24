
import { useEffect,useState } from "react";

const usePersistedState = (initialState,sessionStoragekey)=>{
    const [state,setState] = useState(()=>{
        const persisitedValue = sessionStorage.getItem(sessionStoragekey);
        return persisitedValue? JSON.parse(persisitedValue):initialState;
    });

    useEffect(()=>{
        sessionStorage.setItem(sessionStoragekey,JSON.stringify(state));
    },[state,sessionStoragekey]);
    return [state,setState];
}

export const useSearchStr  = ()=>{
    return usePersistedState('','searchString');
    
};