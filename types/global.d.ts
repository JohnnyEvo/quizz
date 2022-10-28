export {};

declare module "*.svg" {
    const content: any;
    export default content;
}

export type Difficult = 'easy' | 'medium' | 'hard';
export type QuestionNumber = 5 | 10 | 20;
export type Time = 3 | 10 | 30;