#! /usr/bin/env node
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createWorkflowFile } from './utils/workflow.js';
import { openReadline, closeReadline, makeRetryAsyncQuestions, runAsyncQuestions } from './utils/console.js';
import { questions, defaultAnswer, updateAnswersFromQuestions } from './questions.js';
(() => __awaiter(void 0, void 0, void 0, function* () {
    const readlineInterface = openReadline();
    yield runAsyncQuestions(makeRetryAsyncQuestions(readlineInterface, questions));
    createWorkflowFile(updateAnswersFromQuestions(defaultAnswer, questions));
    closeReadline(readlineInterface);
}))();
