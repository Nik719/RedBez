import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const GroupWrapperByAnima = (): JSX.Element => {
  // Define the content data for each card to make the code more maintainable
  const cardData = [
    {
      title: "For any budget",
      content: (
        <>
          <span className="text-[#00000099] tracking-[-0.05px]">From </span>
          <span className="text-black tracking-[-0.05px]">Bikes</span>
          <span className="text-[#00000099] tracking-[-0.05px]"> and </span>
          <span className="text-black tracking-[-0.05px]">Autos</span>
          <span className="text-[#00000099] tracking-[-0.05px]"> to </span>
          <span className="text-black tracking-[-0.05px]">
            Prime
            <br />
            Sedans
          </span>
          <span className="text-[#00000099] tracking-[-0.05px]"> and </span>
          <span className="text-black tracking-[-0.05px]">Prime</span>
          <span className="text-[#00000099] tracking-[-0.05px]">&nbsp;</span>
          <span className="text-black tracking-[-0.05px]">SUVs</span>
          <span className="text-[#00000099] tracking-[-0.05px]">
            , you will
            <br />
            find a ride in your budget at your
            <br />
            convenience any time.
          </span>
        </>
      ),
    },
    {
      title: "For any distance",
      content: (
        <>
          <span className="text-[#00000099] tracking-[-0.05px]">
            Book rides within the city with <br />
          </span>
          <span className="text-black tracking-[-0.05px]">Daily</span>
          <span className="text-[#00000099] tracking-[-0.05px]">
            , or take a trip to your <br />
            favourite destinations outside the city with{" "}
          </span>
          <span className="text-black tracking-[-0.05px]">Outstation</span>
          <span className="text-[#00000099] tracking-[-0.05px]">.</span>
        </>
      ),
    },
    {
      title: "For any duration",
      content: (
        <>
          <span className="text-[#00000099] tracking-[-0.05px]">
            Easily plan a day out without
            <br />
            having to worry about conveyance
            <br />
            with an hour-based package from
            <br />
          </span>
          <span className="text-black tracking-[-0.05px]">Rental</span>
          <span className="text-[#00000099] tracking-[-0.05px]">.</span>
        </>
      ),
    },
  ];

  return (
    <section className="w-full py-10 bg-white">
      <div className="container max-w-[1220px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <Card key={index} className="border-none shadow-none">
              <CardContent className="p-0">
                <h2 className="[font-family:'Gentona-Regular',Helvetica] font-normal text-black text-[32px] tracking-[-0.24px] leading-[48px] mb-6">
                  {card.title}
                </h2>
                <p className="[font-family:'Gentona-Regular',Helvetica] font-normal text-2xl leading-6 tracking-[-0.20px]">
                  {card.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
