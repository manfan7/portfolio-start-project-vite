import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {Works} from "./layout/sections/works/Works.tsx";
import {Testimony} from "./layout/sections/testimony/Testimony.tsx";
import {Contacts} from "./layout/sections/contacts/Contacts.tsx";
import {Slogan} from "./layout/sections/slogan/Slogan.tsx";
import {Footer} from "./layout/footer/Footer.tsx";



function App() {

    return (
        <div className="App">
            <div>
                <Header/>

                <Main/>
            </div>
            <Skills/>
            <Works/>
            <Testimony/>
            <Contacts/>
            <Slogan slogan={`Неважно, как медленно вы идете, до тех пор, пока вы не остановитесь.`}/>
            <Footer/>

        </div>
    )
}

export default App


