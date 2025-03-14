import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {Works} from "./layout/sections/works/Works.tsx";
import {Testimony} from "./layout/sections/testimony/Testimony.tsx";
import {Contacts} from "./layout/sections/contacts/Contacts.tsx";
import {Slogan} from "./layout/sections/slogan/Slogan.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {Partical} from "./components/partical/Partical.tsx";
import {ScrollUp} from "./components/ScrollUp.tsx";
import React from "react";





function App() {

    return (
        <div className="App">
            <Partical/>
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
            <ScrollUp/>

        </div>
    )
}

export default App


