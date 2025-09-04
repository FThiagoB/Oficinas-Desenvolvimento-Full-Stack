import Button from './Button';
import Display from './Display';

import { useCalculator } from "./CalculatorContext";

let emOperação = false;

function Calculadora(){
    const {entryValue, operation, setEntryValue, setOperation} = useCalculator();
    

    function entryDigit( valor ){
        if( entryValue === "0" && valor !== "." )
            setEntryValue(valor);
        else if( !isNaN(Number(entryValue + valor)) )
            setEntryValue( entryValue + valor );
    };

    function showResult(){
        let valor = 0;

        if( !isNaN(Number(entryValue)) )
        {
            if( operation === "" || !emOperação ){
                if( !isNaN(Number(entryValue)) && Number(entryValue) !== Infinity )
                {
                    setOperation( entryValue + "=" );
                    valor = entryValue;
                }
                else
                    setEntryValue("0");
            }
            else{
                if( !isNaN(Number(operation)) ){
                    setOperation( entryValue + "=" );
                    valor = entryValue;
                }
                else{
                    setOperation( operation + entryValue + "=" );
                    valor = eval( operation + entryValue );
                }
            }

            emOperação = false;
        }

        setEntryValue( String(valor) );
    }

    function changeSignal(){
        let valor = -Number(entryValue);
        setEntryValue( String(valor) );
    }

    function power(){
        let valor = Number(entryValue) ** 2;
        setEntryValue( String(valor) );
    }

    function inverso(){
        let valor = 1 / Number(entryValue);
        setEntryValue( String(valor) );
    }

    function porcentagem(){
        let valor = Number(entryValue) / 100;
        setEntryValue( String(valor) );
    }

    function clear(){
        setEntryValue("0");
        setOperation("");
    }

    function sqrt(){
        let valor = Math.sqrt(Number(entryValue));
        setEntryValue( String(valor) );
    }

    function del(){
        if( String(entryValue) !== "0" && String(entryValue).length > 1 )
        {
            let newValue = String(entryValue).substring(0, String(entryValue).length - 1);

            if( isNaN(Number(newValue)) ) setEntryValue("0");
            else setEntryValue(newValue);
        }
        else
            setEntryValue("0");
    }

    function addOperation( op ){
        if( !emOperação ){
            setOperation( entryValue + op );
            emOperação = true;
        }
        else{
            setOperation( operation + entryValue + op );
        }

        setEntryValue("0");
    }

    return(
        <div className="calculadora">
            <div className="row label">
                <label className="form-label text-end">{operation}</label>
            </div>
            <div className="row">
                <div className="col p-0"><Display/></div>
            </div>
            <div className="row gap-1 mt-1 mb-1">
                <div className="col p-0"><Button str="%" typeButton='dark' click={() => porcentagem()}/></div>
                <div className="col p-0"><Button str="CE" typeButton='dark' click={() => setEntryValue("0")}/></div>
                <div className="col p-0"><Button str="C" typeButton='dark' click={() => clear()}/></div>
                <div className="col p-0"><Button str="DEL" typeButton='dark' click={() => del()}/></div>
            </div>
            <div className="row gap-1 mb-1">
                <div className="col p-0"><Button str="1/x" typeButton='dark' click={() => inverso()}/></div>
                <div className="col p-0"><Button str="x²" typeButton='dark' click={() => power()}/></div>
                <div className="col p-0"><Button str="√x" typeButton='dark' click={() => sqrt()}/></div>
                <div className="col p-0"><Button str="÷" typeButton='dark' click={() => addOperation("/")}/></div>
            </div>
            <div className="row gap-1 mb-1">
                <div className="col p-0"><Button str="7" typeButton='light' click={() => entryDigit("7")}/></div>
                <div className="col p-0"><Button str="8" typeButton='light' click={() => entryDigit("8")}/></div>
                <div className="col p-0"><Button str="9" typeButton='light' click={() => entryDigit("9")}/></div>
                <div className="col p-0"><Button str="×" typeButton='dark' click={() => addOperation("*")}/></div>
            </div>
            <div className="row gap-1 mb-1">
                <div className="col p-0"><Button str="4" typeButton='light' click={() => entryDigit("4")}/></div>
                <div className="col p-0"><Button str="5" typeButton='light' click={() => entryDigit("5")}/></div>
                <div className="col p-0"><Button str="6" typeButton='light' click={() => entryDigit("6")}/></div>
                <div className="col p-0"><Button str="-" typeButton='dark' click={() => addOperation("-")}/></div>
            </div>
            <div className="row gap-1 mb-1">
                <div className="col p-0"><Button str="1" typeButton='light' click={() => entryDigit("1")}/></div>
                <div className="col p-0"><Button str="2" typeButton='light' click={() => entryDigit("2")}/></div>
                <div className="col p-0"><Button str="3" typeButton='light' click={() => entryDigit("3")}/></div>
                <div className="col p-0"><Button str="+" typeButton='dark' click={() => addOperation("+")}/></div>
            </div>
            <div className="row gap-1 mb-1">
                <div className="col p-0"><Button str="±" typeButton='light' click={() => changeSignal()}/></div>
                <div className="col p-0"><Button str="0" typeButton='light' click={() => entryDigit("0")}/></div>
                <div className="col p-0"><Button str="." typeButton='light' click={() => entryDigit(".")}/></div>
                <div className="col p-0"><Button str="=" typeButton='blue' click={() => showResult()}/></div>
            </div>
        </div>
    );
}

export default Calculadora;