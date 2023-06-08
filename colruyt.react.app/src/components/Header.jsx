import React, { useEffect, useState } from "react";
import Style from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import userSlice, { removeUser } from "../store/User/userSlice";


const Header = () => {
  const [stateChanged, setStateChanged] = useState(false);

  const navigate = useNavigate();
  const user = useSelector((state) => (state.user))
  const dispatch = useDispatch()
  const isLoggedIn = user.email !== ""
  const handleAfmeldenClick = () => {
    dispatch(removeUser());
    setStateChanged(prev => !prev);
  };
  console.log(user)
  const handleAanmeldenClick = () => {
    navigate("/registratie");
  };
  const handleBasketClick = () => {
    navigate("/cart")
  }
  const handleLogoClick = () => {
    navigate("/");
  }

  useEffect(() => {
  }, [stateChanged]);
  return (
    <div className={Style.header}>
      <div className={Style.logoContainer}>
        <svg onClick={handleLogoClick} width="231px" height="48px" viewBox="0 0 231 48" version="1.1" xmlns="http://www.w3.org/2000/svg" className={Style.borderRight}>
          <path
            d="M157.057,9.369 C156.958,7.493 156.946,3.234 156.946,2.518 C156.946,1.345 156.958,0.728 156.971,0.074 L156.897,0 C156.403,0.099 156.242,0.136 155.687,0.21 L155.625,0.284 C155.662,0.753 155.687,1.074 155.711,2.025 C155.748,3.493 155.748,4.962 155.748,6.431 C155.748,7.678 155.736,8.579 155.724,9.394 L155.786,9.468 C156.316,9.431 156.489,9.431 156.983,9.443 L157.057,9.369"
            id="Fill-13"
            fill="#1A1919"
          ></path>
          <path
            d="M161.953,9.394 L162.027,9.468 C162.496,9.443 162.583,9.443 163.101,9.443 L163.175,9.369 C163.101,8.53 163.101,8.011 163.101,6.826 L163.101,5.542 C163.113,4.567 163.126,4.123 162.891,3.691 C162.471,2.938 161.595,2.901 161.163,2.901 C160.645,2.901 159.941,3 159.349,3.271 L159.287,3.357 C159.275,3.765 159.275,3.851 159.237,4.222 L159.324,4.271 C159.595,4.086 160.04,3.802 160.842,3.802 C161.928,3.802 161.928,4.407 161.928,5.086 L161.385,5.184 C160.459,5.37 158.707,5.74 158.707,7.604 C158.707,8.665 159.361,9.542 160.472,9.542 C161.225,9.542 161.669,9.196 161.941,8.974 L161.953,9.394 Z M161.928,8.134 C161.755,8.295 161.41,8.616 160.879,8.616 C160.385,8.616 159.867,8.283 159.867,7.493 C159.867,7.122 159.941,6.567 160.632,6.234 C160.916,6.086 161.114,6.048 161.928,5.876 L161.928,8.134 L161.928,8.134 Z"
            id="Fill-14"
            fill="#1A1919"
          ></path>
          <path
            d="M168.059,9.394 L168.133,9.468 C168.602,9.443 168.689,9.443 169.207,9.443 L169.281,9.369 C169.207,8.53 169.207,8.011 169.207,6.826 L169.207,5.542 C169.22,4.567 169.232,4.123 168.997,3.691 C168.578,2.938 167.701,2.901 167.269,2.901 C166.751,2.901 166.047,3 165.455,3.271 L165.393,3.357 C165.38,3.765 165.38,3.851 165.344,4.222 L165.43,4.271 C165.702,4.086 166.146,3.802 166.948,3.802 C168.034,3.802 168.034,4.407 168.034,5.086 L167.491,5.184 C166.565,5.37 164.813,5.74 164.813,7.604 C164.813,8.665 165.467,9.542 166.578,9.542 C167.331,9.542 167.775,9.196 168.047,8.974 L168.059,9.394 Z M168.034,8.134 C167.862,8.295 167.516,8.616 166.985,8.616 C166.491,8.616 165.973,8.283 165.973,7.493 C165.973,7.122 166.047,6.567 166.738,6.234 C167.022,6.086 167.22,6.048 168.034,5.876 L168.034,8.134 L168.034,8.134 Z"
            id="Fill-15"
            fill="#1A1919"
          ></path>
          <path
            d="M175.782,3.826 C175.794,3.481 175.807,3.419 175.832,3.086 L175.77,3.012 C175.585,3.012 174.77,3.024 174.609,3.024 L173.61,3.024 C172.894,3.024 172.202,3.074 171.647,3.642 C171.351,3.95 171.055,4.469 171.055,5.271 C171.055,6.48 171.857,6.962 172.129,7.098 C171.807,7.628 171.733,7.752 171.462,8.27 L171.499,8.382 C171.746,8.542 171.771,8.567 172.042,8.702 C171.314,9.221 170.894,9.702 170.894,10.406 C170.894,11.282 171.709,12.085 173.215,12.085 C174.968,12.085 175.708,11.073 175.708,10.122 C175.708,9.048 174.943,8.678 174.128,8.357 C173.894,8.27 172.857,7.888 172.647,7.814 L172.635,7.727 C172.733,7.517 172.746,7.493 172.869,7.271 C173.005,7.295 173.128,7.32 173.326,7.32 C174.745,7.32 175.412,6.345 175.412,5.32 C175.412,5.073 175.375,4.259 174.721,3.839 C175.19,3.851 175.288,3.851 175.708,3.901 L175.782,3.826 Z M172.758,8.986 C172.857,9.023 173.289,9.196 173.375,9.233 C174.079,9.517 174.498,9.739 174.498,10.332 C174.498,10.912 173.992,11.369 173.252,11.369 C172.486,11.369 171.98,10.912 171.98,10.295 C171.98,9.764 172.264,9.406 172.758,8.986 Z M174.252,5.283 C174.252,6.11 173.844,6.604 173.264,6.604 C172.659,6.604 172.227,6.073 172.227,5.197 C172.227,4.32 172.622,3.777 173.227,3.777 C173.857,3.777 174.252,4.358 174.252,5.283 L174.252,5.283 Z"
            id="Fill-16"
            fill="#1A1919"
          ></path>
          <path
            d="M177.012,8.258 C177.012,8.394 177.012,8.53 177,8.678 C177,8.838 176.988,8.999 176.975,9.159 L177.037,9.27 C177.519,9.492 178.037,9.579 178.568,9.579 C179.111,9.579 179.716,9.48 180.21,8.986 C180.493,8.702 180.765,8.258 180.765,7.616 C180.765,6.53 179.987,6.11 179.358,5.765 L178.963,5.555 C178.568,5.333 178.198,5.123 178.198,4.617 C178.198,4.098 178.58,3.74 179.197,3.74 C179.531,3.74 180.024,3.851 180.395,4.184 L180.481,4.16 C180.481,4.012 180.481,3.851 180.493,3.703 C180.493,3.543 180.506,3.394 180.518,3.246 L180.481,3.16 C179.95,2.938 179.358,2.901 179.086,2.901 C178.469,2.901 177.889,3.061 177.481,3.456 C177.148,3.802 176.988,4.271 176.988,4.752 C176.988,5.752 177.593,6.11 178.346,6.542 L178.704,6.74 C179.136,6.987 179.506,7.197 179.506,7.752 C179.506,8.27 179.136,8.74 178.457,8.74 C177.766,8.74 177.309,8.382 177.099,8.221 L177.012,8.258"
            id="Fill-17"
            fill="#1A1919"
          ></path>
          <path
            d="M184.735,3.876 C184.748,3.592 184.748,3.456 184.785,3.098 L184.723,3.024 C184.575,3.024 184.439,3.037 184.291,3.037 C184.131,3.049 183.958,3.049 183.699,3.061 C183.699,2.111 183.699,1.79 183.736,1.21 L183.661,1.148 C183.106,1.308 183.02,1.333 182.526,1.444 L182.464,1.518 C182.489,2.209 182.489,2.42 182.489,3.049 C182.304,3.037 182.156,3.037 181.859,3.024 L181.798,3.098 C181.785,3.407 181.773,3.469 181.748,3.876 L181.81,3.95 C182.143,3.938 182.18,3.938 182.489,3.925 L182.489,6.678 L182.476,7.369 C182.476,7.9 182.476,8.184 182.514,8.456 C182.649,9.196 183.131,9.542 183.908,9.542 C184.254,9.542 184.526,9.492 184.723,9.418 L184.797,9.32 C184.809,8.949 184.809,8.875 184.846,8.517 L184.773,8.468 C184.686,8.53 184.55,8.603 184.316,8.603 C183.686,8.603 183.686,8.073 183.686,7.357 L183.686,3.938 C183.871,3.938 184.229,3.938 184.674,3.95 L184.735,3.876"
            id="Fill-18"
            fill="#1A1919"
          ></path>
          <path
            d="M190.549,6.332 L190.636,6.258 C190.66,5.123 190.586,3.678 189.364,3.098 C189.08,2.963 188.759,2.901 188.426,2.901 C188.093,2.901 187.759,2.963 187.463,3.098 C187.081,3.283 185.957,3.938 185.957,6.234 C185.957,7.11 186.105,7.999 186.648,8.678 C187.315,9.505 188.191,9.579 188.735,9.579 C189.006,9.579 189.426,9.554 189.808,9.443 C190.08,9.369 190.228,9.282 190.315,9.233 L190.376,9.135 C190.401,8.74 190.401,8.641 190.438,8.233 L190.351,8.196 C190.129,8.357 189.722,8.653 189.018,8.653 C188.809,8.653 187.858,8.653 187.401,7.665 C187.204,7.246 187.167,6.802 187.167,6.332 L190.549,6.332 Z M187.192,5.505 C187.216,5.197 187.265,4.654 187.574,4.222 C187.87,3.777 188.241,3.753 188.377,3.753 C188.586,3.753 189.191,3.851 189.376,4.74 C189.438,5.024 189.438,5.271 189.438,5.505 L187.192,5.505 L187.192,5.505 Z"
            id="Fill-19"
            fill="#1A1919"
          ></path>
          <path
            d="M197.183,2.938 C196.665,3.049 196.516,3.074 195.986,3.135 L195.924,3.209 C195.986,4.098 196.06,5.147 196.06,8.394 C196.06,9.949 196.047,10.517 196.023,11.949 L196.085,12.023 C196.319,12.011 196.541,11.998 196.776,11.998 C196.949,11.998 197.121,12.011 197.294,12.011 L197.356,11.937 C197.307,10.517 197.294,10.357 197.282,9.455 C197.566,9.468 197.677,9.48 197.85,9.48 C198.269,9.48 199.306,9.431 200.084,8.542 C200.701,7.826 200.899,6.851 200.899,5.888 C200.899,4.333 200.306,3.382 199.491,3.037 C199.269,2.95 199.022,2.901 198.788,2.901 C197.986,2.901 197.492,3.357 197.257,3.58 L197.257,3 L197.183,2.938 Z M197.282,4.456 C197.492,4.222 197.837,3.863 198.38,3.863 C198.874,3.863 199.171,4.172 199.319,4.407 C199.467,4.654 199.553,4.938 199.59,5.221 C199.64,5.468 199.652,5.715 199.652,5.962 C199.652,6.629 199.528,7.32 199.245,7.789 C198.763,8.542 197.986,8.579 197.652,8.579 C197.504,8.579 197.418,8.567 197.294,8.554 C197.282,7.271 197.282,6.493 197.282,4.456 L197.282,4.456 Z"
            id="Fill-20"
            fill="#1A1919"
          ></path>
          <path
            d="M203.956,9.369 C203.919,8.554 203.894,7.246 203.894,6.431 C203.894,5.394 203.906,4.802 204.326,4.382 C204.486,4.234 204.721,4.11 204.993,4.11 C205.289,4.11 205.449,4.222 205.573,4.308 L205.659,4.259 C205.684,3.728 205.696,3.604 205.77,3.061 L205.721,2.975 C205.585,2.938 205.474,2.901 205.276,2.901 C204.363,2.901 204.042,3.753 203.894,4.123 C203.906,3.753 203.906,3.382 203.919,3 L203.832,2.925 C203.301,3.061 203.19,3.074 202.635,3.135 L202.573,3.209 C202.659,4.148 202.684,4.814 202.684,7.122 C202.684,8.147 202.672,8.727 202.647,9.394 L202.721,9.468 C203.277,9.431 203.412,9.431 203.882,9.443 L203.956,9.369"
            id="Fill-21"
            fill="#1A1919"
          ></path>
          <path
            d="M208.559,9.369 C208.522,8.492 208.485,7.542 208.485,5.345 C208.485,4.456 208.498,3.765 208.522,3.012 L208.46,2.938 C207.918,3.049 207.782,3.074 207.238,3.135 L207.164,3.209 C207.202,3.629 207.251,4.234 207.251,6.666 C207.251,7.875 207.238,8.653 207.202,9.394 L207.275,9.468 C207.807,9.431 207.979,9.431 208.498,9.443 L208.559,9.369 Z M208.51,1.222 C208.498,0.839 208.498,0.667 208.522,0.173 L208.436,0.099 C207.954,0.173 207.819,0.185 207.3,0.234 L207.214,0.308 C207.226,0.481 207.226,0.654 207.226,0.827 C207.226,1.012 207.226,1.185 207.214,1.37 L207.3,1.444 C207.794,1.358 207.979,1.333 208.424,1.296 L208.51,1.222 L208.51,1.222 Z"
            id="Fill-22"
            fill="#1A1919"
          ></path>
          <path
            d="M211.703,2.938 C211.196,3.049 211.036,3.074 210.481,3.135 L210.407,3.209 C210.443,3.654 210.468,3.876 210.481,4.703 C210.518,6.246 210.555,7.912 210.555,9.455 C210.555,10.764 210.456,11.097 209.851,11.146 L209.777,11.208 C209.814,11.566 209.814,11.64 209.826,12.011 L209.9,12.072 C210.258,12.06 211.048,12.035 211.493,11.27 C211.801,10.739 211.801,10.196 211.789,8.579 L211.777,7.678 C211.764,6.777 211.74,5.333 211.74,4.431 C211.74,3.753 211.752,3.469 211.777,3.012 L211.703,2.938 Z M211.727,1.234 C211.715,0.74 211.715,0.63 211.74,0.16 L211.653,0.086 C211.172,0.16 211.024,0.185 210.518,0.234 L210.431,0.308 C210.456,0.79 210.456,0.864 210.443,1.382 L210.518,1.457 C211.048,1.37 211.184,1.358 211.653,1.308 L211.727,1.234 L211.727,1.234 Z"
            id="Fill-23"
            fill="#1A1919"
          ></path>
          <path
            d="M216.327,5.592 C216.586,5.036 217.167,3.888 217.562,3.086 L217.512,3.012 C217.389,3.012 217.006,3.024 216.907,3.024 C216.71,3.037 216.5,3.037 216.29,3.037 L214.722,3.037 C214.389,3.037 214.229,3.037 213.624,3.024 L213.55,3.098 C213.537,3.481 213.525,3.617 213.513,3.863 L213.574,3.938 C213.883,3.925 214.031,3.925 215.327,3.913 L215.87,3.901 L214.401,7.061 C213.982,7.925 213.796,8.32 213.216,9.394 L213.266,9.455 C213.945,9.443 214.105,9.443 214.759,9.443 L216.068,9.443 C216.389,9.443 216.969,9.443 217.413,9.455 L217.487,9.381 C217.5,9.036 217.5,8.937 217.524,8.579 L217.451,8.505 C216.932,8.542 216.821,8.554 215.389,8.567 L214.932,8.567 L216.327,5.592"
            id="Fill-24"
            fill="#1A1919"
          ></path>
          <path
            d="M223.474,6.332 L223.561,6.258 C223.585,5.123 223.511,3.678 222.289,3.098 C222.005,2.963 221.684,2.901 221.351,2.901 C221.018,2.901 220.684,2.963 220.388,3.098 C220.006,3.283 218.882,3.938 218.882,6.234 C218.882,7.11 219.03,7.999 219.573,8.678 C220.24,9.505 221.116,9.579 221.659,9.579 C221.931,9.579 222.351,9.554 222.733,9.443 C223.005,9.369 223.153,9.282 223.24,9.233 L223.301,9.135 C223.326,8.74 223.326,8.641 223.363,8.233 L223.276,8.196 C223.054,8.357 222.647,8.653 221.944,8.653 C221.734,8.653 220.783,8.653 220.326,7.665 C220.129,7.246 220.092,6.802 220.092,6.332 L223.474,6.332 Z M220.116,5.505 C220.141,5.197 220.19,4.654 220.499,4.222 C220.796,3.777 221.166,3.753 221.302,3.753 C221.511,3.753 222.116,3.851 222.301,4.74 C222.363,5.024 222.363,5.271 222.363,5.505 L220.116,5.505 L220.116,5.505 Z"
            id="Fill-25"
            fill="#1A1919"
          ></path>
          <path
            d="M228.654,9.468 C229.16,9.443 229.259,9.443 229.815,9.443 L229.889,9.369 C229.852,8.752 229.852,8.554 229.839,6.777 L229.827,5.715 C229.827,4.666 229.827,4.37 229.642,3.888 C229.469,3.432 229.123,2.913 228.272,2.913 C227.568,2.913 227.013,3.246 226.469,3.715 C226.469,3.37 226.494,3.259 226.519,3 L226.445,2.925 C225.914,3.037 225.741,3.074 225.247,3.135 L225.186,3.209 C225.26,4.431 225.272,5.666 225.272,6.888 C225.272,8.073 225.247,8.826 225.223,9.394 L225.297,9.468 C225.79,9.443 225.902,9.431 226.469,9.443 L226.544,9.369 C226.469,8.246 226.469,5.542 226.469,4.579 C226.716,4.32 227.198,3.925 227.729,3.925 C228.556,3.925 228.593,4.752 228.605,5.024 C228.617,5.481 228.63,6.271 228.63,6.814 C228.63,7.209 228.617,8.431 228.593,9.394 L228.654,9.468"
            id="Fill-26"
            fill="#1A1919"
          ></path>
          <polyline
            id="Fill-40"
            fill="#E57133"
            points="134.245 0.06 153.164 0.06 144.343 18.979 125.424 18.979 134.245 0.06"
          ></polyline>
          <path
            d="M15.579,32.376 C14.615,32.984 13.9,33.413 12.149,33.413 C8.933,33.413 7.468,31.197 7.468,28.339 C7.468,25.087 9.397,23.371 11.649,23.371 C13.578,23.371 14.293,24.158 14.829,24.694 L15.222,24.586 C15.401,22.407 15.472,21.728 15.794,19.691 L15.615,19.477 C13.971,18.905 12.756,18.476 10.612,18.476 C7.861,18.476 5.574,19.155 4.073,20.12 C1.5,21.763 0,24.944 0,28.553 C0,32.591 1.965,38.487 10.434,38.487 C12.435,38.487 13.793,38.093 15.436,37.629 L15.615,37.415 L15.83,32.555 L15.579,32.376"
            id="Fill-41"
            fill="#1A1919"
          ></path>
          <path
            d="M36.796,28.482 C36.796,24.193 35.581,22.192 34.331,20.977 C32.437,19.119 29.721,18.512 27.041,18.512 C25.433,18.512 21.646,18.69 19.287,21.442 C17.608,23.407 17.214,26.087 17.214,28.66 C17.214,31.269 17.608,36.021 22.36,37.736 C23.861,38.308 25.826,38.487 27.077,38.487 C30.293,38.487 33.366,37.594 35.224,34.985 C36.653,32.912 36.796,29.768 36.796,28.482 Z M29.4,28.16 C29.4,28.874 29.4,31.59 28.792,32.734 C28.399,33.555 27.792,34.056 27.005,34.056 C26.791,34.056 25.397,34.056 24.897,32.019 C24.647,31.018 24.611,29.982 24.611,28.839 C24.611,25.623 24.862,22.907 27.077,22.907 C28.828,22.907 29.4,24.908 29.4,28.16 L29.4,28.16 Z"
            id="Fill-42"
            fill="#1A1919"
          ></path>
          <path
            d="M46.838,37.808 C46.624,33.127 46.552,30.911 46.552,26.802 C46.552,24.122 46.624,12.259 46.624,9.864 L46.338,9.543 L38.941,10.829 L38.727,11.044 C39.084,14.795 39.12,15.01 39.12,27.695 C39.12,32.198 39.048,34.127 38.941,37.915 L39.191,38.165 C42.3,38.022 43.229,38.022 46.588,38.058 L46.838,37.808"
            id="Fill-43"
            fill="#1A1919"
          ></path>
          <path
            d="M50.02,19.763 C50.27,22.335 50.413,23.836 50.413,28.017 C50.413,31.304 50.306,34.592 50.199,37.879 L50.449,38.129 C53.558,38.022 54.522,38.022 57.703,38.058 L57.953,37.772 L57.846,31.519 C57.81,30.947 57.81,30.339 57.81,29.768 C57.81,27.552 57.81,25.373 60.418,25.373 C61.312,25.373 61.741,25.658 62.277,26.016 L62.634,25.909 C63.206,22.55 63.349,21.835 64.135,18.548 L63.885,18.333 C63.456,18.262 63.063,18.226 62.634,18.226 C60.954,18.226 59.668,19.012 58.703,20.477 C58.346,21.013 58.096,21.585 57.846,22.121 L57.917,18.548 L57.667,18.262 C54.201,19.012 53.379,19.119 50.234,19.512 L50.02,19.763"
            id="Fill-44"
            fill="#1A1919"
          ></path>
          <path
            d="M77.171,37.915 L77.421,38.165 C80.53,38.058 81.352,38.058 84.139,38.058 L84.389,37.808 C84.282,35.235 84.246,34.234 84.246,30.447 C84.246,26.659 84.282,22.835 84.318,19.048 L84.032,18.69 C80.959,18.905 80.209,18.941 77.1,19.012 L76.885,19.262 L77.1,32.341 C76.421,32.698 75.742,33.055 74.992,33.055 C72.991,33.055 72.991,30.947 72.991,28.66 C72.991,27.731 73.062,23.657 73.062,22.835 C73.062,21.549 73.026,20.298 73.026,19.012 L72.74,18.69 L65.915,19.012 L65.665,19.226 C65.844,22.764 65.844,23.765 65.808,27.624 L65.808,29.16 C65.772,32.948 65.772,34.913 67.059,36.521 C67.809,37.45 69.346,38.522 71.382,38.522 C72.74,38.522 74.491,38.022 75.849,37.2 C76.314,36.95 76.778,36.593 77.207,36.271 L77.171,37.915"
            id="Fill-45"
            fill="#1A1919"
          ></path>
          <path
            d="M89.897,47.098 C93.148,46.991 93.899,46.991 96.329,46.991 L96.615,46.777 C97.544,42.846 97.901,41.595 99.473,36.628 L101.296,31.197 L105.584,19.048 L105.369,18.798 L99.652,18.905 L99.437,19.119 C98.365,23.336 98.115,24.372 96.615,29.518 C95.257,24.658 95.042,23.693 93.935,18.905 L93.649,18.69 C90.29,18.941 89.504,18.976 86.002,19.012 L85.859,19.262 C86.824,21.549 86.895,21.728 88.11,25.158 C88.682,26.802 89.325,28.482 89.897,30.125 C90.862,32.841 91.505,34.806 92.862,38.951 C91.469,42.703 91.111,43.525 89.718,46.812 L89.897,47.098"
            id="Fill-46"
            fill="#1A1919"
          ></path>
          <path
            d="M118.219,23.693 C118.755,23.693 119.291,23.729 119.863,23.729 L120.149,23.443 L120.542,19.155 L120.256,18.905 C118.648,19.048 118.148,19.048 116.862,19.048 L116.969,12.366 L116.647,12.151 C113.681,13.044 112.752,13.295 110.001,13.974 L109.822,14.224 L109.822,18.905 L107.785,18.905 L107.535,19.155 L107.321,23.514 L107.535,23.729 L109.822,23.657 L109.751,26.802 C109.751,28.41 109.715,30.053 109.715,31.662 C109.715,33.341 109.715,34.199 110.001,35.163 C110.68,37.379 112.287,38.487 115.825,38.487 C117.54,38.487 118.72,38.272 120.256,37.951 L120.506,37.701 L120.864,33.305 L120.578,33.162 C120.006,33.377 119.399,33.555 118.755,33.555 C118.076,33.555 117.398,33.27 117.076,32.698 C116.754,32.09 116.754,30.697 116.754,29.982 L116.862,23.729 L118.219,23.693"
            id="Fill-47"
            fill="#1A1919"
          ></path>
        </svg>
        <p className={Style.logoText}>
          De laagste prijs, voor elk product op elk moment
        </p>
      </div>
      <div className={Style.loginContainer}>
        <button
          className={Style.btnLogin}
          onClick={isLoggedIn ? handleAfmeldenClick : handleAanmeldenClick}
        >
          <img className={Style.btnImg} src="../Images/xtra.svg" alt="" />
          <p className={Style.btnTxt}>{isLoggedIn ? 'afmelden' : 'aanmelden'}</p>
        </button>
      </div>
      <div className={Style.basket}>
        <button className={Style.btnBasket} onClick={() => handleBasketClick()}>
          <img className={Style.basketImg} src="../Images/icon--basket-list.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Header;
