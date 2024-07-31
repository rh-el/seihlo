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

  //   const handleFetch = async (dataInput, coordinates, startDate, endDate) => {
  //     const formattedDate = formatDateUrl(startDate, endDate);
  //     const formattedUrl = `https://archive-api.open-meteo.com/v1/archive?${coordinates}&${formattedDate}&${dataInput}`;
  //     const data = await (await fetch(formattedUrl)).json();
  //     setRawData(data);
  //     console.log(data);
  //     // console.log(dataInput);
  //     calculateIndices(dataInput, );
  //     // console.log(climdexIndices);
  //   };

  return (
    <button
      onClick={() => handleFetch(dataInput, coordinates, startDate, endDate)}
    >
      fetchme
    </button>
  );
}

export default SubmitButton;
