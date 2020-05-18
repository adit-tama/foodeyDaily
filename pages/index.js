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
			<Head>
        		<link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;400;700&display=swap" rel="stylesheet" />
      		</Head>
			<DesktopLayout
				section1={<MainSection keyword={keyword} setKeyword={setKeyword}/>}
				section2={<RecipeSection keyword={keyword} />}
			/>
		</>
	)
}

export default HomePage