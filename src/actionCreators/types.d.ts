import { CounterActions } from "./counter";
import { DisplayTextActions } from "./displayText";
import { Action } from "redux";

export type AppActions = (
    CounterActions._any |
    DisplayTextActions._any
);

// export interface ActionWithPayload<T, P = {}> extends Action<T> {
//     type: T,
//     payload: P
// }
