import React from "react";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import { useTranslation, Trans } from "react-i18next";

function AboutUs() {

  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow pb-32">
        <section className="relative">
          <div
            className="max-w-6xl mx-auto px-4 sm:px-6"
            data-aos="zoom-y-out"
            data-aos-delay="300"
          >
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="text-center pb-12 md:pb-16">
                <h1
                  className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-d9Blue-900 to-d9Blue-900"
                  data-aos="zoom-y-out"
                >
                  {t('about-us-title')}
                </h1>
                <div className="max-w-xl mx-auto">
                  <p className="text-xl text-gray-600 mb-2">
                    {t('about-us-text')}
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-4xl mx-auto flex-column justify-between">
              <h1
                className="text-center text-3xl md:text-3xl font-extrabold leading-tighter tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-d9Blue-900 to-d9Blue-900"
                data-aos="zoom-y-out"
              >
                {t('founders-section-title')}
              </h1>
              <div className="flex justify-between mt-10 text-center">
                <div className="flex-col max-w-md">
                  <img
                    className="md:max-w-none mx-auto rounded-full mt-10 mb-4"
                    src={require("../images/felix_4.png").default}
                    width="150"
                    height="150"
                    alt="Features bg"
                  />
                  <span className="text-2xl text-d9Blue-900 mb-8">
                    Felix Wu
                  </span>
                  <p className="text-xl text-gray-600">
                    <Trans i18nKey="felix-wu-description">
                    <a className="underline" href="https://google.com">
                    </a>
                    </Trans>
                  </p>
                </div>
                <div className="flex-col max-w-md">

                  <img
                    className="md:max-w-none mx-auto rounded-full mt-10 mb-4"
                    src={require("../images/christof_2.png").default}
                    width="150"
                    height="150"
                    alt="Features bg"
                  />
                  <span className="text-2xl text-d9Blue-900 mb-8">
                    Christof Zirkler
                  </span>
                  <p className="text-xl text-gray-600">
                    <Trans i18nKey="christof-zirkler-description">
                    <a className="underline" href="https://shopify.com">
                    </a>
                    </Trans>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default AboutUs;
