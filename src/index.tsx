import React from "react";
import { createRoot } from "react-dom/client";
import { useClasses } from "./index.style";

const App = () => {
    const classNames = useClasses();

    return (
        <div>
            <h1>React App</h1>
        </div>
    );
};

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
