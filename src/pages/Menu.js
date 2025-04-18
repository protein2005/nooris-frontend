import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroMenuSection from '../components/HeroMenuSection';
import MenuList from '../components/MenuList';
import { menuCategories } from '../utils/menuCategories';

function Menu() {
  return (
    <>
      <Helmet>
        <title>Meny | Nooris kök & bar</title>
        <meta
          name="description"
          content="Upptäck vår läckra meny med rätter för alla smaker, från förrätter till desserter och alkoholhaltiga drycker."
        />
        <meta
          name="keywords"
          content="meny, restaurang, mat, förrätter, huvudrätter, desserter, pizza, kebab, pasta, alkohol, sallad, barnmeny"
        />
        <link rel="canonical" href="https://nooris.nu/meny" />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Menu",
            "name": "Nooris kök & bar Meny",
            "url": "https://nooris.nu/meny",
            "hasMenuSection": [
              ${menuCategories
                .map(
                  (category) => `
                  {
                    "@type": "MenuSection",
                    "name": "${category.name}",
                    "url": "https://nooris.nu${category.url}"
                  }
                `,
                )
                .join(',')}
            ]
          }
          `}
        </script>
      </Helmet>
      <HeroMenuSection />
      <MenuList />
    </>
  );
}

export default Menu;
