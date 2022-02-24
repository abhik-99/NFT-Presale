import React from 'react'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';

const AvaxSwitchDialog = ({open, onClose}) => {
  const handleChainSwitch = async (chain) => {
    const {ethereum} = window;
    try {
      await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${parseInt(chain).toString(16)}` }],
      });
    } catch (switchError) {
      if (switchError.code === 4902) {
        try {
          await ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              // avax mainnet
              {
                chainId: `0x${parseInt(43114).toString(16)}`,
                chainName: 'Avalanche Mainnet C-Chain',
                rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
                blockExplorerUrls: ['https://snowtrace.io/'],

              },
              // avax fuji testnet
              {
                chainId: `0x${parseInt(43113).toString(16)}`,
                chainName: 'Avalanche FUJI C-Chain',
                rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
                blockExplorerUrls: ['https://testnet.snowtrace.io/'],

              },
            ],
          });
        } catch (addError) {
          console.log(addError);
        }
      }

    };
    onClose();
  }
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Jack-of-all-Trades</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please switch to Avalanche C-Chain to Proceed.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleChainSwitch(43114)}>Switch to Mainnet</Button>
        <Button onClick={() => handleChainSwitch(43113)}>Switch to Testnet</Button>
      </DialogActions>
    </Dialog>
  )
}

export default AvaxSwitchDialog;