import "../styles/index.scss";
import MenuCard from "../components/Cards/MenuCard";
import DesktopLayout from "../components/Layout/DesktopLayout";
import MainSection from "../components/Sections/MainSection";
import RecipeSection from "../components/Sections/RecipeSection";

const HomePage = () => {
	return (
		<DesktopLayout>
			<MainSection />
			<RecipeSection />
		</DesktopLayout>
	)
}

export default HomePage