import './sources.css';
import ISources from "../../../interfaces/interfaceSources";
import isHTMLElem from '../../../utils/isHTMLElem';
import getElem from "../../../utils/getElem";

class Sources {
    draw(data: ISources[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;        

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true);
            if (!isHTMLElem(sourceClone)) throw new Error(`This element is not HTMLElement`);

            getElem('.source__item-name', sourceClone).textContent = item.name;
            getElem('.source__item', sourceClone).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        getElem('.sources').append(fragment);
    }
}

export default Sources;
