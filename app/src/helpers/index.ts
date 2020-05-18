import { ceil } from "ramda-adjunct";
import { compose, divide, prop, split, flip } from "ramda";

const WORDS_PER_MINUTE = 200;

const formatReadingTime = (time: number) => `${time} minute read`;

export const readingTime = compose(
	formatReadingTime,
	ceil,
	flip(divide)(WORDS_PER_MINUTE),
	prop("length"),
	split(/\s/g)
);
