/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { useRouter } from "next/router";
import "react-datepicker/dist/react-datepicker.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
// import airports from "../../data/airports";
import fromFlight from "../../data/popularFromFlights";
import toFlight from "../../data/popularToFlights";

const HeaderVisited = ({ location }: any) => {
  const router = useRouter();

  // const [startDate, setStartDate] = useState(new Date());
  const [startDate, setStartDate] = useState(
    new Date().setDate(new Date().getDate() + 1)
  );
  const [value, setValue] = useState();

  const [fareInfo, setFareInfo] = useState(false);
  const [From, setFrom] = useState("");
  const [To, setTo] = useState("");

  const submitForm = (e: any) => {
    e.preventDefault();
    setFareInfo(true);
  };

  const getQuote = (e: any) => {
    e.preventDefault();
    router.push("/thanks");
  };

  // function getTo() {
  //   for (let i = 0; i < popularFlights.length; i++) {
  //     if (popularFlights[i].from === From) {
  //       setTo(popularFlights[i].to);
  //       break;
  //     }
  //   }
  // }

  // useEffect(() => {
  //   function getFrom() {
  //     let from = airports.find((airport) => airport.location === location.city);
  //     if (from) {
  //       setFrom(`${from.location}-${from.name}-${from.country}`);
  //       getTo();
  //     }
  //   }
  //   getFrom();
  // }, [location.city]);

  // useEffect(() => {
  //   function getTo() {
  //     for (let i = 0; i < popularFlights.length; i++) {
  //       if (popularFlights[i].from === From) {
  //         setTo(popularFlights[i].to);
  //         break;
  //       }
  //     }
  //   }
  //   getTo();
  // }, [From]);

  return (
    <>
      {!fareInfo ? (
        <header>
          <div className="w-screen h-screen flex flex-col justify-center items-center bg-[url('https://elitetraveler.com/wp-content/uploads/2020/11/private-jet-in-clouds-scaled-e1606414154885.jpg')] bg-no-repeat bg-cover bg-center relative pt-16">
            <div className="bg-gradient-to-b from-black opacity-50 absolute top-0 right-0 left-0 bottom-0 z-10"></div>
            <div className="z-40 w-full flex flex-col justify-center items-center gap-4">
              <h2 className="text-white font-bold text-6xl tracking-wide">
                PRIVATE JET CHARTER
              </h2>
              <h3 className="text-white font-normal tracking-wider text-2xl">
                SWISS EXPERTISE. OPERATING WORLDWIDE
              </h3>
              <form
                onSubmit={submitForm}
                className="bg-text/60 w-3/4 my-10 p-10 flex flex-col justify-center items-center rounded-xl"
              >
                <div className="flex gap-6 justify-center items-center">
                  <input
                    className="p-2 outline-none rounded-sm"
                    type="text"
                    placeholder="From"
                    list="fromAirportsList"
                    value={From ? From : ""}
                    onChange={(e) => setFrom(e.target.value)}
                  />
                  <datalist id="fromAirportsList">
                    <option>Nearest Airports</option>
                    {fromFlight.map((airport, index) => {
                      if (airport.city === location.city) {
                        return airport.nearestAirports.map((air, index) => {
                          return (
                            <option key={index} value={airport.city}>
                              {air}, {airport.country}
                            </option>
                          );
                        });
                      }
                    })}
                    <option>Most Popular</option>
                    {fromFlight.map((airport, index) => {
                      if (airport.city !== location.city) {
                        
                          return (
                            <option key={index}>
                              {airport.city}, {airport.country}
                            </option>
                          )
                      }
                    })}
                  </datalist>
                  <input
                    className="p-2 outline-none rounded-sm"
                    type="text"
                    placeholder="To"
                    list="toAirportsList"
                    value={To}
                    onChange={(e) => setTo(e.target.value)}
                  />

                  <datalist id="toAirportsList">
                    <option>Popular Airports</option>
                    {toFlight.map((flight, index) => {
                      if (flight.fromCity === From) {
                        return flight.toAirports.map((airport, index) => {
                          return (
                            <option key={index} value={`${airport.city}, ${airport.country}`}>
                              {airport.airport}
                            </option>
                          );
                        });
                      }
                    })}
                    {/* <option>
                      Popular Cities
                    </option> */}
                  </datalist>

                  <DatePicker
                    className="p-2 outline-none w-40 rounded-sm"
                    selected={startDate}
                    onChange={(date: any) => setStartDate(date)}
                  />
                  {/* <DatePicker 
                selected={endDate} 
                onChange={(date: any) => setEndDate(date)} 
                placeholderText="This has disabled keyboard navigation"
              /> */}
                  <select
                    className="p-2.5 rounded-sm outline-none"
                    defaultValue="any"
                    id="time-select-0"
                    name="time-0"
                  >
                    <option value="any">Time</option>
                    <option value="06:00">06:00</option>
                    <option value="07:00">07:00</option>
                    <option value="08:00">08:00</option>
                    <option value="09:00">09:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    <option value="22:00">22:00</option>
                    <option value="23:00">23:00</option>
                    <option value="00:00">00:00</option>
                    <option value="01:00">01:00</option>
                    <option value="02:00">02:00</option>
                    <option value="03:00">03:00</option>
                    <option value="04:00">04:00</option>
                    <option value="05:00">05:00</option>
                  </select>
                  <input
                    className="outline-none p-2"
                    type="number"
                    id="passenger-count-0"
                    min="1"
                    max="40"
                    name="passenger-count-0"
                    step="1"
                    placeholder="1"
                  />
                </div>
                <input
                  className="bg-primary py-2 px-10 text-lg rounded-md shadow-lg my-6 hover:bg-white text-black transition-all font-medium"
                  type="submit"
                  value="Request A Quote"
                />
              </form>
            </div>
          </div>
        </header>
      ) : (
        <header>
          <div className="w-screen h-screen flex flex-col justify-center items-center bg-[url('https://elitetraveler.com/wp-content/uploads/2020/11/private-jet-in-clouds-scaled-e1606414154885.jpg')] bg-no-repeat bg-cover bg-center relative">
            <div className="bg-gradient-to-b from-black opacity-50 absolute top-0 right-0 left-0 bottom-0 z-10"></div>
            <div className="z-40 w-3/4 pb-10 rounded-lg text-white bg-text/60 flex flex-col justify-center items-center gap-4">
              <div className="bg-black/40 text-primary w-full py-6 px-20 rounded-t-lg flex flex-col gap-4 justify-center items-center">
                <h2 className="text-2xl font-light">Price Approximately..</h2>
                <h3 className="text-md">
                  {From} - {To}
                </h3>
                <h2 className="font-semibold text-white text-3xl">
                  $15,000 - $18,000
                </h2>
              </div>
              <div>
                <h3 className="text-lg px-20">
                  Thank you for your flight request. The next step is to fill in
                  your contact details, click GET A LIVE QUOTE and an Account
                  Manager will contact you before sending a quote based on your
                  requirements and aircraft availability.
                </h3>
                <form
                  onSubmit={getQuote}
                  autoComplete="off"
                  className="text-black mx-64 pt-10"
                >
                  <div className="flex justify-between items-center gap-6">
                    <select
                      className="p-2.5 outline-none rounded-sm"
                      id="title-select"
                      name="title"
                      defaultValue="Mr"
                    >
                      <option value="Mr">Mr</option>
                      <option value="Mrs">Mrs</option>
                      <option value="Ms">Ms</option>
                      <option value="Dr.">Dr.</option>
                      <option value="Prof.">Prof.</option>
                    </select>
                    <input
                      className="p-2 outline-none w-2/5 rounded-sm"
                      maxLength={30}
                      id="first-name"
                      type="text"
                      name="first-name"
                      placeholder="First name"
                    />
                    <input
                      className="p-2 outline-none w-2/5 rounded-sm"
                      maxLength={30}
                      id="last-name"
                      type="text"
                      name="last-name"
                      placeholder="Last name"
                    />
                  </div>
                  <div className="flex justify-between items-center gap-6 pt-4">
                    <input
                      className="email-input p-2 rounded-sm w-5/12 outline-none"
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                    <PhoneInput
                      className="text-black w-1/2 bg-white rounded-sm p-2"
                      defaultCountry={location.country}
                      value={value}
                      placeholder="Phone number"
                      onChange={setValue}
                      inputStyle={{
                        border: "none",
                        outline: "none",
                      }}
                    />
                  </div>
                  <div className="flex justify-center items-center py-4">
                    <input
                      className="bg-white py-2 px-10 text-lg rounded-md shadow-lg cursor-pointer text-black font-medium"
                      type="submit"
                      value="GET A LIVE QUOTE"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default HeaderVisited;
