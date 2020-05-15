import React    from "react";
import template from "./AddressForm.jsx";

class AddressForm extends React.Component {
  render() {
    return template.call(this);
  }
}

export default AddressForm;
