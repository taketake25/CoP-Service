export const inputTask = (task) => ({
    type: 'TASK',
    payload: {
        task
    }
});

export const increment = () => ({
    type: 'INCREMENT',
});

export const decrement = () => ({
    type: 'DECREMENT',
});
