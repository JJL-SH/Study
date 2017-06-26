import React from 'react';

class Box extends React.Component {
  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}

const MyContainer = (WrappedComponent) => (
  class extends WrappedComponent {
    constructor(props) {
      super(props);
      this.state = {
        value: ''
      }
    }

    render() {
      const elementsTree = super.render();
      let newProps = {};

      if (elementsTree && elementsTree.type === 'input') {
        newProps = {
          defaultValue: 'may the force be with you',
          onChange: () => {}
        }
      }

      console.log(elementsTree.props.children)
      const props = Object.assign({}, elementsTree.props, newProps);
      const newElementsTree = React.cloneElement(elementsTree, props, elementsTree.props.children);

      return newElementsTree;
    }
  }
)

class HighComponent2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input type="text" {...this.props}/>
        <Box>
          <span>1</span>
          <span>1</span>
          <span>1</span>
          <span>1</span>
        </Box>
      </div>
    );
  }
}

export default MyContainer(HighComponent2);
