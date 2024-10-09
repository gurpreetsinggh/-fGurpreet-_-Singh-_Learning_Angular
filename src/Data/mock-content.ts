import {Car} from "../app/Shared Module/MyData";
import {CarDetails} from "../app/Shared Module/carDetails";


let cars: Car[] = [
  { id: 1, madeBy: 'KIA', model: 'Sports', year: 2022, color: 'blue' },
  { id: 2, madeBy: 'Toyota', model: 'Corolla', year: 2021 ,color: 'yellow'},
  { id: 3, madeBy: 'Honda', model: 'Civic', year: 2020, color: 'black' },
  { id: 4, madeBy: 'Ford', model: 'Focus', year: 2019 ,color: 'white'}
];

export let carDetails: CarDetails[] = [
  {car: cars[0],milesRun:20000,secondHand:true},
  {car: cars[1],milesRun:0,secondHand:false},
  {car: cars[2],milesRun:10000,secondHand:true},
  {car: cars[3],milesRun:0,secondHand:false}
]
