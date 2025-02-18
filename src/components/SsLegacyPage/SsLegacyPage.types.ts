import React, {PropsWithChildren} from "react";

export interface SsLegacyPageProps extends PropsWithChildren {
    title?: string
    breadcrumbs?: React.ReactNode
}
