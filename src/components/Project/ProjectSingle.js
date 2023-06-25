import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { WalletContext } from '../../context/WalletContext';
import { Modal } from 'antd';
import SendBitcoin from '../../SendBitcoin';
import '../../SendBitcoin.css';
import ProjectCard from '../Projectcard/ProjectCard';
import axios from 'axios';

const ProjectSingle = () => {
  const { id } = useParams();
  const { isWalletConnected, connectWallet, satoshiBalance } = useContext(WalletContext);
  const [projectData, setProjectData] = useState({});
  
  console.log("ID"+id)
  const handleOpenSendBitcoinModal = () => {
    setShowSendBitcoinModal(true);
  };

  const handleCloseSendBitcoinModal = () => {
    setShowSendBitcoinModal(false);
  };

  console.log(id)

  useEffect(() => {
    axios
    .get(`${process.env.REACT_APP_BASE_URL}/api/projects/${id}`)
      .then((res) => {
        setProjectData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log('Error from getProject By ID');
      });
  }, [id]);

  const [showSendBitcoinModal, setShowSendBitcoinModal] = useState(false);

  const btcBalance = (satoshiBalance / 100000000).toFixed(8);

  return (
    <section className='item-details-area'>
      <Modal
        title='Send Bitcoin'
        open={showSendBitcoinModal}
        onCancel={handleCloseSendBitcoinModal}
        footer={null}>
        <SendBitcoin  satoshiBalance={satoshiBalance} unisat={window.unisat} />
      </Modal>

      <ProjectCard
        project={projectData}
        isWalletConnected={isWalletConnected}
        handleOpenSendBitcoinModal={handleOpenSendBitcoinModal}
        connectWallet={connectWallet}
        satoshiBalance={satoshiBalance}
        btcBalance={btcBalance}
      />
    </section>
  );
};

export default ProjectSingle;