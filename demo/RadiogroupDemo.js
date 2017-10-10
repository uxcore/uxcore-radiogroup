import RadioGroup from '../src';

const { Item } = RadioGroup;

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange(value) {
    const me = this;
    me.setState({
      value,
    });
  }

  render() {
    const me = this;
    return (
      <RadioGroup value={me.state.value} onChange={me.handleChange.bind(me)} disabled>
        <Item disabled={false} value="apple" text="苹果" />
        <Item value="banana" text="香蕉" />
        <Item value="orange" text="橘子" />
      </RadioGroup>
    );
  }
}

export default Demo;
