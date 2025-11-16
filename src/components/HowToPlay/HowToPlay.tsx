import { type JSX } from "react";

export default function HowToPlay(): JSX.Element
{
    return (
        <div className="bg-yellow-50 w-[97%] m-auto mb-4 p-4 rounded-xl border border-yellow-400 text-amber-800">
            <h1 className="pb-2">How to play:</h1>
            <ul className="pl-5 list-disc">
                <li className="pb-2">You have 60 seconds to answer each question</li>
                <li className="pb-2">Correct answer earn you +1 point</li>
                <li className="pb-2">If time runs out, you lose 1 point and move to the next question</li>
                <li className="pb-2">Immediate feedabck will show you the correct answer</li>
            </ul>
        </div>
    );
};