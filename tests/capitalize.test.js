import { capitalize } from '../src/capitalize.js';

if (capitalize('hello') !== 'Hello') {
	throw new Error('Функція працює неправильно!');
}
if (capitalize('') !== '') {
	throw new Error('Функція працює неправильно!');
}
	console.log('Всі тести пройдено!');

