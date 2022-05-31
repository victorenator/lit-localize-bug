import {html} from 'lit';
import {msg} from '@lit/localize';

export function renderList() {
    return html`
        <ol>
            <li>${text('ABC')}</li>
            <li>${text('CDE')}</li>
            <li>${text('123')}</li>
            <li>${text('456')}</li>
        </ol>
    `;
}

function text(param) {
    return [
        html`Some text with param <b>${param}</b>.`,
        ' ',
        msg(html`Some text with param <b>${param}</b>.`)
    ];
}
