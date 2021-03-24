import React from 'react';

const appTheme = React.createContext();

export function useTheme(){
    return React.useContext(appTheme)
}

export function AppTheme( { children , reducer , initialState } ){

    return(
        <appTheme.Provider value={React.useReducer( reducer , initialState )}>
            {children}
        </appTheme.Provider>
    )
}