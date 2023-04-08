export type StateMatrix = Array<Array<Symbols>>;

export class Symbols {
    static readonly Circle: number = 1;
    static readonly Cross: number = 2;
    static readonly Blank: number = 0;
}

export const defaultState : StateMatrix = [
    [Symbols.Blank, Symbols.Blank, Symbols.Blank],
    [Symbols.Blank, Symbols.Blank, Symbols.Blank],
    [Symbols.Blank, Symbols.Blank, Symbols.Blank]
]

export class WinnerChecker {

}
