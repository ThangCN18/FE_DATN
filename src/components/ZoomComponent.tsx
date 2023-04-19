// import React, { useEffect, useState } from 'react';
// import { ZoomMtg } from '@zoomus/websdk';

// import { Buffer } from 'buffer';

// import CryptoJS from 'crypto-js';

// function generateSignature(apikey, apiSecret, meetingNumber, role) {

//     return new Promise((res, req) =>{
//         const timestamp = new Date().getTime() - 30000
//         const msg = Buffer.from(apikey + meetingNumber + timestamp + role).toString('base64')
//         const hash =  CryptoJS.HmacSHA256(msg, apiSecret).toString(CryptoJS.enc.Base64);
//         const signature = Buffer.from(`${apikey}.${meetingNumber}.${timestamp}.${role}.${hash}`).toString('base64')
      
//         res(signature)  
//     })

//   // Prevent time sync issue between client signature generation and zoom
 
// }

// const ZoomComponent = () => {

// var apiKey = ''
// var apiSecret = ''
// var meetingNumber = 123456789   
// var role = 0
// var leaveUrl = 'http://127.0.0.1:5173/'
// var userName = 'WebSDK'
// var userEmail = ''
// var passWord = ''
// var signature = ''
// generateSignature(apiKey, apiSecret, meetingNumber, 0).then((res)=>{
//     signature = res;
// })

//   useEffect(() => {
//     ZoomMtg.setZoomJSLib('https://source.zoom.us/1.9.0/lib', '/av')
//     ZoomMtg.preLoadWasm();
//     ZoomMtg.prepareWebSDK();
//     initiateMeeting()

//   }, [])

//   const showZoomDiv =() =>{

//   }

//   const initiateMeeting = () =>{
//     ZoomMtg.init({
//         leaveUrl: leaveUrl,
//         isSupportAV: true,
//         success: (success) => {
//           console.log(success)
      
//           ZoomMtg.join({
//             signature: signature,
//             meetingNumber: meetingNumber,
//             userName: userName,
//             apiKey: apiKey,
//             userEmail: userEmail,
//             passWord: passWord,
//             success: (success) => {
//               console.log(success)
//             },
//             error: (error) => {
//               console.log(error)
//             }
//           })
      
//         },
//         error: (error) => {
//           console.log(error)
//         }
//       })
//   }

//   return (
//     <div id="meetingSDKElement">
   
// </div>
//   );
// };

// export default ZoomComponent;

