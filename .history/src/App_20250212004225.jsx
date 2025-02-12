import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";

import "./App.css";


import sourceData from "./data/sourceData.json";
import Week from "./data/7days.json";
import toady from "./data/Today.json";
import user from "./data/Users.json";
import category from "./data/Category.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

export const App = () => {

  
  return (
   <>
   <div>
    <br></br>

   </div>
    <div className="App">
    
        <div className="dataCard categoryCard">
        <Bar
          data={{
            labels: Week.map((data) => data.DATE1),
            datasets: [
              {
                label: "Likes",
                data: Week.map((data) => data.number_of_likes),
                backgroundColor: [
             "rgba(7, 250, 20, 0.8)",                  
                ],
                borderRadius: 5,
              },
              {
                label: "Dislikes",
                data: Week.map((data) => data.number_of_dislikes),
                backgroundColor: [
                            
                  "rgba(250, 7, 7, 0.8)",   
                 
                ],
                borderRadius: 5,
              },
              {
                label: "Queries",
                data: Week.map((data) => data.number_of_ques),
                backgroundColor: [
                  "rgba(63, 40, 145, 0.7)",                  
                ],
                borderRadius: 5,
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Last 7 Days Status",
              },
            },
          }}
        />
      </div>
      

      <div className="dataCard categoryCard">
        <Bar
          data={{
            labels: toady.map((data) => data.B_TIME),
            datasets: [
              {
                label: "Queries",
                data: toady.map((data) => data.C_Questions),
                backgroundColor: [
                  "rgba(63, 40, 145, 0.7)",      
                ],
                borderRadius: 5,
              },
              {
                label: "Users",
                data: toady.map((data) => data.D_Users),
                backgroundColor: [
                            
                  "rgba(231, 235, 8, 0.45)",
                 
                ],
                borderRadius: 5,
              },
              {
                label: "Likes",
                data: toady.map((data) => data.F_Likes),
                backgroundColor: [
                  "rgba(7, 250, 20, 0.8)",                  
                ],
                borderRadius: 5,
              },
              {
                label: "DisLikes",
                data: toady.map((data) => data.Dis_Likes),
                backgroundColor: [
                  "rgba(250, 7, 7, 0.8)",                  
                ],
                borderRadius: 5,
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Hourly Status",
              },
            },
          }}
        />
      </div>
      <div className="vl"></div>
      <hr></hr>
      <div className="dataCard categoryCard">
        <Bar
          data={{
            labels: user.map((data) => data.DATE1),
            datasets: [
              {
                label: "Distinct Users",
                data: user.map((data) => data.number_of_distinct_users),
                backgroundColor: 'rgba(10, 155, 252, 0.5)',
                borderRadius: 5,
              },
              {
                label: "Distinct Users More then 1 Query",
                data: user.map((data) => data.Distinct_Users_more_1query),
                backgroundColor:'rgba(10, 243, 243, 0.5)',
                borderRadius: 5,
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "No of Distinct Users, users with more than 1 query",
              },
            },
          }}
        />
      </div>


      <div className="dataCard categoryCard">
        <Pie
          data={{
            labels: category.map((data) => data.category),
            datasets: [
              {
                label: "Count",
                data: category.map((data) => data.COUNT_CAT),
                backgroundColor: [
                  'rgba(7, 245, 86, 0.5)',
         'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
        'rgba(86, 6, 245, 0.5)',
        'rgba(247, 129, 11, 0.55)',
                ],
                borderColor: [
                  'rgb(250, 255, 251)',
                  'rgb(250, 255, 251)',
                  'rgb(250, 255, 251)',
                  'rgb(250, 255, 251)',
                  'rgb(250, 255, 251)',
                  'rgb(250, 255, 251)',
                ],animation :Pie,
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Category Classification",
              },
            },
          }}
        />
      </div>
    </div>
    </>
  );
};
