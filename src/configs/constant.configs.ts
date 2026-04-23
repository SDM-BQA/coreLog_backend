interface ModelType{
    user:"User",
    book:"Book",
    movie: "Movie",
    series: "Series"
}

export type ModelNames = ModelType[keyof ModelType];


export const models_constant: ModelType = {
    user: "User",
    book: "Book",
    movie: "Movie",
    series: "Series"
}