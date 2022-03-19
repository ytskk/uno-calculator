
type ActionIcon = {
    name: string
    href: string
}
interface IAppBar {
    title: string
    subtitle?: string
    actions?: Array<ActionIcon>
}
const AppBar : React.FC<IAppBar> = ({title, subtitle, actions}) => {
    return (
    <div className="flex flex-col items-center justify-center pt-8">
        <div className="text-2xl font-medium">
            {title}
        </div>
        {subtitle && 
            <div className="text-xs">
                {subtitle}
            </div>
        }
    </div>
    )
}
export default AppBar