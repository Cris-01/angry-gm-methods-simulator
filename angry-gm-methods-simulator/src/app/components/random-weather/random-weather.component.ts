import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DiceHelper } from '../../shared/dice-functions';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-random-weather',
  templateUrl: './random-weather.component.html',
  styleUrl: './random-weather.component.scss'
})
export class RandomWeatherComponent implements OnInit {

  climates = [
  {
    text: 'Tropical - High temperatures and frequent precipitation',
    temperatureTable: [
      {
        text: 'Warm',
        range: DiceHelper.generateRangeArrayFromStartToEnd(1, 30)
      },
      {
        text: 'Hot',
        range: DiceHelper.generateRangeArrayFromStartToEnd(31, 85)
      },
      {
        text: 'Sweltering',
        range: DiceHelper.generateRangeArrayFromStartToEnd(86, 100)
      },
    ],
    precipitation: [
      {
        text: 'None',
        range: DiceHelper.generateRangeArrayFromStartToEnd(1, 60),
        cloudCover: [
          {
            text: 'Clear',
            range: DiceHelper.generateRangeArrayFromStartToEnd(1, 60),
          },
          {
            text: 'Sparse',
            range: DiceHelper.generateRangeArrayFromStartToEnd(61, 75),
          },
          {
            text: 'Cloudy',
            range: DiceHelper.generateRangeArrayFromStartToEnd(76, 85),
          },
          {
            text: 'Overcast',
            range: DiceHelper.generateRangeArrayFromStartToEnd(86, 95),
          },
          {
            text: 'Stormclouds',
            range: DiceHelper.generateRangeArrayFromStartToEnd(96, 100),
          },
        ]
      },
      {
        text: 'Rain',
        range: DiceHelper.generateRangeArrayFromStartToEnd(61, 100),
        cloudCover: [
          {
            text: 'Sparse',
            range: DiceHelper.generateRangeArrayFromStartToEnd(1, 15),
          },
          {
            text: 'Cloudy',
            range: DiceHelper.generateRangeArrayFromStartToEnd(16, 45),
          },
          {
            text: 'Overcast',
            range: DiceHelper.generateRangeArrayFromStartToEnd(46, 90),
          },
          {
            text: 'Stormclouds',
            range: DiceHelper.generateRangeArrayFromStartToEnd(91, 100),
          },
        ]
      },
    ],
    wind: [
      {
        text: 'Still',
        range: DiceHelper.generateRangeArrayFromStartToEnd(1, 35),
      },
      {
        text: 'Breezy',
        range: DiceHelper.generateRangeArrayFromStartToEnd(36, 50),
      },
      {
        text: 'Gusty',
        range: DiceHelper.generateRangeArrayFromStartToEnd(51, 65),
      },
      {
        text: 'Windy',
        range: DiceHelper.generateRangeArrayFromStartToEnd(66, 80),
      },
      {
        text: 'Wind Storm',
        range: DiceHelper.generateRangeArrayFromStartToEnd(81, 95),
      },
      {
        text: 'Tornado',
        range: DiceHelper.generateRangeArrayFromStartToEnd(96, 100),
      },
    ]
  },
  {
    text: 'Cold Desert - Low temperatures and little precipitation',
    temperatureTable: [
      {
        text: 'Freezing',
        range: DiceHelper.generateRangeArrayFromStartToEnd(1, 40)
      },
      {
        text: 'Very Cold',
        range: DiceHelper.generateRangeArrayFromStartToEnd(41, 65)
      },
      {
        text: 'Cold',
        range: DiceHelper.generateRangeArrayFromStartToEnd(66, 100)
      },
    ],
    precipitation: [
      {
        text: 'None',
        range: DiceHelper.generateRangeArrayFromStartToEnd(1, 90),
        cloudCover: [
          {
            text: 'Clear',
            range: DiceHelper.generateRangeArrayFromStartToEnd(1, 60),
          },
          {
            text: 'Sparse',
            range: DiceHelper.generateRangeArrayFromStartToEnd(61, 75),
          },
          {
            text: 'Cloudy',
            range: DiceHelper.generateRangeArrayFromStartToEnd(76, 85),
          },
          {
            text: 'Overcast',
            range: DiceHelper.generateRangeArrayFromStartToEnd(86, 95),
          },
          {
            text: 'Stormclouds',
            range: DiceHelper.generateRangeArrayFromStartToEnd(96, 100),
          },
        ]
      },
      {
        text: 'Snow',
        range: DiceHelper.generateRangeArrayFromStartToEnd(91, 100),
        cloudCover: [
          {
            text: 'Sparse',
            range: DiceHelper.generateRangeArrayFromStartToEnd(1, 20),
          },
          {
            text: 'Cloudy',
            range: DiceHelper.generateRangeArrayFromStartToEnd(21, 45),
          },
          {
            text: 'Overcast',
            range: DiceHelper.generateRangeArrayFromStartToEnd(46, 80),
          },
          {
            text: 'Stormclouds',
            range: DiceHelper.generateRangeArrayFromStartToEnd(81, 100),
          },
        ]
      },
    ],
    wind: [
      {
        text: 'Still',
        range: DiceHelper.generateRangeArrayFromStartToEnd(1, 35),
      },
      {
        text: 'Breezy',
        range: DiceHelper.generateRangeArrayFromStartToEnd(36, 45),
      },
      {
        text: 'Gusty',
        range: DiceHelper.generateRangeArrayFromStartToEnd(46, 60),
      },
      {
        text: 'Windy',
        range: DiceHelper.generateRangeArrayFromStartToEnd(61, 80),
      },
      {
        text: 'Wind Storm',
        range: DiceHelper.generateRangeArrayFromStartToEnd(81, 100),
      },
    ]
  },
  {
    text: 'Hot Desert - High temperatures and little precipitation',
    temperatureTable: [
      {
        text: 'Warm',
        range: DiceHelper.generateRangeArrayFromStartToEnd(1, 30)
      },
      {
        text: 'Hot',
        range: DiceHelper.generateRangeArrayFromStartToEnd(31, 65)
      },
      {
        text: 'Sweltering',
        range: DiceHelper.generateRangeArrayFromStartToEnd(66, 100)
      },
    ],
    precipitation: [
      {
        text: 'None',
        range: DiceHelper.generateRangeArrayFromStartToEnd(1, 90),
        cloudCover: [
          {
            text: 'Clear',
            range: DiceHelper.generateRangeArrayFromStartToEnd(1, 60),
          },
          {
            text: 'Sparse',
            range: DiceHelper.generateRangeArrayFromStartToEnd(61, 75),
          },
          {
            text: 'Cloudy',
            range: DiceHelper.generateRangeArrayFromStartToEnd(76, 85),
          },
          {
            text: 'Overcast',
            range: DiceHelper.generateRangeArrayFromStartToEnd(86, 95),
          },
          {
            text: 'Stormclouds',
            range: DiceHelper.generateRangeArrayFromStartToEnd(96, 100),
          },
        ]
      },
      {
        text: 'Rain',
        range: DiceHelper.generateRangeArrayFromStartToEnd(91, 95),
        cloudCover: [
          {
            text: 'Sparse',
            range: DiceHelper.generateRangeArrayFromStartToEnd(1, 15),
          },
          {
            text: 'Cloudy',
            range: DiceHelper.generateRangeArrayFromStartToEnd(16, 45),
          },
          {
            text: 'Overcast',
            range: DiceHelper.generateRangeArrayFromStartToEnd(46, 90),
          },
          {
            text: 'Stormclouds',
            range: DiceHelper.generateRangeArrayFromStartToEnd(91, 100),
          },
        ]
      },
      {
        text: 'Hail',
        range: DiceHelper.generateRangeArrayFromStartToEnd(96, 100),
        cloudCover: [
          {
            text: 'Overcast',
            range: DiceHelper.generateRangeArrayFromStartToEnd(1, 10),
          },
          {
            text: 'Stormclouds',
            range: DiceHelper.generateRangeArrayFromStartToEnd(11, 100),
          },
        ]
      },
    ],
    wind: [
      {
        text: 'Still',
        range: DiceHelper.generateRangeArrayFromStartToEnd(1, 45),
      },
      {
        text: 'Breezy',
        range: DiceHelper.generateRangeArrayFromStartToEnd(46, 60),
      },
      {
        text: 'Gusty',
        range: DiceHelper.generateRangeArrayFromStartToEnd(61, 70),
      },
      {
        text: 'Windy',
        range: DiceHelper.generateRangeArrayFromStartToEnd(71, 80),
      },
      {
        text: 'Wind Storm',
        range: DiceHelper.generateRangeArrayFromStartToEnd(81, 100),
      },
      {
        text: 'Tornado',
        range: DiceHelper.generateRangeArrayFromStartToEnd(91, 100),
      },
    ]
  },
  {
    text: 'Marine - Mild temperatures and moderate precipitation',
    temperatureTable: [
      {
        text: 'Cold',
        range: DiceHelper.generateRangeArrayFromStartToEnd(1, 20)
      },
      {
        text: 'Cool',
        range: DiceHelper.generateRangeArrayFromStartToEnd(21, 50)
      },
      {
        text: 'Warm',
        range: DiceHelper.generateRangeArrayFromStartToEnd(51, 80)
      },
      {
        text: 'Hot',
        range: DiceHelper.generateRangeArrayFromStartToEnd(81, 100)
      },
    ],
    precipitation: [
      {
        text: 'None',
        range: DiceHelper.generateRangeArrayFromStartToEnd(1, 40),
        cloudCover: [
          {
            text: 'Clear',
            range: DiceHelper.generateRangeArrayFromStartToEnd(1, 60),
          },
          {
            text: 'Sparse',
            range: DiceHelper.generateRangeArrayFromStartToEnd(61, 75),
          },
          {
            text: 'Cloudy',
            range: DiceHelper.generateRangeArrayFromStartToEnd(76, 85),
          },
          {
            text: 'Overcast',
            range: DiceHelper.generateRangeArrayFromStartToEnd(86, 95),
          },
          {
            text: 'Stormclouds',
            range: DiceHelper.generateRangeArrayFromStartToEnd(96, 100),
          },
        ]
      },
      {
        text: 'Rain',
        range: DiceHelper.generateRangeArrayFromStartToEnd(41, 75),
        cloudCover: [
          {
            text: 'Sparse',
            range: DiceHelper.generateRangeArrayFromStartToEnd(1, 15),
          },
          {
            text: 'Cloudy',
            range: DiceHelper.generateRangeArrayFromStartToEnd(16, 45),
          },
          {
            text: 'Overcast',
            range: DiceHelper.generateRangeArrayFromStartToEnd(46, 90),
          },
          {
            text: 'Stormclouds',
            range: DiceHelper.generateRangeArrayFromStartToEnd(91, 100),
          },
        ]
      },
      {
        text: 'Sleet',
        range: DiceHelper.generateRangeArrayFromStartToEnd(76, 85),
        cloudCover: [
          {
            text: 'Sparse',
            range: DiceHelper.generateRangeArrayFromStartToEnd(1, 10),
          },
          {
            text: 'Cloudy',
            range: DiceHelper.generateRangeArrayFromStartToEnd(11, 35),
          },
          {
            text: 'Overcast',
            range: DiceHelper.generateRangeArrayFromStartToEnd(36, 90),
          },
          {
            text: 'Stormclouds',
            range: DiceHelper.generateRangeArrayFromStartToEnd(91, 100),
          },
        ]
      },
      {
        text: 'Hail',
        range: DiceHelper.generateRangeArrayFromStartToEnd(86, 95),
        cloudCover: [
          {
            text: 'Overcast',
            range: DiceHelper.generateRangeArrayFromStartToEnd(1, 10),
          },
          {
            text: 'Stormclouds',
            range: DiceHelper.generateRangeArrayFromStartToEnd(11, 100),
          },
        ]
      },
      {
        text: 'Snow',
        range: DiceHelper.generateRangeArrayFromStartToEnd(96, 100),
        cloudCover: [
          {
            text: 'Sparse',
            range: DiceHelper.generateRangeArrayFromStartToEnd(1, 20),
          },
          {
            text: 'Cloudy',
            range: DiceHelper.generateRangeArrayFromStartToEnd(21, 45),
          },
          {
            text: 'Overcast',
            range: DiceHelper.generateRangeArrayFromStartToEnd(46, 80),
          },
          {
            text: 'Stormclouds',
            range: DiceHelper.generateRangeArrayFromStartToEnd(81, 100),
          },
        ]
      },
    ],
    wind: [
      {
        text: 'Still',
        range: DiceHelper.generateRangeArrayFromStartToEnd(1, 25),
      },
      {
        text: 'Breezy',
        range: DiceHelper.generateRangeArrayFromStartToEnd(26, 50),
      },
      {
        text: 'Gusty',
        range: DiceHelper.generateRangeArrayFromStartToEnd(51, 80),
      },
      {
        text: 'Windy',
        range: DiceHelper.generateRangeArrayFromStartToEnd(81, 85),
      },
      {
        text: 'Wind Storm',
        range: DiceHelper.generateRangeArrayFromStartToEnd(86, 100),
      },
    ]
  },
  {
    text: 'Temperate - Mild but unpredictable temperatures with unpredictable precipitation',
    temperatureTable: [
      {
        text: 'Cold',
        range: DiceHelper.generateRangeArrayFromStartToEnd(1, 30)
      },
      {
        text: 'Cool',
        range: DiceHelper.generateRangeArrayFromStartToEnd(31, 70)
      },
      {
        text: 'Warm',
        range: DiceHelper.generateRangeArrayFromStartToEnd(71, 100)
      },
    ],
    precipitation: [
      {
        text: 'None',
        range: DiceHelper.generateRangeArrayFromStartToEnd(1, 60),
        cloudCover: [
          {
            text: 'Clear',
            range: DiceHelper.generateRangeArrayFromStartToEnd(1, 60),
          },
          {
            text: 'Sparse',
            range: DiceHelper.generateRangeArrayFromStartToEnd(61, 75),
          },
          {
            text: 'Cloudy',
            range: DiceHelper.generateRangeArrayFromStartToEnd(76, 85),
          },
          {
            text: 'Overcast',
            range: DiceHelper.generateRangeArrayFromStartToEnd(86, 95),
          },
          {
            text: 'Stormclouds',
            range: DiceHelper.generateRangeArrayFromStartToEnd(96, 100),
          },
        ]
      },
      {
        text: 'Rain',
        range: DiceHelper.generateRangeArrayFromStartToEnd(61, 85),
        cloudCover: [
          {
            text: 'Sparse',
            range: DiceHelper.generateRangeArrayFromStartToEnd(1, 15),
          },
          {
            text: 'Cloudy',
            range: DiceHelper.generateRangeArrayFromStartToEnd(16, 45),
          },
          {
            text: 'Overcast',
            range: DiceHelper.generateRangeArrayFromStartToEnd(46, 90),
          },
          {
            text: 'Stormclouds',
            range: DiceHelper.generateRangeArrayFromStartToEnd(91, 100),
          },
        ]
      },
      {
        text: 'Sleet',
        range: DiceHelper.generateRangeArrayFromStartToEnd(86, 90),
        cloudCover: [
          {
            text: 'Sparse',
            range: DiceHelper.generateRangeArrayFromStartToEnd(1, 10),
          },
          {
            text: 'Cloudy',
            range: DiceHelper.generateRangeArrayFromStartToEnd(11, 35),
          },
          {
            text: 'Overcast',
            range: DiceHelper.generateRangeArrayFromStartToEnd(36, 90),
          },
          {
            text: 'Stormclouds',
            range: DiceHelper.generateRangeArrayFromStartToEnd(91, 100),
          },
        ]
      },
      {
        text: 'Hail',
        range: DiceHelper.generateRangeArrayFromStartToEnd(91, 95),
        cloudCover: [
          {
            text: 'Overcast',
            range: DiceHelper.generateRangeArrayFromStartToEnd(1, 10),
          },
          {
            text: 'Stormclouds',
            range: DiceHelper.generateRangeArrayFromStartToEnd(11, 100),
          },
        ]
      },
      {
        text: 'Snow',
        range: DiceHelper.generateRangeArrayFromStartToEnd(96, 100),
        cloudCover: [
          {
            text: 'Sparse',
            range: DiceHelper.generateRangeArrayFromStartToEnd(1, 20),
          },
          {
            text: 'Cloudy',
            range: DiceHelper.generateRangeArrayFromStartToEnd(21, 45),
          },
          {
            text: 'Overcast',
            range: DiceHelper.generateRangeArrayFromStartToEnd(46, 80),
          },
          {
            text: 'Stormclouds',
            range: DiceHelper.generateRangeArrayFromStartToEnd(81, 100),
          },
        ]
      },
    ],
    wind: [
      {
        text: 'Still',
        range: DiceHelper.generateRangeArrayFromStartToEnd(1, 40),
      },
      {
        text: 'Breezy',
        range: DiceHelper.generateRangeArrayFromStartToEnd(41, 60),
      },
      {
        text: 'Gusty',
        range: DiceHelper.generateRangeArrayFromStartToEnd(61, 80),
      },
      {
        text: 'Windy',
        range: DiceHelper.generateRangeArrayFromStartToEnd(81, 90),
      },
      {
        text: 'Wind Storm',
        range: DiceHelper.generateRangeArrayFromStartToEnd(91, 95),
      },
      {
        text: 'Tornado',
        range: DiceHelper.generateRangeArrayFromStartToEnd(96, 100),
      },
    ]
  },
  {
    text: 'Tundra - Cold temperatures with moderate precipitation',
    temperatureTable: [
      {
        text: 'Below Freezing',
        range: DiceHelper.generateRangeArrayFromStartToEnd(1, 10)
      },
      {
        text: 'Freezing',
        range: DiceHelper.generateRangeArrayFromStartToEnd(11, 45)
      },
      {
        text: 'Very Cold',
        range: DiceHelper.generateRangeArrayFromStartToEnd(46, 70)
      },
      {
        text: 'Cold',
        range: DiceHelper.generateRangeArrayFromStartToEnd(71, 100)
      },
    ],
    precipitation: [
      {
        text: 'None',
        range: DiceHelper.generateRangeArrayFromStartToEnd(1, 65),
        cloudCover: [
          {
            text: 'Clear',
            range: DiceHelper.generateRangeArrayFromStartToEnd(1, 60),
          },
          {
            text: 'Sparse',
            range: DiceHelper.generateRangeArrayFromStartToEnd(61, 75),
          },
          {
            text: 'Cloudy',
            range: DiceHelper.generateRangeArrayFromStartToEnd(76, 85),
          },
          {
            text: 'Overcast',
            range: DiceHelper.generateRangeArrayFromStartToEnd(86, 95),
          },
          {
            text: 'Stormclouds',
            range: DiceHelper.generateRangeArrayFromStartToEnd(96, 100),
          },
        ]
      },
      {
        text: 'Sleet',
        range: DiceHelper.generateRangeArrayFromStartToEnd(66, 75),
        cloudCover: [
          {
            text: 'Sparse',
            range: DiceHelper.generateRangeArrayFromStartToEnd(1, 10),
          },
          {
            text: 'Cloudy',
            range: DiceHelper.generateRangeArrayFromStartToEnd(11, 35),
          },
          {
            text: 'Overcast',
            range: DiceHelper.generateRangeArrayFromStartToEnd(36, 90),
          },
          {
            text: 'Stormclouds',
            range: DiceHelper.generateRangeArrayFromStartToEnd(91, 100),
          },
        ]
      },
      {
        text: 'Snow',
        range: DiceHelper.generateRangeArrayFromStartToEnd(76, 100),
        cloudCover: [
          {
            text: 'Sparse',
            range: DiceHelper.generateRangeArrayFromStartToEnd(1, 20),
          },
          {
            text: 'Cloudy',
            range: DiceHelper.generateRangeArrayFromStartToEnd(21, 45),
          },
          {
            text: 'Overcast',
            range: DiceHelper.generateRangeArrayFromStartToEnd(46, 80),
          },
          {
            text: 'Stormclouds',
            range: DiceHelper.generateRangeArrayFromStartToEnd(81, 100),
          },
        ]
      },
    ],
    wind: [
      {
        text: 'Still',
        range: DiceHelper.generateRangeArrayFromStartToEnd(1, 40),
      },
      {
        text: 'Breezy',
        range: DiceHelper.generateRangeArrayFromStartToEnd(41, 50),
      },
      {
        text: 'Gusty',
        range: DiceHelper.generateRangeArrayFromStartToEnd(51, 65),
      },
      {
        text: 'Windy',
        range: DiceHelper.generateRangeArrayFromStartToEnd(66, 85),
      },
      {
        text: 'Wind Storm',
        range: DiceHelper.generateRangeArrayFromStartToEnd(86, 100),
      },
    ]
  },
  {
    text: 'Polar - Extremely cold temperatures with moderate precipitation',
    temperatureTable: [
      {
        text: 'Below Freezing',
        range: DiceHelper.generateRangeArrayFromStartToEnd(1, 40)
      },
      {
        text: 'Freezing',
        range: DiceHelper.generateRangeArrayFromStartToEnd(41, 70)
      },
      {
        text: 'Very Cold',
        range: DiceHelper.generateRangeArrayFromStartToEnd(71, 100)
      },
    ],
    precipitation: [
      {
        text: 'None',
        range: DiceHelper.generateRangeArrayFromStartToEnd(1, 60),
        cloudCover: [
          {
            text: 'Clear',
            range: DiceHelper.generateRangeArrayFromStartToEnd(1, 60),
          },
          {
            text: 'Sparse',
            range: DiceHelper.generateRangeArrayFromStartToEnd(61, 75),
          },
          {
            text: 'Cloudy',
            range: DiceHelper.generateRangeArrayFromStartToEnd(76, 85),
          },
          {
            text: 'Overcast',
            range: DiceHelper.generateRangeArrayFromStartToEnd(86, 95),
          },
          {
            text: 'Stormclouds',
            range: DiceHelper.generateRangeArrayFromStartToEnd(96, 100),
          },
        ]
      },
      {
        text: 'Snow',
        range: DiceHelper.generateRangeArrayFromStartToEnd(61, 100),
        cloudCover: [
          {
            text: 'Sparse',
            range: DiceHelper.generateRangeArrayFromStartToEnd(1, 20),
          },
          {
            text: 'Cloudy',
            range: DiceHelper.generateRangeArrayFromStartToEnd(21, 45),
          },
          {
            text: 'Overcast',
            range: DiceHelper.generateRangeArrayFromStartToEnd(46, 80),
          },
          {
            text: 'Stormclouds',
            range: DiceHelper.generateRangeArrayFromStartToEnd(81, 100),
          },
        ]
      },
    ],
    wind: [
      {
        text: 'Still',
        range: DiceHelper.generateRangeArrayFromStartToEnd(1, 45),
      },
      {
        text: 'Breezy',
        range: DiceHelper.generateRangeArrayFromStartToEnd(46, 55),
      },
      {
        text: 'Gusty',
        range: DiceHelper.generateRangeArrayFromStartToEnd(56, 70),
      },
      {
        text: 'Windy',
        range: DiceHelper.generateRangeArrayFromStartToEnd(71, 85),
      },
      {
        text: 'Wind Storm',
        range: DiceHelper.generateRangeArrayFromStartToEnd(86, 95),
      },
      {
        text: 'Tornado',
        range: DiceHelper.generateRangeArrayFromStartToEnd(96, 100),
      },
    ]
  },
  ]

  temperatureExplanation = [
    {
      name : "Below Freezing",
      range: "(-25°C) - (-10°C) / (-13F°) - (14F°)",
    },
    {
      name : "Freezing",
      range: "(-9°C) - (0°C) / (15.8F°) - (32F°)",
    },
    {
      name : "Very Cold",
      range: "(1°C) - (5°C) / (33.8F°) - (41F°)",
    },
    {
      name : "Cold",
      range: "(6°C) - (15°C) / (42.8F°) - (59F°)",
    },
    {
      name : "Cool",
      range: "(16°C - 25°C) / (60.8F°) - (77F°)",
    },
    {
      name : "Warm",
      range: "(26°) - (30°C) / (78.8F°) - (86F°)",
    },
    {
      name : "Hot",
      range: "(31°C) - (35°C) / (87.8F°) - (95F°)",
    },
    {
      name : "Sweltering",
      range: "36°C - 40°C / (96.8F°) - (104F°)",
    }
  ]

  climateSelected = this.climates[0]

  diceLog = false;
  result =   {
    text: '',
    temperature: '',
    rollTemperature: 0,
    temperatureDescription: '',
    precipitation: '',
    rollPrecipitation: 0,
    wind: '',
    rollWind: 0,
    rollCloudCover: 0,
    cloudCover: '',
  }
  
  private pathPdf = 'assets/ClimateWeatherTables.pdf';
  
  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit() {
    this.initSettings();
  }

  climateChanged() {
    setTimeout(() => {
      this.saveSettings();
    }, 100);
  }

  getDescriptionByName(name: string) {
    return (this.temperatureExplanation.find( x => x.name === name))?.range || '';
  }

  initSettings() {
    const settingsAsString = this.localStorageService.getItem('random-weather-settings');
    if (settingsAsString) {
      const settings = JSON.parse(settingsAsString)
      console.log('random-weather-settings', settings)
      this.diceLog = settings.diceLog;
      this.climateSelected = this.climates.find(x => x.text === settings.climateSelected.text) || this.climates[0]
    }
  }

  saveSettings() {
    const settings = {
      diceLog: this.diceLog,
      climateSelected: this.climateSelected,
    }
    this.localStorageService.setItem('random-weather-settings', JSON.stringify(settings));
  }

  startSimulation() {
    const climate = this.climates.find( x => x.text === this.climateSelected.text);
    if (climate) {
      this.result.text = climate.text; 
      this.result.rollTemperature = DiceHelper.rollADice(100);
      this.result.temperature = climate.temperatureTable.find( x => x.range.includes( this.result.rollTemperature))?.text || 'error'; 
      this.result.temperatureDescription = this.getDescriptionByName(this.result.temperature); 
      this.result.rollPrecipitation = DiceHelper.rollADice(100);
      const precipitationObj = climate.precipitation.find( x => x.range.includes(this.result.rollPrecipitation)); 
      this.result.precipitation = precipitationObj?.text || 'error'; 
      this.result.rollCloudCover = DiceHelper.rollADice(100);
      this.result.cloudCover = precipitationObj?.cloudCover.find( x => x.range.includes(this.result.rollCloudCover))?.text || 'error'; 
      this.result.rollWind = DiceHelper.rollADice(100);
      this.result.wind = climate.wind.find( x => x.range.includes(this.result.rollWind))?.text || 'error'; 
    }
    this.saveSettings();
  }

  downloadPdf() {
    const link = document.createElement('a');
    link.download = "ClimateWeatherTables.PDF";
    link.href = this.pathPdf
    link.click()
  } 

}


 
