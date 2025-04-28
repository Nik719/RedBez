import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";
import { Separator } from "../../../../components/ui/separator";

// Data for the updates carousel
const updatesData = [
  {
    id: 1,
    image: "/rodbez-1.png",
    title:
      "Bihar's start-up king Dilkhush Kumar is bringing 'Rodbez' revolution to small towns",
    source: "The Print",
    link: "https://theprint.in/feature/bihars-start-up-king-dilkhush-kumar-is-bringing-rodbez-revolution-to-small-towns/1244336/"
  },
  {
    id: 2,
    image: "/rodbez-1.png",
    title:
      "Bihar's start-up king Dilkhush Kumar is bringing 'Rodbez' revolution to small towns",
    source: "The Print",
  },
  {
    id: 3,
    image: "/rodbez-1.png",
    title:
      "Bihar's start-up king Dilkhush Kumar is bringing 'Rodbez' revolution to small towns",
    source: "The Print",
  },
  {
    id: 4,
    image: "/rodbez-1.png",
    title:
      "Bihar's start-up king Dilkhush Kumar is bringing 'Rodbez' revolution to small towns",
    source: "The Print",
  },
  {
    id: 5,
    image: "/rodbez-1.png",
    title:
      "Bihar's start-up king Dilkhush Kumar is bringing 'Rodbez' revolution to small towns",
    source: "The Print",
  },
];

// Data for the features section
const featuresData = [
  {
    id: 1,
    icon: "/otet-jpg.png",
    title: "One time every time",
  },
  {
    id: 2,
    icon: "/aar-jpg.png",
    title: "Assured AC rides",
  },
  {
    id: 3,
    icon: "/nrr-jpg.png",
    title: "No ride refusal",
  },
  {
    id: 4,
    icon: "/ds-jpg.png",
    title: "24x7 dedicated support",
  },
];

// Data for the footer links
const footerLinks = {
  account: ["Create account", "Sign in", "iOS app", "Android app"],
  about: ["Book a cab", "Drive with us", "Outstation", "Media Centre"],
};

// Social media icons
const socialIcons = [
  { src: "/component-2-12.svg", alt: "Social Icon" },
  { src: "/component-2-3.svg", alt: "Social Icon" },
  { src: "/component-2-6.svg", alt: "Social Icon" },
  { src: "/component-1-1.svg", alt: "Social Icon", hasCircle: true },
];

export const DesktopWrapperByAnima = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side - Why RodBez section */}
          <div className="flex-1">
            <div className="mb-16">
              <img className="h-[25px]" alt="Why rodbez" src="/why-rodbez-.png" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
                {featuresData.map((feature) => (
                  <div key={feature.id} className="flex items-center gap-3">
                    <div
                      className="w-[26px] h-[26px] bg-cover bg-center"
                      style={{ backgroundImage: `url(${feature.icon})` }}
                    />
                    <img
                      alt={feature.title}
                      src={
                        feature.id === 4
                          ? "/--24x7-dedicated-support.png"
                          : feature.id === 3
                            ? "/--no-ride-refusal.png"
                            : feature.id === 2
                              ? "/--assured-ac-rides.png"
                              : "/--one-time-every-time.png"
                      }
                    />
                  </div>
                ))}
              </div>
            </div>

            <div
              className="w-full h-96 bg-cover bg-center"
              style={{ backgroundImage: "url(/drive-rodbez-jpeg.png)" }}
            />

            <div className="mt-12 flex items-start gap-6">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-[26px] h-[26px] bg-cover bg-center"
                    style={{ backgroundImage: "url(/aar-jpg-1.png)" }}
                  />
                  <div className="font-rodbez-in-segoe-UI-bold text-rodbezinshark">
                    Join us Driver
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className="w-[26px] h-[26px] bg-cover bg-center"
                    style={{ backgroundImage: "url(/aar-jpg-2.png)" }}
                  />
                  <div className="font-rodbez-in-segoe-UI-bold text-rodbezinshark">
                    Cab Partner
                  </div>
                </div>
              </div>

              <div className="[font-family:'Bigshot_One',Helvetica] text-[#7b7a7a] text-base">
                Together we will make Bihar's taxi industry easier and
                <br />
                cheaper.
              </div>
            </div>
          </div>

          {/* Right side - Updates section */}
          <div className="flex-1">
            <h2 className="text-3xl mb-8 font-normal">Updates</h2>

            <Carousel className="w-full">
              <CarouselContent>
                {updatesData.map((update) => (
                  <CarouselItem key={update.id}>
                    <Card className="border-0">
                      <CardContent className="p-0">
                        <div 
                          className="relative h-[300px] cursor-pointer"
                          onClick={() => update.link && window.open(update.link, '_blank')}
                        >
                          <div
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${update.image})` }}
                          />
                          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[rgba(19,19,19,0.8)] via-[rgba(48,48,48,0.71)] to-transparent">
                            <h3 className="font-rodbez-in-semantic-heading-2-underline text-wwwolacabscomwhite underline mb-1">
                              {update.title}
                            </h3>
                            <div className="flex items-center gap-1">
                              <span className="font-rodbez-in-segoe-UI-regular text-rodbezinathens-gray">
                                by
                              </span>
                              <span className="font-rodbez-in-segoe-UI-bold-underline text-wwwolacabscomwhite underline">
                                {update.source}
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="flex justify-center mt-4">
                <CarouselPrevious className="static transform-none opacity-50 mx-2" />
                <div className="flex items-center gap-2">
                  {updatesData.map((_, index) => (
                    <div
                      key={index}
                      className={`w-[30px] h-[3px] bg-wwwolacabscomwhite ${index === 0 ? "" : "opacity-50"}`}
                    />
                  ))}
                </div>
                <CarouselNext className="static transform-none opacity-50 mx-2" />
              </div>
            </Carousel>

            <div 
              className="mt-16 bg-black w-full aspect-video relative cursor-pointer" 
              onClick={() => window.open('https://www.youtube.com/watch?v=2PWmliJiqPY', '_blank')}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[50px] bg-cover bg-center"
                style={{ backgroundImage: "url(/image-1.png)" }}
              >
                <div className="flex justify-between items-center h-full px-4">
                  <div className="flex items-center">
                    <img
                      className="w-[18px] h-[21px]"
                      alt="Shark Tank India"
                      src="/link---photo-image-of-shark-tank-india.png"
                    />
                    <div className="flex ml-2">
                      <div className="w-[75px] h-[11px]">
                        <img
                          className="absolute w-2 h-[11px] top-0 left-[67px]"
                          alt="Vector"
                          src="/vector-8.svg"
                        />
                        <img
                          className="absolute w-[9px] h-[11px] top-0 left-[62px]"
                          alt="Vector"
                          src="/vector-4.svg"
                        />
                        <img
                          className="absolute w-[7px] h-2.5 top-px left-14"
                          alt="Vector"
                          src="/vector-43.svg"
                        />
                        <img
                          className="absolute w-[5px] h-[11px] top-0 left-[54px]"
                          alt="Vector"
                          src="/vector-19.svg"
                        />
                        <img
                          className="absolute w-2 h-[11px] top-0 left-[49px]"
                          alt="Vector"
                          src="/vector-39.svg"
                        />
                        <img
                          className="absolute w-2 h-2.5 top-px left-[45px]"
                          alt="Vector"
                          src="/vector-35.svg"
                        />
                        <img
                          className="absolute w-1 h-[11px] top-0 left-[43px]"
                          alt="Vector"
                        />
                        <img
                          className="absolute w-2 h-[11px] top-0 left-9"
                          alt="Vector"
                          src="/vector-53.svg"
                        />
                        <img
                          className="absolute w-2 h-2.5 top-px left-[31px]"
                          alt="Vector"
                          src="/vector-34.svg"
                        />
                        <img
                          className="absolute w-2 h-2.5 top-px left-[27px]"
                          alt="Vector"
                          src="/vector-28.svg"
                        />
                        <img
                          className="absolute w-[9px] h-[11px] top-0 left-[22px]"
                          alt="Vector"
                          src="/vector-46.svg"
                        />
                        <img
                          className="absolute w-2 h-[11px] top-0 left-[17px]"
                          alt="Vector"
                          src="/vector-32.svg"
                        />
                        <img
                          className="absolute w-[7px] h-2.5 top-px left-[13px]"
                          alt="Vector"
                          src="/vector-45.svg"
                        />
                        <img
                          className="absolute w-2 h-2.5 top-px left-[9px]"
                          alt="Vector"
                          src="/vector-44.svg"
                        />
                        <img
                          className="absolute w-2 h-[11px] top-0 left-1"
                          alt="Vector"
                          src="/vector-41.svg"
                        />
                        <img
                          className="absolute w-2 h-[11px] top-0 left-0"
                          alt="Vector"
                          src="/vector-38.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      className="w-[18px] h-[18px]"
                      alt="Component"
                      src="/component-7-3.svg"
                    />
                    <img
                      className="w-4 h-[18px]"
                      alt="Component"
                      src="/component-7-2.svg"
                    />
                  </div>
                </div>
              </div>

              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[348px] h-[195px] bg-cover bg-center"
                style={{ backgroundImage: "url(/image.png)" }}
              >
                <img
                  className="absolute w-8 h-[25px] top-[85px] left-[152px]"
                  alt="Play button"
                  src="/component-7-5.svg"
                />
              </div>

              <img
                className="absolute bottom-2 left-2 w-[33px] h-2.5"
                alt="Component"
                src="/component-7.svg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full bg-wwwolacabscomathens-gray mt-24 py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and social media */}
            <div>
              <div className="text-3xl mb-14">
                <img
                  className="w-[206.38px] h-[39px]"
                  alt="Red bez"
                  src="/rodbez.png"
                />
              </div>

              <div className="flex items-center gap-6">
                {socialIcons.map((icon, index) => (
                  <div
                    key={index}
                    className={
                      icon.hasCircle
                        ? "w-[27px] h-[27px] flex items-center justify-center rounded-full border border-black"
                        : ""
                    }
                  >
                    <img
                      className={
                        icon.hasCircle ? "w-[15.44px] h-[18px]" : "w-6 h-6"
                      }
                      alt={icon.alt}
                      src={icon.src}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Contact us */}
            <div>
              <h3 className="font-omnifood-dev-rubik-medium text-omnifooddevemperor text-lg mb-8">
                Contact us
              </h3>
              <address className="not-italic font-bold text-[#767676] text-base">
                Rajmati Complex, Bailey Road, <br />
                Near Skoda Showrrom,
                <br />
                Saguna More,&nbsp;&nbsp;
                <br />
                Patna, Bihar <br />
                Pincode:- 801503
              </address>
            </div>

            {/* Account links */}
            <div>
              <h3 className="font-omnifood-dev-rubik-medium text-omnifooddevemperor text-lg mb-8">
                Account
              </h3>
              <ul className="space-y-5">
                {footerLinks.account.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="font-normal text-omnifooddevboulder text-base leading-[25.6px]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Us links */}
            <div>
              <h3 className="font-omnifood-dev-rubik-medium text-omnifooddevemperor text-lg mb-8">
                About Us
              </h3>
              <ul className="space-y-5">
                {footerLinks.about.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="font-normal text-omnifooddevboulder text-base leading-[25.6px]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <div className="flex items-center mb-4">
                  <img
                    className="w-[17px] h-[22px] mr-2"
                    alt="Phone"
                    src="/component-2-4.svg"
                  />
                  <span className="font-bold text-omnifooddevboulder text-base">
                    +91 9155394055
                  </span>
                </div>

                <div className="flex items-center">
                  <img
                    className="w-[22px] h-[22px] mr-2"
                    alt="Email"
                    src="/component-1.svg"
                  />
                  <a
                    href="mailto:info@rodbez.in"
                    className="text-omnifooddevboulder text-base underline"
                  >
                    info@rodbez.in
                  </a>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4">
                <img
                  className="w-[128px]"
                  alt="App Store"
                  src="/component-2-11.svg"
                />
                <img
                  className="w-[128px]"
                  alt="Google Play"
                  src="/component-2-7.svg"
                />
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-omnifooddevboulder text-sm">
              Copyright © 2025 by RodBez All rights reserved.
            </div>

            <div className="flex items-center gap-8 mt-4 md:mt-0">
              <a href="#" className="text-omnifooddevboulder text-base">
                Notice
              </a>
              <a href="#" className="text-omnifooddevboulder text-base">
                Privcy policies
              </a>
              <a href="#" className="text-omnifooddevboulder text-base">
                Tems of service
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
