import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faChartPie } from "@fortawesome/free-solid-svg-icons";
import PeakHoursChart from "./shared/PeakHoursChart";
import axios from "axios";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { App_host } from "../Data";

const UserDashBoard = () => {
  const [currentTime, setCurrentTime] = useState("00:00:00");
  const [isPunchedIn, setIsPunchedIn] = useState(false);
  const [isPunchedOut, setIsPunchedOut] = useState(false);
  const [activeUser, setActiveUser] = useState(0);
  const [totalUser, settotalUser] = useState(0);
  const [timerInterval, setTimerInterval] = useState(null);

  let user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  const activegym = localStorage.getItem("activegym");

  const getAttendance = async () => {
    try {
      const response = await axios.get(
        `${App_host}/attendence/getAttendence?jimId=${activegym}`,
        {
          headers: {
            token: token,
          },
        }
      );

      const attendanceData = response?.data?.data;
      console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", attendanceData);
      if (attendanceData) {
        const { status, total_mint_spend } = attendanceData;
        if (status === "punchIn") {
          setIsPunchedIn(true);
          startTimer(total_mint_spend);
        } else if (status === "punchOut") {
          setIsPunchedOut(true);
          setIsPunchedIn(false);
          setCurrentTime(formatTimeFromSeconds(total_mint_spend));
        }
      } else {
        setIsPunchedOut(false);
        setIsPunchedIn(false);
        setCurrentTime("00:00:00");
      }
    } catch (error) {
      console.error("Error fetching attendance:", error);
    }
  };

  const startTimer = (initialTimeInSeconds) => {
    stopTimer(); // Stop any existing timer before starting a new one

    let timeInSeconds = initialTimeInSeconds;

    const intervalId = setInterval(() => {
      const hours = Math.floor(timeInSeconds / 3600);
      const minutes = Math.floor((timeInSeconds % 3600) / 60);
      const seconds = timeInSeconds % 60;
      const formattedTime = `${formatTimeComponent(
        hours.toFixed()
      )}:${formatTimeComponent(minutes.toFixed())}:${formatTimeComponent(
        seconds.toFixed()
      )}`;
      setCurrentTime(formattedTime);

      timeInSeconds++;
    }, 1000);

    setTimerInterval(intervalId); // Save intervalId to state for later reference
  };

  const stopTimer = () => {
    if (timerInterval) {
      clearInterval(timerInterval);
      setTimerInterval(null);
    }
  };
  const handleAttendanceAction = async () => {
    try {
      const markAttendance = await axios.post(
        `${App_host}/attendence/addUpdateAttendence?jimId=${activegym}`,
        {},
        {
          headers: {
            token: token,
          },
        }
      );

      const attendanceData = markAttendance.data.data;

      if (attendanceData.status === "punchIn") {
        setIsPunchedIn(true);
        startTimer(
          attendanceData.total_mint_spend > 0
            ? attendanceData.total_mint_spend
            : 0
        );
        toast.success("check In secussfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      } else if (attendanceData.status === "punchOut") {
        setIsPunchedOut(true);
        setIsPunchedIn(false);
        const totalSecondsSpent = attendanceData.total_mint_spend;

        setCurrentTime(formatTimeFromSeconds(totalSecondsSpent));
        stopTimer();
        toast.success("check Out secussfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }

      getActiveUser();
    } catch (error) {
      console.error("Error performing attendance action:", error);
    }
  };

  const formatTimeFromSeconds = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${formatTimeComponent(hours.toFixed())}:${formatTimeComponent(
      minutes.toFixed()
    )}:${formatTimeComponent(seconds.toFixed())}`;
  };

  const formatTimeComponent = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  let getActiveUser = async () => {
    const activeuser = await axios.get(
      `${App_host}/attendence/getActiveUser?jimId=${activegym}`,
      {
        headers: {
          token: token,
        },
      }
    );
    if (activeuser) {
      console.log();
      settotalUser(activeuser.data.data.total_users);
      setActiveUser(activeuser.data.data.active_users);
    }
  };

  useEffect(() => {
    getAttendance();
    getActiveUser();

    return () => {
      stopTimer(); // Clean up timer on component unmount
    };
  }, []);

  return (
    <>
      <div className="content-wrapper">
        <div className="container-xxl flex-grow-1 container-p-y">
          <div className="row">
            {/* Attendance Card */}
            <div className="col-xl-6 mb-4 col-lg-6 col-12">
              <div className="card">
                <div className="d-flex align-items-end row">
                  <div className="col-7">
                    <div className="card-body text-nowrap">
                      <h5 className="card-title mb-0 px-3">
                        Welcome {user?.full_name}
                      </h5>
                      <p>Current Time: {currentTime}</p>
                      <button
                        className="btn btn-primary"
                        onClick={handleAttendanceAction}
                      >
                        {isPunchedIn ? "Check-out" : "Check-in"}
                      </button>
                    </div>
                  </div>
                  <div className="col-5 text-center text-sm-left">
                    <div className="card-body pb-0 px-0 px-md-4">
                      <img
                        src="../assets/img/illustrations/card-advance-sale.png"
                        height="140"
                        alt="view sales"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Statistics */}
            <div className="col-xl-6 mb-4 col-lg-6 col-12">
              <div className="card h-100">
                <div className="card-header">
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="card-title mb-0">Statistics</h5>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row gy-3">
                    <div className="col-md-6 col-6">
                      <div className="d-flex align-items-center">
                        <div className="badge rounded-pill bg-label-primary me-3 p-2">
                          <FontAwesomeIcon icon={faChartPie} />
                        </div>
                        <div className="card-info">
                          <h5 className="mb-0">{activeUser}</h5>
                          <small>Active Users</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-6">
                      <div className="d-flex align-items-center">
                        <div className="badge rounded-pill bg-label-info me-3 p-2">
                          <FontAwesomeIcon icon={faUsers} />
                        </div>
                        <div className="card-info">
                          <h5 className="mb-0">{totalUser}</h5>
                          <small>Total Users</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-12 mb-4">
              <div className="row">
                {/* <div className="card-body p-0">
                                    <div className="row row-bordered g-0">
                                        <div className="col-md-12 position-relative p-4"> */}
                <div className="col-12 ">
                  <h5 className="m-0 card-title">Peak Hours</h5>
                </div>
                <div
                  id="col-12"
                  className="mt-n1"
                  style={{
                    width: "50%",
                    margin: "auto",
                    marginTop: "100px",
                  }}
                >
                  <PeakHoursChart />
                </div>
                {/* </div>

                                    </div>
                                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="content-backdrop fade"></div>
      </div>
      <ToastContainer />
    </>
  );
};

export default UserDashBoard;
