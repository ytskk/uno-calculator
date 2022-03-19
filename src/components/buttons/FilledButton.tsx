import { Link } from "react-router-dom"

interface IFilledButton {
    title: string
    subtitle?: string
    isPrimary: boolean

}
export const FilledButton : React.FC<IFilledButton> = ({title, subtitle, isPrimary = false}) => {
    return (
        <Link className={ `px-4 ${subtitle ? "py-2" : "py-4"} ${isPrimary ? "uno-gradient" : "bg-primary"} w-full rounded-2xl flex flex-col items-center justify-center hover-transition hover:brightness-110` } to={ "/game-configuration" }>
            <div className="font-medium text-white">
                {title}
            </div>
            {subtitle && 
                <div className="text-white text-xs">
                    {subtitle}
                </div>
            }
        </Link>
    )
}

export default FilledButton