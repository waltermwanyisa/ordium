import React, { useState } from 'react';
import { Button, Card, Input } from 'antd';
import './SendBitcoin.css';

function SendBitcoin({ unisat, satoshiBalance }) {
  const [toAddress, setToAddress] = useState(
    'bc1p3uu83flvss4wl3ed326tmuynst0nhtrxwr3mgh0ler8l4djh2dusysk4wr'
  );
  const [satoshis, setSatoshis] = useState(0);
  const [txid, setTxid] = useState('');

  const handleSendBitcoin = async () => {
    try {
      if (unisat) {
        // check the address
        if (!toAddress) {
          console.error('No destination address provided.');
          return;
        }
        // check the satoshis
        if (!satoshis || satoshis <= 0) {
          console.error('Invalid satoshis amount.');
          return;
        }
        const txid = await unisat.sendBitcoin(toAddress, satoshis);
        setTxid(txid);
      } else {
        console.error('Unisat object not found.');
      }
    } catch (e) {
      console.error('Error sending Bitcoin:', e);
      setTxid(e.message);
    }
  };

  const handleAmountClick = (amount) => {
    setSatoshis(amount);
  };

  const handleInputChange = (e) => {
    setSatoshis(parseInt(e.target.value));
  };

  return (
    <Card size='small' className='m-card'>
      <div className='Satoshi'>Choose your amount: (Satoshi's)</div>
      <div className='m-input'>
        <Input value={satoshis} onChange={handleInputChange} />
      </div>
      <div className='button-box'>
        <Button className='m-button' onClick={() => handleAmountClick(satoshiBalance.total)}>
          Maximum: {satoshiBalance.total}
        </Button>
      </div>
      <Button className='send-button' onClick={handleSendBitcoin}>
        Send Bitcoin
      </Button>
    </Card>
  );
}

export default SendBitcoin;