import { shuffleArray } from "./utils";

export type Question = {
    category: string; // Category of the question
    correct_answer: string; // Correct answer
    difficulty: string; // Difficulty of the question
    incorrect_answers: string[]; // Incorrect answers
    question: string; // Question
    type: string; // Type of the question
}

export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
 const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
 const data = await (await fetch(endpoint)).json();
 return data.results.map((question: Question) => ( 
     {
            ...question,
            answer: shuffleArray([...question.incorrect_answers, question.correct_answer])
    }

    ))
 
}