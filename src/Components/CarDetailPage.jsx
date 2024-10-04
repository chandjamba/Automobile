import { useEffect, useState } from "react";
import "./carDetailPage.scss";
import { Avatar, Rating } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { databases } from "../lib/appwrite";
import { ID, Query } from "appwrite";

export default function CarDetailPage() {
  const [starValue, setStarValue] = useState();
  const [carDetail, setCarDetail] = useState();
  const [allCars, setAllCars] = useState();
  const [allReviews, setAllReviews] = useState();
  const { carId } = useParams();
  useEffect(() => {
    async function getCarData() {
      try {
        await databases
          .getDocument(
            import.meta.env.VITE_APPWRITE_DATABASE_ID,
            import.meta.env.VITE_APPWRITE_ALL_CARS_COLLECTION_ID,
            carId
          )
          .then((resp) => {
            setCarDetail(resp);
            console.log(resp, "one car");
          });
      } catch (error) {
        console.log(error);
      }
    }
    getCarData();
  }, [carId]);

  useEffect(() => {
    async function getAllCarsCollection() {
      try {
        await databases
          .listDocuments(
            import.meta.env.VITE_APPWRITE_DATABASE_ID,
            import.meta.env.VITE_APPWRITE_ALL_CARS_COLLECTION_ID,
            [Query.notEqual("$id", [carId])]
          )
          .then((resp) => {
            setAllCars(resp.documents);
            console.log(resp.documents, "all cars");
          });
      } catch (error) {
        console.log(error);
      }
    }
    getAllCarsCollection();
  }, [carId]);

  const reviewSubmitButtonHandler = async (event) => {
    event.preventDefault();
    if (
      !event.target.reviewText.value ||
      event.target.reviewText.value.trim().length < 1
    ) {
      console.log("didn't run");
      return;
    }
    try {
      await databases.createDocument(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        import.meta.env.VITE_APPWRITE_REVIEWS_COLLECTION_ID,
        ID.unique(),
        {
          reviewId: ID.unique(),
          carId: carId,
          reviewText: event.target.reviewText.value,
          createdAt: new Date().toISOString(),
          reviewRating: 1.2,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function getCarReviews() {
      try {
        await databases
          .listDocuments(
            import.meta.env.VITE_APPWRITE_DATABASE_ID,
            import.meta.env.VITE_APPWRITE_REVIEWS_COLLECTION_ID,
            [Query.equal("carId", carId)]
          )
          .then((resp) => {
            setAllReviews(resp.documents);
            console.log(resp.documents, "all reviews");
          });
      } catch (error) {
        console.log(error);
      }
    }
    getCarReviews();
  }, [carId]);

  return (
    <div className="carDetail">
      <div className="carDetail__main-container">
        <div className="carDetail__filter-sidebar">
          <div className="carDetail__all-filter-wrapper">
            <div className="carDetail__type-filter-box">
              <div className="carDetail__type-filter-heading-box">
                <p className="carDetail__type-filter-heading">TYPE</p>
              </div>
              <div className="carDetail__check1-box">
                <input
                  type="checkbox"
                  className="carDetail__type-filter-check1"
                />
                <p className="carDetail__type-filter1">Sport</p>
              </div>
              <div className="carDetail__check2-box">
                <input
                  type="checkbox"
                  className="carDetail__type-filter-check2"
                />
                <p className="carDetail__type-filter2">SUV</p>
              </div>
              <div className="carDetail__check3-box">
                <input
                  type="checkbox"
                  className="carDetail__type-filter-check3"
                />
                <p className="carDetail__type-filter3">MPV</p>
              </div>
              <div className="carDetail__check4-box">
                <input
                  type="checkbox"
                  className="carDetail__type-filter-check4"
                />
                <p className="carDetail__type-filter4">Sedan</p>
              </div>
              <div className="carDetail__check5-box">
                <input
                  type="checkbox"
                  className="carDetail__type-filter-check5"
                />
                <p className="carDetail__type-filter5">Coupe</p>
              </div>
              <div className="carDetail__check6-box">
                <input
                  type="checkbox"
                  className="carDetail__type-filter-check6"
                />
                <p className="carDetail__type-filter6">Hatchback</p>
              </div>
            </div>

            <div className="carDetail__seats-filter-box">
              <div className="carDetail__seats-filter-heading-box">
                <p className="carDetail__seats-filter-heading">CAPACITY</p>
              </div>
              <div className="carDetail__seats-check1-box">
                <input
                  type="checkbox"
                  className="carDetail__seats-filter-check1"
                />
                <p className="carDetail__seats-filter1">2/Person</p>
              </div>
              <div className="carDetail__seats-check2-box">
                <input
                  type="checkbox"
                  className="carDetail__seats-type-filter-check2"
                />
                <p className="carDetail__seats-filter2">4/Person</p>
              </div>
              <div className="carDetail__seats-check3-box">
                <input
                  type="checkbox"
                  className="carDetail__seats-filter-check3"
                />
                <p className="carDetail__seats-filter3">4/Person</p>
              </div>
              <div className="carDetail__seats-check4-box">
                <input
                  type="checkbox"
                  className="carDetail__seats-filter-check4"
                />
                <p className="carDetail__seats-filter4">8/More</p>
              </div>
            </div>

            <div className="carDetail__price-slider-box">
              <p className="carDetail__price-slider-heading">Price</p>
              <input
                className="carDetail__price-slider-input"
                type="range"
                min="0"
                max="500"
                step="1"
              />
            </div>
          </div>
        </div>

        <div className="carDetail__car-description-wrapper">
          <div className="carDetail__car-content-box">
            <div className="carDetail__car-content-inner-box">
              <div className="carDetail__car-image-box">
                <div className="carDetail__car-image-box-heading-1">
                  Sports car with the best design and acceleration
                </div>
                <div className="carDetail__car-image-box-heading-2">
                  Safety and comfort while driving a futuristic and elegant
                  sports car
                </div>
                <img
                  className="carDetail__image"
                  src="https://inventory-assets.motocommerce.ca/build_and_price/volkswagen/779684524/2t2t"
                />
              </div>
              <div className="carDetail__car-images-container">
                <div className="carDetail__car-image-1">Image 1</div>
                <div className="carDetail__car-image-2">Image 2</div>
                <div className="carDetail__car-image-3">Image 3</div>
              </div>
            </div>
            <div className="carDetail__car-description-box">
              <div className="carDetail__car-name-like-wrapper">
                <div className="carDetail__car-name-box">
                  {carDetail?.carMake?.makeCompanyName}
                  {console.log(carDetail?.carMake?.makeCompanyName)}
                </div>
                <div className="carDetail__car-like-box">❤️</div>
              </div>
              <div className="carDetail__car-rating-reviewer-wrapper">
                <div className="carDetail__car-rating-box">
                  <Rating
                    name="simple-controlled"
                    value={starValue}
                    size="small"
                    onChange={(newValue) => {
                      setStarValue(newValue);
                    }}
                  />
                </div>
                <div className="carDetail__car-reviewer-box">440+ Reviewer</div>
              </div>
              <div className="carDetail__car-detail-box-1">
                NISMO has become the embodiment of Nissan outstanding
                performance, inspired by the most unforgiving proving ground,
                the race track.
              </div>
              <div className="carDetail__car-detail-box-2">
                <div className="carDetail__car-Type-box">
                  <p className="carDetail__car-Type-heading">Type Car</p>
                  <p className="carDetail__car-Type">
                    {carDetail?.carTypes?.typeName}
                  </p>
                </div>
                <div className="carDetail__car-capacity-box">
                  <p className="carDetail__car-capacity-heading">Capacity</p>
                  <p className="carDetail__car-capacity">
                    {carDetail?.carSeats}/Person
                  </p>
                </div>
                <div className="carDetail__car-steering-box">
                  <p className="carDetail__car-steering-heading">Steering</p>
                  <p className="carDetail__car-steering">
                    {carDetail?.carEngineType}
                  </p>
                </div>
                <div className="carDetail__car-gasoline-box">
                  <p className="carDetail__car-gasoline-heading">Gasoline</p>
                  <p className="carDetail__car-gasoline">
                    {carDetail?.carFuelTankCapacity}L
                  </p>
                </div>
              </div>
              <div className="carDetail__prices-or-rent-btn-wrapper">
                <div className="carDetail__car-prices-box">
                  <div className="carDetail__car-new-price">
                    ${carDetail?.carRentPrice}/ day
                  </div>
                  <div className="carDetail__car-old-price">$600.00</div>
                </div>
                <Link
                  to={"/homepage/CarDetailPage/:carId/carPaymentPage"}
                  className="carDetail__car-rent-btn"
                >
                  Rent Now
                </Link>
              </div>
            </div>
          </div>
          <div className="carDetail__car-customer-reviews-wrapper">
            <div className="carDetail__car-customer-reviews-and-number-box">
              <h1 className="carDetail__car-customer-reviews-heading">
                Reviews
              </h1>
              <div className="carDetail__car-customer-reviews-number">14</div>
            </div>
            <form
              className="create__review-form"
              onSubmit={reviewSubmitButtonHandler}
            >
              <div className="carDetail__car-customer-add-review-input-and-btn-wrapper">
                <div className="carDetail__car-customer-add-review-input-box">
                  <textarea
                    className="carDetail__car-customer-add-review-input"
                    placeholder="   Add your review here"
                    name="reviewText"
                    required
                  />
                </div>
                <button className="carDetail__car-customer-add-review-submit-btn">
                  Add Review
                </button>
              </div>
            </form>
            {allReviews?.map((reviews) => {
              return (
                <div
                  className="carDetail__car-review-customer-card-1"
                  key={carId}
                >
                  <div className="carDetail__car-review-customer-details-box">
                    <div className="carDetail__car-review-customer-avatar-and-name">
                      <Avatar
                        alt="C"
                        src="/static/images/avatar/1.JPEG"
                        sx={{
                          width: 35,
                          height: 35,
                          backgroundColor: "rgba(182, 178, 178, 0.2)",
                        }}
                      />
                      <div className="carDetail__car-review-customer-name-and-profession-box">
                        <div className="carDetail__car-review-customer-name">
                          Chand Jamba
                        </div>
                        <div className="carDetail__car-review-customer-profession">
                          CEO at Amazon
                        </div>
                      </div>
                    </div>
                    <div className="carDetail__car-review-date-and-rating">
                      <div className="carDetail__car-review-date">
                        {new Date(reviews?.createdAt).toLocaleString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      <Rating
                        name="simple-controlled"
                        value={starValue}
                        size="small"
                        onChange={(newValue) => {
                          setStarValue(newValue);
                        }}
                      />
                    </div>
                  </div>
                  <div className="carDetail__car-review-box">
                    <p className="carDetail__car-review">
                      {reviews?.reviewText}
                    </p>
                  </div>
                </div>
              );
            })}
            <div className="carDetail__car-review-customer-card-1">
              <div className="carDetail__car-review-customer-details-box">
                <div className="carDetail__car-review-customer-avatar-and-name">
                  <Avatar
                    alt="C"
                    src="/static/images/avatar/1.JPEG"
                    sx={{
                      width: 35,
                      height: 35,
                      backgroundColor: "rgba(182, 178, 178, 0.2)",
                    }}
                  />
                  <div className="carDetail__car-review-customer-name-and-profession-box">
                    <div className="carDetail__car-review-customer-name">
                      Chand Jamba
                    </div>
                    <div className="carDetail__car-review-customer-profession">
                      CEO at Amazon
                    </div>
                  </div>
                </div>
                <div className="carDetail__car-review-date-and-rating">
                  <div className="carDetail__car-review-date">21 July 2022</div>
                  <Rating
                    name="simple-controlled"
                    value={starValue}
                    size="small"
                    onChange={(newValue) => {
                      setStarValue(newValue);
                    }}
                  />
                </div>
              </div>
              <div className="carDetail__car-review-box">
                <p className="carDetail__car-review">
                  We are very happy with the service from the MORENT App. Morent
                  has a low price and also a large variety of cars with good and
                  comfortable facilities. In addition, the service provided by
                  the officers is also very friendly and very polite.
                </p>
              </div>
            </div>

            <button className="carDetail__car-review-more-btn">
              Show More
            </button>
          </div>
          <div className="carDetail__recommended-cars-heading-container">
            <h1 className="carDetail__recommended-cars-heading">
              Recommended Cars
            </h1>
            <button className="carDetail__show-more-btn">Show All</button>
          </div>
          <div className="carDetail__recommend-cars-cards-wrapper">
            {allCars?.map((cars) => {
              return (
                <div key={cars?.carId} className="carDetail__car-card1">
                  <div className="carDetail__car-navbar">
                    <div className="carDetail__car-model-info-box">
                      <div className="carDetail__car-model-box">
                        {cars?.carModels?.modelName}
                      </div>
                      <div className="carDetail__car-type-box">
                        {cars?.carTypes?.typeName}
                      </div>
                    </div>
                    <div className="carDetail__car-like-btn">❤️</div>
                  </div>
                  <div className="carDetail__car-card-image-box">
                    <img
                      className="carDetail__car-card-image"
                      src="https://inventory-assets.motocommerce.ca/build_and_price/volkswagen/779684524/2t2t"
                    />
                  </div>
                  <div className="carDetail__car-specifications-bar">
                    <div className="carDetail__car-tank-capacity-box">
                      <svg
                        className="carDetail__tank-fuel-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <line x1="3" x2="15" y1="22" y2="22" />
                        <line x1="4" x2="14" y1="9" y2="9" />
                        <path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" />
                        <path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5" />
                      </svg>
                      <p className="carDetail__tank-litres">
                        {cars?.carFuelTankCapacity}L
                      </p>
                    </div>
                    <div className="carDetail__car-gear-shift-box">
                      <svg
                        className="carDetail__car-gear-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
                        <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                        <path d="M12 2v2" />
                        <path d="M12 22v-2" />
                        <path d="m17 20.66-1-1.73" />
                        <path d="M11 10.27 7 3.34" />
                        <path d="m20.66 17-1.73-1" />
                        <path d="m3.34 7 1.73 1" />
                        <path d="M14 12h8" />
                        <path d="M2 12h2" />
                        <path d="m20.66 7-1.73 1" />
                        <path d="m3.34 17 1.73-1" />
                        <path d="m17 3.34-1 1.73" />
                        <path d="m11 13.73-4 6.93" />
                      </svg>
                      <p className="carDetail__gear-type">
                        {cars?.carEngineType}
                      </p>
                    </div>
                    <div className="carDetail__car-seats-box">
                      <svg
                        className="carDetail__car-seats-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                      <p className="carDetail__seats-numbers">
                        {cars?.carSeats}/Seats
                      </p>
                    </div>
                  </div>
                  <div className="carDetail__car-rent-and-btn-container">
                    <div className="carDetail__car-rent-per-day">
                      ${cars?.carRentPrice}/day
                    </div>
                    <button className="carDetail__car-rent-btn">
                      Rent Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
