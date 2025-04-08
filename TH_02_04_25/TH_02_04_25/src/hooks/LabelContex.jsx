import { Children, createContext, useContext, useState } from "react";

export const LabelContext = createContext();

export const LabelProvider = ({children}) => {
    const [labelHeader, setLabelHeader] = useState('Dashboard');

    return (
        <LabelContext.Provider
            value={{labelHeader, setLabelHeader}}
            >
            {children}
        </LabelContext.Provider>
    )
}

export const useLabelContext = () => useContext(LabelContext);