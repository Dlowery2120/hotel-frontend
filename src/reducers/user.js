const initialState = {
	isLoggedIn: false,
	users: []
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN':
			return {
				...state,
				isLoggedIn: true
			};
	}
};

export default userReducer;
