

export const portfolioMenuItems = [
    {
      id: 1,
      pathName: "Portfolio",
      path: "/portfolio/acct_dash",
      subPaths: [
        {
          id: "a1",
          pathName: "Account Dash",
          path: "/portfolio/acct_dash",
        },
        {
          id: "a2",
          pathName: "Target Portfolio",
          path: "/portfolio/target_portfolio",
        },
        {
          id: "a3",
          pathName: "Reallocation Tool",
          path: "/portfolio/reallocation_tool",
        },
        {
          id: "a4",
          pathName: "Position Tool",
          path: "/portfolio/position_tool",
        },
        {
          id: "a5",
          pathName: "Transactions",
          path: "/portfolio/transactions",
        },
      ],
    },
  ]

  export const userDropdownMenuItems = [
    {
      id: "1ua",
      pathName: "Profile",
      path: "/",
      subPaths: []
    },
    // {
    //   id: "1ub",
    //   pathName: "Account",
    //   path: "/",
    //   subPaths: []
    // },
    {
      id: "1ub",
      pathName: "Admin",
      path: "/admin",
      subPaths: []
    },
    {
      id: "1ub",
      pathName: "Logout",
      path: "/",
      subPaths: []
    },
]