interface IRowGroup {
    title?: string 
}
const RowGroup: React.FC<IRowGroup> = ({title, children}) => {
    return (
    <div className="p-4 w-full">
        {title && 
            <div className="pb-1 text-xs opacity-80">{title}</div>
        }
        <div>{children}</div>
    </div>
    )
}
export default RowGroup