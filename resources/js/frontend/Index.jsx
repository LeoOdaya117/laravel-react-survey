import { useState } from "react";

import laravelLogo from "./assets/svg/laravel.svg";
import reactLogo from "./assets/svg/react.svg";
import viteLogo from "./assets/svg/vite.svg";
import tailwindLogo from "./assets/svg/tailwindcss.svg";

// import "./css/App.css";

function Index() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="flex justify-center">
                <a href="https://laravel.com/" target="_blank">
                    <img
                        src={laravelLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>

                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>

                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>

                <a href="https://tailwindcss.com/" target="_blank">
                    <img src={tailwindLogo} className="logo" alt="Vite logo" />
                </a>
            </div>
            <h1>Laravel + React + Vite + Tailwind CSS</h1>
            <div className="card">
                <h1>{count}</h1>
                <button onClick={() => setCount((count) => count + 1)}>
                    Count
                </button>
                <p>
                    Edit <code>resources/js/frontend/Index.jsx</code> and save
                    to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Laravel, React, Vite and Tailwind CSS logos to
                learn more
            </p>
        </>
    );
}

export default Index;
