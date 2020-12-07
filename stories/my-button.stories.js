import { html } from 'lit-html';
import '../src/my-button';

export default{
    title: 'my-button'
};

export const Primary = () => html`<my-button buttonText="Primary"></my-button>`;        //First Story

export const Danger = () => html`<my-button buttonText="Danger"></my-button>`;          //Second Story