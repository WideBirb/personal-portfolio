//Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Sidebar from "./components/sidebar/sidebar";
import Resume from "./components/resume/Resume";

const App = () => {
	return (
		<>
			<Sidebar />
			<main>
			
				<Hero />
				
				<Resume/>
				<Work />
				<Skill />
				<Contact />
			</main>
			<Footer />
		</>
	);
};

export default App;
