import { PropsWithChildren, useState } from "react";
import { createContext } from "react";


type TContext = [ string, (color: string) => void]

export const myContext =createContext<TContext>(['', () => {}]);

function UIContext({children}: PropsWithChildren<{}>) {
    const [color, setColor] = useState('light')
    return ( 
    <>
        <myContext.Provider value = {[color, setColor]}>
            {children}
        </myContext.Provider>
    </> 
    );
}

export default UIContext;