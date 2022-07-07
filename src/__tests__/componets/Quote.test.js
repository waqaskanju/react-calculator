import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../../routes/Quote';

describe('should render without problems', () => {
  it('should render the  Quote page', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
