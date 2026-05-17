import { get_journal } from "./@resolvers/get-journal";
import { get_journal_filters } from "./@resolvers/get-journal-filters";
import { get_my_journals } from "./@resolvers/get-my-journals";
import { get_journal_streak } from "./@resolvers/get-journal-streak";

export const journal_queries = {
    get_journal_filters,
    get_my_journals,
    get_journal,
    get_journal_streak,
};
