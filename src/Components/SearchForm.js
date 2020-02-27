import React , {useState,useEffect}from 'react'
import TimePicker from "rc-time-picker";
import TimeInput from "react-time-input";
import { Redirect } from "react-router-dom";
import DatePicker from "react-datepicker";
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import InputGroup from "react-bootstrap/InputGroup";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { Link } from 'react-router-dom';
import {
  getSelectedDate,
  getChangeTime,
  getChangePeople,
  getSelectedAddress,
  getChangeAddress,
  getCurrentAddress,
  removeClearButton
} from '../Redux/SearchForm/SearchFormActions'
import { useSelector,useDispatch } from 'react-redux'

function SearchForm(){
  const search_info = useSelector(state => state.Search)
  const dispatch = useDispatch();
   const [search,setSearch] = useState(false)
  const searchOptions = {
      componentRestrictions: { country: "us" }
    };
  const format = "h:mm a";

// hooks start
  useEffect(() =>{
    dispatch(getCurrentAddress())
  },[])
// hooks end

// function start
  const handleSelectdate = (date) =>{
    const formatted_date = date.toLocaleDateString();
    dispatch(getSelectedDate(formatted_date))
  }

  const handleTimeChange = time =>{
    const format = "h:mm a";
    const selectedTime = time && time.format(format);
    dispatch(getChangeTime(selectedTime))
  }

  const handlechange = address =>{
    const data = {
      address : address,
      showclear : false
    }
    dispatch(getChangeAddress(data))
  }

  const handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log("Success", latLng))
      .catch(error => console.error("Error", error));
      const data = {
        address : address,
        showclear : true
      }
    dispatch(getSelectedAddress(data))
  };

  const handleRemoveButton = () =>{
    const data = {
      address : null,
      current_address : '',
      showclear : false
    }
    dispatch(removeClearButton(data))
  }

const simpleBooking = () => {
    setSearch(true)

  }

  // function end

  if(search === true){
    return (
      <Redirect
        to={{
          pathname: "/search"
        }}
      />
    );
  }

    return(
      <div className="h-form bt-form-home">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="h-form-wrapper text-center">
                <form onSubmit={() =>simpleBooking()}>
                  <ul>
                    <li>
                      <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text id="basic-addon1">
                            <i className="far fa-calendar-alt" />
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <DatePicker
                          value={search_info.bookingDate}
                          placeholderText="mm/dd/yyyy"
                          onSelect={(date) => handleSelectdate(date)}
                          dateFormat="Pp"
                          className="form-control"
                        />
                      </InputGroup>
                    </li>
                    <li>
                      <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text id="basic-addon1">
                            <i className="far fa-clock" />
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <TimePicker
                          showSecond={false}
                          defaultValue= {moment(search_info.bookingTime, format)}
                          className="form-control"
                          format={format}
                          use12Hours
                          inputReadOnly
                          onChange={time => handleTimeChange(time)}
                        />
                      </InputGroup>
                    </li>
                    <li>
                      <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text id="basic-addon1">
                            <i className="far fa-user" />
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <select
                          className="form-control"
                          id=""
                          onChange={e => dispatch(getChangePeople(e.target.value)) }
                        >
                          <option value={search_info.people}>
                            {search_info.people} People
                          </option>
                          <option value="1">1 People</option>
                          <option value="2">2 People</option>
                          <option value="3">3 People</option>
                          <option value="4">4 People</option>
                          <option value="5">5 People</option>
                          <option value="6">6 People</option>
                        </select>
                      </InputGroup>
                    </li>
                    <li>
                      <InputGroup className="ab mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text id="basic-addon1">
                            <i className="fa fa-search" />
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <PlacesAutocomplete
                          value={
                            search_info.address === null
                              ? search_info.current_address
                              : search_info.address
                          }
                          onChange={address => handlechange(address)}
                          onSelect={address => handleSelect(address)}
                          searchOptions={searchOptions}
                        >
                          {({
                            getInputProps,
                            suggestions,
                            getSuggestionItemProps,
                            loading
                          }) => (
                            <div>
                              <input
                                {...getInputProps({
                                  placeholder: "Search Places ...",
                                  className: "form-control"
                                })}
                              />
                              <div className="autocomplete-dropdown-container">
                                {loading && <div>Loading...</div>}
                                {suggestions.map(suggestion => {
                                  const className = suggestion.active
                                    ? "suggestion-item--active"
                                    : "suggestion-item";
                                  // inline style for demonstration purpose
                                  const style = suggestion.active
                                    ? {
                                        backgroundColor: "#fafafa",
                                        cursor: "pointer"
                                      }
                                    : {
                                        backgroundColor: "#ffffff",
                                        cursor: "pointer"
                                      };
                                  return (
                                    <div
                                      {...getSuggestionItemProps(suggestion, {
                                        className,
                                        style
                                      })}
                                    >
                                      <span>{suggestion.description}</span>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </PlacesAutocomplete>
                        {search_info.showclear ? (
                          <button
                            className="close-icon"
                            type="reset"
                            onClick={() => handleRemoveButton()}
                          ></button>
                        ) : null}
                      </InputGroup>
                    </li>
                    <li>
                      {" "}
                      <button type="submit" value="Submit" className="searcbtn">
                        Let’s go
                      </button>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default SearchForm;
