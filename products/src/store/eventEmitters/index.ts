import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface EventsState {
	events: {
		[chave: string]: string;
	};
}

const initialState: EventsState = {
	events: {},
};

export const EventSlice = createSlice({
	name: 'eventList',
	initialState,
	reducers: {
		setEventList: (state, action: PayloadAction<EventsState>) => {
			state.events = action.payload.events;
		},
	},
});

export const { setEventList } = EventSlice.actions;

export default EventSlice.reducer;
