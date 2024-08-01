function SubmitButton(props) {
  const {
    dataInput,
    coordinates,
    startDate,
    endDate,
    setRawData,
    rawData,
    handleFetch,
  } = props;

  return (
    <div className="flex justify-center">
    <button
      onClick={() => handleFetch(dataInput, coordinates, startDate, endDate)} className="border border-customgray py-4 px-8 rounded-md duration-200 hover:bg-customblue hover:text-customblack"
    >
      fetchme
    </button>
    </div>
  );
}

export default SubmitButton;
