import './news.css';
import INews from '../../../interfaces/interfaceNews';
import isHTMLElem from "../../../utils/isHTMLElem";
import getElem from "../../../utils/getElem";

class News {
    draw(data: INews[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true);
            if (!isHTMLElem(newsClone)) throw new Error(`This element is not HTMLElement`);
            if (idx % 2) getElem('.news__item', newsClone).classList.add('alt');

            getElem('.news__meta-photo', newsClone).style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            getElem('.news__meta-author', newsClone).textContent = item.author || item.source.name;
            getElem('.news__meta-date', newsClone).textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');
            getElem('.news__description-title', newsClone).textContent = item.title;
            getElem('.news__description-source', newsClone).textContent = item.source.name;
            getElem('.news__description-content', newsClone).textContent = item.description;
            getElem('.news__read-more a', newsClone).setAttribute('href', item.url);
            fragment.append(newsClone);
        });
        getElem('.news').innerHTML = '';
        getElem('.news').appendChild(fragment);
    };
}


export default News;
