import React from 'react';
import Brands from '../../components/home/brands';
import Category from '../../components/home/category';
import Experience from '../../components/home/experience';
import Features from '../../components/home/features';
import Hero from '../../components/home/hero';
import Learning from '../../components/home/learning';
import Members from '../../components/home/members';
import Testimonials from '../../components/home/testimonials';

const index = () => {
  return (
    <div>
      <Brands text="Bangladesh"/>
      <Category name="1"/>
      <Experience/>
      <Features/>
      <Hero/>
      <Learning/>
      <Members/>
      <Testimonials/>
    </div>
  );
};

export default index;
