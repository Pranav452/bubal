// page.tsx
import React from 'react';
// Import the Button component
// import { Manoj } from './Manoj'; // Import the Manoj component
import { Button } from '@/components/ui/button';
import { Main } from '@/components/Main';
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

const Page: React.FC = () => {
  return (

      <div>
        
        <LoginLink>Sign in</LoginLink>
        <RegisterLink>Sign up</RegisterLink>
   
        <Main /> {/* Use the custom component */}
      </div>
    
  );
};

export default Page;