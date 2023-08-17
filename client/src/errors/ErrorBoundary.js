import React, { Component } from "react";

export class ErrorBoundary extends Component {
    state = {
        error: null,
        errorInfo: null
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            error,
            errorInfo
        });
    }

    render () {
        if (!this.state.errorInfo) {
            return this.props.children;
        }

        return (
            <div className="error-b"><strong>...Something went wrong</strong></div>
        );
    }
}