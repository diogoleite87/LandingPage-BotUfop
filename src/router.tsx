import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import BotUfop from "./pages/BotUfop";
import BotUfopRU from "./pages/BotUfopRU";


export function Router() {

    return (
        <>
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<BotUfop />} path="/botufop" />
                <Route element={<BotUfopRU />} path="/botufopru" />
            </Routes>
        </>
    )
}