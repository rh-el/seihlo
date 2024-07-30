function DataInput(props) {
  const {handleDataInput} = props
  return (
  <div className="data-type-container">
    <div className="data-type">
      <input type="radio" id="precipitation" name="input-radio" onClick={handleDataInput} />
      <label htmlFor="precipitation">precipitation</label>
    </div>
    <div className="data-type">
      <input type="radio" id="snow" name="input-radio" onClick={handleDataInput} />
      <label htmlFor="snow">snowfall</label>
    </div>
    <div className="data-type">
      <input type="radio" id="wind" name="input-radio" onClick={handleDataInput} />
      <label htmlFor="wind">wind</label>
    </div>
    <div className="data-type">
      <input type="radio" id="temperature" name="input-radio" onClick={handleDataInput} />
      <label htmlFor="temperature">temperature</label>
    </div>
  </div>
  )
}

export default DataInput;
