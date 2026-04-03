import { useState } from "react";
import Itemslist from "./itemsList";

const RestoItems = ({ data, accordian, setAccordian }) => {
  //   const { data } = props;
  //   const [accordian, setAccordian] = useState(false);

  const accordianSetting = () => {
    setAccordian();
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-grey-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={accordianSetting}
        >
          <span className="font-bold text-lg">
            {data.title} ({data?.itemCards?.length})
          </span>
          <span>⬆️</span>
        </div>
        {accordian && <Itemslist items={data}></Itemslist>}
      </div>
    </div>
  );
};

export default RestoItems;
