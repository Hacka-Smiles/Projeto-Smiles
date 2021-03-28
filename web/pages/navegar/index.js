/* eslint-disable react/prop-types */
import React from 'react';
import db from '../../db.json';
import Banner from '../../src/components/Banner';


export default function Navegar() {
  return (
      <Banner img_src="/bannerum.jpg" width="100%" height="auto" title={db.title} subtitle={db.description}/>
  );
}