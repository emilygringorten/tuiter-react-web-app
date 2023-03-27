import Labs from "./labs";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Home from "./tuiter"

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route index
                           element={<Labs/>}/>
                    <Route path="/hello"
                           element={<index/>}/>
                    <Route path="/tuiter/explore"
                           element={<Tuiter/>}/>
                    <Route path="/tuiter"
                           element={<Home/>}/>
                    <Route path="/*" element={<Labs/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;