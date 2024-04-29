import React from 'react';
import { mount } from '@cypress/react18';
import Card from './index';

describe('Card Component', () => {
    const productData = {
        id: '1',
        thumbnail: 'http://example.com/thumbnail.jpg',
        title: 'Product Example',
        description: 'This is a detailed description of the product that is longer than 80 characters to test text truncation.',
        price: '100,00'
    };

    it('renders the product card with truncated text', () => {
        mount(<Card product={productData} />);

        cy.get('img')
            .should('have.attr', 'src', productData.thumbnail)
            .and('have.attr', 'alt', productData.title);

        cy.get('figcaption').invoke('text').should('eq', 'This is a detailed description of the product that is longer than 80 characters ...');

        cy.get('p').should('contain', `R$${productData.price}`);
    });
});
