export const FETCH_STARTED = 'FETCH_STARTED';
export const FETCH_COMPLETED = 'FETCH_COMPLETED';

export function fetchStart(name) {
	return {
		type: FETCH_STARTED
	}
}

export function fetchComplete() {
  return {
    type: FETCH_COMPLETED
  }
};
