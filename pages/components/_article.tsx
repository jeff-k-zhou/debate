import { ReactNode } from "react"

interface Props {
    title: string,
    children?: ReactNode | undefined
}

const Article: React.FC<Props> = (props: Props) => {
    return (
        <>
            <h1 className="text-center text-7xl mt-5">{props.title}</h1>
            <div className="w-screen flex flex-col items-center">
                <div className="w-4/5 flex flex-col items-start text-start">
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default Article