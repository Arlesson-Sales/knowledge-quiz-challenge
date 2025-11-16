import { type JSX } from "react"
import { TrophyIcon } from "lucide-react";

interface QuizHeaderProps
{
    title: string;
    subTitle: string;
};

export default function QuizHeader({ title, subTitle }: QuizHeaderProps): JSX.Element
{
    return (
        <header className="w-full mb-5">
            <div className="w-22 h-22 bg-blue-500 rounded-full flex justify-around items-center m-auto mb-5 mt-3">
                <TrophyIcon className="text-white w-[50%] h-[50%]" />
            </div>
            <div className="text-center">
                <h1 className="text-4xl mb-3">{ title }</h1>
                <p className=" text-[1.2rem] text-gray-400">{ subTitle }</p>
            </div>
        </header>
    );
}