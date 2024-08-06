const Simplify = {
  createUniqueStylesById: ({ elementId, cssContent, pluginName }) => {
    if (!pluginName || !cssContent || !pluginName) {
      console.warn(
        `IMPORTANT! remember to use all the props to correct functionality ${{
          pluginName,
          elementId,
          cssContent,
        }}`
      );
    }

    const styleId = `${elementId}-element-styles-${pluginName}`;
    let styleElement = document.getElementById(styleId);

    if (styleElement) {
      styleElement.innerHTML = cssContent;
    } else {
      styleElement = document.createElement("style");
      styleElement.id = styleId;
      styleElement.type = "text/css";
      styleElement.innerHTML = cssContent;
      document.head.appendChild(styleElement);
    }
  },
  generateUUID: () => {
    const timePart = Date.now().toString(36).substring(-2);
    const randomPart = Math.random().toString(36).substring(2, 5);
    return `${timePart}${randomPart}`;
  },

  // Add methods here!
};
