# NFT Presale Site Demo

This is a demo project showcasing a DEMO of NFT Presale. In this case [this](https://testnet.snowtrace.io/address/0x848866702EAEfBffc248Ec2e25d5825b93dE0617#code) presale contract was used.

## Description

The presale demo consists of 5 types of cards as existing in the presale contract at the time of writing - each having their own price and mint limits. The site loads with a message prompt to install *Metamask* if not installed. If installed, the used needs to connect it. The site prompts for switching chain from any Chain to either Avalanche Mainnet c-chain or Fuji Testnet. After this the user can connect to the site by presssing the **Connect** button. This prompts them to *sign a welcome messsage* accepting terms. They can select from the range of NFTs available on the card. The `Get Card Details` button helps in getting the details of the cards with the amount sold *in real time*. Once selected, the user may choose to buy the card by click the `Buy` button which creates a metamask transaction.

**Note**: The user must have sufficient AVAX in their wallet to cover the NFT cost and gas fees. No error will me shown and the `Buy` button will simply not work otherwise. Ideally an error modal might be displayed but I haven't created that since this is just a demo.

## Run the Project

To run the project, 
1. Install Node and NPM (preferrably the versions mentioned in the `"engines"` section of `package.json`).
2. Clone the project and from the clonned directory run `npm install`.
3. After installation finishes, run `npm start`.

## Demo 

### Site Functioning

https://user-images.githubusercontent.com/38981107/155565727-d33cadc2-037a-4570-81fc-1ab9574f6e79.mp4


### Viewport Responsiveness

https://user-images.githubusercontent.com/38981107/155562292-a6e545f4-0059-4190-8f96-e99df0f3d6f4.mp4


## Stack

The site was built using:
1. ReactJS
2. MUI v5
3. EthersJs

## Credits

The site was built by me. The contract was written by Peter Roy.
