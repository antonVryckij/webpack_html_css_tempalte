import _ from 'lodash';
import './style.scss'

function component() {
	const element = document.createElement('div');

	element.innerHTML = _.join(['Hello', 'webpack 2'], ' ');
	element.classList.add('heading')

	return element;
}

document.body.appendChild(component());
