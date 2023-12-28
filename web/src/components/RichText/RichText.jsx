import React from "react";
import { PortableText } from "@portabletext/react";
import clsx from "clsx";
import { getImageDimensions } from "@sanity/asset-utils";
import clientConfig from "../../../client-config";
import ImageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import Button from "../Button";

const builder = ImageUrlBuilder({
  ...clientConfig.sanity,
});

const SampleImageComponent = ({ value, isInline }) => {
  const { width, height } = getImageDimensions(value);
  return (
    <img
      src={builder
        .image(value)
        .width(isInline ? 100 : 800)
        .fit("max")
        .auto("format")
        .url()}
      alt={value.alt || " "}
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? "inline-block" : "block",

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  );
};

export const RichText = ({ richText, otherClasses, ...rest }) => {
  const richTextClasses = clsx(otherClasses, "relative");

  const ButtonComponent = (props) => {
    const data = props.value;
    const { toggleFunc } = rest;
    return <Button {...data} onClick={() => toggleFunc("Contact Us")} />;
  };
  return (
    <div className={clsx(richTextClasses)}>
      <PortableText
        value={richText}
        components={{
          types: {
            image: SampleImageComponent,
            button: ButtonComponent,
          },
          marks: {
            link: ({ children, value }) => {
              const { href } = value;
              const rel = !href.startsWith("/")
                ? "noreferrer noopener"
                : undefined;
              if (href === "tel:(888) 939-3309") {
                return (
                  <Link href={href} target="_self" rel={rel}>
                    {children}
                  </Link>
                );
              } else {
                return (
                  <Link href={href} target={rel && "_blank"} rel={rel}>
                    {children}
                  </Link>
                );
              }
            },
          },
        }}
      />
    </div>
  );
};

export default RichText;
