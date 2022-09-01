import Web3 from 'web3'
import abiJson from "./abi.js"
// console.log(abiJson)
let {contractAddress,abi} = abiJson
import Vue from 'vue';
import { Toast } from 'vant';
Vue.use(Toast);
let web3 = new Web3(window.ethereum)
let ercMethods = {
    
  
  
    //连接钱包
    async requestAccount(){
      // console.log(ethereum)
        if (!ethereum) {//未检测到 ethereum 钱包
            Toast.fail('ethereum wallet not detected ')
            return false;
        }
        try {
            const accounts = await ethereum.request({ method: "eth_requestAccounts" });
            if (accounts.length === 0) {//连接钱包失败
                Toast.fail('Failed to connect to wallet')
                return false;
            } else  {
                return accounts[0];
            }
        } catch (error) {
            Toast.fail('Failed to connect to wallet')
            return false;
        }
      
    },
    address() {
        if (window.ethereum !== undefined && (window.ethereum.selectedAddress != undefined || window.ethereum.address != undefined)) {
            return window.ethereum.selectedAddress || window.ethereum.address
        } else {
            return false
        }
    },
    getParentOf(callBack,accountAddress){//获取rlink父级
        // let web3 = this.getNetwork()
        let contract = new web3.eth.Contract(abi.CeresBinder, contractAddress[window.ethereum.chainId].CeresBinder);
        // console.log(abi.CeresBinder, contractAddress[window.ethereum.chainId].CeresBinder)
        contract.methods.parentOf(accountAddress||this.address()).call((error, result) => {
            // console.log(error, result)
          if( !error ){
            callBack({
              code:200,
              data:result
            })
          }else{
            callBack({
              code:400,
              data:'查询失败'
            })
          }
        })
    },
    didInfos(callBack){
        let contract = new web3.eth.Contract(abi.CeresDIDMinter, contractAddress[window.ethereum.chainId].CeresDIDMinter);
        contract.methods.infos(this.address()).call((error, result) => {
          if( !error ){
            callBack({
              code:200,
              data:result
            })
          }else{
            callBack({
              code:400,
              data:'查询失败'
            })
          }
        })
    },
    didMint(did,imageUrl,fee,callBack){
        let contract = new web3.eth.Contract(abi.CeresDIDMinter, contractAddress[window.ethereum.chainId].CeresDIDMinter);
        contract.methods.mint(did,imageUrl).send({
            from: window.ethereum.selectedAddress,
            value:fee 
        },(error, result) => {
            if( !error ){
                callBack({
                code:200,
                data:result
                })
            }else{
                callBack({
                code:400,
                data:'绑定失败'
                })
            }
        })
    },
    didExists(did,callBack){
        let contract = new web3.eth.Contract(abi.CeresDID, contractAddress[window.ethereum.chainId].CeresDID);
        console.log(contract.methods)
        contract.methods.didExists(did).call((error, result) => {
          if( !error ){
            callBack({
              code:200,
              data:result
            })
          }else{
            callBack({
              code:400,
              data:'查询失败'
            })
          }
        })
    },
    didDetails(tokenId,callBack){
        let contract = new web3.eth.Contract(abi.CeresDID, contractAddress[window.ethereum.chainId].CeresDID);
        console.log(contract.methods)
        // return
        contract.methods.tokenURI(tokenId).call((error, result) => {
          if( !error ){
            callBack({
              code:200,
              data:result
            })
          }else{
            callBack({
              code:400,
              data:'查询失败'
            })
          }
        })
    },
    addRelation(parentAddress,callBack){
        let contract = new web3.eth.Contract(abi.CeresBinder, contractAddress[window.ethereum.chainId].CeresBinder);
        contract.methods.addRelation(this.address(),parentAddress).send({
            from: window.ethereum.selectedAddress,
            // value:web3.utils.toWei('0.005') 
            },(error, result) => {
            if( !error ){
                callBack({
                code:200,
                data:result
                })
            }else{
                callBack({
                code:400,
                data:'绑定失败'
                })
            }
            }
        )
    },
    receipt(hash,callBack){//轮训hash
        web3.eth.getTransactionReceipt(hash,(err,res)=>{
          // console.log(err, res)
          if(err){
              callBack({
                code:400,
                data:'链信息查询失败'
              })
          }else{
            if(res){
              // console.log(res)
              callBack({
                code:200,//已完成状态
                msg:res.status,//"0x1":成功，"0x0"失败
                data:res
              })
            }else{
              callBack({
                code:202,//padding状态，继续轮询
                data:'padding'
              })
            }
          }
        })
    },
  
}



export default ercMethods