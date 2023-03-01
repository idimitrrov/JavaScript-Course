class GitHub {
  constructor() {
    this.repos_count = 5;
    this.repos_sort = "created: asc";
    this.requestInit = {
      method: "GET",
      headers: new Headers({
        // "Access-Control-Allow-Origin": "*",
        Accept: "application/vnd.github+json",
        Authorization:
          "token " +
          "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",
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
