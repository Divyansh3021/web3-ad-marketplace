import {
    ParticleAuthModule,
    ParticleProvider,
  } from "@biconomy/particle-auth";
  
import { useState } from 'react';
import { IBundler, Bundler } from '@biconomy/bundler'
import { BiconomySmartAccountV2, DEFAULT_ENTRYPOINT_ADDRESS } from "@biconomy/account"
import { ethers  } from 'ethers'
import { ChainId } from "@biconomy/core-types"
import { 
  IPaymaster, 
  BiconomyPaymaster,  
} from '@biconomy/paymaster'
import { ECDSAOwnershipValidationModule, DEFAULT_ECDSA_OWNERSHIP_MODULE } from "@biconomy/modules";


   const bundler: IBundler = new Bundler({
    bundlerUrl: "https://bundler.biconomy.io/api/v2/{chain-id-here}/nJPK7B3ru.dd7f7861-190d-41bd-af80-6877f74b8f44",   
    chainId: ChainId.POLYGON_MUMBAI,
    entryPointAddress: DEFAULT_ENTRYPOINT_ADDRESS,
  })
  
  const paymaster: IPaymaster = new BiconomyPaymaster({
    paymasterUrl: "https://paymaster.biconomy.io/api/v1/80001/Q3TbSJxUG.4cf6e32a-f0b6-4567-b163-8668791bc9c0"
  })

  const particle = new ParticleAuthModule.ParticleNetwork({
    projectId: "9b5df659-80d9-433b-841e-d31bb5050f10",
    clientKey: "cvk11MUbCN76rbC8MVqYS4SbjFfoL8tT2Um401eF",
    appId: "e85b21b1-1046-433f-935d-c1416177b56b",
    wallet: {
      displayWalletEntry: true,
      defaultWalletEntryPosition: ParticleAuthModule.WalletEntryPosition.BR,
    },
  });

  function shortenHexAddress(hexAddress : any, prefixLength : number, suffixLength : number) {
   
    const addressWithoutPrefix = hexAddress.startsWith("0x") ? hexAddress.slice(2) : hexAddress;
  
   
    const prefix = addressWithoutPrefix.slice(0, prefixLength);
    const suffix = addressWithoutPrefix.slice(-suffixLength);
  
   
    const shortenedAddress = `0x${prefix}...${suffix}`;
  
    return shortenedAddress;
  }

  
  export { particle , bundler, paymaster, shortenHexAddress};
  