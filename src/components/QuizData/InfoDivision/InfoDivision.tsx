import { type JSX } from "react";
import { Clock4Icon, TrophyIcon, TargetIcon } from "lucide-react";

interface InfoDivisionProps {
    title: string;
    subtitle: string;
    icon: "clock" | "trophy" | "target";
    bgColor: string;
    txColor: string;
};

export default function InfoDivision({ icon, title, subtitle, txColor, bgColor }: InfoDivisionProps): JSX.Element
{
    const iconClass: string = `w-8 h-8 m-auto mb-2 mt-0 ${txColor}`;

    return (
        <div className={`w-50 h-35 rounded-xl ${bgColor} flex flex-col justify-center gap-0`}>
            { icon === "target" ? <TargetIcon className={iconClass} /> : icon === "trophy" ? <TrophyIcon className={iconClass} /> : <Clock4Icon className={iconClass} /> }
            <p className="w-full text-center text-gray-500">{ title }</p>
            <p className={`w-full text-center text-3xl ${txColor}`}>{ subtitle }</p>
        </div>
    );
}