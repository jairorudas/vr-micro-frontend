import { mount } from '@cypress/react18';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Product from './index';

const mockStore = configureStore();

describe('Product Component', () => {
    it('renders products correctly', () => {
        const store = mockStore({
            products: {
                items: [{ id: '1', title: 'Product 1', description: 'lorem ipsum', price: '100' }]
            },
            events: {
                events: { ADD_PRODUCT: 'ADD_PRODUCT_EVENT' }
            }
        });

        mount(
            <Provider store={store}>
                <Product />
            </Provider>
        );

        cy.get('h4').should('contain', 'Product 1');
        cy.get('p').should('contain', 'lorem ipsum');
    });
});
