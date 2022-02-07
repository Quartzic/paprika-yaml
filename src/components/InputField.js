import React from "react";

class InputField extends React.Component {
  render() {
    return (
      <div>
        <label
          htmlFor={this.props.id}
          className="block text-sm font-medium text-gray-700"
        >
          {this.props.name}
        </label>
        <p class="text-gray-500 text-xs">
            {this.props.hint}
        </p>
        <div className="mt-1">
          {this.props.type === "textarea" ? (
            <textarea
              id={this.props.id}
              name={this.props.name}
              onChange={this.props.handleChange}
              rows={this.props.rows ? this.props.rows : "3"}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder={this.props.placeholder}
            />
          ) : (
            <input
              id={this.props.id}
              name={this.props.id}
              type={this.props.type}
              onChange={this.props.handleChange}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder={this.props.placeholder}
            />
          )}
        </div>
      </div>
    );
  }
}

export default InputField;
