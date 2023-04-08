import './tic-tac-toe.scss'

export default () => {
    return (
        <div className="board">

            <div className="container">


                <div className="row">
                    <div className="col border-right border-bottom">
                        <div className="square"></div>
                    </div>
                    <div className="col border-bottom">
                        <div className="circle">A</div>
                    </div>
                    <div className="col border-left border-bottom">
                        C
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
