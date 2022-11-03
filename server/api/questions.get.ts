import {questions} from "../../api";

export default defineEventHandler(async (event: {}) => {
    const {question_number, difficult, time_by_question} = getQuery(event)

    checkParams(question_number, difficult, time_by_question);

    const config = useRuntimeConfig()

    return await $fetch(questions, {
        baseURL: config.public.apiBase,
        headers: {'X-Api-Key': config.apiSecret},
    });
});

let checkParams = (question_number: string|null, difficult: string|null, time_by_question: string|null) => {
    if (!question_number) {
        throw createError({
            statusCode: 422,
            statusMessage: 'Parameter `question_number` missing.'
        })
    }

    if (!difficult) {
        throw createError({
            statusCode: 422,
            statusMessage: 'Parameter `difficult` missing.'
        })
    }

    if (!time_by_question) {
        throw createError({
            statusCode: 422,
            statusMessage: 'Parameter `time_by_question` missing.'
        })
    }
}
