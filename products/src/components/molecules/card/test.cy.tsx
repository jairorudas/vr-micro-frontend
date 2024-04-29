import { mount } from '@cypress/react18';
import { Card } from './index';
import './styles.module.css';

describe('Card Component', () => {
    const itemData = {
        thumbnail: 'https://dummyjson.com/image/200x100',
        title: 'Produto Exemplo',
        description: 'Descrição do produto aqui',
        price: 100,
        id: 1,
        brand: 'apple',
        discountPercentage: 10,
        rating: 0,
        stock: 0,
        category: '',
        imagests: '',
        images: []

    };

    it('renders correctly with data', () => {
        const actionStub = cy.stub().as('cardAction');
        mount(<Card data={itemData} action={actionStub} />);

        cy.get('img').should('have.attr', 'src', itemData.thumbnail);

        cy.contains('h4', itemData.title).should('be.visible');
        cy.contains('p', itemData.description).should('be.visible');
        cy.contains('p', `R$ ${itemData.price}`).should('be.visible');

        cy.contains('button', 'Comprar').should('be.visible').click();
        cy.get('@cardAction').should('have.been.calledOnce');
    });
});
