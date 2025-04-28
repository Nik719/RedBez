import React from "react";
import { ContainerWrapperByAnima } from "./sections/ContainerWrapperByAnima/ContainerWrapperByAnima";
import { DesktopWrapperByAnima } from "./sections/DesktopWrapperByAnima/DesktopWrapperByAnima";
import { DexByAnima } from "./sections/DexByAnima";
import { FrameByAnima } from "./sections/FrameByAnima/FrameByAnima";
import { FrameWrapperByAnima } from "./sections/FrameWrapperByAnima/FrameWrapperByAnima";
import { GroupWrapperByAnima } from "./sections/GroupWrapperByAnima/GroupWrapperByAnima";
import { NavigationByAnima } from "./sections/NavigationByAnima";
import { SectionByAnima } from "./sections/SectionByAnima/SectionByAnima";

export const FrameScreen = (): JSX.Element => {
  return (
    <div className="bg-transparent flex flex-row justify-center w-full h-screen overflow-hidden">
      {/* Mobile (up to 640px) */}
      <div className="w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1440px] 2xl:w-[1660px] 4xl:w-[3000px] h-full">
        <div className="relative h-full">
          <div className="w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1440px] 2xl:w-[1660px] 4xl:w-[3000px] h-full bg-white overflow-y-auto scroll-smooth [&::-webkit-scrollbar-thumb]:bg-white [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-2">
            <div className="flex flex-col">
              {/* Navigation Bar */}
              <div className="h-[14px]" /> {/* Reduced spacer for fixed navigation */}
              <NavigationByAnima />

              {/* Main Content */}
              <div className="flex flex-col">
                <DexByAnima />
                <SectionByAnima />
                <FrameByAnima />

                <div className="flex flex-col sm:flex-row justify-between px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[81px] pt-[40px] items-start">
                  <div className="w-full sm:w-[719px]">
                    <img
                      className="w-full h-auto object-cover"
                      alt="Pic car"
                      src="/pic-car-1.png"
                    />
                  </div>
                  <div className="w-full sm:w-[557px] mt-4 sm:mt-0">
                    <FrameWrapperByAnima />
                  </div>
                </div>

                <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[81px] pt-[40px]">
                  <ContainerWrapperByAnima />
                </div>

                <GroupWrapperByAnima />
                
                {/* Desktop Design Section */}
                <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[81px] mt-12">
                  <DesktopWrapperByAnima />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};