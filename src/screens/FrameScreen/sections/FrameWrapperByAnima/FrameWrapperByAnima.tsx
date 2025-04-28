import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const FrameWrapperByAnima = (): JSX.Element => {
  return (
    <Card className="flex flex-col w-full max-w-[557px] border-none shadow-none">
      <CardContent className="flex flex-col items-start gap-[15px] p-0">
        <div className="relative w-full">
          <div className="relative w-full">
            <h3 className="font-omnifood-dev-semantic-heading-3 font-[number:var(--omnifood-dev-semantic-heading-3-font-weight)] text-rodbezinmine-shaft text-[length:var(--omnifood-dev-semantic-heading-3-font-size)] tracking-[var(--omnifood-dev-semantic-heading-3-letter-spacing)] leading-[var(--omnifood-dev-semantic-heading-3-line-height)] [font-style:var(--omnifood-dev-semantic-heading-3-font-style)]">
              On Time Airport
              <span className="ml-2 [-webkit-text-stroke:4px_#fce003cc] text-rodbezinmine-shaft">
                Commitment
              </span>
            </h3>
          </div>
        </div>

        <p className="w-full [font-family:'Rubik',Helvetica] font-normal text-omnifooddevemperor text-lg tracking-[0] leading-[32.4px]">
          Yes, we do pick up the passenger traveling to railway station or
          airport on time, if our taxi does not reach you at the selected pickup
          time, due to which you miss your flight or train, we refund 100% of
          ticket price.
          <br />
          <span className="text-sm">*conditions applied</span>
        </p>
      </CardContent>
    </Card>
  );
};
