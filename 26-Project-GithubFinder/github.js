class GitHub {
  constructor() {
    this.repos_count = 5;
    this.repos_sort = "created: asc";
    this.requestInit = {
      method: "GET",
      headers: new Headers({
        Accept: "application/vnd.github+json",
        Authorization: "token " + "Placeholder Token",
      }),
    };
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}`,
      this.requestInit
    );

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort${this.repos_sort}`,
      this.requestInit
    );

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile,
      repos,
    };
  }
}
