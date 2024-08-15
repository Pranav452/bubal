// page.tsx
import React from 'react';
// Import the Button component
// import { Manoj } from './Manoj'; // Import the Manoj component
import { Button } from '@/components/ui/button';
import { Manoj } from '@/components/Manoj';

const Page: React.FC = () => {
  return (

      <div>
   
        <Manoj /> {/* Use the custom component */}
      </div>
    
  );
};

export default Page;