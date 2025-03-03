type TPetFoodData = {
  id: number;
  name: string;
  animalType: string;
  foodType: string;
  price: number;
  weight: number;
  code: string;
  quantity: number;
  description: string;
  imageUrl: string;
  available: boolean;
};

type TCartQuantity = TPetFoodData & { cartQuantity: number };

type TAuthResponse = {
  token: "string";
};
