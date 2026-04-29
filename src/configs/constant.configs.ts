interface ModelType{
    user:"User",
    book:"Book",
    movie: "Movie",
    series: "Series",
    poem: "Poem",
    target: "Target",
    journal: "Journal"
}

export type ModelNames = ModelType[keyof ModelType];


export const models_constant: ModelType = {
    user: "User",
    book: "Book",
    movie: "Movie",
    series: "Series",
    poem: "Poem",
    target: "Target",
    journal: "Journal"
}