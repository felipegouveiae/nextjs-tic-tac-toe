"use client";

import './tic-tac-toe.scss'

import React, {useState} from "react";
import Circle from "@/app/components/children/circle/circle";
import SymbolX from "@/app/components/children/symbol-x/symbol-x";
import Blank from "@/app/components/children/blank/blank";
import {structuredClone} from "next/dist/compiled/@edge-runtime/primitives/structured-clone";
import {buildDefaultState, Symbols} from "@/app/components/winner-checker/winner-checker";

export default () => {

    const [state, setState] = useState(buildDefaultState());
    const [turn, setTurn] = useState(Symbols.Circle);

    const toggleTurn = () => {
        setTurn(turn === Symbols.Circle ? Symbols.Cross : Symbols.Circle);
    }

    const setter = (row: number, col: number, value: number) => {
        const newState = structuredClone(state);
        newState[row][col] = value;

        setState(newState);
        toggleTurn();

        //
        // if (checkWinner(Symbols.Circle)) {
        //     alert('Circle is the winner!');
        // }
        //
        // if (checkWinner(Symbols.Cross)) {
        //     alert('Cross is the winner!');
        // }
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

        if (value === Symbols.Circle)
            result = (<Circle/>);
        else if (value === Symbols.Cross)
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
