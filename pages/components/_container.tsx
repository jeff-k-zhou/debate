import { ReactNode } from "react";

interface Props {
    children?: ReactNode | undefined
}

const Container: React.FC<Props> = (props: Props) => {
    return (
        <div className="h-screen w-screen flex flex-col items-center text-center">
            {props.children}
        </div>
    )
}

export default Container