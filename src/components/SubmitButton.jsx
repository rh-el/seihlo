function SubmitButton(props) {
  const { dataInput, coordinates, startDate, endDate, setRawData } = props;

  const handleFetch = async (dataInput, coordinates, startDate, endDate) => {
    const formattedDate = formatDateUrl(startDate, endDate);
    const formattedUrl = `https://archive-api.open-meteo.com/v1/archive?${coordinates}&${formattedDate}&${dataInput}`;
    const data = await (await fetch(formattedUrl)).json();
    setRawData(data);
  };

  return (
    <button
      onClick={() => handleFetch(dataInput, coordinates, startDate, endDate)}
    >
      fetchme
    </button>
  );
}

export default SubmitButton;
