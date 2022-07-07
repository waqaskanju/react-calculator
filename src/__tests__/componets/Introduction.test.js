import React from 'react';
import renderer from 'react-test-renderer';
import Introduction from '../../routes/Introduction';

describe('should render without problems', () => {
  it('should render the Introduction page', () => {
    const tree = renderer.create(<Introduction />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
