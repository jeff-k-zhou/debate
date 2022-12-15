interface Props {
    src: string | undefined,
    className?: string | undefined
}

const Img: React.FC<Props> = (props: Props) => {
    return (
        <>
            <img src={props.src} className={props.className} />
        </>
    )
}

export default Img