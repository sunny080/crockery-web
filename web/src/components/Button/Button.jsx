import React from "react";
import clsx from "clsx";
import Icon from "../Icon/Icon";
import Link from "next/link";

export const Button = ({
  label = "",
  variant = "primary",
  otherClasses,
  form,
  externalLink,
  slug,
  onClick,
}) => {
  const buttonClasses = clsx(
    otherClasses,
    variant === "primary" &&
      `px-6 py-3 rounded bg-primary_red_600 text-white font-semibold font-Roboto text-sm leading-[18px] uppercase tracking-[1.68px] hover:bg-primary-button`,
    variant === "secondary" &&
      `px-6 py-3 rounded bg-transparent outline-[1px] outline-white outline font-semibold text-sm leading-[18px] text-white font-Roboto hover:bg-primary_red_100 hover:text-primary_red_600 hover:outline-[0px] transition-all duration-300`,
    variant === "text-link-dark" &&
      `flex items-center gap-[10px] text-base font-bold font-Roboto text-primary_blue_600 transition-[0.3s] before:block before:h-[28px] before:w-[1px] before:bg-primary_red_600 hover:before:w-[6px] before:transition-[0.3s] hover:text-primary_red_600`,
    variant === "text-link-light" &&
      `flex items-center gap-2 text-base font-bold text-primary_blue_600 hover:text-primary_red_600 hover:gap-4 transition-all duration-300 hover:primary_red_600 group`
  );

  const withIcon = variant === "text-link-light";

  if (slug) {
    const { current } = slug;

    return (
      <Link
        className={buttonClasses}
        href={externalLink ? `${current}` : `/${current}`}
        target={externalLink ? "_blank" : "_self"}
        rel={externalLink ? "noopener noreferrer" : ""}
      >
        {label}
        {withIcon && (
          <>
            <Icon
              icon="blue-arrow-icon"
              iconHeight={16}
              iconWidth={14}
              otherClasses="group-hover:hidden"
            />
            <Icon
              icon="orange-arrow-icon"
              iconHeight={16}
              iconWidth={14}
              otherClasses="group-hover:block hidden"
            />
          </>
        )}
      </Link>
    );
  }

  return (
    <button
      onClick={(e) => {
        onClick && onClick(form, e);
      }}
      className={buttonClasses}
      data-testid="button"
    >
      {label}
      {withIcon && (
        <>
          <Icon
            icon="blue-arrow-icon"
            iconHeight={16}
            iconWidth={14}
            otherClasses="group-hover:hidden"
          />
          <Icon
            icon="orange-arrow-icon"
            iconHeight={16}
            iconWidth={14}
            otherClasses="group-hover:block hidden"
          />
        </>
      )}
    </button>
  );
};

export default Button;

export const BUTTON_FRAGMENT = `
fragment Button on Button {
  label
  variant
  form
  externalLink
  slug {
    current
  }
  action
}
`;
