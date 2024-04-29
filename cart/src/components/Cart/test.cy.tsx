import { mount } from '@cypress/react18';
import Cart from './index'; // Ajuste o caminho conforme necessário
import './styles.module.css'; // Inclua os estilos se necessário
import PubSub from 'pubsub-js';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();
const store = mockStore({});

const OPEN_CAR = 'open_car'
describe('Cart Component', () => {
    beforeEach(() => {
        cy.stub(PubSub, 'subscribe').callsFake((channel, callback) => {
            if (channel === OPEN_CAR) {
                callback(null, { openCart: true, products: [{ id: '1', title: 'Product 1', price: '100', description: 'Description' }] });
            }
            return 'subId';
        });
        cy.stub(PubSub, 'unsubscribe');
    });

    it('toggles cart drawer on button click', () => {
        mount(
            <Provider store={store}>
                <Cart />
            </Provider>
        );

        cy.get('._backdrop_wqgyi_1').should('not.exist');
        PubSub.publish(OPEN_CAR, { openCart: true, products: [{ id: '1', title: 'Product 1', price: '100', description: 'Description' }] });
        cy.get('._backdrop_wqgyi_1').should('be.visible');

        cy.get('._close_wqgyi_62').click();
        cy.get('._backdrop_wqgyi_1').should('not.exist');
    });

    it('displays products correctly when cart is open', () => {
        mount(
            <Provider store={store}>
                <Cart />
            </Provider>
        );

        PubSub.publish(OPEN_CAR, { openCart: true, products: [{ id: '1', title: 'Product 1', price: '100', description: 'Description' }] });
        cy.get('._quantity_wqgyi_58').should('contain', '1');
        cy.get('._name_nzvoe_29').should('contain', 'Description');
        cy.get('._price_nzvoe_36').should('contain', 'R$100');
    });
});
