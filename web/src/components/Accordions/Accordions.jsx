import React, { useState } from "react";
import clsx from "clsx";
import Icon from "../Icon/Icon";
import RichText from "../RichText/RichText";
import Heading from "../Heading/Heading";

export const Accordions = ({
  otherClasses,
  questionText,
  answerRaw,
  index,
  withIsSerial,
}) => {
  const accordionsClasses = clsx(
    otherClasses,
    "w-full  border-b-[1px] border-[#CCC] first:border-t-[1px]"
  );
  const [toggle, setToggle] = useState(false);

  const toggleAccordion = (elm) => {
    setToggle(!elm);
  };
  return (
    <div className={accordionsClasses} data-testid="accordions">
      <div
        className={clsx(
          "flex w-full  gap-6 ",
          withIsSerial && toggle
            ? " items-start  justify-center "
            : " items-center justify-center"
        )}
      >
        {withIsSerial && (
          <span className="flex items-center font-Plus-Jakarta-Sans text-7xl font-extrabold not-italic leading-[72px]  text-[#7EBABB]">
            {index < 10 ? `0${index + 1}` : index}
          </span>
        )}
        <div
          className={clsx(
            "flex w-full flex-col  items-start justify-start",
            withIsSerial ? "gap-10" : "gap-0",
            toggle ? " mb-10" : "mb-0"
          )}
        >
          <button
            onClick={() => toggleAccordion(toggle)}
            className={clsx(
              "flex w-full items-center justify-between",
              withIsSerial ? "py-10" : "py-10"
            )}
          >
            <Heading
              type="h4"
              otherClasses={clsx(
                "text-white font-Plus-Jakarta-Sans  not-italic font-normal  text-left items-start",
                withIsSerial ? "text-4xl" : "text-2xl leading-[34px]"
              )}
            >
              {questionText}
            </Heading>
            <div>
              <Icon
                icon={clsx(toggle ? "faqs-minus" : "arrow-down-faqs")}
                iconWidth={24}
                iconHeight={24}
              />
            </div>
          </button>

          <RichText
            richText={answerRaw}
            otherClasses={clsx(
              "accordions_rich_text",
              toggle === true ? "block transition-all ease-in" : "hidden",
              withIsSerial ? "accordions_rich33" : "accordions_rich_text"
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Accordions;
