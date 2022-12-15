import { ReactNode } from "react";

interface Props {
    children?: ReactNode | undefined
}

const Header: React.FC<Props> = (props: Props) => {
    return (
        <>
            <h1 className="text-3xl">{props.children}</h1>
        </>
    )
}