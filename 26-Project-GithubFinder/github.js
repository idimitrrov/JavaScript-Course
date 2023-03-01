class GitHub {
  constructor() {
    this.client_id = "4ce6b4032674035eca45";
    this.client_secret = "9544a424c59a976b3b74adf0a74d96833151b1c6";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile,
    };
  }
}
