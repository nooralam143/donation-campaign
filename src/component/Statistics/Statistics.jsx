import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../utility/localStorage";
import { Link } from 'react-router-dom';
import PieChart from './../chart/PIcharts';


const Statistics = () => {
   

    return (
        <div>
      <PieChart></PieChart>
    </div>
    );
};

export default Statistics;