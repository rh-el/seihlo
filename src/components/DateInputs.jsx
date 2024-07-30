function DateInput(props) {
  const {handleStartDate, handleEndDate} = props

  return <div className="date-input-container">
            <input
              type="text"
              id="start-date"
              name="start-date"
              placeholder="yyyy-mm-dd"
              onChange={handleStartDate}
            />
            <input
              type="text"
              id="end-date"
              name="end-date"
              placeholder="yyyy-mm-dd"
              onChange={handleEndDate}
            />
          </div>;
}

export default DateInput;
