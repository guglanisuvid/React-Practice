import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://i.pinimg.com/originals/98/cf/72/98cf72d0a15d4ad7f7e8e584a3d3bd4e.png"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const resList = [
    {
        "info": {
            "id": "97993",
            "name": "Domino's Pizza",
            "cloudinaryImageId": "a3ise36uveh6uwonogzm",
            "locality": "G T Road",
            "areaName": "Ansal Town",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pizzas",
                "Italian",
                "Pastas",
                "Desserts"
            ],
            "avgRating": 4.2,
            "feeDetails": {
                "restaurantId": "97993",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 2100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 2100
            },
            "parentId": "2456",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 30,
                "serviceability": "SERVICEABLE",
                "slaString": "30 mins",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-19 01:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹299",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/dominos-pizza-g-t-road-ansal-town-karnal-97993",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "710044",
            "name": "Pizza Wings",
            "cloudinaryImageId": "1ce951942c458db37b1ff277a7ee31f1",
            "locality": "Sector-12",
            "areaName": "Model Town",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Pizzas",
                "Fast Food",
                "Pastas",
                "Mexican",
                "Snacks"
            ],
            "avgRating": 4.2,
            "feeDetails": {
                "restaurantId": "710044",
                "fees": [
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 2100
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 2100
            },
            "parentId": "159048",
            "avgRatingString": "4.2",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 2.4,
                "serviceability": "SERVICEABLE",
                "slaString": "19 mins",
                "lastMileTravelString": "2.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-19 01:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹175 OFF",
                "subHeader": "ABOVE ₹399",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/pizza-wings-sector-12-model-town-karnal-710044",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "592314",
            "name": "Burger Singh (Big Punjabi Burgers)",
            "cloudinaryImageId": "ys0noapswiwjng3p5q83",
            "locality": "Matka Chowk",
            "areaName": "Sector 13",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Burgers",
                "Snacks",
                "Desserts",
                "Beverages",
                "Fast Food",
                "American",
                "Indian",
                "Biryani"
            ],
            "avgRating": 4.3,
            "feeDetails": {
                "restaurantId": "592314",
                "fees": [
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 2100
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 2100
            },
            "parentId": "375065",
            "avgRatingString": "4.3",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 18,
                "lastMileTravel": 1.7,
                "serviceability": "SERVICEABLE",
                "slaString": "18 mins",
                "lastMileTravelString": "1.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-19 01:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/burger-singh-big-punjabi-burgers-matka-chowk-sector-13-karnal-592314",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "721070",
            "name": "Subway",
            "cloudinaryImageId": "689894e7bd836c229b9c16f07c42ca20",
            "locality": "Sector 7",
            "areaName": "Karnal",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Salads",
                "Snacks",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4,
            "feeDetails": {
                "restaurantId": "721070",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 2100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 2100
            },
            "parentId": "2",
            "avgRatingString": "4.0",
            "totalRatingsString": "50+",
            "sla": {
                "deliveryTime": 17,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "17 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-19 01:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/subway-sector-7-karnal-karnal-721070",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "101364",
            "name": "Puffed Stuffed",
            "cloudinaryImageId": "lrjrogveu7ifcswnrtzd",
            "locality": "Mughal Canal",
            "areaName": "Model Town",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Chinese",
                "North Indian",
                "Tandoor"
            ],
            "avgRating": 4.2,
            "veg": true,
            "feeDetails": {
                "restaurantId": "101364",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 2100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 2100
            },
            "parentId": "161705",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 16,
                "lastMileTravel": 0.9,
                "serviceability": "SERVICEABLE",
                "slaString": "16 mins",
                "lastMileTravelString": "0.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-19 01:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹299",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/puffed-stuffed-mughal-canal-model-town-karnal-101364",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "521335",
            "name": "Noodle Box Story",
            "cloudinaryImageId": "chfiwkoqqwrtlkuocwv3",
            "locality": "Old Char Chaman",
            "areaName": "Dyal Singh Colony",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Chinese",
                "Tandoor"
            ],
            "avgRating": 4.2,
            "veg": true,
            "feeDetails": {
                "restaurantId": "521335",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 2100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 2100
            },
            "parentId": "336884",
            "avgRatingString": "4.2",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 17,
                "lastMileTravel": 0.9,
                "serviceability": "SERVICEABLE",
                "slaString": "17 mins",
                "lastMileTravelString": "0.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-19 01:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹299",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/noodle-box-story-old-char-chaman-dyal-singh-colony-karnal-521335",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "570385",
            "name": "AM PM Store",
            "cloudinaryImageId": "apj0dxfysphckjdinojv",
            "locality": "Sector 13",
            "areaName": "Sector 14",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "North Indian",
                "Chinese",
                "Fast Food",
                "Snacks",
                "Beverages"
            ],
            "avgRating": 4.1,
            "feeDetails": {
                "restaurantId": "570385",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 2100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 2100
            },
            "parentId": "30767",
            "avgRatingString": "4.1",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 16,
                "lastMileTravel": 0.7,
                "serviceability": "SERVICEABLE",
                "slaString": "16 mins",
                "lastMileTravelString": "0.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-19 01:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/am-pm-store-sector-13-sector-14-karnal-570385",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "552573",
            "name": "Face Food",
            "cloudinaryImageId": "rhvd8kpvio6uchrkjpbu",
            "locality": "Old housing board Colony",
            "areaName": "Sector 13",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Italian-American",
                "Fast Food",
                "American",
                "Mexican",
                "Chinese",
                "Beverages"
            ],
            "avgRating": 4.1,
            "veg": true,
            "feeDetails": {
                "restaurantId": "552573",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 2100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 2100
            },
            "parentId": "78123",
            "avgRatingString": "4.1",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 21,
                "lastMileTravel": 1.8,
                "serviceability": "SERVICEABLE",
                "slaString": "21 mins",
                "lastMileTravelString": "1.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-19 01:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/face-food-old-housing-board-colony-sector-13-karnal-552573",
            "type": "WEBLINK"
        }
    }
]

const ResCard = (props) => {

    const { resData } = props;

    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData.info;

    return (
        <div className="res-card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}></img>
            <h2>{name}</h2>
            <div className="res-details">
                <h3>{cuisines.join(", ")}</h3>
                <h3>{avgRating} ⭐</h3>
                <h3>{costForTwo}</h3>
            </div>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <h1>Search</h1>
            </div>
            <div className="res-container">
                {
                    resList.map((restaurant) => (
                        <ResCard key={restaurant.info.id} resData={restaurant} />
                    ))
                }
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);