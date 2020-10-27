// @flow

import pool from './mysql-pool';

export type Sprs = {
    id: number,
    quizId: number,
    themeId: number,
    question: string,
    answ0: string,
    answ1: string,
    answ2: string,
    answ3: string,
};