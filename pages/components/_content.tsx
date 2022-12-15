import { ReactNode } from "react";

interface Props {
    children?: ReactNode | undefined,
    width?: string | undefined,
    className?: string | undefined
}

const Content: React.FC<Props> = (props: Props) => {
    return (
        <div className={`mt-10 ` + props.className}>
            {props.children}
        </div>
    )
}

export default Content