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
    <button
      onClick={() => handleFetch(dataInput, coordinates, startDate, endDate)}
    >
      fetchme
    </button>
  );
}

export default SubmitButton;
