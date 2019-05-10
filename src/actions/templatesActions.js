export const getTemplatesAction = () => ({
  type: 'GET_AP_TEMPLATES',
});

export const getTemplatesSuccess = templateIndexArray => ({
  type: 'GET_AP_TEMPLATES_SUCEEDED',
  templates: templateIndexArray,
});

export const getTemplatesError = error => ({
  type: 'AP_TEMPLATES_ERROR',
  error,
});

export const addNewTemplateAction = () => ({
  type: 'ADD_NEW_TEMPLATE',
});

export const addNewTemplateSuccess = template => ({
  type: 'ADD_NEW_TEMPLATE_SUCCEEDED',
  template,
});
