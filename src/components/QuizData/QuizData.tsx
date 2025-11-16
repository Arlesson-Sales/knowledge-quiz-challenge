import { type JSX } from "react";
import InfoDivision from "./InfoDivision/InfoDivision.tsx";

export default function QuizData(): JSX.Element
{
    return (
        <div className="flex justify-center gap-3 mb-5">
            <InfoDivision icon="target" title="Questions" subtitle="10" txColor="text-blue-500" bgColor="bg-blue-50" />
            <InfoDivision icon="clock" title="Time per question" subtitle="60s" txColor="text-blue-700" bgColor="bg-blue-50" />
            <InfoDivision icon="trophy" title="Scoring" subtitle="+1/-1" txColor="text-purple-500" bgColor="bg-purple-50" />
        </div>
    );
}