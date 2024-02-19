"use client"
import React from "react";
import { RowContainer } from '@/app/components/';
import { BannerInterface } from "@/app/types/";

interface BannerProps {
  data: BannerInterface[];
}
const Index = ({ data }:BannerProps) => {
  return (
    <>
      <RowContainer className={'grid-container'}>
        {
          data.map((item, index) => (
            <p key={index}>alo</p>
          ))
        }
      </RowContainer>
    </>
  );
}
export default Index;

