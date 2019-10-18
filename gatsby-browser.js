const React = require("react")
const AppWrapper = require("./src/components/appWrapper").default

exports.wrapPageElement = ({ element, props }) => {
  return <AppWrapper {...props}>{element}</AppWrapper>
};
