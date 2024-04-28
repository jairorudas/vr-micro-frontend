import { mount } from '@cypress/react';
import Header from './index.tsx';

describe('Header Component Tests', () => {
  it('renders the header component', () => {
    mount(<Header />);
    cy.get('img[alt="Logo"]').should('be.visible');
    cy.get('._badge_9fiam_28').should('be.visible');
  });

  it('cart updates when product added', () => {
    mount(<Header />);

    cy.get('._badge_9fiam_28 > span').should('contain', '0');
  });

  it('cart updates when product added via pubsub event', () => {
    mount(<Header />);
    cy.window().then(win => {
      const products = [{ id: 1 }, { id: 2 }];
      win.PubSub.publish('add_product', { productsSelected: products });
      cy.get('._badge_9fiam_28 > span').contains('2');
    });
  });
});
