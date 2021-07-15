import botImage from '../../images/greeting_bot.png';
import './greetingBot.scss';
import { FiMail } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

export default function GreetingBot() {

    const { t } = useTranslation();

    return (
        <>
            <div className="container w-2/12 fixed right-5 bottom-0 floatInBottom z-0 hidden lg:block" >
                <img src={botImage} alt="greeting bot" className="greetingImage" />
            </div>
            <button
                className="greeting-box border-2 border-gray-300 fixed bottom-3 floatInBottomBox z-10 lg:flex items-center bg-white rounded-full text-sm group p-4 shadow-2xl hidden"
                onClick={(e) => {
                    window.location.href =
                        "mailto:contact@dot9.co?subject=Inquiry";
                }}
                aria-controls="modal"
            >
                <span className="text-gray-600">
                    <FiMail />
                </span>
                <span className="text-gray-600 ml-3">{t('greeting-bot-text')}</span>
            </button>
        </>
    );
}