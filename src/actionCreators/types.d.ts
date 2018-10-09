import { CounterActions } from "./counter";
import { DisplayTextActions } from "./displayText";
import { Action } from "redux";

export interface ActionWithPayload<T, P> extends Action<T> {
    readonly payload: P
}

export interface ActionWithMeta<T, M> extends Action<T> {
    readonly meta: M
}

export type ActionWithPayloadAndMeta<T, P, M> = ActionWithPayload<T, P> & ActionWithMeta<T, M>;

export type TypedAction<A = string, P = undefined, M = undefined> =
    M extends undefined ? P extends undefined ? Action<A> : ActionWithPayload<A, P> : P extends undefined ? ActionWithMeta<A, M> : ActionWithPayloadAndMeta<A, P, M>;

export type TypedActionCreator<A, T extends any[]=[]> = (...args: T) => A;

export type AppActions = (
    CounterActions._any |
    DisplayTextActions._any
);
