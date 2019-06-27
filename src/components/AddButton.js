import React from "react";
import { history } from "../Router/Router";

function handleAddButton() {
  history.push("/home/add-contact");
}

const AddButton = () => {
  return (
    <div className="uk-position-bottom-right">
      <div data-uk-sticky="bottom: true">
        <div className="uk-card uk-card-secondary uk-card-body">
          <button class="uk-icon-link" data-uk-icon="icon: plus; ratio: 2" onClick={handleAddButton}></button>
        </div>
      </div>
    </div>
  );
};

export default AddButton;