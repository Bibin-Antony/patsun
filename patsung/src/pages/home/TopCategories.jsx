import React from 'react';

const CategoryCard = ({ title, image, link }) => (
  <a 
    href={link} 
    className="relative group overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
  >
    <div className="aspect-[16/9] w-full overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">{title}</h3>
    </div>
  </a>
);

const TopCategories = () => {
  const categories = [
    {
      title: 'Pressure Cookers',
      image: '/images/categories/pressure-cookers.jpg', // Replace with your image paths
      link: '/category/pressure-cookers'
    },
    {
      title: 'Small Appliances',
      image: '/images/categories/small-appliances.jpg',
      link: '/category/small-appliances'
    },
    {
      title: 'Cookware Products',
      image: '/images/categories/cookware.jpg',
      link: '/category/cookware'
    },
    {
      title: 'Gas Stove',
      image: '/images/categories/gas-stove.jpg',
      link: '/category/gas-stove'
    },
    {
      title: 'Mixer Grinder',
      image: '/images/categories/mixer-grinder.jpg',
      link: '/category/mixer-grinder'
    }
  ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Top Categories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large card spanning 2 columns */}
          <div className="md:col-span-2 lg:col-span-2">
            <CategoryCard {...categories[0]} />
          </div>
          
          {/* Regular cards */}
          {categories.slice(1).map((category, index) => (
            <div key={category.title}>
              <CategoryCard {...category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;