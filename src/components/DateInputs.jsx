function DateInput(props) {
  const {handleStartDate, handleEndDate, startDate, endDate} = props

  return <div className="date-input-container w-full md:w-6/12">
            <input
              type="text"
              id="start-date"
              name="start-date"
              placeholder="start year"
              onChange={handleStartDate}
              className="w-6/12 bg-customblack border border-customgray rounded-l-md md:rounded-none md:h-20 p-4 text-center caret-customblue duration-200 focus:outline-none focus:border-transparent focus:border-b-customblue !outline-none"
              value={startDate}
              autoComplete="off"
            />
            <input
              type="text"
              id="end-date"
              name="end-date"
              placeholder="end year"
              onChange={handleEndDate}
              className="w-6/12 bg-customblack border border-customgray md:h-20 p-4 text-center rounded-r-md caret-customblue duration-200 focus:outline-none focus:border-transparent focus:border-b-customblue !outline-none"
              value={endDate}
              autoComplete="off"
            />
          </div>;
}

export default DateInput;
