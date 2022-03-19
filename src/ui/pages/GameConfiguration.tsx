import AppBar from "../../components/AppBar"
import NumberSelector from "../../components/NumberSelector"
import RowGroup from "../../components/RowGroup"
import AppStrings from "../../domain/AppStrings"

const GameConfiguration = () => {
    return (
    <div className="flex flex-col h-full">
        <AppBar title={ AppStrings.configurationAppBarTitle } />
        <div className="flex flex-col items-center justify-center flex-grow">
            <RowGroup title={AppStrings.configurationPeopleAmount}>
                <NumberSelector />
            </RowGroup>
            <RowGroup title={AppStrings.configurationPointsToWin}>
                child 2
            </RowGroup>
        </div>
    </div>
    )
}
export default GameConfiguration