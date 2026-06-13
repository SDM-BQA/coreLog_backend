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
    journal_template: "JournalTemplate",
    journal_streak: "JournalStreak",
    screen_time: "ScreenTime"
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
    journal_template: "JournalTemplate",
    journal_streak: "JournalStreak",
    screen_time: "ScreenTime"
}
