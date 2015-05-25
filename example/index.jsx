var RadioGroup = require('../lib/index.jsx');
var App=
		<RadioGroup jsxname="fruit" jsxvalue="orange">
		  <input type="radio" value="apple" />Apple
		  <input type="radio" value="orange" />Orange
		  <input type="radio" value="watermelon" />Watermelon
		</RadioGroup>

React.render(App, document.getElementById('content'))