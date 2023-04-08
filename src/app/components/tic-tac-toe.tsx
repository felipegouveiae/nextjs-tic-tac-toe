import './tic-tac-toe.scss'

import Circle from "@/app/components/children/circle/circle";
import SymbolX from "@/app/components/children/symbol-x/symbol-x";

export default () => {
    return (
        <div className="board">
            <div className="container">
                <div className="row">
                    <div className="col border-right border-bottom">
                        <SymbolX/>
                    </div>
                    <div className="col border-bottom">
                        <Circle/>
                    </div>
                    <div className="col border-left border-bottom">
                        <SymbolX/>
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
