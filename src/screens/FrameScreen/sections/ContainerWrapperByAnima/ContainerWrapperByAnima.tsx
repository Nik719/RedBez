import { CalendarIcon, ClockIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

// Benefits data for the right card
const benefits = [
  {
    icon: "/component-2-13.svg",
    text: "Choose your exact pickup time up to 30 days in advance.",
  },
  {
    icon: "/component-2-8.svg",
    text: "Extra wait time included to meet your ride.",
  },
  {
    icon: "/component-2-5.svg",
    text: "Cancel at no charge up to 60 minutes in advance.",
  },
];

// Calendar data for the days of the week
const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

// Calendar data for the dates
const calendarDates = Array.from({ length: 28 }, (_, i) => i + 1);

export const ContainerWrapperByAnima = (): JSX.Element => {
  return (
    <section className="w-full py-16 bg-wwwolacabscomwhite">
      <div className="container mx-auto max-w-[1280px] relative">
        <h1 className="text-[36px] font-www-uber-com-semantic-heading-1 text-wwwolacabscomblack leading-[44px] mb-8">
          Plan for later
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Calendar Card */}
          <Card className="flex-1 bg-[#fff6bb] rounded overflow-hidden border-none">
            <CardContent className="p-0 relative">
              <div className="relative pt-[60px] pb-8 px-4">
                {/* Form Section */}
                <div className="flex flex-col max-w-[360px] gap-4 absolute top-[60px] left-[90px]">
                  <div className="flex flex-col">
                    <h2 className="text-[32px] font-normal text-wwwolacabscomblack leading-[44px]">
                      Get your ride right
                      <br />
                      with RodBez OutStation
                    </h2>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="font-www-uber-com-uber-move-text-medium text-wwwolacabscomblack">
                      Choose date and time
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 h-16">
                      <div className="relative flex-1">
                        <Input
                          className="h-12 pl-12 border-black rounded-lg"
                          placeholder="Date"
                        />
                        <CalendarIcon className="absolute left-4 top-4 w-4 h-4" />
                      </div>

                      <div className="relative flex-1">
                        <Input
                          className="h-12 pl-12 border-black rounded-lg"
                          placeholder="Time"
                        />
                        <ClockIcon className="absolute left-4 top-4 w-4 h-4" />
                        <img
                          className="absolute right-3.5 top-4 w-5 h-5"
                          alt="Component"
                          src="/component-2-10.svg"
                        />
                      </div>
                    </div>

                    <Button className="w-full bg-black text-wwwolacabscomwhite rounded-lg h-12 font-medium">
                      Next
                    </Button>
                  </div>
                </div>

                {/* Calendar Widget */}
                <div className="relative max-w-[388px] rotate-[30deg] ml-[30%] opacity-40">
                  <div className="bg-white rounded-[15px] border border-solid border-[#fff8c6] shadow-shadow-1 p-5">
                    <div className="flex justify-between items-center mb-4">
                      <img
                        className="w-[11px] h-[13px] rotate-[-30deg]"
                        alt="Previous month"
                        src="/vector-59.svg"
                      />
                      <div className="font-semibold text-black text-base">
                        February 2022
                      </div>
                      <img
                        className="w-[11px] h-[13px] rotate-[-30deg]"
                        alt="Next month"
                        src="/vector-58.svg"
                      />
                    </div>

                    {/* Days of week header */}
                    <div className="grid grid-cols-7 gap-0">
                      {daysOfWeek.map((day, index) => (
                        <div
                          key={index}
                          className="w-10 h-[34px] bg-white border border-solid border-[#fff8c6] flex items-center justify-center"
                        >
                          <span className="text-[#aaaaaa] text-[10px] font-medium tracking-[0.30px] leading-3">
                            {day}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Calendar dates */}
                    <div className="grid grid-cols-7 gap-0">
                      {/* Empty cells for days before the 1st */}
                      {Array.from({ length: 2 }, (_, i) => (
                        <div
                          key={`empty-${i}`}
                          className="w-10 h-[34px] bg-white border border-solid border-[#fff8c6]"
                        />
                      ))}

                      {/* Actual dates */}
                      {calendarDates.map((date) => (
                        <div
                          key={date}
                          className={`w-10 h-[34px] bg-white border border-solid border-[#fff8c6] flex items-center justify-center relative
                            ${date === 16 ? "bg-secondary-1 text-secondary-3" : ""}`}
                        >
                          {date === 16 ? (
                            <div className="absolute w-7 h-[27px] rounded-[14.06px/13.51px] border border-solid border-[#fff8c6] bg-secondary-1" />
                          ) : null}
                          <span
                            className={`text-sm font-medium z-10 ${date === 16 ? "text-secondary-3" : "text-[#222222]"}`}
                          >
                            {date}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Benefits Card */}
          <Card className="w-full md:w-[360px] h-auto border border-solid border-[#0000000a] rounded-xl">
            <CardContent className="p-0">
              <h3 className="text-[20px] font-www-uber-com-semantic-heading-3 text-wwwolacabscomblack leading-[28px] p-3">
                Benefits
              </h3>

              <div className="px-[13px] pb-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-[22px] pl-[22px] py-[11.5px]"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <img
                        className="w-5 h-5"
                        alt={`Benefit ${index + 1}`}
                        src={benefit.icon}
                      />
                    </div>
                    <div
                      className={`flex-1 font-www-uber-com-semantic-item text-wwwolacabscomblack leading-[24px] pb-[13.5px] pr-4 ${index < benefits.length - 1 ? "border-b border-[#0000000a]" : ""}`}
                    >
                      {benefit.text}
                    </div>
                  </div>
                ))}

                <button className="mt-6 border-b border-dashed border-[#4b4b4b] font-www-uber-com-uber-move-text-regular text-wwwubercomtundora">
                  See terms
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};