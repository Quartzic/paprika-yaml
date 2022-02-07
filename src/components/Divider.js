import React from 'react';

class Divider extends React.Component {
  render() {
    return <div className="block" aria-hidden="true">
      <div className="py-4 sm:py-8">
        <div className="border-t border-gray-200"></div>
      </div>
    </div>;
  }
}

export default Divider;
