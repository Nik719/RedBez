import React from "react";

export const FrameByAnima = (): JSX.Element => {
  // Data for the taxi service sections
  const taxiServices = [
    {
      title: "One Way Taxi",
      subheading: "Book One Way Taxi save up to 40%",
      description: `Every day lakhs of passengers in Bihar travel one way from one
      city to another or from city to village. Due to unorganised of
      taxi service in Bihar, the taxi driver could not get return
      passenger at any platform at the time of return, due to which the
      passenger had to pay both-side taxi fare even for one-way journey.
      \nRodBez has come up with a solution to this problem in the form of
      One Way Taxi, We connect 2 passengers traveling from oposite
      directions into a single taxi, reducing your travel cost by up to
      40%.`,
    },
    {
      title: "TaxiPool",
      subheading: "Book TaxiPool  save up to 60%",
      description: `At TaxiPool we show you the availability of such taxis which are
      going to travel on your route without passengers, by connecting
      you with such taxis we save up to 60% of the fare compared to the
      market price, thus saving on wastage of fuel, It is put to good
      use, there is no provision of sharing in TaxiPool, rather you can
      travel with your family, the entire cab will be yours for this
      journey.`,
    },
  ];

  return (
    <section className="w-full relative py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 flex justify-center">
          <img
            className="w-full max-w-[577px] h-auto object-cover"
            alt="Main pic"
            src="/main-pic-2-1.png"
          />
        </div>

        <div className="md:w-1/2 flex flex-col gap-12">
          {taxiServices.map((service, index) => (
            <div key={index} className="max-w-[574px]">
              <h2 className="font-['Rubik',Helvetica] font-semibold text-omnifooddevalto text-[64px] leading-[86px]">
                {service.title}
              </h2>

              <h3 className="mt-8 font-omnifood-dev-semantic-heading-3 text-rodbezinmine-shaft text-[length:var(--omnifood-dev-semantic-heading-3-font-size)] tracking-[var(--omnifood-dev-semantic-heading-3-letter-spacing)] leading-[var(--omnifood-dev-semantic-heading-3-line-height)] whitespace-nowrap">
                {service.subheading}
              </h3>

              <p className="mt-4 font-['Rubik',Helvetica] font-normal text-omnifooddevemperor text-lg leading-[32.4px]">
                {service.description.split("\n").map((paragraph, i) => (
                  <React.Fragment key={i}>
                    {paragraph}
                    {i < service.description.split("\n").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
