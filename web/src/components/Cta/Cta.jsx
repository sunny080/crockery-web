import React from "react";
import clsx from "clsx";
import Heading from "../Heading/Heading";
import RichText from "../RichText/RichText";
import NextImage from "../NextImage/NextImage";
import Button from "../Button";

export const Cta = ({
  otherClasses,
  heading,
  subTextRaw,
  desktopBackground,
  mobileBackground,
  requestButton,
  contactButton,
}) => {
  const ctaClasses = clsx(otherClasses, "w-full relative");

  return (
    <section className={ctaClasses} data-testid="cta">
      <NextImage
        {...mobileBackground}
        otherClasses="w-full h-full absolute left-0 top-0 block lg:hidden"
      />
      <NextImage
        {...desktopBackground}
        otherClasses="lg:w-full lg:h-full lg:absolute lg:left-0 lg:top-0 hidden lg:block"
      />
      <div className="max-w-[1512px] mx-auto   flex flex-col gap-10 justify-center items-center  lg:flex-row lg:justify-between lg:items-end relative py-20 lg:pt-[76px] lg:px-10 px-4 xl:px-[156px] lg:pb-[200px]">
        <div className=" max-w-[704px] flex flex-col text-center lg:text-left gap-4">
          <Heading otherClasses="h2">{heading}</Heading>
          <RichText
            richText={subTextRaw}
            otherClasses="global_rich_text_class "
          />
        </div>
        <div className="w-full md:w-fit flex flex-col lg:justify-end lg:flex-row  gap-4">
          <Button
            {...requestButton}
            otherClasses="w-full lg:w-fit whitespace-nowrap"
          />
          <Button
            {...contactButton}
            otherClasses="w-full lg:w-fit whitespace-nowrap"
          />
        </div>
      </div>
    </section>
  );
};

export default Cta;
export const CTA_FRAGMENT = `
fragment CtaSection on CtaSection {
  _type
  identifier
  heading
  subTextRaw
  desktopBackground{
    ...CustomImage 
  }
  mobileBackground{
    ...CustomImage 
  }
  requestButton{
    ...Button 
  }
  contactButton{
    ...Button 
  }
}`;
