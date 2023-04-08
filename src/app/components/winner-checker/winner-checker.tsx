export type StateMatrix = Array<Array<Symbols>>;

export enum Symbols {
    Circle = 1,
    Cross,
    Blank = 0,
}

export const buildDefaultState = () => {
    const result: StateMatrix = [
        [Symbols.Blank, Symbols.Blank, Symbols.Blank],
        [Symbols.Blank, Symbols.Blank, Symbols.Blank],
        [Symbols.Blank, Symbols.Blank, Symbols.Blank]
    ];

    return result;
}

export class WinnerChecker {

    constructor(
        private state: StateMatrix
    ) {
    }

    transpose(matrix: StateMatrix): StateMatrix {
        return [
            [matrix[0][0], matrix[1][0], matrix[2][0]],
            [matrix[0][1], matrix[1][1], matrix[2][1]],
            [matrix[0][2], matrix[1][2], matrix[2][2]],
        ];
    }

    isWinner(symbol: Symbols) {

        const isRowWinner = this.anyRowWinner(this.state, symbol);
        const isColWinner = this.anyRowWinner(this.transpose(this.state), symbol)
        const isDiagonalWinner = this.diagonalWinner(symbol);
        const counterDiagonalWinner = this.counterDiagonalWinner(symbol);

        return isRowWinner || isColWinner || isDiagonalWinner || counterDiagonalWinner;
    }

    anyRowWinner(matrix: StateMatrix, symbol: Symbols): boolean {
        for (let row = 0; row < matrix.length; row++) {
            if (matrix[row].every(col => col === symbol))
                return true;
        }

        return false;
    }

    diagonalWinner(symbol: Symbols) {
        let count = 0;

        for (let i = 0; i < this.state.length; i++) {
            if (this.state[i][i] === symbol)
                count++;
        }

        return count === this.state.length;
    }

    counterDiagonalWinner(symbol: Symbols) {
        let count = 0;

        for (let i = 0; i < this.state.length; i++) {
            if (this.state[i].reverse()[i] === symbol)
                count++;
        }

        return count === this.state.length;
    }
}
