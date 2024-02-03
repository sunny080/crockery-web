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

  const handleClick = (id) => {
    const elment = document.getElementById(`${id}`);
    elment.scrollIntoView();
  };

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
                <button
                  onClick={() => handleClick("about")}
                  className="text-base font-semibold font-Roboto leading-6 text-white"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleClick("portfolio")}
                  className="text-base font-semibold font-Roboto leading-6 text-white"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleClick("testimonial")}
                  className="text-base font-semibold font-Roboto leading-6 text-white"
                >
                  Feedback
                </button>
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
              <a
                href="https://www.facebook.com/ranarizwan.ahmed.3?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="19"
                  viewBox="0 0 12 19"
                  fill="none"
                >
                  <g clipPath="url(#clip0_2890_1710)">
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
              <a
                href="https://www.youtube.com/@ranarizwan1048"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_510_995)">
                    <path
                      d="M22.9522 7.10689C22.8334 6.6323 22.5914 6.19746 22.2508 5.8463C21.9102 5.49513 21.4829 5.24007 21.0122 5.10689C19.2922 4.68689 12.4122 4.68689 12.4122 4.68689C12.4122 4.68689 5.53216 4.68689 3.81216 5.14689C3.34141 5.28007 2.91414 5.53513 2.57351 5.8863C2.23288 6.23746 1.99095 6.6723 1.87216 7.14689C1.55738 8.89245 1.4034 10.6632 1.41216 12.4369C1.40094 14.2239 1.55493 16.0082 1.87216 17.7669C2.00312 18.2267 2.25047 18.645 2.59031 18.9814C2.93014 19.3177 3.35098 19.5607 3.81216 19.6869C5.53216 20.1469 12.4122 20.1469 12.4122 20.1469C12.4122 20.1469 19.2922 20.1469 21.0122 19.6869C21.4829 19.5537 21.9102 19.2986 22.2508 18.9475C22.5914 18.5963 22.8334 18.1615 22.9522 17.6869C23.2645 15.9545 23.4185 14.1972 23.4122 12.4369C23.4234 10.6498 23.2694 8.86559 22.9522 7.10689Z"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.1622 15.7069L15.9122 12.4369L10.1622 9.16687V15.7069Z"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_510_995">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.41217 0.68689)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>
            <li>
              <a href="tel:03224175634">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 301 302"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
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
