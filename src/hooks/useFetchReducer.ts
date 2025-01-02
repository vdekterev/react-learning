import { useReducer } from 'react';
import { ActionEnum, IFetchAction } from '@/types.ts';


const initialState = {
	data: null,
	loading: false,
	error: null
};

const reducer = (_, action: IFetchAction) => {
	switch (action.type) {
	case ActionEnum.FETCH_PROCESS:
		return {
			data: null,
			loading: true,
			error: null
		};
	case ActionEnum.FETCH_SUCCESSFUL:
		return {
			data: action.payload,
			loading: false,
			error: null
		};
	case ActionEnum.FETCH_ERROR:
		return {
			data: null,
			loading: false,
			error: action.payload
		};
	default:
		return initialState;
	}
};

export function useFetchReducer() {
	const [state, dispatch] = useReducer(reducer, initialState);

	const setLoading = () => dispatch({ type: ActionEnum.FETCH_PROCESS });
	const setSuccess = (data: any) => dispatch({ type: ActionEnum.FETCH_SUCCESSFUL, payload: data });
	const setError = (error: string) => dispatch({ type: ActionEnum.FETCH_PROCESS, payload: error });

	return { state, setLoading, setSuccess, setError };
}