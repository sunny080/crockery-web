import React from "react";
import clsx from "clsx";
import Heading from "../Heading/Heading";
import RichText from "../RichText/RichText";
import NextImage from "../NextImage/NextImage";
import Button from "../Button";

export const Cta = ({ otherClasses, subTextRaw, buttons, toggleFunc }) => {
  const ctaClasses = clsx(otherClasses, "bg-black w-full lg:py-32  py-20 ");

  return (
    <section className={ctaClasses} data-testid="cta">
      <div className="mx-auto flex max-w-[1512px] flex-col justify-between gap-14 px-4 lg:flex-row lg:gap-6 lg:px-10 lg:text-justify xl:px-120  ">
        <div className="flex max-w-[680px]  px-4 md:px-0 ">
          <RichText
            richText={subTextRaw}
            otherClasses="text-styling flex flex-col gap-6"
          />
        </div>
        <div className="flex flex-col gap-6 px-4  md:flex-row md:items-center md:justify-center lg:flex-col lg:justify-start ">
          {buttons?.map((node, index) => {
            return (
              <Button
                {...node}
                onClick={() => toggleFunc(node.form)}
                otherClasses="w-[250px] whitespace-nowrap"
                key={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Cta;
export const CTA_FRAGMENT = `
fragment CtaSection on CtaSection{
  _type
  identifier
  subTextRaw 
  buttons:button{
    ...Button
  }
}  `;
