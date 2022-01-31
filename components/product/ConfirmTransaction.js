import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import BuyTransactionDetail from './BuyTransactionDetail';
import SellTransactionDetail from './SellTransactionDetail';

const ConfirmTransaction = ({transactionButton,action,nftData,maticPerUSD}) => {

  return (
    <Popup 
      trigger={transactionButton} 
      position="right center"
      modal nested
    >
      {close => (
        <div className='relative h-fit w-full bg-white grid grid-cols-1 place-items-center rounded-full p-5'>
            {/* Header */}
            <button className="absolute top-0 right-0 border-2 px-3 py-1 text-2xl rounded" onClick={close}>
              &times;
            </button>
            <p className='text-4xl font-bold' >{action}</p>
            {action === "buy" ? (
              <BuyTransactionDetail nftData={nftData} maticPerUSD={maticPerUSD} />
            ) : (
              <SellTransactionDetail nftData={nftData} maticPerUSD={maticPerUSD} />
            )}
            
        </div>
        
    )}
    </Popup>
  );
};

export default ConfirmTransaction;
