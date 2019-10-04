export const FindByTestAttr = (component, attr) => {
  const selector = component.find(`[data-test='${attr}']`);
  return selector;
};
