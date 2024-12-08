import './App.css'

import Greeting from "../header/Greeting.tsx";
import Header from "../header/Header.tsx";
import Content from "../content/Content.tsx";

const App = () => {
    return (
        <>
            <Header>
                <Greeting/>
            </Header>
            <Content/>
        </>
    )
}

export default App
