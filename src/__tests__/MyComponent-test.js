jest.dontMock('../MyComponent.js');


describe('Render into document', function(){
  it('should render noscript if render returns null', function(){
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;
    var MyComponent = require('../MyComponent');

    var myComponent = TestUtils.renderIntoDocument(<MyComponent flag={false}/>);
    var noscript = TestUtils.findRenderedDOMComponentWithTag(myComponent, 'noscript');

    expect(noscript).toBeTruthy();
  })
});