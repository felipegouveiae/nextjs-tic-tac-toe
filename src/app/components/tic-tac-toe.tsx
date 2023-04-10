"use client";

import './tic-tac-toe.scss'

import React, {useEffect, useState} from "react";
import Circle from "@/app/components/children/circle/circle";
import SymbolX from "@/app/components/children/symbol-x/symbol-x";
import Blank from "@/app/components/children/blank/blank";
import {structuredClone} from "next/dist/compiled/@edge-runtime/primitives/structured-clone";
import {buildDefaultState, StateMatrix, Symbols, WinnerChecker} from "@/app/components/winner-checker/winner-checker";

type Score = {
    symbol: Symbols,
    wins:number;
}

type ScoreBoard = {
    ai: Score;
    you: Score;
}

export default () => {

    const [state, setState] = useState<StateMatrix>(buildDefaultState());
    const [turn, setTurn] = useState<Symbols>(Symbols.Circle);

    const [score, setScore] = useState<ScoreBoard>();

    useEffect(() => {

    } , [])

    const toggleTurn = () => {
        setTurn(turn === Symbols.Circle ? Symbols.Cross : Symbols.Circle);
    }


    const reset = () => {
        setState(buildDefaultState());
        setScore({ai: 0, you: 0});
    }

    const setter = (row: number, col: number, value: number) => {
        const newState = structuredClone(state);
        newState[row][col] = value;

        setState(newState);
        toggleTurn();

        if (new WinnerChecker(newState).isWinner(Symbols.Circle)) {
            alert('Circle is the winner!');
            setScore({...score , })
        }

        if (new WinnerChecker(newState).isWinner(Symbols.Cross)) {
            alert('Cross is the winner!');
        }
    };

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

            <h1>{turn === Symbols.Circle ? 'Circle' : 'Cross'}'s turn!</h1>

            <div className="commands">
                <div>
                    AI: {score.ai}
                </div>
                <div>
                    YOU: {score.you}
                </div>
                <div>
                    <button onClick={() => {
                        reset();
                    }}>
                        RESET
                    </button>
                </div>
            </div>

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
