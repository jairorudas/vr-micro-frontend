import { mount } from '@cypress/react18';
import { Button } from './index';
import { ESize } from '../text/interfaces';


describe('Button Component', () => {
  const label = "adicionar";
  const weight = "bold";
  it('renders correctly with provided styles', () => {

    mount(<Button label={label} size={ESize.large} weight={weight} onClick={() => { }} />);

    cy.contains('button', label).should('be.visible');

    cy.get('button').should('have.class', '_button_1n0od_1');
    cy.get('button').should('have.class', '_bold_1n0od_10');
    cy.get('button').should('have.class', '_large_1n0od_19');
  });

  it('calls onClick handler when clicked', () => {
    const onClick = cy.stub().as('clickHandler');
    mount(<Button label="adicionar" size={ESize.small} weight={weight} onClick={onClick} />);

    cy.contains('button', 'adicionar').click();
    cy.get('@clickHandler').should('have.been.calledOnce');
  });
});
