export function useStyles(styles: { [key: string]: string }) {
  return function (styleNames: string[]) {
    return styleNames
      .map((styleName) => {
        if (!styles[styleName]) {
          return styleName;
        }
        return styles[styleName];
      })
      .join(" ");
  };
}