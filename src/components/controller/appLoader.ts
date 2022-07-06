import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'e6603b216d0b4aed8aafcb506121cde3'
        });
    }
}

export default AppLoader;
