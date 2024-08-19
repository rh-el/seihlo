

function IndiceChoice({ handleIndiceSelection }) {
    return (
        <div className="mt-[78px] w-4/12 gap-">
            <label className="w-full cursor-pointer">
                <input
                    name="indiceChoice"
                    id="raw"
                    type="radio"
                    defaultChecked
                    className="hidden peer"
                    onClick={handleIndiceSelection}
                />
                <div htmlFor='raw' className="w-full flex justify-center cursor-pointer p-2 border border-customgray rounded-t-md duration-200 group hover:border-b-customblue hover:border-transparent hover:translate-x-1 peer-checked:bg-customblue peer-checked:text-customblack peer-checked:translate-y-0 ">raw</div>
            </label>

            {document.getElementById('temp').checked && (
                <>
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
                            id="txx"
                            type="radio"
                            className="hidden peer"
                            onClick={handleIndiceSelection}
                        />
                        <div htmlFor='txx' className="w-full flex justify-center cursor-pointer p-2 border border-customgray duration-200 group hover:border-b-customblue hover:border-transparent hover:translate-x-1 peer-checked:bg-customblue peer-checked:text-customblack peer-checked:translate-y-0 ">txx</div>
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

            {document.getElementById('rain').checked && (
                <label className="w-full cursor-pointer">
                    <input
                        name="indiceChoice"
                        id="r10mm"
                        type="radio"
                        className="hidden peer"
                        onClick={handleIndiceSelection}
                    />
                    <div htmlFor='r10mm' className="w-full flex justify-center cursor-pointer p-2 border border-customgray rounded-b-md duration-200 group hover:border-b-customblue hover:border-transparent hover:translate-x-1 peer-checked:bg-customblue peer-checked:text-customblack peer-checked:translate-y-0 ">r10mm</div>
                </label>)}
        </div>
    )
}

export default IndiceChoice;
