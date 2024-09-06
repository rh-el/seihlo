

function IndiceChoice({ handleIndiceSelection, dataInput }) {
    return (
        <>
        <div id='indice-container' className="w-4/12 min-h-72 top-[100px] sticky flex flex-col justify-center text-center" style={indiceChoiceStyle}>
            {dataInput && 
            dataInput === 'temp' && (
                <>
                <div htmlFor='txx' className="w-full flex justify-center rounded-t-md px-2 py-4 border border-customgray text-customblue">indice selection</div>
                    <label className="w-full cursor-pointer">
                        <input
                            name="indiceChoice"
                            id="txx"
                            type="radio"
                            defaultChecked
                            className="hidden peer"
                            onClick={handleIndiceSelection}
                        />
                        <div htmlFor='txx' className="w-full flex justify-center cursor-pointer p-2 border border-customgray duration-200 group hover:border-b-customblue hover:border-transparent hover:translate-x-1 peer-checked:bg-customblue peer-checked:text-customblack peer-checked:translate-y-0 ">txx</div>
                    </label>
                    <label className="w-full cursor-pointer">
                        <input
                            name="indiceChoice"
                            id="tmm"
                            type="radio"
                            className="hidden peer"
                            onClick={handleIndiceSelection}
                        />
                        <div htmlFor='tmm' className="w-full flex justify-center cursor-pointer p-2 border border-customgray duration-200 group hover:border-b-customblue hover:border-transparent hover:translate-x-1 peer-checked:bg-customblue peer-checked:text-customblack peer-checked:translate-y-0 ">tmm</div>
                    </label>

                    <label className="w-full cursor-pointer">
                        <input
                            name="indiceChoice"
                            id="txge30"
                            type="radio"
                            className="hidden peer"
                            onClick={handleIndiceSelection}
                        />
                        <div htmlFor='txge30' className="w-full flex justify-center cursor-pointer p-2 border border-customgray duration-200 group hover:border-b-customblue hover:border-transparent hover:translate-x-1 peer-checked:bg-customblue peer-checked:text-customblack peer-checked:translate-y-0 ">txge30</div>
                    </label>
                    <label className="w-full cursor-pointer">
                        <input
                            name="indiceChoice"
                            id="txgt50p"
                            type="radio"
                            className="hidden peer"
                            onClick={handleIndiceSelection}
                        />
                        <div htmlFor='txgt50p' className="w-full flex justify-center cursor-pointer p-2 border border-customgray duration-200 group hover:border-b-customblue hover:border-transparent hover:translate-x-1 peer-checked:bg-customblue peer-checked:text-customblack peer-checked:translate-y-0 ">txgt50p</div>
                    </label>
                    <label className="w-full cursor-pointer">
                        <input
                            name="indiceChoice"
                            id="etr"
                            type="radio"
                            className="hidden peer"
                            onClick={handleIndiceSelection}
                        />
                        <div htmlFor='etr' className="w-full flex justify-center cursor-pointer p-2 border border-customgray rounded-b-md duration-200 group hover:border-b-customblue hover:border-transparent hover:translate-x-1 peer-checked:bg-customblue peer-checked:text-customblack peer-checked:translate-y-0 ">etr</div>
                    </label>
                </>)}

            {dataInput && 
            dataInput === 'rain' &&  (
                <label className="w-full cursor-pointer">
                    <input
                        name="indiceChoice"
                        id="r10mm"
                        type="radio"
                        defaultChecked
                        className="hidden peer"
                        onClick={handleIndiceSelection}
                    />
                    <div htmlFor='r10mm' className="w-full flex justify-center cursor-pointer p-2 border border-customgray rounded-md duration-200 group hover:border-b-customblue hover:border-transparent hover:translate-x-1 peer-checked:bg-customblue peer-checked:text-customblack peer-checked:translate-y-0 ">r10mm</div>
                </label>)}
        </div>
        </>
    )
}

export default IndiceChoice;


const indiceChoiceStyle = {
    transitionDuration: '0.5s',
    transitionTimingFunction: 'cubic-bezier(0.39, 0.575, 0.565, 1)'    
}