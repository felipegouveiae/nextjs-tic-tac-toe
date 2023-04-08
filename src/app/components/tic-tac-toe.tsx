"use client";

import './tic-tac-toe.scss'

import React, {useState} from "react";
import Circle from "@/app/components/children/circle/circle";
import SymbolX from "@/app/components/children/symbol-x/symbol-x";
import Blank from "@/app/components/children/blank/blank";
import {structuredClone} from "next/dist/compiled/@edge-runtime/primitives/structured-clone";

const symbolX = 1;
const circle = 2;
const blank = 0;

export default () => {

    const [state, setState] = useState([
        [blank, blank, blank],
        [blank, blank, blank],
        [blank, blank, blank]
    ]);

    const [turn, setTurn] = useState(circle);

    const toggleTurn = () => {
        setTurn(turn === circle ? symbolX : circle);
    }

    const setter = (row: number, col: number, value: number) => {
        const newState = structuredClone(state);
        newState[row][col] = value;

        setState(newState);
        toggleTurn();

        if(checkWinner(circle)){
            alert('Circle is the winner!');
        }

        if(checkWinner(symbolX)){
            alert('Cross is the winner!');
        }
    };

    const checkWinner = (symbol: number) => {

        for (let i = 0; i < state.length; i++) {
            if (state[i].every(col => col == symbol)) {
                return true;
            }
        }

        return false;
    }

    const printSelection = (row: number, col: number) => {

        const value = state[row][col];

        let result = (<Blank click={() => {
            setter(row, col, turn);
        }}/>);

        if (value === circle)
            result = (<Circle/>);
        else if (value === symbolX)
            result = (<SymbolX/>);

        return (
            <div className="symbol">
                {result}
            </div>
        )
    }

    return (
        <div className="board">
            <div className="container">
                <div className="row">
                    <div className="col border-right border-bottom">
                        {printSelection(0, 0)}
                    </div>
                    <div className="col border-bottom">
                        {printSelection(0, 1)}
                    </div>
                    <div className="col border-left border-bottom">
                        {printSelection(0, 2)}
                    </div>
                </div>
                <div className="row">
                    <div className="col border-right border-bottom">
                        {printSelection(1, 0)}
                    </div>
                    <div className="col border-bottom">
                        {printSelection(1, 1)}
                    </div>
                    <div className="col border-left border-bottom">
                        {printSelection(1, 2)}
                    </div>
                </div>
                <div className="row">
                    <div className="col border-right">
                        {printSelection(2, 0)}
                    </div>
                    <div className="col">
                        {printSelection(2, 1)}
                    </div>
                    <div className="col border-left">
                        {printSelection(2, 2)}
                    </div>
                </div>
            </div>
        </div>
    )
}
