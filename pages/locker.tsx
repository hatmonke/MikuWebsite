import { Row, Col, Input, Table, DatePicker,} from "antd";
//import { Swiper, SwiperSlide } from "swiper/react";
import Layout from "../components/Layout";
import projectConfig from "../config/projectConfig";
import Head from "next/head";
import { FaWallet } from 'react-icons/fa';
import Web3 from 'web3';
import lockerABI from '../config/lockerABI.json';
import tokenABI from '../config/tokenABI.json';
//import { Navigation } from "swiper";
import { Contract } from 'web3-eth-contract';
import { AbiItem } from 'web3-utils/types'
import { useWeb3React } from "@web3-react/core"
import { injected } from "../supportedNetworks"
import { Button } from "../components/Button";
import { useRouter } from "next/router";
import "swiper/css/navigation";
import { useState, useEffect, SetStateAction } from 'react';
import { 
  CardWrap,
} from "../styles/styles";

const web3 = new Web3(Web3.givenProvider);

  

function Locker(){

  //URL Params
  const { query } = useRouter();
  const router = useRouter();
  
  //console.log(query.token);
  //console.log(params.owner);

  const columns = [
    {
      title: 'Amount',
      dataIndex: 'amnt',
      key: 'amnt',
    },
    {
      title: 'Release Date',
      dataIndex: 'rDate',
      key: 'rDate',
    },
  ];
  const [data,setData] = useState([{}])
  
  
  //Web3 Stuff
  const { active, account, activate} = useWeb3React()
 
  
  async function connect() {
    try {
      await activate(injected)
      // @ts-ignore
      const lockCostVal = await contract.methods.lockCost().call();  
      //const unlockCostVal = await contract.methods.unlockCost().call();  
      setLockCost(lockCostVal);
      //setUnlockCost(unlockCostVal);
    } catch (ex) {
      //console.log(ex)
    }
  }

  /*async function disconnect() {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }*/

  //Field hooks
  const [wallet,setWallet] = useState("");
  const [walletField, setWalletField] = useState("");
  const [tokenV,setTokenV] = useState("");
  const [tokenL,setTokenL] = useState("");
  const [tokenVField,setTokenVField] = useState("");
  const [tokenLField,setTokenLField] = useState("");
  const [tAmount,setTAmount] = useState("");
  const [futureDate,setFutureDate] = useState(0);
  const [isErrorV, setIsErrorV] = useState(false);
  const [errorVTxt, setErrorVTxt] = useState('');
  const [isErrorL, setIsErrorL] = useState(false);
  const [errorLTxt, setErrorLTxt] = useState('');
  const [lockCost, setLockCost] = useState(0);
  //const [unlockCost, setUnlockCost] = useState(0);
  const [unlockable, setUnlockable] = useState(false);
  const [ownerViewing, setOwnerViewing] = useState(false);
  const [isRef, setRef] = useState(false);

  //Locker address
  const [ contract, setContract ] = useState<Contract | null>(null);
  const [ tcontract, setTContract ] = useState<Contract | null>(null);
  const [ vcontract, setVContract ] = useState<Contract | null>(null);
  //Web3 Provider checks
  const [ isMetamask, setIsMetamask ] = useState(false);
  const [ isNetwork, setIsNetwork ] = useState(false);
  const [ isLoadingNetwork, setIsLoadingNetwork ] = useState(true);
  //Token approved check
  const lockerAddy = "0xbA2dc9ABAD37B095dF538Eaf9223b71D80355417";
  const connectToWeb3 = async () => {
    const lockerContract = new web3.eth.Contract(lockerABI as AbiItem[], lockerAddy);
    setContract(lockerContract);
    
  }

  const addEchNetwork = async () => {
      window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [{
      chainId: '0x38',
      chainName: 'Smart Chain',
      nativeCurrency: {
          name: 'Binance Coin',
          symbol: 'BNB',
          decimals: 18
      },
      rpcUrls: ['https://rpc.ech.network'],
      blockExplorerUrls: ['https://scout.ech.network']
      }]
      })
      .catch((error: any) => {
      console.log(error)
      }) 
  }

  const connectToToken = async (taddy: any) => 
  {
    try 
    {
      const tokenContract = new web3.eth.Contract(tokenABI as AbiItem[], taddy);
      
      
      setTContract(tokenContract);
      setTokenL(taddy);
    }catch(ex) 
    {
      //console.log(ex);
    }
  }

  const connectToTokenV = (taddy: any) => 
  {
    try 
    {
      const tokenContract = new web3.eth.Contract(tokenABI as AbiItem[], taddy);
      setVContract(tokenContract);
      setTokenV(taddy);
      
    }catch(ex) 
    {
      //console.log(ex);
    }
  }

    
    //Field data
    //View Wallet
    const handleWalletChange = (event: any) => {
      setWalletField(event.target.value);
      if(web3.utils.isAddress(event.target.value))
      {
        setWallet(event.target.value);
      }
      else
      {
        setWallet('');
      }
    };
    //View Token
    const handleTokenVChange = (event: any) => {
      setTokenVField(event.target.value);
      if(web3.utils.isAddress(event.target.value))
      {
        connectToTokenV(event.target.value);    
      }
      else
      {
        setVContract(null)
        setTokenV('');
      }
    };

    //Locker Token
    const handleTokenLChange = (event: any) => {
      setTokenLField(event.target.value);
      if(web3.utils.isAddress(event.target.value))
      {
        connectToToken(event.target.value);    
      }
      else
      {
        setTContract(null)
        setTokenL('');
      }
      
    };
    
    const handleAmountChange = (event: any) => {
      setTAmount(event.target.value);
    };

    const handleInsertAddress = () =>
    {
      // @ts-ignore
      setWallet(account);
      // @ts-ignore
      setWalletField(account);
      
    }

    function onOk(value: { _d: number; }) {
      const future=Math.floor(value._d/1000); 
      setFutureDate(future);
    }

    //Check Web3
    async function networkCheck(id: number){
      //chain
      if(id === 56)
      {
        setIsNetwork(true);
        
      }
      else
      {
        setIsNetwork(false);
      }
      setIsLoadingNetwork(false);
      
    }

  //Retrieve contract 
  useEffect(() => {
    connectToWeb3();
    if (web3.givenProvider !== null) 
      {
        
        setIsMetamask(true);
        web3.eth.net.getId()
        .then(function (result){
          networkCheck(result);  
      })
      }
      else
      {
        setIsMetamask(false);
      }
    
      
    const id = setInterval(() => {
      if (web3.givenProvider !== null) 
      {
        
        setIsMetamask(true);
        web3.eth.net.getId()
        .then(function (result: any){
          networkCheck(result);  
      })
      }
      else
      {
        setIsMetamask(false);
      } // <-- (3) invoke in interval callback
      }, 5000);
      // <-- (2) invoke on mount
  
    return () => clearInterval(id);
  }, [])

  useEffect(() => {
    if (router.asPath !== router.route) {
      // @ts-ignore
    if(web3.utils.isAddress(query.token))
    {
      // @ts-ignore
      setTokenV(query.token);
      // @ts-ignore
      setTokenL(query.token);
      // @ts-ignore
      setTokenVField(query.token);
      // @ts-ignore
      setTokenLField(query.token);
      // @ts-ignore
      connectToToken(query.token);
      connectToTokenV(query.token);
    }
    // @ts-ignore
    if(web3.utils.isAddress(query.owner))
    {
      // @ts-ignore
      setWallet(query.owner);
      // @ts-ignore
      setWalletField(query.owner);
    }
    }
  }, [router])

  //Viewer
  const fetchLock = async () => 
  {
    
    if(!!contract && !!vcontract)
    {
      if(wallet === '')
      {
        setIsErrorV(true);
        setErrorVTxt('You have not specified a valid wallet address.')
        return;
      }
      if(tokenV === '')
      {
        setIsErrorV(true);
        setErrorVTxt('You have not specified a valid token address.')
        return;
      }
      var lockAmnt = 0;
      var releaseDate = 0;
      var decimals = 0;
      var percent = 0;
      try{
        decimals = await vcontract.methods.decimals().call();
        lockAmnt = await contract.methods.lockedTokenAmount(wallet,tokenV).call();
        lockAmnt = (Number(lockAmnt)/10**Number(decimals));
        releaseDate = await contract.methods.releaseTime(wallet,tokenV).call();
        percent = await vcontract.methods.totalSupply().call();
        percent = (Number(percent)/10**Number(decimals));
        percent = Number(((lockAmnt/percent)*100).toFixed(2))
      }catch(ex){
        setIsErrorV(true);
        setErrorVTxt('Invalid wallet or token address.')
        return;
      }
      //If the unlock date has passed and the owner is viewing
      if(releaseDate < new Date().getTime()/1000 && lockAmnt !== 0)
      {
        setUnlockable(true);
        
      }
      if(account === wallet && lockAmnt !== 0)
      {
        setOwnerViewing(true);
      }

      const dateString = new Date(releaseDate*1000)
      

      var ticker = ''
      try
      {
        ticker = await vcontract.methods.name().call();  
      }catch(ex)
      {
        setIsErrorV(true);
        setErrorVTxt('Invalid token address')
        return;
      }
      var amount = lockAmnt.toString();
      amount = lockAmnt +' '+ticker+' '+'('+percent+'%)'
      if(lockAmnt === 0)
      {
        setData([{amnt:'None',rDate:'No '+ ticker+' tokens locked by this wallet'}]) 
        setIsErrorV(false);
      }
      else
      {
        setData([{amnt:amount,rDate:dateString.toUTCString()}]) 
        setIsErrorV(false);
        setRef(true);
      }
      
    }
    else
    {
      setIsErrorV(true);
      setErrorVTxt('You have not specified a valid token address.')
    }
  };
  //Unlocker
  const unlockTokens = async () => {
    if(!!contract && !!vcontract)
    {
        await contract.methods.release(tokenV).send({from:account});  
        setIsErrorV(false);
        setUnlockable(false);
        setOwnerViewing(false);
    }
    else
    {
      setIsErrorV(true);
      setErrorVTxt("Error.")
    }
  }

  //Locker 

  const tokenLock = async () =>{
    if(!!contract && !!tcontract)
    {
      
         
      
      if(futureDate === 0)
      {
        setIsErrorL(true);
        setErrorLTxt('Insert a valid date.')
        return;
      }
      
      if(isNaN(parseInt(tAmount)))
      {
        setIsErrorL(true);
        setErrorLTxt('Insert a valid token amount.')
        return;
      }
      var tokenBalance = '0';
      var decimals = '0';
      try{
        tokenBalance = await tcontract.methods.balanceOf(account).call();
        decimals = await tcontract.methods.decimals().call();
        
      }
      

      catch(ex){
        setIsErrorL(true);
        setErrorLTxt('Invalid or unsupported token address.')
        return;
      }
      var allowance = 0;
      try{
        allowance = await tcontract.methods.allowance(account,lockerAddy).call();
      }
      catch(ex){
        setIsErrorL(true);
        setErrorLTxt('Invalid or unsupported token address.')
        return;
      }
      
      if(allowance < 115792089237316195423570985008687907853269984665640564039457584007913129639935)
      {
        if(!!tcontract)
        {
          
            try {
              await tcontract.methods.approve(lockerAddy,'115792089237316195423570985008687907853269984665640564039457584007913129639935').send({from:account});  
            }catch(ex){
              setIsErrorL(true);
              setErrorLTxt('Failed to approve tokens for locking.')
              return;
            } 
            
        }
      }
      if(futureDate < Math.round(new Date().getTime()/1000))
      {
        setIsErrorL(true);
        setErrorLTxt('The specified date must be in the future.')
        return;
      }
      //this extra conditional is needed ALRIGHT?
      if(tokenBalance === '0')
      {
        
        setIsErrorL(true);
        setErrorLTxt('You do not own any amount of the specified token.')
        return;
      }
      //console.log(tokenBalance);
      //console.log(tAmount);
      //  console.log(parseInt(tokenBalance)/(10**18));
      
      if(parseInt(tAmount) > parseInt(tokenBalance)/(10**Number(decimals)))
      {
      //  console.log(tAmount);
      //  console.log(tokenBalance);
        setIsErrorL(true);
        setErrorLTxt('You do not own the specified amount of tokens.')
        return;
      }
      if(tAmount < '0')
      {
        setIsErrorL(true);
        setErrorLTxt('You cannot use a negative amount of tokens.')
        return;
      }
      //console.log(web3.utils.toWei(tAmount,"ether"));
      
      try{
        await contract.methods.lockTokens(tokenL,(Number(tAmount)*(10**Number(decimals))).toLocaleString('fullwide', {useGrouping:false}),futureDate).send({from:account,value:lockCost});
        
      }catch(ex){
        //console.log(ex);
        setIsErrorL(true);
        setErrorLTxt('Contract Error. You may need to approve the Contract.')
        return;
      }
      setIsErrorL(false);
        
      
    }
    else
    {
      setIsErrorL(true);
      setErrorLTxt('You have not specified a valid token address.')
    }
    
  };







  




  return (
    <Layout>
        <Head>
          <title>{projectConfig.projectName}</title>
        </Head>

          <h2 className="text-6xl mb-4 text-center text-black">MikuLock</h2>
        {isMetamask ?
          <>
            {!isLoadingNetwork ?
              <>
                {isNetwork ?
                <>
                {active ? 
                <>
                <Row gutter={24} style={{display:'flex', textAlign:"center", justifyContent:'center',  fontSize:32,marginTop:"3%"}}>
                  <h2 className="text-4xl mb-4 text-center text-black">View/Unlock Liquidity Lockers</h2>
                            </Row>
                      <Row gutter={12} style={{}}>
                        <Col lg={24} md={24} sm={24} xs={24} >
                            <CardWrap style={{}}>
                            
                            {active ? 
                            <>
                              <Row onClick={handleInsertAddress} gutter={24} style={{display:'flex', justifyContent:'center',textAlign:"center", fontSize:16}}>
                                <a href="#/" style={{color:'#000',textAlign:"center"}}>Click to insert your address.</a>
                              </Row>

                            
                            <Row gutter={24} style={{display:'flex', justifyContent:'center',  fontSize:18, paddingBottom:'12px'}}>
                            <Col>Wallet Address</Col> <Col><Input onChange={handleWalletChange} value={walletField} placeholder="Insert Wallet Address"  style={{ width: 250, backgroundColor:'#fff', borderColor:'#fff', color:'#000' }} /></Col>
                            </Row>
                            <Row gutter={22} style={{display:'flex', justifyContent:'center',  fontSize:18}}>
                            <Col>Token Address:</Col><Col> <Input onChange={handleTokenVChange} value={tokenVField} placeholder="Insert Token Address"  style={{ width: 250, backgroundColor:'#fff', borderColor:'#fff', color:'#000' }} /></Col>
                            </Row>
                            <Row gutter={24} style={{display:'flex', justifyContent:'center',  fontSize:18, paddingTop:'24px'}}>
                              <Button onClick={fetchLock}>Search</Button>
                            </Row>
                            <Row gutter={24} style={{display:'flex', justifyContent:'center',  fontSize:18, paddingTop:'12px'}}>
                                <Col style={{color:'#122ee3'}}>{isErrorV ? <>{errorVTxt}</> : <></> }</Col>
                            </Row>
                            <div style={{paddingTop:'12px'}}>
                              <Table columns={columns} dataSource={data} pagination={{ pageSize: 3, position:['bottomCenter']}} />
                            </div>
                            {isRef ? 
                            <p style={{wordWrap:"break-word",  textAlign:"center",  fontSize:16, paddingTop:'12px'}}>
                              Share Link: https://mikubsc.com/locker?token={tokenV}&owner={wallet}
                            </p>
                            :
                            <></>}
                            
                            {unlockable ?
                              <>{ownerViewing ? 
                                  <Row gutter={24} style={{display:'flex', justifyContent:'center', fontSize:18, paddingTop:'0px'}}>
                                    <Button onClick={unlockTokens}> Unlock Tokens</Button>
                                  </Row>
                                :
                                <></>
                                }
                                
                              </>
                            :
                            <>
                              {ownerViewing ? <Row gutter={24} style={{display:'flex', justifyContent:'center',  fontSize:18, paddingTop:'0px'}}>
                                You can't unlock these tokens yet.
                                </Row> : <></>}
                            </>
                            }
                            </>
                            :
                            <>
                              <Row gutter={24} style={{display:'flex', justifyContent:'center',   fontSize:18, paddingBottom:'12px'}}>
                                  <Button onClick={connect} >Connect Wallet</Button>
                              </Row>
                            </>
                            }
                            </CardWrap>
                            
                        </Col>
                    </Row>
                <Row gutter={24} style={{display:'flex', textAlign:"center", justifyContent:'center',  fontSize:32,marginTop:"3%"}}>
                              <h2 className="text-4xl mb-4 text-center text-black">Create Lock</h2>
                            </Row>
                    <Row gutter={12} id="locker" style={{}}>
                        <Col lg={24} md={24} sm={24} xs={24}>
                            <CardWrap >
                            
                              {active ? 
                              <>
                                <Row gutter={24} style={{display:'flex', justifyContent:'center', fontSize:18, paddingBottom:'12px'}}>
                                <Col>Token Address:</Col> <Col><Input onChange={handleTokenLChange} value={tokenLField} placeholder="Insert Token Address"  style={{ width: 250, backgroundColor:'#fff', borderColor:'#fff', color:'#000' }} /></Col>
                                </Row>
                                <Row gutter={24} style={{display:'flex', justifyContent:'center', fontSize:18, paddingBottom:'12px'}}>
                                <Col>Token Amount:</Col><Col> <Input onChange={handleAmountChange} placeholder="Insert Amount to Lock"  style={{ width: 250, backgroundColor:'#fff', borderColor:'#fff', color:'#000' }} /></Col>
                                </Row>
                                <Row gutter={30} style={{display:'flex', justifyContent:'center', fontSize:18}}>
                                 {/*@ts-ignore*/} 
                                <Col>Release Date: </Col><Col style={{}}> <DatePicker style={{ width: 250, backgroundColor:'#fff', borderColor:'#fff', color:'#000' }} showTime onOk={onOk} /></Col>
                                </Row>
                                <Row gutter={24} style={{display:'flex', justifyContent:'center',  fontSize:18, paddingTop:'24px'}}>
     
                                  <Col style={{width:'120px'}}><Button onClick={tokenLock}>Lock </Button></Col> 
                                </Row>
                                
                                <Row gutter={24} style={{display:'flex', justifyContent:'center', color:'#122ee3', fontSize:18, paddingTop:'24px'}}>
                                  <Col style={{color:'#122ee3'}}>{isErrorL ? <>{errorLTxt}</> : <></> }</Col>
                                </Row>
                              </> : 
                              <>

                                  <Button onClick={connect} >Connect <FaWallet /> </Button>
            
                              </>
                              }
                              
                              
                              
                              
                              
                            </CardWrap>
                            
                        </Col>
                    </Row>        
                  
                    </>
                    : 
                        <>
                        
                        <CardWrap >
                        <Row gutter={24} style={{display:'flex', justifyContent:'center',   fontSize:18, paddingBottom:'12px'}}>
                        <Button onClick={connect} >Connect Wallet</Button>
                              </Row>
                          </CardWrap>
                        </>
                      }
                    </>
                    :
                    <>
                        <CardWrap >
                        <Row gutter={24} style={{display:'flex', justifyContent:'center',   fontSize:18, paddingBottom:'12px'}}>
                        <p>
                          Wrong Network! Please switch over to the Binance Smart Chain.
                        </p>
                        <Col style={{width:'240px'}}><Button onClick={addEchNetwork}> Switch Network</Button></Col>
                        </Row>
                        </CardWrap>
                    </>
                    }
                  </>
                  :
                  <>
                      <CardWrap >
                        <p>
                          Checking Network...
                        </p>
                      </CardWrap>
                  </>
                }
              </>
              :
              <>
                  <CardWrap style={{textAlign:"center"}} >
                  
                  <p>
                    Please install the Metamask Browser Extension or use the Metamask Mobile App.
                  </p>
                  </CardWrap>
              </>
              }
      </Layout>
  );
};

export default Locker;
