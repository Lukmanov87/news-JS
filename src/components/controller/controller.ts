import AppLoader from './appLoader';
import isHTMLElem  from "../../utils/isHTMLElem";

class AppController extends AppLoader {
    getSources<T>(callback: (data: T) => void) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews<T>(e: Event, callback: (data: T) => void) {
        let target = e.target;
        const newsContainer = e.currentTarget;

        while (target !== newsContainer) {
            if (!isHTMLElem(target) || !isHTMLElem(newsContainer)) throw new Error(`This elements is not HTMLElements`)
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (sourceId == null) throw new Error(`Could not find this Attribute`);
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode;
        }
    }
}

export default AppController;
