import FilledButton from "../../components/buttons/FilledButton"
import AppStrings from "../../domain/AppStrings"

export const Home = () => {
	return <div className={ "flex flex-col items-center justify-center h-full" }>
		<div className="text-center">
			<h1 className="uno-gradient gradient-to-text font-bold text-4xl -rotate-3 mb-1">{ AppStrings.appName }</h1>
			<h3 className="font-medium">{ AppStrings.appDescription }</h3>
		</div>
		<div className="p-4 mt-10 w-full">
		<FilledButton title={ AppStrings.beginSession } isPrimary={ true } />
		</div>
	</div>
}

export default Home