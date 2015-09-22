/**
* thanks for https://github.com/chenglou/react-radio-group
* @author: zhouquan.yezq
* @time  : 5/25 2015
*/

let Item = require('./RadiogroupItem');
let classnames = require("classnames");

class Radiogroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultValue: props.defaultValue
        }
    }

    _handleChange(value) {
        let me = this;
        me.props.onChange(value);
    }

    _processChild() {
        let me = this;
        const length = React.Children.count(me.props.children);
        if (!length) return false;
        let elements = React.Children.map(me.props.children, (child, index) => {
            if (!!child.type  && child.type.displayName == "RadiogroupItem") {
                return React.cloneElement(child, {
                    onChange: me._handleChange.bind(me),
                    key: index,
                    checked: me.props.value == child.props.value
                });
            }
        });
        return elements;
    }

    render() {
        let me = this;
        return (
            <div className={classnames({
                "kuma-radio-group": true,
                [me.props.className]: !!me.props.className
            })}>
                {me._processChild()}
            </div>
        );
    }

}

Radiogroup.displayName = "Radiogroup";
Radiogroup.propTypes = {
    value: React.PropTypes.string,
    onChange: React.PropTypes.func
};
Radiogroup.defaultProps = {
    value: "",
    onChange: () => {}
};

Radiogroup.Item = Item;


module.exports = Radiogroup;
