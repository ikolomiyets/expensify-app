import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboard from '../../components/ExpenseDashboard';

test('expect expense dashboard to render', () => {
   const wrapper = shallow(<ExpenseDashboard/>);
   expect(wrapper).toMatchSnapshot();
});