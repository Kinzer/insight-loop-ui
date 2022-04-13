export async function fetchRepos(journalEntryValue: string) {
  return await fetch(
    `https://api.github.com/search/repositories?q=${journalEntryValue}&sort=stars&order=desc`
  );
}
