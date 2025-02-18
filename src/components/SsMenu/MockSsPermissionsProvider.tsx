// MockSsPermissionsProvider.tsx
import React from 'react';
import {SsPermissionsProvider} from "../SsProvider";

const MockSsPermissionsProvider: React.FC<{ permissions?: any; children: React.ReactNode }> = ({
                                                                                                   permissions = { read: true, write: true, delete: true }, // Default mock permissions
                                                                                                   children,
                                                                                               }) => {
    return <SsPermissionsProvider currentEnv={'dev'} permissions={permissions}>{children}</SsPermissionsProvider>;
};

export default MockSsPermissionsProvider;
