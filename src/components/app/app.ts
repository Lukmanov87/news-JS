import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { IResponseNews, IResponseSource } from '../../interfaces/interfaceAppView';
import getElem from '../../utils/getElem';

class App {
    constructor(private controller = new AppController(), private view = new AppView()) {}

    start() {
        getElem('.sources').addEventListener('click', (e) =>
        this.controller.getNews<IResponseNews>(e, (data) => this.view.drawNews(data))
    );
        this.controller.getSources<IResponseSource>((data) => this.view.drawSources(data));
    }
}

export default App;
