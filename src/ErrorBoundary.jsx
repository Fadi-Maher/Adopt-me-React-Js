import { Component } from "react";
import { Link } from "react-router-dom";
export default class ErrorBoudary extends Component {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.log("ErrorBoundary caught an error", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <h2>
          Tere was an error with this listing.
          <Link to="/">Click here to go back to home page</Link>
        </h2>
      );
    }
    return this.props.children;
  }
}
