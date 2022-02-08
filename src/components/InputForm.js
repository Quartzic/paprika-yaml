import React from "react";
import InputSection from "./InputSection";
import Divider from "./Divider";
import YAML from "yaml";
import sanitize from "sanitize-filename";
class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    const blob = new Blob([YAML.stringify(this.state)], {
      type: "application/yaml",
    });
    const fileDownloadUrl = URL.createObjectURL(blob);
    this.setState({ fileDownloadUrl: fileDownloadUrl }, () => {
      this.setState(
        { fileDownloadName: ( sanitize(this.state.name) ? sanitize(this.state.name) : "recipeToYAML" ) + ".yml" },
        () => {
          this.hiddenFileDownloadAnchor.click();
          URL.revokeObjectURL(fileDownloadUrl);
          this.setState({ fileDownloadUrl: "" });
        }
      );
    });

    event.preventDefault();
  }

  render() {
    return (
      <>
        {this.props.formData.map((section) => {
          return (
            <div key={section.id}>
              <InputSection
                name={section.name}
                hint={section.hint}
                fields={section.fields}
                handleChange={this.handleChange}
              />
              <Divider />
            </div>
          );
        })}

        <button
          type="submit"
          onClick={this.handleSubmit}
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Export recipe
        </button>
        <a
          style={{ display: "none" }}
          download={this.state.fileDownloadName}
          href={this.state.fileDownloadUrl}
          ref={(e) => (this.hiddenFileDownloadAnchor = e)}
        >
          Download
        </a>
      </>
    );
  }
}

export default InputForm;
