import { type JSX, createContext } from "react";
import Quiz from "./components/Quiz/Quiz.tsx";

interface globalProps {
    theme: string;
};

export default function App(): JSX.Element
{
    const QuizAppContext: React.Context<globalProps> = createContext({ theme: "light" })

    return (
        <QuizAppContext.Provider value={{ theme: "light" }}>
            <Quiz />
        </QuizAppContext.Provider>
    );
}