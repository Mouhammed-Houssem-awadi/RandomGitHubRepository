let cachedRepos = [];

async function fetchRepos(language) {
  const url = `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=100`;
  const resp = await fetch(url);
  const data = await resp.json();
  cachedRepos = data.items || [];
  return cachedRepos;
}

function pickRandomRepo() {
  if (!cachedRepos.length) return null;
  const idx = Math.floor(Math.random() * cachedRepos.length);
  return cachedRepos[idx];
}
function showRepo(repo) {
  const resultEl = document.getElementById('result');
  resultEl.innerHTML = `
    <h3><a href="${repo.html_url}" target="_blank">${repo.full_name}</a></h3>
    <p>${repo.description || 'No description available.'}</p>
    <div class="meta">
      <span>⭐ ${repo.stargazers_count}</span>
      <span>🍴 ${repo.forks_count}</span>
      <span>❗ ${repo.open_issues_count}</span>
    </div>
  `;
  resultEl.classList.remove('hidden');
}
