import { useRef, useState } from "react";
import clsx from "clsx";
import Icon from "../Icon";
import Button from "../Button";
import Heading from "../Heading";

// import './contactform.scss'

function encode(data) {
  const formData = new FormData();
  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }
  return formData;
}

export const ContactForm = ({ otherClasses, toggleCancel }) => {
  const contactFormClasses = clsx(
    otherClasses,
    "max-w-[720px] bg-white overflow-y-auto h-full px-10 lg:px-16 xl:px-[84px]"
  );

  const messageRef = useRef("");
  const [state, setState] = useState({
    description: "",
    email: "",
    name: "",
    phone: "",
    option: "",
    city: "",
    state: "",
  });

  const [active, setActive] = useState({
    step: "options",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    try {
      await fetch("/favicon.ico", {
        method: "POST",
        body: encode({
          "form-name": form.getAttribute("name"),
          ...state,
        }),
      });
      messageRef.current.innerHTML =
        "Thank you for for submission! We will get in touch with you shortly.";
      setTimeout(() => {
        messageRef.current.innerHTML = null;
      }, 2000);
      setState({
        description: "",
        email: "",
        name: "",
        phone: "",
        option: "",
        city: "",
        state: "",
      });
      form.reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={contactFormClasses} data-testid="contact-form">
      <button
        onClick={() => {
          toggleCancel(),
            setActive((prev) => ({
              ...prev,
              step: "options",
            }));
        }}
        className="absolute top-5 right-5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clip-rule="evenodd"
            d="M7.17721 6.00002L11.588 10.4108C11.9134 10.7362 11.9134 11.2638 11.588 11.5893C11.2625 11.9147 10.7349 11.9147 10.4094 11.5893L5.9987 7.17853L1.58795 11.5893C1.26252 11.9147 0.734878 11.9147 0.409441 11.5893C0.0840044 11.2638 0.0840044 10.7362 0.409441 10.4108L4.82019 6.00002L0.409441 1.58928C0.0840044 1.26384 0.0840044 0.736202 0.409441 0.410765C0.734878 0.0853278 1.26252 0.0853278 1.58795 0.410765L5.9987 4.82151L10.4094 0.410765C10.7349 0.0853278 11.2625 0.0853278 11.588 0.410765C11.9134 0.736202 11.9134 1.26384 11.588 1.58928L7.17721 6.00002Z"
            fill="black"
          />
        </svg>
      </button>

      <div className="w-full mt-[72px]">
        <Heading type="h2" otherClasses="text-[#072C3E] mb-10">
          Request a Quote
        </Heading>
        <form
          onSubmit={handleSubmit}
          name="Contact Us"
          method="post"
          action=""
          data-netlify="true"
          className={clsx("w-full mt-5 md:mt-8")}
        >
          <p
            className="font-Work-Sans text-base font-normal mb-4"
            ref={messageRef}
          ></p>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="font-Roboto text-[14px] text-gray-800 font-semibold leading-5"
            >
              Name
            </label>
            <input
              name="name"
              id="name"
              required
              type="text"
              value={state.name}
              onChange={(e) =>
                setState((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
              className="bg-transparent text-gray-900 w-full border pl-4 font-Plus-Jakarta-Sans border-[#B2B2B2] h-12 mt-2 focus:outline outline-offset-0 outline-[2px] outline-[#38728F] rounded-[2px]"
            />
          </div>

          <div className="mb-6 flex flex-col md:flex-row gap-5 lg:gap-[21px]">
            <div className="w-full md:w-2/4">
              <label
                htmlFor="phone"
                className="font-Roboto text-[14px] text-gray-800 font-semibold leading-5"
              >
                Phone Number
              </label>
              <input
                name="phone"
                id="phone"
                value={state.phone}
                onChange={(e) =>
                  setState((prev) => ({
                    ...prev,
                    phone: e.target.value,
                  }))
                }
                required
                type="number"
                className="bg-transparent text-gray-900 w-full border pl-4 font-Plus-Jakarta-Sans border-[#B2B2B2] h-12 mt-2 focus:outline outline-offset-0 outline-[2px] outline-[#38728F] rounded-[2px]"
              />
            </div>
            <div className="w-full md:w-2/4">
              <label
                htmlFor="email"
                className="font-Roboto text-[14px] text-gray-800 font-semibold leading-5"
              >
                Email Address
              </label>
              <input
                name="email"
                id="email"
                type="email"
                value={state.email}
                onChange={(e) =>
                  setState((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
                className="bg-transparent text-gray-900 w-full border pl-4 font-Plus-Jakarta-Sans border-[#B2B2B2] h-12 mt-2 focus:outline outline-offset-0 outline-[2px] outline-[#38728F] rounded-[2px]"
              />
            </div>
          </div>

          <div className="mb-6 flex flex-col md:flex-row gap-5 lg:gap-[21px]">
            <div className="w-full md:w-2/4">
              <label
                htmlFor="city"
                className="font-Roboto text-[14px] text-gray-800 font-semibold leading-5"
              >
                city
              </label>
              <input
                name="city"
                id="city"
                value={state.city}
                onChange={(e) =>
                  setState((prev) => ({
                    ...prev,
                    city: e.target.value,
                  }))
                }
                type="text"
                className="bg-transparent text-gray-900 w-full border pl-4 font-Plus-Jakarta-Sans border-[#B2B2B2] h-12 mt-2 focus:outline outline-offset-0 outline-[2px] outline-[#38728F] rounded-[2px]"
              />
            </div>
            <div className="w-full md:w-2/4">
              <label
                htmlFor="state"
                className="font-Roboto text-[14px] text-gray-800 font-semibold leading-5"
              >
                State
              </label>
              <input
                name="state"
                id="state"
                type="text"
                value={state.state}
                onChange={(e) =>
                  setState((prev) => ({
                    ...prev,
                    state: e.target.value,
                  }))
                }
                className="bg-transparent text-gray-900 w-full border pl-4 font-Plus-Jakarta-Sans border-[#B2B2B2] h-12 mt-2 focus:outline outline-offset-0 outline-[2px] outline-[#38728F] rounded-[2px]"
              />
            </div>
          </div>

          <div className="w-full flex flex-col gap-2 mb-6">
            <label
              htmlFor="option"
              className="font-Roboto text-[14px] text-gray-800 font-semibold leading-5"
            >
              What Can We Help You With?
            </label>
            <select
              id="option"
              type="text"
              value={state?.option}
              name="option"
              onChange={(e) =>
                setState((prev) => ({
                  ...prev,
                  option: e.target.value,
                }))
              }
              className="bg-transparent text-gray-900 w-full border pl-4 font-Plus-Jakarta-Sans border-[#B2B2B2] h-12 mt-2 focus:outline outline-offset-0 outline-[2px] outline-[#38728F] rounded-[2px]"
            >
              <option value="Select one" className="text-black">
                Select one...
              </option>
              <option value="Kitchen Installation" className="text-black">
                Kitchen Installation
              </option>
              <option value="Bathroom Installation" className="text-black">
                Bathroom Installation
              </option>
              <option value="Window Installation" className="text-black">
                Window Installation
              </option>
              <option value="Door Installation" className="text-black">
                Door Installation
              </option>
              <option value="Fireplace Installation" className="text-black">
                Fireplace Installation
              </option>
              <option value="others" className="text-black">
                others
              </option>
            </select>
          </div>
          <div className="w-full mb-6">
            <label
              htmlFor="description"
              className="font-Roboto text-[14px] text-gray-800 font-semibold leading-5"
            >
              Message (optional)
            </label>
            <textarea
              type="text"
              value={state.description}
              onChange={(e) =>
                setState((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              name="description"
              id="description"
              cols="30"
              rows="10"
              className="bg-transparent text-gray-900 w-full border-[1px] p-4 font-Plus-Jakarta-Sans border-[#B2B2B2] h-12 mt-2  focus:outline outline-offset-0 outline-[2px] outline-[#38728F] rounded-[2px] min-h-[176px]"
            ></textarea>
          </div>
          <Button
            label="Submit"
            variant="primary"
            onClick={() =>
              setActive((prev) => ({
                ...prev,
                step: "greeting",
              }))
            }
          />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
