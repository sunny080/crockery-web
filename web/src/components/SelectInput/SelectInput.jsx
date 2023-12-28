import clsx from "clsx";
import Icon from "../Icon/Icon";
import { Listbox } from "@headlessui/react";

export const SelectInput = ({
  otherClasses,
  categories,
  setSelectedCategory,
  selectedCategory,
  customClass,
}) => {
  const selectInputClasses = clsx(otherClasses, "relative");

  return (
    <div className={selectInputClasses} data-testid="select-input">
      <Listbox
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e)}
      >
        <Listbox.Button
          className={clsx(
            "flex items-center justify-between gap-1 w-[319px] py-3 px-6 rounded-[8px] border-[1px] border-primary_navy_blue  text-base leading-6 font-Plus-Jakarta-Sans text-primary_navy_blue font-semibold",
            customClass
          )}
        >
          {selectedCategory}
          <Icon icon="chevron-down" iconHeight={24} iconWidth={24} />
        </Listbox.Button>
        <Listbox.Options className="absolute z-10 left-0 top-[54px] select_input_drop_down_shadow w-full rounded-[8px] border-[1px] border-primary_navy_blue bg-white p-4 max-h-[472px] overflow-auto">
          {categories &&
            categories.map(({ title }, index) => (
              <Listbox.Option
                key={index}
                value={title}
                className="py-2 px-2 rounded-[8px] hover:bg-gray-50 cursor-pointer text-base leading-6 font-Plus-Jakarta-Sans text-primary_navy_blue font-semibold"
              >
                {title}
              </Listbox.Option>
            ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};

export default SelectInput;
