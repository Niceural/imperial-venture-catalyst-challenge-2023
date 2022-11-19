import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ConnectWallet } from "@thirdweb-dev/react";
import { createDigitalAsset } from "../scripts/digital-asset.ts"

export default function Home() {

    createDigitalAsset("0x2d949C8bC0d866783C0a8629208cb9dd2a5d2302", "");

  return (
    <div>
    <ConnectWallet accentColor="#f213a4" colorMode="dark" />
    </div>
  )
}
