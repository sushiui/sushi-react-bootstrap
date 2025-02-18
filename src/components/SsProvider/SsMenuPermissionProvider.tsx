import React, {createContext, ReactNode, useContext} from 'react';
import {PermissionsContextType, ProviderInterface} from "./SsPermission.types";

const PermissionsContext = createContext<any | undefined>(undefined);

export const useSsPermissions = () => {
    const context = useContext(PermissionsContext);
    if (!context) {
        throw new Error('useSsPermissions must be used within a SsPermissionsProvider');
    }
    return context.permissions;
};

export const useSsCurrentEnv = () => {
    const context = useContext(PermissionsContext);
    if (!context) {
        throw new Error('useCurrentEnv must be used within a SsPermissionsProvider');
    }
    return context.currentEnv as string;
};



export const SsPermissionsProvider: React.FC<ProviderInterface> = ({
                                                                       currentEnv,
                                                                       permissions,
                                                                       children,
                                                                   }) => {
    const contextValue: PermissionsContextType = { currentEnv, permissions };

    return (
        <PermissionsContext.Provider value={contextValue}>
            {children}
        </PermissionsContext.Provider>
    );
};
