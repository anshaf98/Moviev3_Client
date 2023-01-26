import React, { useState, Fragment } from "react";
import { CategoriesData } from "../data/CategoriesData";
import { Listbox, Transition } from "@headlessui/react";
import { CgSelect } from "react-icons/cg";
import { AiOutlineCheck } from "react-icons/ai";

const YearData = [
  { title: "Sort By Year" },
  { title: "1700 - 1800" },
  { title: "1800 - 1900" },
  { title: "1900 - 2000" },
  { title: "2000 - 2010" },
  { title: "2010 - 2020" },
  { title: "2020 - 2030" },
];
const TimesData = [
  { title: "Sort By Hours" },
  { title: "1 - 5 Hours" },
  { title: "5 - 10 Hours" },
  { title: "10 - 15 Hours" },
  { title: "15 - 20 Hours" },
];
const RatesData = [
  { title: "Sort By Rates" },
  { title: "1 Star" },
  { title: "2 Star" },
  { title: "3 Star" },
  { title: "4 Star" },
  { title: "5 Star" },
];

const Filters = () => {
  const [category, setCategory] = useState({ title: "Category" });
  const [year, setYear] = useState(YearData[0]);
  const [times, setTimes] = useState(TimesData[0]);
  const [rates, setRates] = useState(RatesData[0]);

  const Filter = [
    {
      value: category,
      onChange: setCategory,
      items: CategoriesData,
    },
    {
      value: year,
      onChange: setYear,
      items: YearData,
    },
    {
      value: times,
      onChange: setTimes,
      items: TimesData,
    },
    {
      value: rates,
      onChange: setRates,
      items: RatesData,
    },
  ];
  return (
    <div className=" my-6 bg-dry border text-dryGray border-gray-800 grid md:grid-cols-4 grid-cols-2 lg:gap-12 gap-2 rounded p-6">
      {Filter.map((item, index) => (
        <Listbox key={index} value={item.value} onChange={item.onChange}>
          <div className=" relative">
            <Listbox.Button className=" relative border border-gray-800 w-full text-white bg-main rounded-lg shadow-sm cursor-default py-4 pl-6 pr-10 text-left text-xs">
              <span className=" block truncate">{item.value.title}</span>
              <span className=" absolute inset-y-0 right-0 flex  pr-2 pointer-events-none items-center justify-center">
                <CgSelect className=" h-5 w-5" />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              //   show={open}
              //   enter="transition duration-100 ease-out"
              //   enterFrom="transform scale-95 opacity-0"
              //   enterTo="transform scale-100 opacity-100"
              leave="transition duration-10 ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className=" absolute z-10 mt-1 w-full bg-white border border-gray-800 text-dryGray rounded-md shadow-lg max-h-60 py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {item.items.map((iterm, i) => (
                  <Listbox.Option
                    key={i}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-subMain text-white" : "text-main"
                      }`
                    }
                    value={iterm}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncated ${
                            selected ? "font-semibold" : "font-normal"
                          }`}
                        >
                          {iterm.title}
                        </span>
                        {selected ? (
                          <span className=" absolute inset-y-0 left-0 flex items-center pl-3">
                            <p>
                              <AiOutlineCheck className=" w-5 h-5" />
                            </p>
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      ))}
    </div>
  );
};

export default Filters;
