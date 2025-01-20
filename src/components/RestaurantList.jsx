import React from 'react';
import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

const restaurants = [
  {
    name: "L'Entente, Le British Brasserie",
    address: "13 Rue Monsigny",
    rating: 4.5,
    review: "Un mélange réussi entre la gastronomie française et britannique. Les plats sont raffinés et le service est impeccable.",
    cuisine: "Franco-Britannique"
  },
  {
    name: "Frenchie",
    address: "5 Rue du Nil",
    rating: 4.7,
    review: "Une expérience gastronomique exceptionnelle. Le menu dégustation est une véritable aventure culinaire.",
    cuisine: "Gastronomique Moderne"
  },
  {
    name: "Aux Crus de Bourgogne",
    address: "3 Rue Bachaumont",
    rating: 4.3,
    review: "Une authentique brasserie parisienne avec des plats bourguignons traditionnels excellents.",
    cuisine: "Française Traditionnelle"
  },
  // ... autres restaurants
];

const RestaurantCard = ({ restaurant }) => {
  const stars = Array(5).fill(0).map((_, index) => (
    <Star
      key={index}
      className={`w-4 h-4 ${
        index < Math.floor(restaurant.rating)
          ? 'text-yellow-400 fill-yellow-400'
          : 'text-gray-300'
      }`}
    />
  ));

  return (
    <Card className="p-6 mb-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h2 className="text-xl font-semibold text-gray-900">{restaurant.name}</h2>
        <div className="flex items-center gap-1">
          {stars}
          <span className="ml-2 text-sm text-gray-600">({restaurant.rating})</span>
        </div>
      </div>
      <p className="text-sm text-gray-500 mb-2">{restaurant.address}</p>
      <p className="text-sm font-medium text-blue-600 mb-3">{restaurant.cuisine}</p>
      <p className="text-gray-700">{restaurant.review}</p>
    </Card>
  );
};

const RestaurantList = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
        Les 10 Meilleurs Restaurants du 2ème Arrondissement
      </h1>
      <div className="space-y-6">
        {restaurants.map((restaurant, index) => (
          <RestaurantCard key={index} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;