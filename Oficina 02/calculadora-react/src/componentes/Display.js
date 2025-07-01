import { useCalculator } from "./CalculatorContext";

function Display(){
    const {entryValue, } = useCalculator();

    return (
        <input className="display form-control form-control-lg text-end" type="text" placeholder="0" value={entryValue} disabled></input>
    );
};

export default Display;