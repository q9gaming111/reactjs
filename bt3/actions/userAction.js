export const FETCH_STARTED = 'FETCH_STARTED';
export function getUserStarted(name) {
	return {
		type: FETCH_STARTED
	}
}


export const FETCH_COMPLETED = 'FETCH_COMPLETED';
export function getUserCompleted() {
  return {
    type: FETCH_COMPLETED
  }
};
