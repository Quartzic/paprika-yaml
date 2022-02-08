import React from "react";
import InputField from "./InputField";

class InputSection extends React.Component {
  render() {
    return (
      <>
        <div>
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  {this.props.name}
                </h3>
                <p className="mt-1 text-sm text-gray-600">{this.props.hint}</p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  {this.props.fields &&
                    this.props.fields.map((field) => {
                      return (
                        <InputField
                          id={field.id}
                          key={field.id}
                          name={field.name}
                          type={field.type}
                          rows={field.rows}
                          hint={field.hint}
                          placeholder={field.placeholder}
                          handleChange={this.props.handleChange}
                        />
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default InputSection;
