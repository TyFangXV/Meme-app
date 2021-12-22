//checks if the user hit the bottom of the screen and return `true` or `false`
const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 1;
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;
};







module.exports = {isCloseToBottom}