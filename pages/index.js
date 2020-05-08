import "../styles/index.scss";
import MenuCard from "../components/Cards/MenuCard";

const HomePage = () => {
	return (
		<div>
			<MenuCard title={"Beef"} icon={"/icons/beef.svg"} />
			<MenuCard title={"Fish"} icon={"/icons/beef.svg"} />
		</div>
	)
}

export default HomePage