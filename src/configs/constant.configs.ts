interface ModelType{
    user:"User",
    book:"Book",
    book_log: "BookLog",
    movie: "Movie",
    series: "Series",
    series_log: "SeriesLog",
    poem: "Poem",
    target: "Target",
    journal: "Journal",
    journal_streak: "JournalStreak"
}

export type ModelNames = ModelType[keyof ModelType];


export const models_constant: ModelType = {
    user: "User",
    book: "Book",
    book_log: "BookLog",
    movie: "Movie",
    series: "Series",
    series_log: "SeriesLog",
    poem: "Poem",
    target: "Target",
    journal: "Journal",
    journal_streak: "JournalStreak"
}
