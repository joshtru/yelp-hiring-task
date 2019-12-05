import RestaurantsTypes from "./restaurants.types";

const INITIAL_STATE = {
  gettingRestaurants: false,
  listOfRestaurants: {
    businesses: [
      {
        id: "6XuAOz21oHvi1XMSvUorWw",
        alias: "the-press-oklahoma-city",
        name: "The Press",
        image_url:
          "https://s3-media2.fl.yelpcdn.com/bphoto/itScZMKx2Lp977CVnnLzow/o.jpg",
        is_closed: false,
        url:
          "https://www.yelp.com/biz/the-press-oklahoma-city?adjust_creative=DsWPRTG7dbViDdz11UIg3w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=DsWPRTG7dbViDdz11UIg3w",
        review_count: 366,
        categories: [
          {
            alias: "southern",
            title: "Southern"
          },
          {
            alias: "comfortfood",
            title: "Comfort Food"
          },
          {
            alias: "bars",
            title: "Bars"
          }
        ],
        rating: 4.5,
        coordinates: {
          latitude: 35.4853898174843,
          longitude: -97.5394776463509
        },
        transactions: [],
        price: "$$",
        location: {
          address1: "1610 N Gatewood Ave",
          address2: "",
          address3: null,
          city: "Oklahoma City",
          zip_code: "73106",
          country: "US",
          state: "OK",
          display_address: ["1610 N Gatewood Ave", "Oklahoma City, OK 73106"]
        },
        phone: "+14052087739",
        display_phone: "(405) 208-7739",
        distance: 589.4906960054902
      },
      {
        id: "LypmdJ6FEWP6Cnp_T3l5Ng",
        alias: "kitchen-no-324-oklahoma-city",
        name: "Kitchen No 324",
        image_url:
          "https://s3-media2.fl.yelpcdn.com/bphoto/SlX6A4qDgwFO3b6ghSNqww/o.jpg",
        is_closed: false,
        url:
          "https://www.yelp.com/biz/kitchen-no-324-oklahoma-city?adjust_creative=DsWPRTG7dbViDdz11UIg3w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=DsWPRTG7dbViDdz11UIg3w",
        review_count: 1156,
        categories: [
          {
            alias: "newamerican",
            title: "American (New)"
          },
          {
            alias: "breakfast_brunch",
            title: "Breakfast & Brunch"
          }
        ],
        rating: 4.5,
        coordinates: {
          latitude: 35.4705811,
          longitude: -97.5161133
        },
        transactions: [],
        price: "$$",
        location: {
          address1: "324 N Robinson Ave",
          address2: "",
          address3: "",
          city: "Oklahoma City",
          zip_code: "73102",
          country: "US",
          state: "OK",
          display_address: ["324 N Robinson Ave", "Oklahoma City, OK 73102"]
        },
        phone: "+14057635911",
        display_phone: "(405) 763-5911",
        distance: 3067.811858290543
      },
      {
        id: "q18MyhsVqVPr-1Luz01vdw",
        alias: "cheevers-cafe-oklahoma-city-14",
        name: "Cheever's Cafe",
        image_url:
          "https://s3-media2.fl.yelpcdn.com/bphoto/jMXD7MfXZBmj1LhOsG_D8w/o.jpg",
        is_closed: false,
        url:
          "https://www.yelp.com/biz/cheevers-cafe-oklahoma-city-14?adjust_creative=DsWPRTG7dbViDdz11UIg3w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=DsWPRTG7dbViDdz11UIg3w",
        review_count: 801,
        categories: [
          {
            alias: "newamerican",
            title: "American (New)"
          }
        ],
        rating: 4.5,
        coordinates: {
          latitude: 35.49374,
          longitude: -97.519048
        },
        transactions: [],
        price: "$$",
        location: {
          address1: "2409 N Hudson Ave",
          address2: "",
          address3: "",
          city: "Oklahoma City",
          zip_code: "73103",
          country: "US",
          state: "OK",
          display_address: ["2409 N Hudson Ave", "Oklahoma City, OK 73103"]
        },
        phone: "+14055257007",
        display_phone: "(405) 525-7007",
        distance: 1870.6158308363347
      },
      {
        id: "pu3U17gCsYJ5W58Z8xrQhA",
        alias: "black-walnut-oklahoma-city-2",
        name: "Black Walnut ",
        image_url:
          "https://s3-media1.fl.yelpcdn.com/bphoto/Zb25b2w7GDohvp3_algkYQ/o.jpg",
        is_closed: false,
        url:
          "https://www.yelp.com/biz/black-walnut-oklahoma-city-2?adjust_creative=DsWPRTG7dbViDdz11UIg3w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=DsWPRTG7dbViDdz11UIg3w",
        review_count: 117,
        categories: [
          {
            alias: "newamerican",
            title: "American (New)"
          },
          {
            alias: "cocktailbars",
            title: "Cocktail Bars"
          }
        ],
        rating: 4.5,
        coordinates: {
          latitude: 35.471489,
          longitude: -97.509146
        },
        transactions: ["delivery"],
        price: "$$",
        location: {
          address1: "100 NE 4th St",
          address2: null,
          address3: "",
          city: "Oklahoma City",
          zip_code: "73104",
          country: "US",
          state: "OK",
          display_address: ["100 NE 4th St", "Oklahoma City, OK 73104"]
        },
        phone: "+14054456273",
        display_phone: "(405) 445-6273",
        distance: 3470.873431102446
      },
      {
        id: "WanwP4ghgWl2iqY5r3jCzA",
        alias: "gun-izakaya-oklahoma-city",
        name: "Gun Izakaya",
        image_url:
          "https://s3-media2.fl.yelpcdn.com/bphoto/AZx8-TglNPB-lXuBQK4_XQ/o.jpg",
        is_closed: false,
        url:
          "https://www.yelp.com/biz/gun-izakaya-oklahoma-city?adjust_creative=DsWPRTG7dbViDdz11UIg3w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=DsWPRTG7dbViDdz11UIg3w",
        review_count: 69,
        categories: [
          {
            alias: "izakaya",
            title: "Izakaya"
          }
        ],
        rating: 4.5,
        coordinates: {
          latitude: 35.49967,
          longitude: -97.5227
        },
        transactions: [],
        location: {
          address1: "3000 Paseo",
          address2: null,
          address3: "",
          city: "Oklahoma City",
          zip_code: "73103",
          country: "US",
          state: "OK",
          display_address: ["3000 Paseo", "Oklahoma City, OK 73103"]
        },
        phone: "+14059006615",
        display_phone: "(405) 900-6615",
        distance: 1807.7324284034235
      },
      {
        id: "BRv5b6DmzuaLKA-2F32iKA",
        alias: "nics-grill-oklahoma-city",
        name: "Nic's Grill",
        image_url:
          "https://s3-media3.fl.yelpcdn.com/bphoto/mbOZu42Gvuu2rsffaAvE9A/o.jpg",
        is_closed: false,
        url:
          "https://www.yelp.com/biz/nics-grill-oklahoma-city?adjust_creative=DsWPRTG7dbViDdz11UIg3w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=DsWPRTG7dbViDdz11UIg3w",
        review_count: 383,
        categories: [
          {
            alias: "burgers",
            title: "Burgers"
          },
          {
            alias: "tradamerican",
            title: "American (Traditional)"
          }
        ],
        rating: 4.5,
        coordinates: {
          latitude: 35.480937,
          longitude: -97.548094
        },
        transactions: ["delivery"],
        price: "$$",
        location: {
          address1: "1201 N Pennsylvania Ave",
          address2: "",
          address3: "",
          city: "Oklahoma City",
          zip_code: "73107",
          country: "US",
          state: "OK",
          display_address: [
            "1201 N Pennsylvania Ave",
            "Oklahoma City, OK 73107"
          ]
        },
        phone: "+14055240999",
        display_phone: "(405) 524-0999",
        distance: 1341.8151560499928
      },
      {
        id: "CUEiz8yZaBCvl7skvm9dgg",
        alias: "frida-southwest-oklahoma-city-2",
        name: "FRIDA southwest",
        image_url:
          "https://s3-media2.fl.yelpcdn.com/bphoto/3hF96MdEjjYoNUu7bjMlbA/o.jpg",
        is_closed: false,
        url:
          "https://www.yelp.com/biz/frida-southwest-oklahoma-city-2?adjust_creative=DsWPRTG7dbViDdz11UIg3w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=DsWPRTG7dbViDdz11UIg3w",
        review_count: 126,
        categories: [
          {
            alias: "newamerican",
            title: "American (New)"
          }
        ],
        rating: 4.5,
        coordinates: {
          latitude: 35.4985300003351,
          longitude: -97.5213149996807
        },
        transactions: [],
        price: "$$",
        location: {
          address1: "500 Paseo Dr",
          address2: null,
          address3: "",
          city: "Oklahoma City",
          zip_code: "73103",
          country: "US",
          state: "OK",
          display_address: ["500 Paseo Dr", "Oklahoma City, OK 73103"]
        },
        phone: "+14056837432",
        display_phone: "(405) 683-7432",
        distance: 1873.080899461719
      },
      {
        id: "95VJFaTk-WxaQR8PS8JJIw",
        alias: "the-mule-oklahoma-city",
        name: "The Mule",
        image_url:
          "https://s3-media1.fl.yelpcdn.com/bphoto/d0FJJun0ooKUMr7wClPB8w/o.jpg",
        is_closed: false,
        url:
          "https://www.yelp.com/biz/the-mule-oklahoma-city?adjust_creative=DsWPRTG7dbViDdz11UIg3w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=DsWPRTG7dbViDdz11UIg3w",
        review_count: 698,
        categories: [
          {
            alias: "bars",
            title: "Bars"
          },
          {
            alias: "sandwiches",
            title: "Sandwiches"
          },
          {
            alias: "newamerican",
            title: "American (New)"
          }
        ],
        rating: 4.5,
        coordinates: {
          latitude: 35.4859482339289,
          longitude: -97.5387315285266
        },
        transactions: [],
        price: "$$",
        location: {
          address1: "1630 N Blackwelder Ave",
          address2: "Ste 1",
          address3: "",
          city: "Oklahoma City",
          zip_code: "73106",
          country: "US",
          state: "OK",
          display_address: [
            "1630 N Blackwelder Ave",
            "Ste 1",
            "Oklahoma City, OK 73106"
          ]
        },
        phone: "+14056011400",
        display_phone: "(405) 601-1400",
        distance: 530.4497292711293
      },
      {
        id: "vYJoYtOr53X7WVTH6Z8dpQ",
        alias: "the-collective-kitchens-and-cocktails-oklahoma-city",
        name: "The Collective Kitchens  and Cocktails",
        image_url:
          "https://s3-media2.fl.yelpcdn.com/bphoto/l9NTk0zgi0bkEBd194U43A/o.jpg",
        is_closed: false,
        url:
          "https://www.yelp.com/biz/the-collective-kitchens-and-cocktails-oklahoma-city?adjust_creative=DsWPRTG7dbViDdz11UIg3w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=DsWPRTG7dbViDdz11UIg3w",
        review_count: 128,
        categories: [
          {
            alias: "food_court",
            title: "Food Court"
          }
        ],
        rating: 4.0,
        coordinates: {
          latitude: 35.47795,
          longitude: -97.51796
        },
        transactions: [],
        price: "$$",
        location: {
          address1: "308 NW 10th St",
          address2: "",
          address3: null,
          city: "Oklahoma City",
          zip_code: "73103",
          country: "US",
          state: "OK",
          display_address: ["308 NW 10th St", "Oklahoma City, OK 73103"]
        },
        phone: "",
        display_phone: "",
        distance: 2404.0252392938296
      },
      {
        id: "XtVXzzh0wDct_TtDI63hHQ",
        alias: "social-deck-dining-oklahoma-city",
        name: "Social Deck + Dining",
        image_url:
          "https://s3-media3.fl.yelpcdn.com/bphoto/JRqIm0xoRzbscD4pkFqUEA/o.jpg",
        is_closed: false,
        url:
          "https://www.yelp.com/biz/social-deck-dining-oklahoma-city?adjust_creative=DsWPRTG7dbViDdz11UIg3w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=DsWPRTG7dbViDdz11UIg3w",
        review_count: 85,
        categories: [
          {
            alias: "newamerican",
            title: "American (New)"
          },
          {
            alias: "breakfast_brunch",
            title: "Breakfast & Brunch"
          }
        ],
        rating: 4.5,
        coordinates: {
          latitude: 35.4934177057555,
          longitude: -97.5454819706998
        },
        transactions: [],
        price: "$$",
        location: {
          address1: "1933 NW 23rd St",
          address2: "",
          address3: null,
          city: "Oklahoma City",
          zip_code: "73016",
          country: "US",
          state: "OK",
          display_address: ["1933 NW 23rd St", "Oklahoma City, OK 73016"]
        },
        phone: "+14056028705",
        display_phone: "(405) 602-8705",
        distance: 631.1767873245392
      },
      {
        id: "QaeBboU2RTJYBkcXikYG1Q",
        alias: "yummy-noodles-oklahoma-city",
        name: "Yummy Noodles",
        image_url:
          "https://s3-media2.fl.yelpcdn.com/bphoto/KQUnUXIwDN_YWOZc2LpwbQ/o.jpg",
        is_closed: false,
        url:
          "https://www.yelp.com/biz/yummy-noodles-oklahoma-city?adjust_creative=DsWPRTG7dbViDdz11UIg3w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=DsWPRTG7dbViDdz11UIg3w",
        review_count: 53,
        categories: [
          {
            alias: "chinese",
            title: "Chinese"
          },
          {
            alias: "noodles",
            title: "Noodles"
          }
        ],
        rating: 4.5,
        coordinates: {
          latitude: 35.4929617262515,
          longitude: -97.5377648036685
        },
        transactions: [],
        location: {
          address1: "1630 NW 23rd St",
          address2: "",
          address3: null,
          city: "Oklahoma City",
          zip_code: "73106",
          country: "US",
          state: "OK",
          display_address: ["1630 NW 23rd St", "Oklahoma City, OK 73106"]
        },
        phone: "+14056044880",
        display_phone: "(405) 604-4880",
        distance: 291.2733106810187
      },
      {
        id: "bJ0KWqW9dthK_sHJEwbKXw",
        alias: "the-jones-assembly-oklahoma-city",
        name: "The Jones Assembly",
        image_url:
          "https://s3-media1.fl.yelpcdn.com/bphoto/beZQJqFRLGM_qCFzy6U-FA/o.jpg",
        is_closed: false,
        url:
          "https://www.yelp.com/biz/the-jones-assembly-oklahoma-city?adjust_creative=DsWPRTG7dbViDdz11UIg3w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=DsWPRTG7dbViDdz11UIg3w",
        review_count: 437,
        categories: [
          {
            alias: "bars",
            title: "Bars"
          },
          {
            alias: "breakfast_brunch",
            title: "Breakfast & Brunch"
          },
          {
            alias: "tradamerican",
            title: "American (Traditional)"
          }
        ],
        rating: 4.5,
        coordinates: {
          latitude: 35.4666164759424,
          longitude: -97.5275126472116
        },
        transactions: [],
        price: "$$",
        location: {
          address1: "901 W Sheridan Ave",
          address2: "",
          address3: null,
          city: "Oklahoma City",
          zip_code: "73106",
          country: "US",
          state: "OK",
          display_address: ["901 W Sheridan Ave", "Oklahoma City, OK 73106"]
        },
        phone: "+14052122378",
        display_phone: "(405) 212-2378",
        distance: 2884.120085102365
      },
      {
        id: "agAWn4yup3-5bJM_lKAG6Q",
        alias: "cajun-corner-oklahoma-city-2",
        name: "Cajun Corner",
        image_url:
          "https://s3-media4.fl.yelpcdn.com/bphoto/DI4WNLECpj7FCOhQZIzUvQ/o.jpg",
        is_closed: false,
        url:
          "https://www.yelp.com/biz/cajun-corner-oklahoma-city-2?adjust_creative=DsWPRTG7dbViDdz11UIg3w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=DsWPRTG7dbViDdz11UIg3w",
        review_count: 32,
        categories: [
          {
            alias: "cajun",
            title: "Cajun/Creole"
          },
          {
            alias: "seafood",
            title: "Seafood"
          }
        ],
        rating: 4.0,
        coordinates: {
          latitude: 35.49295,
          longitude: -97.51817
        },
        transactions: [],
        location: {
          address1: "312 NW 23rd St",
          address2: null,
          address3: "",
          city: "Oklahoma City",
          zip_code: "73103",
          country: "US",
          state: "OK",
          display_address: ["312 NW 23rd St", "Oklahoma City, OK 73103"]
        },
        phone: "+14052251222",
        display_phone: "(405) 225-1222",
        distance: 1943.5796161812634
      },
      {
        id: "6Z05wqlXZhzJtoN_WoA41Q",
        alias: "tamashii-ramen-oklahoma-city",
        name: "Tamashii Ramen",
        image_url:
          "https://s3-media2.fl.yelpcdn.com/bphoto/wU5dCIpT382q4TQBCCL8MQ/o.jpg",
        is_closed: false,
        url:
          "https://www.yelp.com/biz/tamashii-ramen-oklahoma-city?adjust_creative=DsWPRTG7dbViDdz11UIg3w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=DsWPRTG7dbViDdz11UIg3w",
        review_count: 622,
        categories: [
          {
            alias: "ramen",
            title: "Ramen"
          },
          {
            alias: "izakaya",
            title: "Izakaya"
          },
          {
            alias: "tapas",
            title: "Tapas Bars"
          }
        ],
        rating: 4.5,
        coordinates: {
          latitude: 35.4763325789891,
          longitude: -97.5187203455078
        },
        transactions: ["delivery", "pickup"],
        price: "$$",
        location: {
          address1: "321 NW 8th St",
          address2: "Ste B",
          address3: "",
          city: "Oklahoma City",
          zip_code: "73102",
          country: "US",
          state: "OK",
          display_address: ["321 NW 8th St", "Ste B", "Oklahoma City, OK 73102"]
        },
        phone: "+14055170707",
        display_phone: "(405) 517-0707",
        distance: 2458.432353174782
      },
      {
        id: "6bKE7lZ3RmGLj1CpWvlREA",
        alias: "gorō-ramen-oklahoma-city",
        name: "Gorō Ramen",
        image_url:
          "https://s3-media2.fl.yelpcdn.com/bphoto/6Rzqnvln-WnYo0BDiYmbtQ/o.jpg",
        is_closed: false,
        url:
          "https://www.yelp.com/biz/gor%C5%8D-ramen-oklahoma-city?adjust_creative=DsWPRTG7dbViDdz11UIg3w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=DsWPRTG7dbViDdz11UIg3w",
        review_count: 578,
        categories: [
          {
            alias: "ramen",
            title: "Ramen"
          },
          {
            alias: "izakaya",
            title: "Izakaya"
          },
          {
            alias: "cocktailbars",
            title: "Cocktail Bars"
          }
        ],
        rating: 4.5,
        coordinates: {
          latitude: 35.4858376827959,
          longitude: -97.538504259891
        },
        transactions: ["delivery"],
        price: "$$",
        location: {
          address1: "1634 N Blackwelder Ave",
          address2: "Ste 102",
          address3: "",
          city: "Oklahoma City",
          zip_code: "73106",
          country: "US",
          state: "OK",
          display_address: [
            "1634 N Blackwelder Ave",
            "Ste 102",
            "Oklahoma City, OK 73106"
          ]
        },
        phone: "+14056062539",
        display_phone: "(405) 606-2539",
        distance: 545.2393141625597
      },
      {
        id: "rAmgoeSdTE6JXJEV28RYhw",
        alias: "mexican-radio-oklahoma-city-2",
        name: "Mexican Radio",
        image_url:
          "https://s3-media2.fl.yelpcdn.com/bphoto/L6UBgCG22rVfe-fO-COdBA/o.jpg",
        is_closed: false,
        url:
          "https://www.yelp.com/biz/mexican-radio-oklahoma-city-2?adjust_creative=DsWPRTG7dbViDdz11UIg3w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=DsWPRTG7dbViDdz11UIg3w",
        review_count: 87,
        categories: [
          {
            alias: "mexican",
            title: "Mexican"
          },
          {
            alias: "seafood",
            title: "Seafood"
          }
        ],
        rating: 4.0,
        coordinates: {
          latitude: 35.48571,
          longitude: -97.54037
        },
        transactions: [],
        location: {
          address1: "1732 NW 16th St",
          address2: "",
          address3: null,
          city: "Oklahoma City",
          zip_code: "73106",
          country: "US",
          state: "OK",
          display_address: ["1732 NW 16th St", "Oklahoma City, OK 73106"]
        },
        phone: "+14059005608",
        display_phone: "(405) 900-5608",
        distance: 559.7028865905075
      },
      {
        id: "nQs-rvZeyCKsJkhBgDPb7A",
        alias: "parlor-oklahoma-city",
        name: "Parlor",
        image_url:
          "https://s3-media1.fl.yelpcdn.com/bphoto/CCEV4wqUifZ0-2nrCMGFWQ/o.jpg",
        is_closed: false,
        url:
          "https://www.yelp.com/biz/parlor-oklahoma-city?adjust_creative=DsWPRTG7dbViDdz11UIg3w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=DsWPRTG7dbViDdz11UIg3w",
        review_count: 80,
        categories: [
          {
            alias: "food_court",
            title: "Food Court"
          },
          {
            alias: "cocktailbars",
            title: "Cocktail Bars"
          }
        ],
        rating: 4.5,
        coordinates: {
          latitude: 35.474731,
          longitude: -97.511755
        },
        transactions: [],
        price: "$$",
        location: {
          address1: "11 NE 6th St",
          address2: null,
          address3: "",
          city: "Oklahoma City",
          zip_code: "73104",
          country: "US",
          state: "OK",
          display_address: ["11 NE 6th St", "Oklahoma City, OK 73104"]
        },
        phone: "+14052944740",
        display_phone: "(405) 294-4740",
        distance: 3065.9714374296423
      },
      {
        id: "QZT1Tdnu1bN4W6I5bw-wsQ",
        alias: "nashbird-oklahoma-city",
        name: "Nashbird",
        image_url:
          "https://s3-media1.fl.yelpcdn.com/bphoto/CVdntxrqgBV0VgW0wZohnw/o.jpg",
        is_closed: false,
        url:
          "https://www.yelp.com/biz/nashbird-oklahoma-city?adjust_creative=DsWPRTG7dbViDdz11UIg3w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=DsWPRTG7dbViDdz11UIg3w",
        review_count: 255,
        categories: [
          {
            alias: "southern",
            title: "Southern"
          },
          {
            alias: "chickenshop",
            title: "Chicken Shop"
          },
          {
            alias: "bars",
            title: "Bars"
          }
        ],
        rating: 4.0,
        coordinates: {
          latitude: 35.4772398650094,
          longitude: -97.5121948502978
        },
        transactions: ["delivery"],
        price: "$$",
        location: {
          address1: "1 NW 9th St",
          address2: "",
          address3: null,
          city: "Oklahoma City",
          zip_code: "73102",
          country: "US",
          state: "OK",
          display_address: ["1 NW 9th St", "Oklahoma City, OK 73102"]
        },
        phone: "+14056009718",
        display_phone: "(405) 600-9718",
        distance: 2879.257084014009
      },
      {
        id: "rlwmNoIw4LQJidCqQd0z3A",
        alias: "bar-cicchetti-oklahoma-city",
        name: "Bar Cicchetti",
        image_url:
          "https://s3-media4.fl.yelpcdn.com/bphoto/RQed15tfaJKljgEcw0RXoA/o.jpg",
        is_closed: false,
        url:
          "https://www.yelp.com/biz/bar-cicchetti-oklahoma-city?adjust_creative=DsWPRTG7dbViDdz11UIg3w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=DsWPRTG7dbViDdz11UIg3w",
        review_count: 41,
        categories: [
          {
            alias: "bars",
            title: "Bars"
          },
          {
            alias: "mediterranean",
            title: "Mediterranean"
          }
        ],
        rating: 4.5,
        coordinates: {
          latitude: 35.469885,
          longitude: -97.5097877
        },
        transactions: [],
        price: "$$",
        location: {
          address1: "121 Ne 2nd St",
          address2: null,
          address3: "",
          city: "Oklahoma City",
          zip_code: "73104",
          country: "US",
          state: "OK",
          display_address: ["121 Ne 2nd St", "Oklahoma City, OK 73104"]
        },
        phone: "+14057955295",
        display_phone: "(405) 795-5295",
        distance: 3539.1966655405167
      },
      {
        id: "EzsBfThs5IwuImgAbs9srQ",
        alias: "oso-paseo-oklahoma-city",
        name: "OSO Paseo",
        image_url:
          "https://s3-media3.fl.yelpcdn.com/bphoto/5dU8BhRM5lbW7C1Rs0jb1A/o.jpg",
        is_closed: false,
        url:
          "https://www.yelp.com/biz/oso-paseo-oklahoma-city?adjust_creative=DsWPRTG7dbViDdz11UIg3w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=DsWPRTG7dbViDdz11UIg3w",
        review_count: 250,
        categories: [
          {
            alias: "newamerican",
            title: "American (New)"
          },
          {
            alias: "tex-mex",
            title: "Tex-Mex"
          },
          {
            alias: "mexican",
            title: "Mexican"
          }
        ],
        rating: 4.5,
        coordinates: {
          latitude: 35.498943,
          longitude: -97.522669
        },
        transactions: [],
        price: "$$",
        location: {
          address1: "603 NW 28th St",
          address2: "",
          address3: null,
          city: "Oklahoma City",
          zip_code: "73103",
          country: "US",
          state: "OK",
          display_address: ["603 NW 28th St", "Oklahoma City, OK 73103"]
        },
        phone: "+14053098226",
        display_phone: "(405) 309-8226",
        distance: 1768.4602841308315
      }
    ],
    total: 1200,
    region: {
      center: {
        longitude: -97.53936767578125,
        latitude: 35.49069048431262
      }
    }
  },
  error: null
};

const restaurantsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    //   GET LIST OF RESTAURANTS NEAR BY FROM YELP
    case RestaurantsTypes.GET_YELP_RESTAURANTS_START_BY_SEARCH:
      return {
        ...state,
        gettingRestaurants: true
      };
    case RestaurantsTypes.GET_YELP_RESTAURANTS_START_BY_COORD:
      return {
        ...state,
        gettingRestaurants: true
      };
    case RestaurantsTypes.GET_YELP_RESTAURANTS_SUCCESS:
      return {
        ...state,
        listOfRestaurants: action.payload,
        gettingRestaurants: false,
        error: null
      };
    case RestaurantsTypes.GET_YELP_RESTAURANTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        gettingRestaurants: false
      };

    default:
      return state;
  }
};

export default restaurantsReducer;
