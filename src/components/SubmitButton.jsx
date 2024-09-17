import { useContext } from "react";
import { IndicesDataContext } from '../routes/App';

function SubmitButton(props) {
  const { rawData, indicesResults } = useContext(IndicesDataContext);
  const {
    dataInput,
    coordinates,
    startDate,
    endDate,
    handleFetch,
  } = props;

  return (
    <div className="flex justify-center ">
      <button
        onClick={() => handleFetch(dataInput, coordinates, startDate, endDate)} className="border border-customgray py-4 px-8 rounded-md duration-200 h-20 w-full md:w-auto hover:bg-customblue hover:text-customblack"
      >
        generate
      </button>
    </div>
  );
}

export default SubmitButton;
