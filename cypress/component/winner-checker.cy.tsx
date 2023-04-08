import {StateMatrix, Symbols, WinnerChecker} from "@/app/components/winner-checker/winner-checker";

const createSut = (state: StateMatrix) => new WinnerChecker(state);

const firstRowWinner = (symbol: Symbols) => [
    [symbol, symbol, symbol],
    [Symbols.Blank, Symbols.Blank, Symbols.Blank],
    [Symbols.Blank, Symbols.Blank, Symbols.Blank]
];

const secondRowWinner = (symbol: Symbols) => [
    [Symbols.Blank, Symbols.Blank, Symbols.Blank],
    [symbol, symbol, symbol],
    [Symbols.Blank, Symbols.Blank, Symbols.Blank]
];

const thirdRowWinner = (symbol: Symbols) => [
    [Symbols.Blank, Symbols.Blank, Symbols.Blank],
    [Symbols.Blank, Symbols.Blank, Symbols.Blank],
    [symbol, symbol, symbol],
];

const firstColWinner = (symbol: Symbols) => [
    [symbol, Symbols.Blank, Symbols.Blank],
    [symbol, Symbols.Blank, Symbols.Blank],
    [symbol, Symbols.Blank, Symbols.Blank]
];

const secondColWinner = (symbol: Symbols) => [
    [Symbols.Blank, symbol, Symbols.Blank],
    [Symbols.Blank, symbol, Symbols.Blank],
    [Symbols.Blank, symbol, Symbols.Blank],
];

const thirdColWinner = (symbol: Symbols) => [
    [Symbols.Blank, Symbols.Blank, symbol],
    [Symbols.Blank, Symbols.Blank, symbol],
    [Symbols.Blank, Symbols.Blank, symbol],
];

const diagonalWinner = (symbol: Symbols) => [
    [symbol, Symbols.Blank, Symbols.Blank],
    [Symbols.Blank, symbol, Symbols.Blank],
    [Symbols.Blank, Symbols.Blank, symbol],
];

const counterDiagonalWinner = (symbol: Symbols) => [
    [Symbols.Blank, Symbols.Blank, symbol],
    [Symbols.Blank, symbol, Symbols.Blank],
    [symbol, Symbols.Blank, Symbols.Blank],
];

describe('winner-checker.cy.tsx', () => {

    it('first row winner for circle', () => {
        const result: StateMatrix = firstRowWinner(Symbols.Circle);
        const sut = createSut(result);

        expect(sut.isWinner(Symbols.Circle)).to.equal(true);
    })

    it('second row winner for circle', () => {
        const result: StateMatrix = secondRowWinner(Symbols.Circle);
        const sut = createSut(result);

        expect(sut.isWinner(Symbols.Circle)).to.equal(true);
    });

    it('third row winner for circle', () => {
        const result: StateMatrix = thirdRowWinner(Symbols.Circle);
        const sut = createSut(result);

        expect(sut.isWinner(Symbols.Circle)).to.equal(true);
    });

    it('first col winner for circle', () => {
        const result: StateMatrix = firstColWinner(Symbols.Circle);
        const sut = createSut(result);

        expect(sut.isWinner(Symbols.Circle)).to.equal(true);
    })

    it('second col winner for circle', () => {
        const result: StateMatrix = secondColWinner(Symbols.Circle);
        const sut = createSut(result);

        expect(sut.isWinner(Symbols.Circle)).to.equal(true);
    })

    it('third col winner for circle', () => {
        const result: StateMatrix = thirdColWinner(Symbols.Circle);
        const sut = createSut(result);

        expect(sut.isWinner(Symbols.Circle)).to.equal(true);
    })

    it('diagonal winner for circle', () => {
        const result: StateMatrix = diagonalWinner(Symbols.Circle);
        const sut = createSut(result);

        expect(sut.isWinner(Symbols.Circle)).to.equal(true);
    })

    it('counter-diagonal winner for circle', () => {
        const result: StateMatrix = counterDiagonalWinner(Symbols.Circle);
        const sut = createSut(result);

        expect(sut.isWinner(Symbols.Circle)).to.equal(true);
    })

})

