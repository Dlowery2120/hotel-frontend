const initialState = {
	hotels: []
};

const hotelReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_HOTELS':
			return {
				...state,
				hotels: [...state.hotels, action.hotels]
			};
	}
};

export default hotelReducer;
