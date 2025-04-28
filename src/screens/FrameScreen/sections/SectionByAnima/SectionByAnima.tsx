import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const SectionByAnima = (): JSX.Element => {
  return (
    <section className="w-full py-16 flex justify-center">
      <Card className="w-full max-w-[1200px] border-none shadow-none">
        <CardContent className="p-0 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col space-y-4">
            <h2 className="font-omnifood-dev-semantic-heading-3 font-[number:var(--omnifood-dev-semantic-heading-3-font-weight)] text-rodbezinmine-shaft text-[length:var(--omnifood-dev-semantic-heading-3-font-size)] tracking-[var(--omnifood-dev-semantic-heading-3-letter-spacing)] leading-[var(--omnifood-dev-semantic-heading-3-line-height)] [font-style:var(--omnifood-dev-semantic-heading-3-font-style)]">
              Gaon ki Galion se
            </h2>

            <h2 className="font-omnifood-dev-semantic-heading-3 font-[number:var(--omnifood-dev-semantic-heading-3-font-weight)] text-[#fce003] text-[length:var(--omnifood-dev-semantic-heading-3-font-size)] tracking-[var(--omnifood-dev-semantic-heading-3-letter-spacing)] leading-[var(--omnifood-dev-semantic-heading-3-line-height)] [font-style:var(--omnifood-dev-semantic-heading-3-font-style)]">
              Patna Ki Sadkon tak
            </h2>

            <p className="max-w-[531px] font-['Rubik',Helvetica] font-normal text-omnifooddevemperor text-lg tracking-[0] leading-[32.4px] mt-4">
              We find cheap and safe one way taxi for you, now service is
              available from all villages and cities of Bihar to Patna or from
              Patna to every village and cities of Bihar
            </p>
          </div>

          <img
            className="w-full md:w-[582px] h-auto object-cover rounded-md"
            alt="Header pic"
            src="/header-pic-1-1.png"
          />
        </CardContent>
      </Card>
    </section>
  );
};
