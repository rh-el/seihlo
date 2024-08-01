function DateInput(props) {
  const {handleStartDate, handleEndDate} = props

  return <div className="date-input-container w-6/12">
            <input
              type="text"
              id="start-date"
              name="start-date"
              placeholder="yyyy-mm-dd"
              onChange={handleStartDate}
              className="w-6/12 bg-customblack border border-customgray p-4 text-center caret-customblue duration-200 focus:outline-none focus:border-transparent focus:border-b-customblue !outline-none"
            />
            <input
              type="text"
              id="end-date"
              name="end-date"
              placeholder="yyyy-mm-dd"
              onChange={handleEndDate}
              className="w-6/12 bg-customblack border border-customgray p-4 text-center rounded-r-md caret-customblue duration-200 focus:outline-none focus:border-transparent focus:border-b-customblue !outline-none"
            />
          </div>;
}

export default DateInput;
