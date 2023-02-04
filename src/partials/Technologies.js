import {
    FaPython,
    FaAndroid,
    FaAngular,
    FaApple,
    FaAws,
    FaNode,
    FaReact,
    FaFigma,
    FaDocker,
    FaJava,
    FaVuejs,
} from "react-icons/fa";
import { RiFlutterLine } from "react-icons/ri";
import { DiResponsive, DiGoogleCloudPlatform, DiGo } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
import { SiJavascript, SiTypescript } from "react-icons/si";
import React from "react";
import { useTranslation } from "react-i18next";

const techlist = [
    [<FaPython />, "Python"],
    [<DiGo />, "Go"],
    [<FaJava />, "Java"],
    [<SiJavascript />, "JavaScript"],
    [<SiTypescript />, "Typescript"],
    [<FaNode />, "Node"],
    [<AiFillGithub />, "Git"],
    [<FaFigma />, "UX / UI Design"],
    [<DiResponsive />, "Responsive Design"],
    [<FaDocker />, "Docker"],
    [<DiGoogleCloudPlatform />, "Google Cloud Platform"],
    [<FaAws />, "Amazon Web Services"],
    [<FaReact />, "React"],
    [<FaAngular />, "Angular"],
    [<FaVuejs />, "Vue"],
    [<FaApple />, "Native iOS"],
    [<FaAndroid />, "Native Android"],
    [<RiFlutterLine />, "Flutter"],
];

export default function Technologies() {
    const { t } = useTranslation();

    return (
        <section className="relative">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h2 className="h2 mt-4 mb-4">{t("technologies-title")}</h2>
                <p className="text-xl text-gray-600">
                    {t("technologies-subtitle")}
                </p>
            </div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4 mb-16">
                {techlist.map((t, index) => (
                    <div
                        className="relative flex flex-col items-center p-6 bg-gray-50 rounded border-gray-100 "
                        key={index}
                    >
                        {React.cloneElement(t[0], { size: 42 })}
                        <h4 className="text-xl leading-snug tracking-tight mt-4 text-center">
                            {t[1]}
                        </h4>
                    </div>
                ))}
            </div>
        </section>
    );
}
