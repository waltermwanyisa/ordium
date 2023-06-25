import React from 'react';
import NoAccountsPopup from '../components/Noaccountpopup/Noaccountpopup';

export const WalletContext = React.createContext();

export class WalletProvider extends React.Component {
    state = {
        isWalletConnected: false,
        isUnisatInstalled: false,
        walletAddress: '',
        satoshiBalance: 0,
        showNoAccountsPopup: false,
    };

    componentDidMount() {
        this.initializeWallet();
    }

    initializeWallet = async () => {
        try {
            const unisat = window.unisat;
            if (unisat) {
                this.setState({isUnisatInstalled: true});
                unisat.on('accountsChanged', this.handleAccountsChanged);
                await this.checkWalletConnection();
                await this.getSatoshiBalance();
            }
        } catch (error) {
            console.error('An error occurred during wallet initialization:', error);
            // Handle the error as needed
        }
    }

    componentWillUnmount() {
        const unisat = window.unisat;
        if (unisat) {
            unisat.removeListener('accountsChanged', this.handleAccountsChanged);
        }
    }

    checkWalletConnection = async () => {
        try {
            const unisat = window.unisat;
            const accounts = await unisat.getAccounts();
            if (accounts.length > 0) {
                this.setState({
                    isWalletConnected: true,
                    walletAddress: accounts[0],
                });
            }
        } catch (error) {
            console.error('An error occurred while checking wallet connection:', error);
            // Handle the error as needed
        }
    };

    handleAccountsChanged = async (accounts) => {
        if (accounts.length > 0) {
            this.setState({
                isWalletConnected: true,
                walletAddress: accounts[0],
                showNoAccountsPopup: false,
            });
            await this.getSatoshiBalance();
        } else {
            this.setState({isWalletConnected: false, walletAddress: ''});
        }
    };

    connectWallet = async () => {
        try {
            console.log()
            const unisat = window.unisat;
            const result = await unisat.requestAccounts();
            if (result.length > 0) {
                this.setState({
                    isWalletConnected: true,
                    walletAddress: result[0],
                    showNoAccountsPopup: false,
                });
                await this.getSatoshiBalance();
            } else {
                this.setState({showNoAccountsPopup: true});
            }
        } catch (error) {
            console.log('Error connecting wallet:', error);
            if (error.code === 4001 && error.message === 'wallet must has at least one account') {
                this.setState({showNoAccountsPopup: true});
            }
        }
    };

    closeNoAccountsPopup = () => {
        this.setState({showNoAccountsPopup: false});
    };

    getSatoshiBalance = async () => {
        try {
            const unisat = window.unisat;
            const balance = await unisat.getBalance();
            this.setState({satoshiBalance: balance});
        } catch (error) {
            console.error('An error occurred while getting satoshi balance:', error);
            // Handle the error as needed
        }
    };

    render() {
        const {isWalletConnected, walletAddress, satoshiBalance, showNoAccountsPopup} = this.state;

        return (
            <WalletContext.Provider
                value={{
                    isWalletConnected,
                    walletAddress,
                    satoshiBalance,
                    connectWallet: this.connectWallet,
                }}
            >
                {this.props.children}
                {showNoAccountsPopup && <NoAccountsPopup onClose={this.closeNoAccountsPopup}/>}
            </WalletContext.Provider>
        );
    }
}