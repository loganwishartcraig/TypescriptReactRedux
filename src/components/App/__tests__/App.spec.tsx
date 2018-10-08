import * as React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('Component - App', () => {

  it('Renders the heading', () => {

    const result = shallow(<App/>);
    expect(result).toBeTruthy();

  });

});
