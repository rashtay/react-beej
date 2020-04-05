global.useTestId = (id) => {
  if (process.env.NODE_ENV === 'test') return { 'data-test': id };

  return {};
};
