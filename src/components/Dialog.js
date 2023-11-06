import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Portal } from 'react-portal';
import FocusTrap from 'focus-trap-react';
import './dialog.css'

class Dialog extends Component {
  render() {
    const { title, children, onClose } = this.props;

    return (
      <Portal>
        <FocusTrap>
          <div className="dialog-overlay">
            <div className="dialog">
              <div className="dialog-header">
                <h2>{title}</h2>
                <button className="close-button" onClick={onClose}>
                  ×
                </button>
              </div>
              <div className="dialog-body">{children}</div>
            </div>
          </div>
        </FocusTrap>
      </Portal>
    );
  }
}

export default Dialog;
