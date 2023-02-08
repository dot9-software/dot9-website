import Testimonial from "../components/Testimonial";
import { useTranslation } from "react-i18next";

function Testimonials() {
    const { t } = useTranslation();

    const offlineTestimonials = [
        {
            id: "1",
            text: "Working with dot9 has been great for our business. We have been able to land some significant contracts with dot9's help, and we’ll definitely expand our cooperation with them. We have been really impressed by the quality of services we received. Blue Canvas can definitely recommend dot9 to everyone looking for high-quality, highly-flexible engineering solutions. They worked on integrating Blue Canvas with external services, and what was particularly delightful was the quality and independence with which they designed and implemented those integrations across dozens of technologies (Java, React, Express.js etc...) and hard-to-understand APIs (Jira, Azure). They charge reasonable prices, are professional and courteous in dealings, and deliver our items, even ones outside the original scope.",
            authorName: "Jack Moxon",
            authorCompany: "Blue Canvas",
            authorCompanyUrl: "https://bluecanvas.io",
            authorRole: "CEO and Co-Founder",
            authorImageUrl: "/images/jack_moxon.jpg",
        },
        {
            id: "2",
            text: "dot9 has been our full product development team from Prototype to MVP to now Release, and working with them has been a great pleasure. Their expertise and work quality across Engineering, Product and Design has repeatedly impressed us and we have a great relationship. We'll definitely keep them as our dev team, and can recommend them as a full end-to-end partner for efficiently and thoroughly building your product.",
            authorName: "Owen Smith",
            authorCompany: "Ovrnite App",
            authorCompanyUrl: "https://www.ovrnite.app/",
            authorRole: "CEO and Co-Founder",
            authorImageUrl: "/images/owen_smith.jpeg",
        },
        {
            id: "3",
            text: "Our recently released Visito app has been really well received by users. Unfortunately, we only had the capacity to build an iOS version of the app. Of course, we also wanted to serve the Android market ASAP. This is where dot9 came into play for us: In record time dot9 was able to port the iOS app to Android and thus enabled us to have a successful product launch. The quality of the delivered software and also the consulting was highly satisfactory. I would especially like to emphasize how smooth the cooperation was: no administrative effort, extremely high level of independence, early escalation of potential problems. During the whole project we could concentrate on our own work and just let dot9 do it. Just as you would want from a technology partner.",
            authorName: "Alexander Korus",
            authorCompany: "visito.me App",
            authorCompanyUrl: "https://visito.me/",
            authorRole: "CEO",
            authorImageUrl: "/images/alexander_korus.jpeg",
        },
        {
            id: "4",
            text: "I received very competent and professional advice here. The work was carried out perfectly. In addition, whenever I had a question, I received extensive screen recording explanations. This was a great collaboration. I always feel that I am in very good hands with dot9 with my software projects. Highly recommended, I gladly continue the collaboration.",
            authorName: "Eberhard Zeidler",
            authorCompany: "Zeidler Glas Gruppe",
            authorCompanyUrl: "https://www.zeidler-gruppe.com/",
            authorRole: "Managing Director",
            authorImageUrl: "/images/zeidler_logo.png",
        },
    ];

    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h2 className="h2">{t("testimonials-title")}</h2>
                    </div>

                    {/* Testimonials */}
                    <div
                        className="max-w-3xl mx-auto mt-10"
                        data-aos="zoom-y-out"
                    >
                        {offlineTestimonials.map((testimonial, index) => {
                            return (
                                <Testimonial
                                    key={testimonial.id}
                                    text={testimonial.text}
                                    authorName={testimonial.authorName}
                                    authorImageUrl={testimonial.authorImageUrl}
                                    authorDescription={testimonial.authorRole}
                                    companyName={testimonial.authorCompany}
                                    companyUrl={testimonial.authorCompanyUrl}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
