interface Props {
    children?: string | undefined,
    className?: string | undefined
}

const Text: React.FC<Props> = (props: Props) => {
    return (
        <>
            <p className={props.className + " text-lg"}>{props.children}</p>
        </>
    )
}

export default Text