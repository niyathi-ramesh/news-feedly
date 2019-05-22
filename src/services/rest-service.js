import Configuration from './configuration';

class RestService {
    constructor() {
        this.config = new Configuration();
    }

    // Fetch list of articles
    async getArticlesAPI(url) {
        const apiUrl = this.config.API_BASE_URL + url;

        return fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    this.handleResponseError(response);
                }
                return response.json();
            })
            .catch(error => {
                this.handleError(error);
            });
    }

    // Fetch details of a single article
    async getArticleAPI(url) {
        const apiUrl = this.config.API_BASE_URL + url;

        return fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    this.handleResponseError(response);
                }
                return response.json();
            })
            .catch(error => {
                this.handleError(error);
            });
    }

    // Create new article
    async createArticle(url, postData) {
        const apiUrl = this.config.API_BASE_URL + url;

        return fetch(apiUrl,
            {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(postData)
            })
            .then(response => {
                if (!response.ok) {
                    this.handleResponseError(response);
                }
                return response.json();
            })
            .catch(error => {
                this.handleError(error);
            });
    }

    handleResponseError(response) {
        throw new Error("HTTP error, status = " + response.status);
    }

    handleError(error) {
        console.log(error.message);
    }
}
export default RestService;