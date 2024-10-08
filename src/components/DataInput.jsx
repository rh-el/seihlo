function DataInput(props) {
  const { handleDataInput } = props;

  return (
    <>
      <div className='data-type-container flex w-full'>
        <label className='data-type w-full cursor-pointer'>
          <input
            type='radio'
            id='temp'
            name='input-radio'
            onClick={handleDataInput}
            style={radioButton}
            className="peer"
          />
          <div htmlFor='temperature' className="w-full md:h-20 flex items-center justify-center cursor-pointer p-4 border border-customgray rounded-l-md duration-200 group hover:border-b-customblue hover:border-transparent hover:-translate-y-1 peer-checked:bg-customblue peer-checked:text-customblack peer-checked:translate-y-0">temperature</div>
        </label>
        <label className='data-type w-full cursor-pointer '>
          <input
            type='radio'
            id='rain'
            name='input-radio'
            onClick={handleDataInput}
            className="hidden peer"
          />
          <div htmlFor='precipitation' className="w-full md:h-20 items-center flex justify-center cursor-pointer p-4 border border-customgray rounded-r-md duration-200 group hover:border-b-customblue hover:border-transparent hover:-translate-y-1 peer-checked:bg-customblue peer-checked:text-customblack peer-checked:translate-y-0 ">precipitation</div>
        </label>
        
      </div>
    </>
  );
}

export default DataInput;

const radioButton = {
  display: 'none'
}
