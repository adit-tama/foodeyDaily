import {useState} from "react";
import MenuCard from "../components/Cards/MenuCard";
import DesktopLayout from "../components/Layout/DesktopLayout";
import MainSection from "../components/Sections/MainSection";
import RecipeSection from "../components/Sections/RecipeSection";
import Head from 'next/head';

const HomePage = () => {
	const [keyword, setKeyword] = useState('')
	return (
		<>
			<DesktopLayout
				section1={<MainSection keyword={keyword} setKeyword={setKeyword}/>}
				section2={<RecipeSection keyword={keyword} />}
			/>
		</>
	)
}

export default HomePage