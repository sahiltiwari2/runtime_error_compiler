import React from 'react'
import PracticalLand from "@/components/PracCodeLand";
import Cources from "@/components/Cources";
import BACYears from "@/components/bcaYears";
import BTechYears from "@/components/BtechYears";

const page = () => {
  return (
    <>
    <PracticalLand/>
    <Cources name="BCAA"/>
    <BACYears/>
    <Cources name="B-Tech"/>
    <BTechYears/>

    </>
  )
}

export default page