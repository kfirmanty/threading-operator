const extract = fnData => {
    if (Array.isArray(fnData)) {
        return fnData;
    } else {
        return [fnData];
    }
};

const call = (fnData, argInsertionFn, previousReturn) => {
    const [fn, ...args] = extract(fnData);
    return fn.apply(null, argInsertionFn(previousReturn, args));
};

const insertFirst = (v, vs) => [v, ...vs];
const insertLast = (v, vs) => [...vs, v];

const thread = ([initV, ...fns], argInsertionFn) => {
    if (fns.length === 0) {
        return initV;
    } else {
        return fns.reduce(
            (acc, fnData) => call(fnData, argInsertionFn, acc),
            initV
        );
    }
};

export const threadFirst = (...fns) => thread(fns, insertFirst);
export const threadLast = (...fns) => thread(fns, insertLast);
