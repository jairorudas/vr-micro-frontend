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
});
