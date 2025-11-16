import { type JSX } from "react";
import QuizHeader from "../QuizHeader/QuizHeader.tsx";
import HowToPlay from "../HowToPlay/HowToPlay.tsx";
import QuizData from "../QuizData/QuizData.tsx";

export default function Quiz(): JSX.Element
{
    return (
        <section className="p-5 rounded-2xl shadow-2xl w-170 m-auto mt-3">
            <QuizHeader title="Knowledge Quiz Challenge" subTitle="Test your Knowledge across multiple categories" />
            <QuizData />
            <HowToPlay />
            <button className="w-[97%] cursor-pointer bg-blue-500 active:bg-blue-600 text-white rounded-xl text-xl p-3 font-bold block m-auto" >Start Quiz</button>
        </section>
    );
}