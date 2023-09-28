// DonationContext.js

import React, { createContext, useContext, useState } from 'react';

const DonationDataContext = createContext();

export function DonationDataProvider({ children }) {
  const [givenDonation, setGivenDonation] = useState([]);

  return (
    <DonationDataContext.Provider value={{ givenDonation, setGivenDonation }}>
      {children}
    </DonationDataContext.Provider>
  );
}

export function useDonationData() {
  return useContext(DonationDataContext);
}
