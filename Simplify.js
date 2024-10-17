(function () {
  if (!window.Simplify) {
    window.Simplify = {
      createUniqueStyles: ({ elementId, cssContent, pluginName }) => {
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
      extractNumericValue: (value) => {
        if (!value) return 0;
        return parseFloat(value) || 0;
      },

      extractDataFromListOfThings: (list) => {
        if (!list) {
          console.error("List not found");
          return;
        }

        const thingsLen = list.length();
        // Return an array if list is empty
        if (thingsLen === 0) return [];

        // Extract all the elements from the list
        const listOfThings = list.get(0, thingsLen);

        // Set the size of the array from the length of the list
        const result = new Array(thingsLen);

        for (let i = 0; i < thingsLen; i++) {
          const element = listOfThings[i];
          const listOfProps = element.listProperties();
          const thing = {};

          for (let j = 0; j < listOfProps.length; j++) {
            let prop = listOfProps[j];

            // Remove the prefix "_p_" if it exists
            const cleanProp = prop.startsWith("_p_")
              ? prop.replace("_p_", "")
              : prop;

            // Get each value from props and assign it to the cleaned property
            thing[cleanProp] = element.get(prop);
          }

          result[i] = thing;
        }

        return result;
      },
    };
  }
})();
