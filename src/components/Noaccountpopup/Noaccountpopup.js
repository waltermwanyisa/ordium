import React, { Component } from 'react';
import '../../Noaccountpopup.css';

class NoAccountsPopup extends Component {
    render() {
        const { onClose } = this.props;

        return (
            <div className="popup-overlay">
                <div className="popup-content">
                    <h5>
                        Oops! It looks like you haven't created a wallet in UniSat yet</h5>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        );
    }
}

export default NoAccountsPopup;
