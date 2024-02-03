import clsx from "clsx";
import RichText from "../RichText/RichText";
import Button from "../Button";
import NextImage from "../NextImage";
import Heading from "../Heading/Heading";

export const GenericTwoColumn = ({
  otherClasses,
  toggleFunc,
  content: {
    heading,
    subTextRaw,
    desktopReversed,
    desktopImage,
    mobileReversed,
    mobileImage,
    button,
  },
}) => {
  const genericTwoColumnClasses = clsx(
    otherClasses,
    "flex max-w-1512 mx-auto gap-10 lg:gap-20 px-4 lg:px-10 xl:px-120 items-center w-full my-20 lg:my-[120px] scroll-mt-120",
    desktopReversed ? "lg:flex-row-reverse" : "lg:flex-row",
    mobileReversed ? "flex-col-reverse" : "flex-col"
  );
  return (
    <div
      id="about"
      className={genericTwoColumnClasses}
      data-testid="generic-two-column"
    >
      <div className="w-full lg:w-[60%]">
        {desktopImage && (
          <NextImage
            {...desktopImage}
            otherClasses="w-full hidden h-full lg:block"
          />
        )}
        {mobileImage && (
          <NextImage
            {...mobileImage}
            otherClasses="w-full h-full block  lg:hidden"
          />
        )}
      </div>
      <div className="w-full lg:w-[40%] flex flex-col gap-6">
        <Heading otherClasses="h2 text-primary_typography font-Roboto-Slab w-fit flex flex-col gap-4 after:block after:w-[50%] after:h-[3px] after:bg-primary_red_600">
          {heading}
        </Heading>
        <RichText richText={subTextRaw} otherClasses="Generic_rich_text" />
        {button.label && (
          <Button
            onClick={() => toggleFunc(button?.form)}
            {...button}
            otherClasses="w-fit"
          />
        )}
      </div>
    </div>
  );
};

export default GenericTwoColumn;

export const GENERIC_TWO_COLUMN_FRAGEMNT = `
fragment GenericTwoColumn on TwoColumnGeneric {
  _type
  identifier
  content {
    heading
    subTextRaw
    desktopReversed
    mobileReversed
    desktopImage {
      ...CustomImage
    }
    mobileImage {
      ...CustomImage
    }
    button {
      ...Button
    }
  }
}

`;
