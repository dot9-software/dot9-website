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
            authorImageUrl: require("../images/jack_moxon.jpg").default,
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
                                    textMore={testimonial.text}
                                    authorName={testimonial.authorName}
                                    authorImageUrl={
                                        testimonial.authorImage?.url || ""
                                    }
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
