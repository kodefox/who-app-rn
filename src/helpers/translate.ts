import { createElement, Fragment, ReactNode } from 'react';

type ParamsObject = {
  [key: string]: unknown;
};

type ParamsWithResolver = {
  [key: string]:
    | null
    | undefined
    | number
    | string
    | boolean
    | ((s: string) => unknown);
};

// This matches words inside curly braces.
const PLACEHOLDER = /\{(\w+)\}/g;
const FRAGMENT = /<(\w+)>(.*?)<\/\1>/g;

// This function doesn't do anything right now, but it will in future
// lookup the correct string from somewhere.
export function t(input: string, params?: ParamsObject): string {
  if (params) {
    return input.replace(PLACEHOLDER, (match: string, word: string) =>
      params[word] != null ? String(params[word]) : match,
    );
  } else {
    return input;
  }
}

interface ResultsArray<T = unknown> extends Array<T> {
  toElement(): ReactNode;
}

let toElement = (elements: Array<ReactNode>) =>
  createElement(Fragment, null, ...elements);

let createResultsArray = (): ResultsArray => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let results: any = [];
  results.toElement = () => toElement(results);
  return results;
};

// Process a string with fragments inside.
t.frag = (input: string, params: ParamsWithResolver): ResultsArray => {
  let string = t(input, params);
  let results = createResultsArray();
  let lastIndex = 0;
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  string.replace(FRAGMENT, (match, tagName, contents, index) => {
    let resolver = params[tagName];
    results.push(string.slice(lastIndex, index));
    lastIndex = index + match.length;
    if (typeof resolver === 'function') {
      results.push(resolver(contents));
    } else {
      results.push(match);
    }
  });
  results.push(string.slice(lastIndex));
  return results;
};
