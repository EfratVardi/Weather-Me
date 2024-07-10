import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from 'src/app/core/services/weather.service';
import { CurrentWeather } from 'src/app/shared/models/currentWeather.model';
import { Forecast } from 'src/app/shared/models/forecast.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  currentWeather: CurrentWeather | null = null;
  forecastData: Forecast | null = null;
  localizedName:string;
  constructor(private route: ActivatedRoute, private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const locationKey = params.get('locationKey');
      this.localizedName = params.get('localizedName')
      if (locationKey) {
        this.currentWeather = {
        "LocalObservationDateTime": "2024-07-10T10:00:00-04:00",
        "EpochTime": 1625923200,
        "WeatherText": "Sunny",
        "WeatherIcon": 1,
        "HasPrecipitation": false,
        "PrecipitationType": null,
        "PrecipitationIntensity": null,
        "IsDayTime": true,
        "Temperature": {
          "Metric": {
            "Value": 25.6,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 78.1,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "MobileLink": "http://m.accuweather.com/en/us/new-york-ny/10007/current-weather/349727",
        "Link": "http://www.accuweather.com/en/us/new-york-ny/10007/current-weather/349727"
      };
        this.forecastData = {
          "Headline": {
            "EffectiveDate": "2024-07-10T08:00:00+03:00",
            "EffectiveEpochDate": 1720587600,
            "Severity": 5,
            "Text": "Possible danger of dehydration and heat stroke while doing strenuous activities Wednesday",
            "Category": "heat",
            "EndDate": "2024-07-10T20:00:00+03:00",
            "EndEpochDate": 1720630800,
            "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us"
          },
          "DailyForecasts": [
            {
              "Date": "2024-07-09T07:00:00+03:00",
              "EpochDate": 1720497600,
              "Temperature": {
                "Minimum": {
                  "Value": 26.6,
                  "Unit": "C",
                  "UnitType": 17
                },
                "Maximum": {
                  "Value": 32.9,
                  "Unit": "C",
                  "UnitType": 17
                }
              },
              "Day": {
                "Icon": 1,
                "IconPhrase": "Sunny",
                "HasPrecipitation": false
              },
              "Night": {
                "Icon": 35,
                "IconPhrase": "Partly cloudy",
                "HasPrecipitation": false
              },
              "Sources": [
                "AccuWeather"
              ],
              "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us",
              "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us"
            },
            {
              "Date": "2024-07-10T07:00:00+03:00",
              "EpochDate": 1720584000,
              "Temperature": {
                "Minimum": {
                  "Value": 27.2,
                  "Unit": "C",
                  "UnitType": 17
                },
                "Maximum": {
                  "Value": 33.8,
                  "Unit": "C",
                  "UnitType": 17
                }
              },
              "Day": {
                "Icon": 2,
                "IconPhrase": "Mostly sunny",
                "HasPrecipitation": false
              },
              "Night": {
                "Icon": 33,
                "IconPhrase": "Clear",
                "HasPrecipitation": false
              },
              "Sources": [
                "AccuWeather"
              ],
              "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
              "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us"
            },
            {
              "Date": "2024-07-11T07:00:00+03:00",
              "EpochDate": 1720670400,
              "Temperature": {
                "Minimum": {
                  "Value": 26.7,
                  "Unit": "C",
                  "UnitType": 17
                },
                "Maximum": {
                  "Value": 33.7,
                  "Unit": "C",
                  "UnitType": 17
                }
              },
              "Day": {
                "Icon": 1,
                "IconPhrase": "Sunny",
                "HasPrecipitation": false
              },
              "Night": {
                "Icon": 33,
                "IconPhrase": "Clear",
                "HasPrecipitation": false
              },
              "Sources": [
                "AccuWeather"
              ],
              "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
              "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us"
            },
            {
              "Date": "2024-07-12T07:00:00+03:00",
              "EpochDate": 1720756800,
              "Temperature": {
                "Minimum": {
                  "Value": 27.8,
                  "Unit": "C",
                  "UnitType": 17
                },
                "Maximum": {
                  "Value": 33.2,
                  "Unit": "C",
                  "UnitType": 17
                }
              },
              "Day": {
                "Icon": 1,
                "IconPhrase": "Sunny",
                "HasPrecipitation": false
              },
              "Night": {
                "Icon": 34,
                "IconPhrase": "Mostly clear",
                "HasPrecipitation": false
              },
              "Sources": [
                "AccuWeather"
              ],
              "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
              "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us"
            },
            {
              "Date": "2024-07-13T07:00:00+03:00",
              "EpochDate": 1720843200,
              "Temperature": {
                "Minimum": {
                  "Value": 27.3,
                  "Unit": "C",
                  "UnitType": 17
                },
                "Maximum": {
                  "Value": 32.3,
                  "Unit": "C",
                  "UnitType": 17
                }
              },
              "Day": {
                "Icon": 1,
                "IconPhrase": "Sunny",
                "HasPrecipitation": false
              },
              "Night": {
                "Icon": 35,
                "IconPhrase": "Partly cloudy",
                "HasPrecipitation": false
              },
              "Sources": [
                "AccuWeather"
              ],
              "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
              "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us"
            }
          ]
        }
        // this.fetchCurrentWeather(locationKey);
        //  this.fetchForecast(locationKey);
      }
    });
  }

  fetchCurrentWeather(locationKey: string) {
    this.weatherService.getCurrentWeather(locationKey).subscribe(
      (currentWeather: CurrentWeather) => {
        this.currentWeather = currentWeather;
      },
      (error) => {
        console.error('Error fetching currentWeather:', error);
      }
    );
  }

  fetchForecast(locationKey: string) {
    this.weatherService.getForecast(locationKey).subscribe(
      (forecastData: Forecast) => {
        this.forecastData = forecastData;
      },
      (error) => {
        console.error('Error fetching forecast:', error);
      }
    );
  }
}
