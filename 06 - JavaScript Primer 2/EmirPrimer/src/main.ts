/*
let myData = new Object();
myData.name = 'Adam';
myData.weather = 'sunny';

console.log('Hello ' + myData.name + '.');
console.log('Today is ' + myData.weather + '.');
*/

/*
let myData = {
  name: 'Adam',
  weather: 'sunny',
  printMessages() {
    console.log('Hello ' + myData.name + '.');
    console.log('Today is ' + myData.weather + '.');
  }
};
myData.printMessages();
*/

/*
class MyClass {
  constructor(name, weather) {
    this.name = name;
    this._weather = weather;
  }

  get weather() {
    return `Today is ${ this._weather }`;
  }

  set weather(value) {
    this._weather = value + '.';
  }

  printMessages() {
    console.log('Hello ' + this.name + '.');
    console.log(this.weather);
  }
}

class MySubClass extends MyClass {
  constructor(name, weather, city) {
    super(name, weather);
    this.city = city;
  }

  printMessages() {
    super.printMessages();
    console.log(`You are in ${ this.city }`);
  }

}
let myData = new MySubClass('Adam', 'sunny', 'London');
myData.printMessages();
*/

// import { Name, WeatherLocation } from './modules/NameAndWeather';
import * as NameAndWeatherLocation from './modules/NameAndWeather';
import { Name as OtherName } from './modules/DuplicateName';
import { TempConverter } from './tempConverter';

let name = new NameAndWeatherLocation.Name('Adam', 'Freeman');
let loc = new NameAndWeatherLocation.WeatherLocation('raining', 'London');
let other = new OtherName();

let cTemp = TempConverter.convertFtoC(38);
console.log('---');
console.log(name.nameMessage);
console.log(loc.weatherMessage);
console.log(other.message);
console.log(`The temp is ${ cTemp }C`);

let tuple: [string, string, string];
tuple = ['London', 'raining', TempConverter.convertFtoC('38')];
console.log('---');
console.log(`It is ${ tuple[2] } degrees C and ${ tuple[1] } in ${ tuple[0] }`);


let cities: { [index: string]: [string, string] } = {};
console.log('---');
cities['London'] = ['raining', TempConverter.convertFtoC((38))];
cities['Paris'] = ['sunny', TempConverter.convertFtoC((52))];
cities['Berlin'] = ['snowing', TempConverter.convertFtoC((23))];

for (let key in cities) {
  console.log(`${ key }: ${ cities[key][0] }, ${ cities[key][1] } `);
}










































