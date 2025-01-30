export const productsData = () => {
  return [
    // Goat
    {
      id: 1,
      category: "Goat",
      title: "Goat Meat",
      description: "Freshly sourced goat meat",
      price: 2000,
      weight: 500,
      image: "/images/meat.jpg",
      route: "#",
      reviews: [
        { customer: "John Doe", rating: 5, comment: "Excellent quality!" },
        {
          customer: "Jane Smith",
          rating: 4,
          comment: "Very tender and fresh.",
        },
        {
          customer: "Alice Johnson",
          rating: 5,
          comment: "Will definitely buy again!",
        },
      ],
    },
    {
      id: 2,
      category: "Goat",
      title: "Goat Milk",
      description: "Fresh goat milk",
      price: 1500,
      weight: 1000,
      image: "/images/goat-milk.jpg",
      route: "#",
      reviews: [
        {
          customer: "Bob Brown",
          rating: 4,
          comment: "Great taste and quality.",
        },
        { customer: "Emily Davis", rating: 5, comment: "Loved it!" },
        {
          customer: "Chris Wilson",
          rating: 4,
          comment: "Very fresh and nutritious.",
        },
      ],
    },
    {
      id: 3,
      category: "Goat",
      title: "Live Goat",
      description: "Healthy live goat",
      price: 5000,
      weight: 15000,
      image: "/images/goat.jpg",
      route: "#",
      reviews: [
        {
          customer: "Ella Martinez",
          rating: 5,
          comment: "Healthy and well-bred.",
        },
        {
          customer: "Mason Garcia",
          rating: 4,
          comment: "Very satisfied with the purchase.",
        },
        {
          customer: "Sophia Rodriguez",
          rating: 5,
          comment: "Excellent condition!",
        },
      ],
    },

    // Rabbit
    {
      id: 4,
      category: "Rabbit",
      title: "Rabbit Meat",
      description: "Tender and lean rabbit meat",
      price: 1800,
      weight: 500,
      image: "/images/rabbit-meat.jpg",
      route: "#",
      reviews: [
        { customer: "Liam Walker", rating: 5, comment: "Delicious and lean." },
        { customer: "Emma Hall", rating: 4, comment: "Very tender." },
        { customer: "Olivia Allen", rating: 5, comment: "Great quality." },
      ],
    },
    {
      id: 5,
      category: "Rabbit",
      title: "Rabbit Fur",
      description: "Soft and high-quality rabbit fur",
      price: 3000,
      weight: 200,
      image: "/images/rabbit-fur.jpg",
      route: "#",
      reviews: [
        {
          customer: "James Young",
          rating: 5,
          comment: "Very soft and high quality.",
        },
        {
          customer: "Lucas King",
          rating: 4,
          comment: "Good fur, a bit pricey.",
        },
        { customer: "Mia Wright", rating: 5, comment: "Excellent quality." },
      ],
    },
    {
      id: 6,
      category: "Rabbit",
      title: "Live Rabbit",
      description: "Healthy live rabbit",
      price: 2500,
      weight: 2000,
      image: "/images/rabbit.jpg",
      route: "#",
      reviews: [
        { customer: "Ava Scott", rating: 5, comment: "Healthy and active." },
        {
          customer: "Ethan Green",
          rating: 4,
          comment: "Very satisfied with the rabbit.",
        },
        {
          customer: "Isabella Adams",
          rating: 5,
          comment: "Perfect condition!",
        },
      ],
    },

    // Turkey
    {
      id: 7,
      category: "Turkey",
      title: "Turkey Meat",
      description: "Juicy and flavorful turkey meat",
      price: 2200,
      weight: 1000,
      image: "/images/turkey-meat.jpg",
      route: "#",
      reviews: [
        {
          customer: "Daniel Baker",
          rating: 5,
          comment: "Very juicy and flavorful.",
        },
        { customer: "Sophia Harris", rating: 4, comment: "Good taste." },
        { customer: "Grace Nelson", rating: 5, comment: "Loved it!" },
      ],
    },
    {
      id: 8,
      category: "Turkey",
      title: "Turkey Eggs",
      description: "Fresh turkey eggs",
      price: 1200,
      count: 12,
      image: "/images/turkey-eggs.jpg",
      route: "#",
      reviews: [
        {
          customer: "David Carter",
          rating: 5,
          comment: "Fresh and delicious.",
        },
        {
          customer: "Layla Mitchell",
          rating: 4,
          comment: "Very good quality.",
        },
        { customer: "Benjamin Perez", rating: 5, comment: "Will buy again." },
      ],
    },
    {
      id: 9,
      category: "Turkey",
      title: "Live Turkey",
      description: "Healthy live turkey",
      price: 3000,
      weight: 8000,
      image: "/images/live-turkey.jpg",
      route: "#",
      reviews: [
        {
          customer: "Charlotte Roberts",
          rating: 5,
          comment: "Healthy and strong.",
        },
        {
          customer: "Henry Phillips",
          rating: 4,
          comment: "Very satisfied with the turkey.",
        },
        {
          customer: "Emily Campbell",
          rating: 5,
          comment: "Excellent condition!",
        },
      ],
    },

    // Catfish
    {
      id: 10,
      category: "Catfish",
      title: "Fresh Catfish",
      description: "Freshly caught catfish",
      price: 2500,
      weight: 1000,
      image: "/images/catfish.jpg",
      route: "#",
      reviews: [
        {
          customer: "Matthew Turner",
          rating: 5,
          comment: "Very fresh and tasty.",
        },
        {
          customer: "Amelia Parker",
          rating: 4,
          comment: "Good quality catfish.",
        },
        { customer: "Harper Evans", rating: 5, comment: "Will buy again." },
      ],
    },
    {
      id: 11,
      category: "Catfish",
      title: "Smoked Catfish",
      description: "Delicious smoked catfish",
      price: 3000,
      weight: 1000,
      image: "/images/smoked-catfish.jpg",
      route: "#",
      reviews: [
        { customer: "Jackson Edwards", rating: 5, comment: "Very flavorful." },
        { customer: "Mila Collins", rating: 4, comment: "Good taste." },
        { customer: "Oliver Stewart", rating: 5, comment: "Loved it!" },
      ],
    },

    // Pig
    {
      id: 12,
      category: "Pig",
      title: "Pork",
      description: "Fresh and juicy pork",
      price: 2200,
      weight: 1000,
      image: "/images/pork.jpg",
      route: "#",
      reviews: [
        {
          customer: "Noah Morris",
          rating: 5,
          comment: "Very juicy and fresh.",
        },
        { customer: "Ella Rogers", rating: 4, comment: "Good taste." },
        { customer: "William Reed", rating: 5, comment: "Loved it!" },
      ],
    },
    {
      id: 13,
      category: "Pig",
      title: "Bacon",
      description: "Crispy and delicious bacon",
      price: 2500,
      weight: 500,
      image: "/images/bacon.jpg",
      route: "#",
      reviews: [
        {
          customer: "Lucas Cook",
          rating: 5,
          comment: "Very crispy and tasty.",
        },
        { customer: "Ava Morgan", rating: 4, comment: "Good quality bacon." },
        { customer: "Charlotte Bell", rating: 5, comment: "Will buy again." },
      ],
    },
    {
      id: 14,
      category: "Pig",
      title: "Ham",
      description: "Tender and flavorful ham",
      price: 3000,
      weight: 1000,
      image: "/images/ham.jpg",
      route: "#",
      reviews: [
        {
          customer: "James Murphy",
          rating: 5,
          comment: "Very tender and flavorful.",
        },
        { customer: "Mia Bailey", rating: 4, comment: "Good taste." },
        { customer: "Alexander Rivera", rating: 5, comment: "Loved it!" },
      ],
    },
    {
      id: 15,
      category: "Pig",
      title: "Live Pig",
      description: "Healthy live pig",
      price: 7000,
      weight: 20000,
      image: "/images/live-pig.jpg",
      route: "#",
      reviews: [
        {
          customer: "Olivia Cooper",
          rating: 5,
          comment: "Healthy and strong.",
        },
        {
          customer: "Liam Richardson",
          rating: 4,
          comment: "Very satisfied with the pig.",
        },
        { customer: "Sophia Cox", rating: 5, comment: "Excellent condition!" },
      ],
    },

    // Snail
    {
      id: 16,
      category: "Snail",
      title: "Dried Snail",
      description: "Delicious dried snails",
      price: 2500,
      weight: 500,
      image: "/images/dried-snail.jpg",
      route: "#",
      reviews: [
        { customer: "Harper Howard", rating: 5, comment: "Very tasty." },
        { customer: "Emily Ward", rating: 4, comment: "Good quality." },
        { customer: "Michael Peterson", rating: 5, comment: "Loved it!" },
      ],
    },
    {
      id: 17,
      category: "Snail",
      title: "Live Snail",
      description: "Healthy live snails",
      price: 1500,
      weight: 1000,
      image: "/images/live-snail.jpg",
      route: "#",
      reviews: [
        { customer: "David Gray", rating: 5, comment: "Healthy and active." },
        {
          customer: "Ava Ramirez",
          rating: 4,
          comment: "Very satisfied with the snails.",
        },
        {
          customer: "Sophia James",
          rating: 5,
          comment: "Excellent condition!",
        },
      ],
    },

    // Chicken
    {
      id: 18,
      category: "Chicken",
      title: "Chicken Meat",
      description: "Tender and juicy chicken meat",
      price: 1500,
      weight: 1000,
      image: "/images/chicken-meat.jpg",
      route: "#",
      reviews: [
        {
          customer: "Daniel Martinez",
          rating: 5,
          comment: "Very tender and juicy.",
        },
        { customer: "Sophia Lopez", rating: 4, comment: "Good taste." },
        { customer: "Grace White", rating: 5, comment: "Loved it!" },
      ],
    },
    {
      id: 19,
      category: "Chicken",
      title: "Chicken Eggs",
      description: "Fresh chicken eggs",
      price: 800,
      count: 12,
      image: "/images/chicken-eggs.jpg",
      route: "#",
      reviews: [
        {
          customer: "Benjamin Gonzalez",
          rating: 5,
          comment: "Fresh and delicious.",
        },
        { customer: "Ella Lewis", rating: 4, comment: "Very good quality." },
        { customer: "Layla Walker", rating: 5, comment: "Will buy again." },
      ],
    },
    {
      id: 20,
      category: "Chicken",
      title: "Live Chicken",
      description: "Healthy live chicken",
      price: 1200,
      weight: 3000,
      image: "/images/live-chicken.jpg",
      route: "#",
      reviews: [
        { customer: "Henry Young", rating: 5, comment: "Healthy and strong." },
        {
          customer: "Emily Hernandez",
          rating: 4,
          comment: "Very satisfied with the chicken.",
        },
        { customer: "Liam King", rating: 5, comment: "Excellent condition!" },
      ],
    },

    // Egg
    {
      id: 21,
      category: "Egg",
      title: "Chicken Eggs",
      description: "Fresh chicken eggs",
      price: 800,
      count: 12,
      image: "/images/chicken-eggs.jpg",
      route: "#",
      reviews: [
        {
          customer: "Benjamin Lee",
          rating: 5,
          comment: "Fresh and delicious.",
        },
        { customer: "Ella Hill", rating: 4, comment: "Very good quality." },
        { customer: "Layla Scott", rating: 5, comment: "Will buy again." },
      ],
    },
    {
      id: 22,
      category: "Egg",
      title: "Turkey Eggs",
      description: "Fresh turkey eggs",
      price: 1200,
      count: 12,
      image: "/images/turkey-eggs.jpg",
      route: "#",
      reviews: [
        { customer: "David Adams", rating: 5, comment: "Fresh and delicious." },
        { customer: "Ava Turner", rating: 4, comment: "Very good quality." },
        { customer: "Sophia Perez", rating: 5, comment: "Will buy again." },
      ],
    },

    // Plantain
    {
      id: 23,
      category: "Plantain",
      title: "Fresh Plantain",
      description: "Ripe and sweet plantains",
      price: 1000,
      weight: 1000,
      image: "/images/plantain.jpg",
      route: "#",
      reviews: [
        {
          customer: "Matthew Roberts",
          rating: 5,
          comment: "Very ripe and sweet.",
        },
        { customer: "Amelia Collins", rating: 4, comment: "Good quality." },
        { customer: "Harper Stewart", rating: 5, comment: "Loved it!" },
      ],
    },
    {
      id: 24,
      category: "Plantain",
      title: "Dried Plantain",
      description: "Crispy dried plantain chips",
      price: 1500,
      weight: 500,
      image: "/images/dried-plantain.jpg",
      route: "#",
      reviews: [
        {
          customer: "Jackson Parker",
          rating: 5,
          comment: "Very crispy and tasty.",
        },
        { customer: "Mila Edwards", rating: 4, comment: "Good quality chips." },
        { customer: "Oliver Evans", rating: 5, comment: "Will buy again." },
      ],
    },
    {
      id: 25,
      category: "Plantain",
      title: "Plantain Flour",
      description: "High-quality plantain flour",
      price: 2000,
      weight: 1000,
      image: "/images/plantain-flour.jpg",
      route: "#",
      reviews: [
        {
          customer: "Daniel Turner",
          rating: 5,
          comment: "Very fine and good quality.",
        },
        { customer: "Sophia Parker", rating: 4, comment: "Good flour." },
        { customer: "Grace Edwards", rating: 5, comment: "Loved it!" },
      ],
    },

    // Cassava
    {
      id: 26,
      category: "Cassava",
      title: "Fresh Cassava",
      description: "Freshly harvested cassava",
      price: 1200,
      weight: 5000,
      image: "/images/cassava.jpg",
      route: "#",
      reviews: [
        {
          customer: "Matthew Howard",
          rating: 5,
          comment: "Very fresh and good quality.",
        },
        { customer: "Amelia Ward", rating: 4, comment: "Good cassava." },
        { customer: "Harper Peterson", rating: 5, comment: "Will buy again." },
      ],
    },
    {
      id: 27,
      category: "Cassava",
      title: "Cassava Flour",
      description: "High-quality cassava flour",
      price: 2000,
      weight: 1000,
      image: "/images/cassava-flour.jpg",
      route: "#",
      reviews: [
        {
          customer: "Jackson Gray",
          rating: 5,
          comment: "Very fine and good quality.",
        },
        { customer: "Mila Ramirez", rating: 4, comment: "Good flour." },
        { customer: "Oliver James", rating: 5, comment: "Loved it!" },
      ],
    },
    {
      id: 28,
      category: "Cassava",
      title: "Garri",
      description: "Tasty and nutritious garri",
      price: 1500,
      weight: 2000,
      image: "/images/garri.jpg",
      route: "#",
      reviews: [
        { customer: "Emily Martinez", rating: 5, comment: "Very tasty." },
        { customer: "Sophia Lopez", rating: 4, comment: "Good quality." },
        { customer: "Grace White", rating: 5, comment: "Loved it!" },
      ],
    },

    // Corn
    {
      id: 29,
      category: "Corn",
      title: "Fresh Corn",
      description: "Sweet and juicy fresh corn",
      price: 800,
      weight: 1000,
      image: "/images/corn.jpg",
      route: "#",
      reviews: [
        {
          customer: "Benjamin Gonzalez",
          rating: 5,
          comment: "Very sweet and juicy.",
        },
        { customer: "Ella Lewis", rating: 4, comment: "Good quality." },
        { customer: "Layla Walker", rating: 5, comment: "Loved it!" },
      ],
    },
    {
      id: 30,
      category: "Corn",
      title: "Dried Corn",
      description: "High-quality dried corn",
      price: 1000,
      weight: 1000,
      image: "/images/dried-corn.jpg",
      route: "#",
      reviews: [
        { customer: "David Adams", rating: 5, comment: "Very good quality." },
        { customer: "Ava Turner", rating: 4, comment: "Good dried corn." },
        { customer: "Sophia Perez", rating: 5, comment: "Will buy again." },
      ],
    },
    {
      id: 31,
      category: "Corn",
      title: "Corn Flour",
      description: "Fine corn flour for baking",
      price: 1200,
      weight: 1000,
      image: "/images/corn-flour.jpg",
      route: "#",
      reviews: [
        { customer: "David Adams", rating: 5, comment: "Very good quality." },
        { customer: "Ava Turner", rating: 4, comment: "Good dried corn." },
        { customer: "Sophia Perez", rating: 5, comment: "Will buy again." },
      ],
    },
    {
      id: 32,
      category: "Corn",
      title: "Popcorn",
      description: "Delicious popcorn kernels",
      price: 700,
      weight: 500,
      image: "/images/popcorn.jpg",
      route: "#",
      reviews: [
        { customer: "David Adams", rating: 5, comment: "Very good quality." },
        { customer: "Ava Turner", rating: 4, comment: "Good dried corn." },
        { customer: "Sophia Perez", rating: 5, comment: "Will buy again." },
      ],
    },
  ];
};

export const sidebarData = [
  {
    title: "Categories",
    content: [
      {
        title: "Goat",
        items: [
          { title: "Shop All", route: "/categories/goat/shop-all" },
          { title: "Goat Meat", route: "/categories/goat/goat-meat" },
          { title: "Goat Milk", route: "/categories/goat/goat-milk" },
          { title: "Goat Cheese", route: "/categories/goat/goat-cheese" },
        ],
      },
      {
        title: "Rabbit",
        items: [
          { title: "Shop All", route: "/categories/rabbit/shop-all" },
          { title: "Rabbit Meat", route: "/categories/rabbit/rabbit-meat" },
          { title: "Rabbit Fur", route: "/categories/rabbit/rabbit-fur" },
        ],
      },
      {
        title: "Turkey",
        items: [
          { title: "Shop All", route: "/categories/turkey/shop-all" },
          { title: "Turkey Meat", route: "/categories/turkey/turkey-meat" },
          { title: "Turkey Eggs", route: "/categories/turkey/turkey-eggs" },
        ],
      },
      {
        title: "Catfish",
        items: [
          { title: "Shop All", route: "/categories/catfish/shop-all" },
          {
            title: "Fresh Catfish",
            route: "/categories/catfish/fresh-catfish",
          },
          {
            title: "Smoked Catfish",
            route: "/categories/catfish/smoked-catfish",
          },
        ],
      },
      {
        title: "Pig",
        items: [
          { title: "Shop All", route: "/categories/pig/shop-all" },
          { title: "Pork", route: "/categories/pig/pork" },
          { title: "Bacon", route: "/categories/pig/bacon" },
          { title: "Ham", route: "/categories/pig/ham" },
        ],
      },
      {
        title: "Snail",
        items: [
          { title: "Shop All", route: "/categories/snail/shop-all" },
          { title: "Fresh Snail", route: "/categories/snail/fresh-snail" },
          { title: "Dried Snail", route: "/categories/snail/dried-snail" },
        ],
      },
      {
        title: "Chicken",
        items: [
          { title: "Shop All", route: "/categories/chicken/shop-all" },
          { title: "Chicken Meat", route: "/categories/chicken/chicken-meat" },
          { title: "Chicken Eggs", route: "/categories/chicken/chicken-eggs" },
        ],
      },
      {
        title: "Egg",
        items: [
          { title: "Shop All", route: "/categories/egg/shop-all" },
          { title: "Chicken Eggs", route: "/categories/egg/chicken-eggs" },
          { title: "Turkey Eggs", route: "/categories/egg/turkey-eggs" },
          { title: "Duck Eggs", route: "/categories/egg/duck-eggs" },
        ],
      },
      {
        title: "Plantain",
        items: [
          { title: "Shop All", route: "/categories/plantain/shop-all" },
          {
            title: "Fresh Plantain",
            route: "/categories/plantain/fresh-plantain",
          },
          {
            title: "Dried Plantain",
            route: "/categories/plantain/dried-plantain",
          },
          {
            title: "Plantain Flour",
            route: "/categories/plantain/plantain-flour",
          },
        ],
      },
      {
        title: "Cassava",
        items: [
          { title: "Shop All", route: "/categories/cassava/shop-all" },
          {
            title: "Fresh Cassava",
            route: "/categories/cassava/fresh-cassava",
          },
          {
            title: "Cassava Flour",
            route: "/categories/cassava/cassava-flour",
          },
          { title: "Garri", route: "/categories/cassava/garri" },
        ],
      },
      {
        title: "Corn",
        items: [
          { title: "Shop All", route: "/categories/corn/shop-all" },
          { title: "Fresh Corn", route: "/categories/corn/fresh-corn" },
          { title: "Dried Corn", route: "/categories/corn/dried-corn" },
          { title: "Corn Flour", route: "/categories/corn/corn-flour" },
          { title: "Popcorn", route: "/categories/corn/popcorn" },
        ],
      },
    ],
  },
  {
    title: "Deals",
    content: [
      {
        title: "Seasonal Deals",
        items: [
          { title: "Black Friday", route: "/deals/seasonal/black-friday" },
          { title: "Cyber Monday", route: "/deals/seasonal/cyber-monday" },
          {
            title: "Christmas Deals",
            route: "/deals/seasonal/christmas-deals",
          },
        ],
      },
      {
        title: "Weekly Deals",
        items: [
          { title: "Top Picks", route: "/deals/weekly/top-picks" },
          {
            title: "Discounts on Goat Products",
            route: "/deals/weekly/goat-discounts",
          },
          { title: "Pork Discounts", route: "/deals/weekly/pork-discounts" },
        ],
      },
    ],
  },
  {
    title: "New Arrivals",
    content: [
      {
        title: "Goat",
        items: [
          { title: "New Goat Meat", route: "/new-arrivals/goat/new-goat-meat" },
          { title: "New Goat Milk", route: "/new-arrivals/goat/new-goat-milk" },
        ],
      },
      {
        title: "Rabbit",
        items: [
          {
            title: "New Rabbit Meat",
            route: "/new-arrivals/rabbit/new-rabbit-meat",
          },
        ],
      },
      {
        title: "Turkey",
        items: [
          {
            title: "New Turkey Meat",
            route: "/new-arrivals/turkey/new-turkey-meat",
          },
        ],
      },
      {
        title: "Catfish",
        items: [
          {
            title: "New Fresh Catfish",
            route: "/new-arrivals/catfish/new-fresh-catfish",
          },
        ],
      },
      {
        title: "Pig",
        items: [{ title: "New Pork", route: "/new-arrivals/pig/new-pork" }],
      },
      {
        title: "Snail",
        items: [
          {
            title: "New Fresh Snail",
            route: "/new-arrivals/snail/new-fresh-snail",
          },
        ],
      },
      {
        title: "Chicken",
        items: [
          {
            title: "New Chicken Meat",
            route: "/new-arrivals/chicken/new-chicken-meat",
          },
        ],
      },
      {
        title: "Egg",
        items: [
          {
            title: "New Chicken Eggs",
            route: "/new-arrivals/egg/new-chicken-eggs",
          },
        ],
      },
      {
        title: "Plantain",
        items: [
          {
            title: "New Fresh Plantain",
            route: "/new-arrivals/plantain/new-fresh-plantain",
          },
        ],
      },
      {
        title: "Cassava",
        items: [
          {
            title: "New Fresh Cassava",
            route: "/new-arrivals/cassava/new-fresh-cassava",
          },
        ],
      },
      {
        title: "Corn",
        items: [
          {
            title: "New Fresh Corn",
            route: "/new-arrivals/corn/new-fresh-corn",
          },
        ],
      },
    ],
  },
  {
    title: "Account",
    content: [
      {
        title: "Auth Pages",
        items: [
          { title: "Sign In", route: "/login" },
          { title: "Sign Up", route: "/register" },
          { title: "Change Password", route: "#" },
        ],
      },
      {
        title: "Shop User",
        items: [
          { title: "Order History", route: "/account/order-history" },
          { title: "Wishlist", route: "/account/wishlist" },
          { title: "Payment Methods", route: "/account/payment-methods" },
          { title: "My Reviews", route: "/account/my-reviews" },
          { title: "Personal Info", route: "/account/personal-info" },
          { title: "Addresses", route: "/account/addresses" },
          { title: "Notifications", route: "/account/notifications" },
        ],
      },
      {
        title: "Marketplace User",
        items: [
          { title: "Dashboard", route: "/marketplace/dashboard" },
          { title: "Products", route: "/marketplace/products" },
          { title: "Sales", route: "/marketplace/sales" },
          { title: "Payouts", route: "/marketplace/payouts" },
          { title: "Purchase", route: "/marketplace/purchase" },
          { title: "Favorites", route: "/marketplace/favorites" },
          { title: "Settings", route: "/marketplace/settings" },
        ],
      },
    ],
  },
];

export const categoriesData = () => {
  return [
    {
      category: "Goat",
      quantity: "20 items",
      imageUrl: "/images/goat-icon.png",
      route: "#",
    },
    {
      category: "Rabbit",
      quantity: "15 items",
      imageUrl: "/images/rabbit-icon.png",
      route: "#",
    },
    {
      category: "Turkey",
      quantity: "10 items",
      imageUrl: "/images/turkey-icon.png",
      route: "#",
    },
    {
      category: "Catfish",
      quantity: "5 items",
      imageUrl: "/images/catfish-icon.png",
      route: "#",
    },
    {
      category: "Pig",
      quantity: "15 items",
      imageUrl: "/images/pig-icon.png",
      route: "#",
    },
    {
      category: "Snail",
      quantity: "10 items",
      imageUrl: "/images/snail-icon.png",
      route: "#",
    },
    {
      category: "Chicken",
      quantity: "10 items",
      imageUrl: "/images/chicken-icon.png",
      route: "#",
    },
    {
      category: "Egg",
      quantity: "10 items",
      imageUrl: "/images/egg-icon.png",
      route: "#",
    },
    {
      category: "Plantain",
      quantity: "10 items",
      imageUrl: "/images/plantain-icon.png",
      route: "#",
    },
    {
      category: "Cassava",
      quantity: "10 items",
      imageUrl: "/images/cassava-icon.png",
      route: "#",
    },
    {
      category: "Corn",
      quantity: "10 items",
      imageUrl: "/images/corn-icon.png",
      route: "#",
    },
  ];
};

export const categories = [
  {
    title: "Goat",
    items: ["Shop All", "Goat Meat", "Goat Milk", "Goat Cheese"],
  },
  {
    title: "Rabbit",
    items: ["Shop All", "Rabbit Meat", "Rabbit Fur"],
  },
  {
    title: "Turkey",
    items: ["Shop All", "Turkey Meat", "Turkey Eggs"],
  },
  {
    title: "Catfish",
    items: ["Shop All", "Fresh Catfish", "Smoked Catfish"],
  },
  {
    title: "Pig",
    items: ["Shop All", "Pork", "Bacon", "Ham"],
  },
  {
    title: "Snail",
    items: ["Shop All", "Fresh Snail", "Dried Snail"],
  },
  {
    title: "Chicken",
    items: ["Shop All", "Chicken Meat", "Chicken Eggs"],
  },
  {
    title: "Egg",
    items: ["Shop All", "Chicken Eggs", "Turkey Eggs", "Duck Eggs"],
  },
  {
    title: "Plantain",
    items: ["Shop All", "Fresh Plantain", "Dried Plantain", "Plantain Flour"],
  },
  {
    title: "Cassava",
    items: ["Shop All", "Fresh Cassava", "Cassava Flour", "Garri"],
  },
  {
    title: "Corn",
    items: ["Shop All", "Fresh Corn", "Dried Corn", "Corn Flour", "Popcorn"],
  },
];

export const heroDetails = () => {
  return [
    {
      title: "Explore Our Livestock",
      subtitle: "High-quality goats, rabbits, turkeys, and more",
      image: "/images/livestock-bg.jpg",
      route: "/products",
    },
    {
      title: "Fresh and Sustainable",
      subtitle: "Sustainably sourced products for healthy living",
      image: "/images/sustainable-farming.jpg",
      route: "/products",
    },
    {
      title: "Farm Fresh Produce",
      subtitle: "Fresh plantains, cassava, corn, and more",
      image: "/images/farm-produce.jpg",
      route: "/products",
    },
  ];
};

export const subHeroDetails = () => {
  return [
    {
      title: "Live Animals",
      subtitle: "Healthy live goats, rabbits, turkeys, and more",
      image: "/images/live-animals.jpg",
      route: "/products",
    },
    {
      title: "Fresh Produce",
      subtitle: "Freshly harvested plantains, cassava, and corn",
      image: "/images/fresh-produce.jpg",
      route: "/products",
    },
    {
      title: "Dairy & Eggs",
      subtitle: "High-quality dairy products and fresh eggs",
      image: "/images/dairy-eggs.webp",
      route: "/products",
    },
    {
      title: "Snail Products",
      subtitle: "Fresh and dried snails for your culinary needs",
      image: "/images/live-snail.jpg",
      route: "/products",
    },
  ];
};
