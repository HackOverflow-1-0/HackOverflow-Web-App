import React, { useEffect, useState } from 'react';

const AutoRefreshComponent = ({ children }) => {
 const [key, setKey] = useState(Math.random());

 useEffect(() => {
   const interval = setInterval(() => {
     setKey(Math.random());
   }, 2000);

   return () => clearInterval(interval);
 }, []);

 return <>{children}</>;
};


export default AutoRefreshComponent;