import {SsHeaderProps} from "./SsHeader.types";

const SsHeader = ({className, children}:SsHeaderProps) => {
    return (<div className={`header ${className ? className : ''} `}>{children}</div>);
}
export default SsHeader;
