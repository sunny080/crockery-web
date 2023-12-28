import React from "react";
import Link from "next/link";
import clsx from "clsx";
import Button from "../Button/Button";
export const Footer = ({ otherClasses, toggleFunc }) => {
  const footerClasses = clsx(
    otherClasses,
    "w-full pb-10 pt-10 sm:pt-20 bg-black"
  );
  const Year = new Date().getFullYear();
  return (
    <footer className={footerClasses} data-testid="footer">
      <div className="max-w-1512 mx-auto w-full  px-4 lg:px-20 xl:px-120 ">
        <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between">
          <h2 className="text-white sm:text-left text-center font-Roboto-Slab text-[30px] lg:text-[40px] ">
            Jani Web
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <ul className="flex flex-col sm:flex-row  items-center gap-4">
              <li>
                <Link
                  href="#"
                  className="text-base font-semibold font-Roboto leading-6 text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base font-semibold font-Roboto leading-6 text-white"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base font-semibold font-Roboto leading-6 text-white"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base font-semibold font-Roboto leading-6 text-white"
                >
                  Feedback
                </Link>
              </li>
            </ul>
            <Button
              variant="primary"
              label="Contact Us"
              onClick={() => toggleFunc("Contact Us")}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between items-center mt-10 ">
          <p className="text-white/70 font-normal font-Roboto text-sm leading-5">
            ©{Year} Jani Web All Rights Reserved
          </p>
          <ul className="flex items-center gap-4">
            <li>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="19"
                  viewBox="0 0 12 19"
                  fill="none"
                >
                  <g clip-path="url(#clip0_2890_1710)">
                    <path
                      d="M10.4687 10.6252L11.002 7.36767H7.66787V5.25372C7.66787 4.36251 8.13362 3.4938 9.62687 3.4938H11.1426V0.720322C11.1426 0.720322 9.76712 0.500244 8.452 0.500244C5.70625 0.500244 3.9115 2.06048 3.9115 4.88493V7.36767H0.859375V10.6252H3.9115V18.5002H7.66787V10.6252H10.4687Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2890_1710">
                      <rect
                        width="12"
                        height="18"
                        fill="white"
                        transform="translate(0 0.500244)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>
            <li>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.32489 3.4741C5.32489 4.48439 4.56277 5.30183 3.30828 5.30183C2.12832 5.30183 1.36719 4.48343 1.36719 3.4741C1.36719 2.44079 2.15382 1.64734 3.3583 1.64734C4.56277 1.64734 5.30037 2.43983 5.32489 3.4741ZM1.46484 18.5056V6.74487H5.20284V18.5056H1.46484Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.43793 10.4972C7.43793 9.03018 7.38889 7.80306 7.33984 6.7448H10.5845L10.7571 8.38064H10.8307C11.3221 7.61021 12.5275 6.48096 14.5432 6.48096C17.0021 6.48096 18.8461 8.09281 18.8461 11.5554V18.5056H15.1091V11.9881C15.1091 10.4732 14.5677 9.4389 13.2161 9.4389C12.1832 9.4389 11.5692 10.1364 11.2985 10.8109C11.1995 11.0507 11.1759 11.3885 11.1759 11.7243V18.5056H7.43891V10.4972H7.43793Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 301 302"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M256.572 44.1981C228.374 15.9644 190.872 0.407879 150.914 0.393555C68.5761 0.393555 1.56562 67.3969 1.53697 149.756C1.52264 176.084 8.40562 201.783 21.4768 224.43L0.283569 301.84L79.4699 281.069C101.286 292.974 125.853 299.24 150.849 299.248H150.914C233.237 299.248 300.255 232.237 300.284 149.878C300.298 109.963 284.777 72.4391 256.572 44.2053V44.1981ZM150.914 274.022H150.864C128.589 274.015 106.737 268.027 87.6711 256.718L83.1371 254.025L36.1452 266.351L48.6864 220.534L45.7355 215.835C33.3089 196.068 26.7411 173.219 26.7554 149.764C26.7841 81.3132 82.4781 25.6191 150.964 25.6191C184.125 25.6335 215.296 38.5615 238.738 62.0323C262.18 85.4961 275.079 116.695 275.065 149.864C275.036 218.321 219.343 274.015 150.914 274.015V274.022ZM219.013 181.041C215.281 179.172 196.932 170.147 193.508 168.901C190.084 167.654 187.599 167.032 185.114 170.77C182.629 174.509 175.474 182.918 173.296 185.403C171.119 187.895 168.941 188.204 165.209 186.334C161.479 184.464 149.453 180.525 135.193 167.812C124.099 157.914 116.606 145.695 114.429 141.956C112.252 138.218 114.2 136.198 116.062 134.343C117.738 132.667 119.794 129.981 121.663 127.804C123.533 125.626 124.149 124.065 125.394 121.579C126.641 119.087 126.018 116.91 125.087 115.04C124.155 113.171 116.693 94.7994 113.577 87.3294C110.547 80.0526 107.468 81.0411 105.183 80.9193C103.005 80.8118 100.52 80.7904 98.0277 80.7904C95.5352 80.7904 91.4952 81.7215 88.0719 85.4602C84.6486 89.1986 75.0078 98.2302 75.0078 116.594C75.0078 134.959 88.3802 152.714 90.2494 155.207C92.1186 157.699 116.57 195.394 154.008 211.567C162.911 215.413 169.865 217.712 175.287 219.431C184.226 222.274 192.362 221.874 198.794 220.914C205.964 219.839 220.875 211.882 223.984 203.165C227.092 194.449 227.092 186.971 226.161 185.417C225.23 183.863 222.738 182.924 219.006 181.055L219.013 181.041Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
