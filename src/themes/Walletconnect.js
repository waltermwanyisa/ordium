import React, {useContext} from 'react';
import {WalletContext} from '../context/WalletContext';

const Walletconnect = () => {
    const {isWalletConnected, walletAddress, connectWallet} = useContext(WalletContext);

    const handleConnect = async (event) => {
        event.preventDefault();
        try {
            const unisatInstalled = !!window.unisat;
            if (!unisatInstalled) {
                window.open("https://unisat.io", "_blank", "noopener noreferrer");
                setTimeout(() => {
                    window.location.reload();
                }, 20000); // Reload page after 20 seconds
                return;
            }
            // Check again if unisat is still not defined
            if (!window.unisat) {
                console.log('Waiting for unisat...');
                setTimeout(() => {
                    connectWallet();
                }, 1000); // Try to connect again in 1 second
            } else {
                connectWallet();
                console.log('unisat is defined')
            }
        } catch (error) {
            console.error('An error occurred:', error);
            // Handle the error as needed
        }
    };




    const buttonText = window.unisat ? "Connect Wallet" : "Install UniSat";

    return (
        <div>
            <li className="nav-item ml-2">
                <button onClick={handleConnect} className="btn ml-lg-auto btn-bordered-white">
                    <i className="icon-wallet mr-md-2"/>
                    {isWalletConnected ? `${walletAddress.substring(0, 6)}...${walletAddress.substring(walletAddress.length - 4)}` : buttonText}
                </button>
            </li>
        </div>
    );
};

export default Walletconnect;
