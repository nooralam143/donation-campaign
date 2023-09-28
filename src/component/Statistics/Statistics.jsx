import {useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../utility/localStorage";
import PieChart from './../chart/PIcharts';


const Statistics = () => {
  const donations = useLoaderData();
  const [givenDonation, setGivenDonations] = useState([]);
  const [displayDonations, setDisplayDonations] = useState([]);


  useEffect(() => {
      const storeDonationID = getStoredDonation();
      if (donations.length > 0) {



          const GivenDonations = [];
          for (const id of storeDonationID) {
              const donation = donations.find(donation => donation.id === id);
              if (donation) {
                  GivenDonations.push(donation)
              }
          }
          setGivenDonations(GivenDonations);
          setDisplayDonations(GivenDonations);
      }

  }, [donations])
console.log(givenDonation);

    return (
        <div>
      <PieChart givenDonation={givenDonation}></PieChart>
    </div>
    );
};

export default Statistics;