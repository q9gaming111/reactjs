export function setName(name) {
	return {
		type: 'SETNAME',
		payload: name
	}
}
export function setAge(age) {
	return {
		type: 'SETAGE',
		age: age
	}
}