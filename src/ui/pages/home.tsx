import AppStrings from "../../domain/AppStrings";

export const Home = () => {
	return <div className={""}>
		<div>
			<h1>{AppStrings.appName}</h1>
			<h3>{AppStrings.appDescription}</h3>
		</div>
	</div>
}

export default Home