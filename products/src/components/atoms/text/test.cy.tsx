import { mount } from '@cypress/react18';
import { Text } from './index';
import './styles.module.css';
import { ESize } from './interfaces';

describe('Text Component', () => {
    it('renders text with correct tag and styles', () => {
        const label = "Teste VR";
        const weight = "bold";
        const tag = "h1";

        mount(<Text label={label} size={ESize.large} weight={weight} tag={tag} />);

        cy.get(tag).should('contain', label);
        cy.get(tag).find('span').should('have.class', '_bold_tu9jb_1');
        cy.get(tag).find('span').should('have.class', '_large_tu9jb_19');
    });
});
