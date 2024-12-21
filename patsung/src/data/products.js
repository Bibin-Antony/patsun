// src/data/products.js
import PressureCooker3L from "../assets/Images/ProductImages/PATSUNGPressureCooker3Litre.jpg";
import NonStickCookware from "../assets/Images/ProductImages/PatsungNon-StickCookwareSet.jpeg";
import ElectricKettle from "../assets/Images/ProductImages/PatsungElectricKettle1.5L.jpg";
import GasStove2Burners from "../assets/Images/ProductImages/PatsungGasStove.jpg";
import PatsungVegetableAndFruitChopper from "../assets/Images/ProductImages/PatsungVegetable&FruitChopper.jpg";
import PatsungPlasticVegetableAndFruitChopper1 from "../assets/Images/ProductImages/PatsungVegetable&FruitChopper1.jpg";
import PatsungHardAnodizedKadai5L from "../assets/Images/ProductImages/PATSUNGPressureCooker5Litre.jpg"

export const products = [
    {
        id: 1,
        sku: '42562',
        name: 'Patsung Aluminium Pressure Cooker 3L',
        price: 799,
        originalPrice: 1995,
        image: PressureCooker3L,
        category: 'pressure-cooker',
        description: 'Heavy duty aluminum body| 5 years warranty| Induction compatible'
    },
    {
        id: 2,
        sku: '42563',
        name: 'Patsung Non-Stick Cookware Set',
        price: 11594,
        originalPrice: 11594,
        image: NonStickCookware,
        category: 'cookware',
        description: '3-piece premium non-stick set| Includes kadai, tawa, and frying pan'
    },
    {
        id: 3,
        sku: '42564',
        name: 'Patsung Electric Kettle 1.5L',
        price: 637,
        originalPrice: 749,
        image: ElectricKettle,
        category: 'electrical-appliances',
        description: 'Auto shut-off| Fast boiling| Stainless steel body'
    },
    {
        id: 4,
        sku: '42565',
        name: 'Patsung 2 Burner Gas Stove',
        price: "Currently unvailable",
        originalPrice: "Not Available",
        image: GasStove2Burners,
        category: 'gas-stove',
        description: 'High efficiency brass burners| Toughened glass top| 2 years warranty'
    },
    {
        id: 5,
        sku: '42566',
        name: 'Patsung Plastic Vegetable & Fruit Chopper(Blue)',
        price: 299,
        originalPrice: 499,
        image: PatsungVegetableAndFruitChopper,
        category: 'food-preparation',
        description: 'It comes with three stainless-steel blades that can cut everything from fruits to vegetables with ease. You can also remove the attachments of this chopper and clean them in a hassle-free way.'
    },

    {
        id: 6,
        sku: '42569',
        name: 'Patsung Plastic Vegetable & Fruit Chopper (Black)',
        price: 294,
        originalPrice: 499,
        image: PatsungPlasticVegetableAndFruitChopper1,
        category: 'food-preparation',
        description: 'The solid stainless steel blades perfectly chops hard and soft vegetables as per your requirement. No electricity is required for the same.'
    },
    {
        id: 7,
        sku: '42570',
        name: 'Patsung 5 Litre Wrought Aluminium Induction Bottom Pressure Cooker (Pack of 3)',
        price: 6584,
        originalPrice: 6584,
        image: PatsungHardAnodizedKadai5L,
        category: 'cookware',
        description: 'Durable construction| Induction compatible| Glass lid included'
    },
];