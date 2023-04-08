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

}
