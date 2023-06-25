import React, { Component } from 'react';
import {WalletContext} from '../context/WalletContext';

class WalletProvider extends Component {
    state = {
        isWalletConnected: false,
        walletAddress: null,
        connectWallet: this.connectWallet,
        disconnectWallet: this.disconnectWallet,
    };

    connectWallet = async () => {
        this.setState({
            isWalletConnected: true,
            walletAddress: "",
        });
    };

    disconnectWallet = () => {

        this.setState({
            isWalletConnected: false,
            walletAddress: null,
        });
    };

    render() {
        return (
            <WalletContext.Provider value={this.state}>
                {this.props.children}
            </WalletContext.Provider>
        );
    }
}

export default WalletProvider;
