import './tic-tac-toe.scss'

export default () => {
    return (
        <div className="board">

            <div className="container">


                <div className="row" style={{backgroundColor: 'red'}}>

                    A
                    {/*<div className="col border-right border-bottom">*/}

                    {/*</div>*/}
                    {/*<div className="col border-bottom">*/}

                    {/*</div>*/}
                    {/*<div className="col border-left border-bottom">*/}

                    {/*</div>*/}
                </div>
                <div className="row" style={{backgroundColor: 'green'}}>
                    B
                    {/*<div className="col border-right border-bottom">*/}

                    {/*</div>*/}
                    {/*<div className="col border-bottom">*/}

                    {/*</div>*/}
                    {/*<div className="col border-left border-bottom">*/}

                    {/*</div>*/}
                </div>
                <div className="row" style={{backgroundColor: 'blue'}}>
                    C
                </div>
            </div>
        </div>
    )
}
