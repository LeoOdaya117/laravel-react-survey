import { Routes, Route } from "react-router-dom";

import Index from "./frontend/Index";

function App() {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<Index />} />
            </Routes>
        </div>
    );
}

export default App;
