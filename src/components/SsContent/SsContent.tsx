import {PropsWithChildren} from "react";

const SsContent: React.FC<PropsWithChildren> = ({children}: PropsWithChildren) => {
    return (
        <>
            <div className={'ss-content'}>
                {children}
            </div>
        </>
    )
}
export default SsContent;
