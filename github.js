class Github{
    constructor(){
        this.client_id = 'd307be2d26f63596e00f';
        this.client_secret = '016444c76744fb5e144a4a167e5b91012297b886';
        this.repos_count = 5;
        this.repos_sort = 'created:asc'
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}