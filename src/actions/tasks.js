export const inputArticles = (articles) => ({
    type: 'INPUTARTICLES',
    payload: {
        articles
    }
});

export const increment = () => ({
    type: 'INCREMENT',
});

export const decrement = () => ({
    type: 'DECREMENT',
});
