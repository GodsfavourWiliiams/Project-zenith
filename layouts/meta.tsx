import React from 'react';
import Head from 'next/head';

type Props = {
  Component: any;
};

const Meta = ({ Component }: Props) => {
  // Retrieve the page component file name
  const pageName = Component.name || '';
  // Function to generate meta title
  const generateMetaTitle = () => {
    // Convert the file name to a more readable format if needed
    // For example, convert "MyPageComponent" to "My Page Component"
    let formattedName = pageName.replace(/([a-z])([A-Z])/g, '$1 $2');
    // Handle custom naming for the home page
    if (formattedName === 'Index') {
      formattedName = 'Home';
    }
    return formattedName;
  };

  return (
    <div>
      <Head>
        <title>{generateMetaTitle()}</title>
        <meta
          name='description'
          content={generateMetaTitle()}
          property='og:title'
          key={generateMetaTitle()}
        />
        <link rel='icon' href='./logo.svg' />
      </Head>
    </div>
  );
};

export default Meta;
