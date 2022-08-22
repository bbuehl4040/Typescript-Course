
import { HasFormatter } from '../interfaces/HasFormatter.js'

export class DivTemplate {
    constructor(private container: HTMLDivElement){}
    
    render(item: HasFormatter, heading: string, pos: 'start' | 'end') {
        const div = document.createElement('div');
        div.classList.add('container', 'border', 'my-2');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        div.append(h4);

        const p = document.createElement('p');
        p.innerText = item.format();
        div.append(p);

        console.log(div);
        console.log(this.container);
        
        if (pos === 'start') {
            this.container.prepend(div);
        } else {
            this.container.append(div);
        }
    }
}