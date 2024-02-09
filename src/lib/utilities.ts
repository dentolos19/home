/**
 * This function takes an object of CSS styles as input and returns a function
 * that conditionally constructs a space-separated list of CSS classes.
 *
 * @param styles An object of CSS styles, where the keys are style names and the values are class names.
 * @returns A function that takes any number of arguments and returns a space-separated list of CSS classes.
 */
export function generateStyler(styles: { [key: string]: string } = {}) {
  const parseStyle = (value: string) => {
    return styles.hasOwnProperty(value) ? styles[value] : value;
  };

  const parseValue = (value: any) => {
    var output = "",
      temp;
    if (typeof value === "string") {
      const values = value.split(" ");
      if (values.length > 1) {
        values.forEach((element) => {
          if ((temp = parseStyle(element))) {
            output && (output += " ");
            output += temp;
          }
        });
      } else {
        if ((temp = parseStyle(value))) {
          output && (output += " ");
          output += temp;
        }
      }
    } else if (Array.isArray(value)) {
      for (let index = 0; index < value.length; index++) {
        const element = value[index];
        if (!element) continue;
        if ((temp = parseValue(element))) {
          output && (output += " ");
          output += temp;
        }
      }
    } else {
      for (const key in value) {
        if (!value.hasOwnProperty(key)) continue;
        const condition = value[key];
        if (!condition) continue;
        if ((temp = parseStyle(key))) {
          output && (output += " ");
          output += temp;
        }
      }
    }
    return output;
  };

  /**
   * It takes any number of arguments and returns a space-separated list of CSS
   * class names. Each argument is parsed for CSS class names conditionally.
   *
   * @param args Any number of arguments to be parsed for CSS class names.
   * @returns A space-separated list of CSS class names.
   */
  return function (...args: any[]) {
    var output = "",
      temp;
    for (let index = 0; index < args.length; index++) {
      const value = args[index];
      if (!value) continue;
      if ((temp = parseValue(value))) {
        output && (output += " ");
        output += temp;
      }
    }
    return output;
  };
}