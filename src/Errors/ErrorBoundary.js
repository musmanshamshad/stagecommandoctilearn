import React from "react";
import PropTypes from "prop-types";
import Alert from "../Components/UI/Alert/Alert";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      info: null,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      info: errorInfo,
    });
    console.error(error);
    console.error(errorInfo);
  }

  ErrorBoundary = {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#ebebeb",
    whiteSpace: "nowrap",
    alignItems: "center",
    fontSize: "8.5pt",

    color: "#5d5d5d",
  };

  render() {
    if (this.state.hasError) {
      return (
        <div id="divError">
          <Alert severity={"error"} message={this.props.fallbackMsg} />
        </div>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.defaultProps = {
  fallbackMsg: "Sorry, Some error occured.",
};
ErrorBoundary.propTypes = {
  className: PropTypes.string,
  fallbackMsg: PropTypes.string,
  children: PropTypes.object,
};
export default ErrorBoundary;
