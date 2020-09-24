export const state = () => ({
  plans: [
    {
      id: 6,
      name: "6 MONTHS",
      price: 199,
      items: [
        "2,000 Questions",
        "Personalized ABSITE and Rotation preparation",
        "Upload your ABSITE performance report",
        "Upload your rotation schedule",
        "McGraw Hill Surgery content (5 textbooks, 300 videos, 40hrs of audio)",
        "Analytics and peer comparisons",
      ],
    },
    {
      id: 12,
      name: "12 MONTHS",
      price: 299,
      items: [
        "2,000 Questions",
        "Personalized ABSITE and Rotation preparation",
        "Upload your ABSITE performance report",
        "Upload your rotation schedule",
        "McGraw Hill Surgery content (5 textbooks, 300 videos, 40hrs of audio)",
        "Analytics and peer comparisons",
        "Guarantee - Complete our program and we guarantee your ABSITE PGY-Level percentile will increase",
      ],
    },
    {
      id: 24,
      name: "24 MONTHS",
      price: 499,
      items: [
        "2,000 Questions",
        "Personalized ABSITE and Rotation preparation",
        "Upload your ABSITE performance report",
        "Upload your rotation schedule",
        "McGraw Hill Surgery content (5 textbooks, 300 videos, 40hrs of audio)",
        "Analytics and peer comparisons",
        "Guarantee - Complete our program and we guarantee your ABSITE PGY-Level percentile will increase",
      ],
    },
  ],
  planPrice: 0,
});

export const mutations = {
  setPlanPrice(state, price) {
    state.planPrice = price;
  },
};
