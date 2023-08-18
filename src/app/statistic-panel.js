'use client'
import React, { useRef, useEffect, useState } from 'react';
import './home.css'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Statistic_panel() {
  return (
    <div className='panel-container'>
      <FormControl sx={{ m: 1, minWidth: 110 }}>
        <InputLabel id="selectlabelId">Map data</InputLabel>
        <Select
          labelId="select-autowidth-labelId"
          id="selectId"
          autoWidth
          label=""
        >
          <MenuItem value="">
            <em>Select</em>
          </MenuItem>
          <MenuItem value={10}>Безработица</MenuItem>
          <MenuItem value={21}>Зарплаты</MenuItem>
          <MenuItem value={22}>Количество преступлений</MenuItem>
        </Select>
      </FormControl>
      <Tabs
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable prevent tabs example"
      >
        <Tab label="Heat Map" />
        <Tab label="Bars" />
        <Tab label="Table" />
        <Tab label="Chart" />
        <Tab label="Lines" />
      </Tabs>
    </div>
  )
}
