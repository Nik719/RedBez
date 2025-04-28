import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

export const DexByAnima = (): JSX.Element => {
  // Location data for inputs
  const locations = [
    {
      type: "current",
      placeholder: "Current Location",
      dotColor: "bg-[#fce003]",
      icon: "/current-location-svg.svg",
    },
    {
      type: "destination",
      placeholder: "Enter Location",
      dotColor: "bg-wwwolacabscomburnt-sienna",
      icon: null,
    },
  ];

  return (
    <section className="relative w-full h-[703px] mt-16">
      <div className="relative h-[707px]">
        {/* Hero Background */}
        <div className="w-full h-[707px]">
          <div className="h-[548px] bg-[url(/hero.png)] bg-cover bg-center">
            {/* WhatsApp Button */}
            <Button
              className="flex items-center justify-center w-10 h-10 rounded-[20px] bg-[#25d366] shadow-[2px_2px_3px_#999999] absolute top-[89px] right-14"
              size="icon"
            >
              <img
                className="w-[21.44px] h-[25px]"
                alt="WhatsApp"
                src="/component-1-2.svg"
              />
            </Button>
          </div>
        </div>

        {/* Search Form */}
        <div className="absolute w-[965px] h-[140px] top-[495px] left-1/2 -translate-x-1/2">
          <div className="relative h-[140px]">
            {/* Main Search Box */}
            <Card className="absolute w-full h-[104px] top-9 left-0 bg-wwwolacabscomathens-gray rounded-none border-none">
              <CardContent className="p-0 flex items-center">
                {/* Location Inputs */}
                <div className="flex items-center gap-[5px] mt-7 ml-8">
                  {locations.map((location, index) => (
                    <React.Fragment key={location.type}>
                      <div className="flex w-[278px] items-center pl-[25px] pr-5 py-3 bg-wwwolacabscomwhite border border-solid border-[#00000033]">
                        <div
                          className={`w-2 h-2 ${location.dotColor} rounded`}
                        />
                        <div className="flex flex-col w-[210px] h-8 items-start px-[18px] py-[7px] relative rounded-[1px] overflow-hidden">
                          <Input
                            className="border-none shadow-none p-0 h-auto font-www-olacabs-com-semantic-input text-wwwolacabscomblack"
                            placeholder={location.placeholder}
                          />
                        </div>
                        {location.icon && (
                          <div className="flex items-center justify-center w-[15px] h-4">
                            <img
                              className="w-[15px] h-4"
                              alt="Current location"
                              src={location.icon}
                            />
                          </div>
                        )}
                      </div>

                      {index === 0 && (
                        <Separator
                          className="h-px w-[30px] bg-wwwolacabscomblack-20"
                          orientation="vertical"
                        />
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Search Button */}
                <div className="absolute w-[282px] h-14 top-7 right-8 shadow-[-3px_3px_0px_#fce003] [background:radial-gradient(50%_50%_at_13%_128%,rgba(0,0,0,1)_0%,rgba(34,34,34,1)_100%)]">
                  <div className="relative h-14">
                    <div className="flex flex-col w-full h-full items-center justify-end pt-[15px] pb-0 px-[13.5px] overflow-hidden">
                      <img
                        className="w-[206.38px] h-[39px]"
                        alt="Red bez"
                        src="/rodbez.png"
                      />
                    </div>
                    <div className="absolute w-[62px] top-5 left-4 font-normal text-wwwolacabscomwhite text-[16.6px] leading-4 whitespace-nowrap">
                      SEARCH
                    </div>
                    <div className="absolute w-[105px] top-[19px] left-[81px] font-normal text-[#fce003] text-[16.7px] leading-4 whitespace-nowrap">
                      RedBez CARS
                    </div>
                    <div className="absolute top-[22px] right-5">
                      <div className="flex items-center justify-center w-[17px] h-[11px]">
                        <img
                          className="w-[17px] h-[11px]"
                          alt="Forward arrow"
                          src="/forward-arrow-svg.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tabs */}
            <Tabs defaultValue="outstation" className="absolute top-0 left-0">
              <TabsList className="bg-[#f2f4f6] h-10 p-0">
                <TabsTrigger
                  value="outstation"
                  className="px-5 h-10 data-[state=active]:bg-[#f2f4f6] data-[state=active]:text-wwwolacabscomblack-70 font-www-olacabs-com-semantic-button"
                >
                  Outstation
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};
