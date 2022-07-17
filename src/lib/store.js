import {writable} from "svelte/store";

// 현재 점수
export const score = writable(0);


// 점수 리스트
export const scoreList = writable([
    {score:0, name:"--"},
    {score:0, name:"--"},
    {score:0, name:"--"},
    {score:0, name:"--"},
    {score:0, name:"--"},
    {score:0, name:"--"},
    {score:0, name:"--"},
    {score:0, name:"--"},
    {score:0, name:"--"},
    {score:0, name:"--"},
]);

/*
db.score.insertMany([
    {score:0, name:"--"},
    {score:0, name:"--"},
    {score:0, name:"--"},
    {score:0, name:"--"},
    {score:0, name:"--"},
    {score:0, name:"--"},
    {score:0, name:"--"},
    {score:0, name:"--"},
    {score:0, name:"--"},
    {score:0, name:"--"},
]);
*/

// 퀴즈 리스트
export const quizList = writable([
    { // no.1
        question:{color:"red",text:"green"},
        choice:[
            {color:"green",text:"yellow"},
            {color:"pink",text:"red"},
            {color:"blue",text:"purple"},
            {color:"yellow",text:"gray"},
        ]
    },
    { // no.2
        question:{color:"green",text:"yellow"},
        choice:[
            {color:"purple",text:"brown"},
            {color:"pink",text:"red"},
            {color:"blue",text:"green"},
            {color:"yellow",text:"gray"},
        ]
    },
    { // no.3
        question:{color:"red",text:"blue"},
        choice:[
            {color:"gray",text:"yellow"},
            {color:"yellow",text:"red"},
            {color:"red",text:"purple"},
            {color:"blue",text:"green"},
        ]
    },
    { // no.4
        question:{color:"pink",text:"yellow"},
        choice:[
            {color:"yellow",text:"red"},
            {color:"blue",text:"purple"},
            {color:"gray",text:"pink"},
            {color:"pink",text:"yellow"},
        ]
    },
    { // no.5
        question:{color:"blue",text:"green"},
        choice:[
            {color:"yellow",text:"blue"},
            {color:"pink",text:"purple"},
            {color:"green",text:"red"},
            {color:"brwon",text:"gray"},
        ]
    },
    { // no.6
        question:{color:"pink",text:"green"},
        choice:[
            {color:"red",text:"yellow"},
            {color:"yellow",text:"pink"},
            {color:"blue",text:"gray"},
            {color:"green",text:"purple"},
        ]
    },
    { // no.7
        question:{color:"yellow",text:"red"},
        choice:[
            {color:"pink",text:"blue"},
            {color:"green",text:"purple"},
            {color:"blue",text:"yellow"},
            {color:"red",text:"gray"},
        ]
    },
    { // no.8
        question:{color:"gray",text:"purple"},
        choice:[
            {color:"green",text:"blue"},
            {color:"purple",text:"yellow"},
            {color:"blue",text:"green"},
            {color:"yellow",text:"gray"},
        ]
    },
    { // no.9
        question:{color:"gray",text:"red"},
        choice:[
            {color:"blue",text:"purple"},
            {color:"yellow",text:"green"},
            {color:"red",text:"yellow"},
            {color:"pink",text:"gray"},
        ]
    },
    { // no.10
        question:{color:"pink",text:"purple"},
        choice:[
            {color:"purple",text:"yellow"},
            {color:"gray",text:"pink"},
            {color:"blue",text:"green"},
            {color:"yellow",text:"red"},
        ]
    },
]);