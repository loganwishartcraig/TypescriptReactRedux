import { CounterActions } from "./counter";
import { DisplayTextActions } from "./displayText";
import { Action } from "redux";

export type AppActions = (
    CounterActions._any |
    DisplayTextActions._any
);

export type TypedActionCreator<A, T extends any[] = []> = (...args: T) => A;
