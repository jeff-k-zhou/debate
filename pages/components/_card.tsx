import { ReactNode } from "react"

interface Props {
    title: string,
    action?: ReactNode | undefined,
    children?: string | undefined,
    src?: string | undefined
}

const Card: React.FC<Props> = (props: Props) => {
    return (
        <div className="card card-side bg-base-100 shadow-xl mt-5 w-[80%">
            <img src={props.src} alt="Image" height="400" width="400" className="rounded-lg" />
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p className="text-start">{props.children}</p>
                <div className="card-actions justify-end">
                    {props.action}
                </div>
            </div>
        </div>
    )
}

export default Card