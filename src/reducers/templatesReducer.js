const initialState = {
  templatesAP: [],
  error: null,
};

const GET_AP_TEMPLATES_SUCEEDED = 'GET_AP_TEMPLATES_SUCEEDED';
const AP_TEMPLATES_ERROR = 'AP_TEMPLATES_ERROR';
const ADD_NEW_TEMPLATE_SUCCEEDED = 'ADD_NEW_TEMPLATE_SUCCEEDED';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AP_TEMPLATES_SUCEEDED:
      return { ...state, templatesAP: action.templates };
    case ADD_NEW_TEMPLATE_SUCCEEDED:
      return { ...state, templatesAP: [...state.templatesAP, action.template] };
    case AP_TEMPLATES_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default reducer;
