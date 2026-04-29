import { create_journal } from "./@resolvers/create-journal";
import { update_journal } from "./@resolvers/update-journal";
import { delete_journal } from "./@resolvers/delete-journal";

export const journal_mutations = {
    create_journal,
    update_journal,
    delete_journal,
};
