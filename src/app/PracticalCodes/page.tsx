import React from 'react'
import PracticalLand from "@/components/PracCodeLand";
import Cources from "@/components/Cources";
import BACYears from "@/components/bcaYears";

const page = () => {
  return (
    <>
    <PracticalLand/>
    <Cources name="BCA"/>
    <BACYears/>
    </>
  )
}

export default page