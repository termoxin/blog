import { split, join, drop, compose, replace, head } from "ramda";

export const splitOnBreakLines = split("\n");
export const getAllExceptFirstLine = compose(join("\n"), drop(1), splitOnBreakLines);
export const firstLine: (x0: string) => string = compose(head, splitOnBreakLines);
export const removeHashes = replace(/#/gi, "");
export const removeHashesFromFirstLine = compose(replace(/#/gi, ""), firstLine);
