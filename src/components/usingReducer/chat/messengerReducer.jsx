export const initialState = {
  selectedId: 0,
  message: 'Hello',
};

export function messengerReducer(state, action) {
  switch (action.type) {
    case 'changed_selection': {
      return {
        ...state,
        selectedId: action.contactId,
        message: '',
      };
    }
    case 'edited_message': {
      return {
        ...state,
        message: action.message,
      };
    }
    case 'send_message': {
      if (state.message === '') {
        return {
          ...state,
          message: 'Please enter a message',
        };
      }
      alert(
        'Sending message: ' + state.message + ' to ' + action.contact.email
      );
      return {
        ...state,
        message: '',
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
