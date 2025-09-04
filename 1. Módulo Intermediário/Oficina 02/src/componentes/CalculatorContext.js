import React from 'react';
import {createContext, useContext, useState} from 'react';

// Cria o objeto de contexto
const CalculatorContext = createContext();

// Cria o componente usado no App
export const CalculatorProvider = ({children}) => {
    // Estado a ser compartilhado entre os componentes
    const [entryValue, setEntryValue] = useState("0");
    const [operation, setOperation] = useState("");

    // Retorno
    return (
        <CalculatorContext.Provider value = {{entryValue, operation, setEntryValue, setOperation}}>
            {children}
        </CalculatorContext.Provider>
    );
};

// Cria um hook usado nos elementos que acessam a variável criada
export const useCalculator = () => useContext(CalculatorContext);