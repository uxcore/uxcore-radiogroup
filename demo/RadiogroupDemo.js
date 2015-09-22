let RadioGroup = require('../src');
let {Item} = RadioGroup;

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleChange(value) {
        let me = this;
        me.setState({
            value: value
        });
    }

    render() {
        let me = this;
        return (
            <RadioGroup value={me.state.value} onChange={me.handleChange.bind(me)}>
                <Item value="apple" text="苹果"/>  
                <Item value="banana" text="香蕉"/>  
                <Item value="orange" text="橘子"/>  
            </RadioGroup> 
        );
    }
}

module.exports = Demo;