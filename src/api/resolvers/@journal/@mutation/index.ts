import { create_journal } from "./@resolvers/create-journal";
import { update_journal } from "./@resolvers/update-journal";
import { delete_journal } from "./@resolvers/delete-journal";
import { create_journal_template } from "./@resolvers/create-journal-template";
import { update_journal_template } from "./@resolvers/update-journal-template";
import { delete_journal_template } from "./@resolvers/delete-journal-template";

export const journal_mutations = {
    create_journal,
    update_journal,
    delete_journal,
    create_journal_template,
    update_journal_template,
    delete_journal_template,
};
