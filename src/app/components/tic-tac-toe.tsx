"use client";

import './tic-tac-toe.scss'

import Circle from "@/app/components/children/circle/circle";
import SymbolX from "@/app/components/children/symbol-x/symbol-x";
import {Fragment, useState} from "react";

const symbolX = 1;
const circle = 2;

export default () => {

    const [state, setState] = useState([
        [symbolX, circle, 0],
        [0, 0, 0],
        [0, 0, 0,]
    ]);

    const print = (row: number, col: number) => {

        const value = state[row][col];

        let result = (<Fragment></Fragment>);

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
                        {print(0, 0)}
                    </div>
                    <div className="col border-bottom">
                        {print(0, 1)}
                    </div>
                    <div className="col border-left border-bottom">
                        {print(0, 2)}
                    </div>
                </div>
                <div className="row">
                    <div className="col border-right border-bottom">
                        D
                    </div>
                    <div className="col border-bottom">
                        E
                    </div>
                    <div className="col border-left border-bottom">
                        F
                    </div>
                </div>
                <div className="row">
                    <div className="col border-right">
                        G
                    </div>
                    <div className="col">
                        H
                    </div>
                    <div className="col border-left">
                        I
                    </div>
                </div>
            </div>
        </div>
    )
}
