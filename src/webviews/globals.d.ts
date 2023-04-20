import * as _vscode from "vscode";

/// <reference types="svelte" />
declare global {
    const tsvscode: {
        postMessage: ({ type: string, value: any }) => void;
    };
    const SE: {
        init: (options: Object) => void;
        authenticate: (options: Object) => void;
    };
}


