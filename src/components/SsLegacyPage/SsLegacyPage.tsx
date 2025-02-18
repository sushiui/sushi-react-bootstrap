import React from "react";
import SsBody from "../SsBody";
import SsCard from "../SsCard";
import SsPage from "../SsPage";
import {SsLegacyPageProps} from "./SsLegacyPage.types";

const SsLegacyPage = ({children, title = '', breadcrumbs}: SsLegacyPageProps) => {
    return (
        <React.Fragment>
            <SsPage>
                {breadcrumbs}
                    <SsCard title={title}>
                        <SsBody>
                            {children}
                        </SsBody>
                    </SsCard>
            </SsPage>
        </React.Fragment>
    )
}
export default SsLegacyPage;
