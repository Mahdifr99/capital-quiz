'use-strict';

const main = document.querySelector('main');
const question = document.querySelector('.question');
const options = document.querySelector('.options');
const answer = document.querySelector('.status');
const nextBtn = document.querySelector('.next-btn');
const trueAnswersCount = document.querySelector('.true-answers-count');
const falseAnswersCount = document.querySelector('.false-answers-count');
const timer = document.querySelector('.timer');
const highScore = document.querySelector('.highest-score');
const lastScore = document.querySelector('.last-score');
const resetBtn = document.querySelector('.reset-btn');
const startBtn = document.querySelector('.start-btn');

class App {
  #countriesAndCapitals = [
    'Afghanistan: Kabul',
    'Albania: Tirana (Tirane)',
    'Algeria: Algiers',
    'Andorra: Andorra la Vella',
    'Angola: Luanda',
    "Antigua and Barbuda: Saint John's",
    'Argentina: Buenos Aires',
    'Armenia: Yerevan',
    'Australia: Canberra',
    'Austria: Vienna',
    'Azerbaijan: Baku',
    'Bahamas: Nassau',
    'Bahrain: Manama',
    'Bangladesh: Dhaka',
    'Barbados: Bridgetown',
    'Belarus: Minsk',
    'Belgium: Brussels',
    'Belize: Belmopan',
    'Benin: Porto Novo[1]',
    'Bhutan: Thimphu',
    'Bolivia: La Paz (administrative), Sucre (official)[2]',
    'Bosnia and Herzegovina: Sarajevo',
    'Botswana: Gaborone',
    'Brazil: Brasilia',
    'Brunei: Bandar Seri Begawan',
    'Bulgaria: Sofia',
    'Burkina Faso: Ouagadougou',
    'Burundi: Gitega[3]',
    'Cambodia: Phnom Penh',
    'Cameroon: Yaounde',
    'Canada: Ottawa',
    'Cape Verde: Praia',
    'Central African Republic: Bangui',
    "Chad: N'Djamena",
    'Chile: Santiago',
    'China: Beijing',
    'Colombia: Bogota',
    'Comoros: Moroni',
    'Congo, Democratic Republic of the: Kinshasa',
    'Congo, Republic of the: Brazzaville',
    'Costa Rica: San Jose',
    "Côte d'Ivoire (Ivory Coast): Yamoussoukro[4]",
    'Croatia: Zagreb',
    'Cuba: Havana',
    'Cyprus: Nicosia',
    'Czech Republic (Czechia)[5]: Prague',
    'Denmark: Copenhagen',
    'Djibouti: Djibouti',
    'Dominica: Roseau',
    'Dominican Republic: Santo Domingo',
    'East Timor: Dili',
    'Ecuador: Quito',
    'Egypt: Cairo',
    'El Salvador: San Salvador',
    'England[6]: London',
    'Equatorial Guinea: Ciudad de la Paz[7]',
    'Eritrea: Asmara',
    'Estonia: Tallinn',
    'Eswatini (Swaziland)[8]: Mbabane[9]',
    'Ethiopia: Addis Ababa',
    'Federated States of Micronesia: Palikir',
    'Fiji: Suva',
    'Finland: Helsinki',
    'France: Paris',
    'Gabon: Libreville',
    'Gambia: Banjul',
    'Georgia: Tbilisi',
    'Germany: Berlin',
    'Ghana: Accra',
    'Greece: Athens',
    "Grenada: Saint George's",
    'Guatemala: Guatemala City',
    'Guinea: Conakry',
    'Guinea-Bissau: Bissau',
    'Guyana: Georgetown',
    'Haiti: Port au Prince',
    'Honduras: Tegucigalpa',
    'Hungary: Budapest',
    'Iceland: Reykjavik',
    'India: New Delhi',
    'Indonesia: Jakarta[10]',
    'Iran: Tehran',
    'Iraq: Baghdad',
    'Ireland: Dublin',
    'Italy: Rome',
    'Jamaica: Kingston',
    'Japan: Tokyo',
    'Jordan: Amman',
    'Kazakhstan: Astana[12]',
    'Kenya: Nairobi',
    'Kiribati: Tarawa Atoll',
    'Kosovo: Pristina',
    'Kuwait: Kuwait City',
    'Kyrgyzstan: Bishkek',
    'Laos: Vientiane',
    'Latvia: Riga',
    'Lebanon: Beirut',
    'Lesotho: Maseru',
    'Liberia: Monrovia',
    'Libya: Tripoli',
    'Liechtenstein: Vaduz',
    'Lithuania: Vilnius',
    'Luxembourg: Luxembourg',
    'Madagascar: Antananarivo',
    'Malawi: Lilongwe',
    'Malaysia: Kuala Lumpur[13]',
    'Maldives: Male',
    'Mali: Bamako',
    'Malta: Valletta',
    'Marshall Islands: Majuro',
    'Mauritania: Nouakchott',
    'Mauritius: Port Louis',
    'Mexico: Mexico City',
    'Moldova: Chisinau',
    'Monaco: Monaco',
    'Mongolia: Ulaanbaatar',
    'Montenegro: Podgorica',
    'Morocco: Rabat',
    'Mozambique: Maputo',
    'Myanmar (Burma): Nay Pyi Taw[14]',
    'Namibia: Windhoek',
    'Nauru: No official capital',
    'Nepal: Kathmandu',
    'Netherlands: Amsterdam[15]',
    'New Zealand: Wellington',
    'Nicaragua: Managua',
    'Niger: Niamey',
    'Nigeria: Abuja',
    'North Korea: Pyongyang',
    'North Macedonia (Macedonia)[16]: Skopje',
    'Northern Ireland[17]: Belfast',
    'Norway: Oslo',
    'Oman: Muscat',
    'Pakistan: Islamabad',
    'Palau: Ngerulmud',
    'Palestine[18]: Jerusalem (very limited international recognition)[19]',
    'Panama: Panama City',
    'Papua New Guinea: Port Moresby',
    'Paraguay: Asuncion',
    'Peru: Lima',
    'Philippines: Manila',
    'Poland: Warsaw',
    'Portugal: Lisbon',
    'Qatar: Doha',
    'Romania: Bucharest',
    'Russia: Moscow',
    'Rwanda: Kigali',
    'Saint Kitts and Nevis: Basseterre',
    'Saint Lucia: Castries',
    'Saint Vincent and the Grenadines: Kingstown',
    'Samoa: Apia',
    'San Marino: San Marino',
    'Sao Tome and Principe: Sao Tome',
    'Saudi Arabia: Riyadh',
    'Scotland[20]: Edinburgh',
    'Senegal: Dakar',
    'Serbia: Belgrade',
    'Seychelles: Victoria',
    'Sierra Leone: Freetown',
    'Singapore: Singapore',
    'Slovakia: Bratislava',
    'Slovenia: Ljubljana',
    'Solomon Islands: Honiara',
    'Somalia: Mogadishu',
    'South Africa: Pretoria, Bloemfontein, Cape Town[21]',
    'South Korea: Seoul',
    'South Sudan: Juba',
    'Spain: Madrid',
    'Sri Lanka: Sri Jayawardenapura Kotte[22]',
    'Sudan: Khartoum',
    'Suriname: Paramaribo',
    'Sweden: Stockholm',
    'Switzerland: Bern',
    'Syria: Damascus',
    'Taiwan[23]: Taipei',
    'Tajikistan: Dushanbe',
    'Tanzania: Dodoma[24]',
    'Thailand: Bangkok',
    'Togo: Lome',
    "Tonga: Nuku'alofa",
    'Trinidad and Tobago: Port of Spain',
    'Tunisia: Tunis',
    'Türkiye (Turkey)[25]: Ankara',
    'Turkmenistan: Ashgabat',
    'Tuvalu: Funafuti[26]',
    'Uganda: Kampala',
    'Ukraine: Kyiv or Kiev',
    'United Arab Emirates: Abu Dhabi',
    'United Kingdom: London',
    'United States: Washington D.C.',
    'Uruguay: Montevideo',
    'Uzbekistan: Tashkent',
    'Vanuatu: Port Vila',
    'Vatican City: Vatican City',
    'Venezuela: Caracas',
    'Vietnam: Hanoi',
    'Wales[27]: Cardiff',
    "Yemen: Sana'a[28]",
    'Zambia: Lusaka',
    'Zimbabwe: Harare',
  ];
  #capsArr = [];
  #randomNum = this._randomNumGenerator();
  #selectedCountry;
  #selectedCountryCap;
  #timerInterval;
  #allScores = [];
  #qNum =
    +trueAnswersCount.textContent + Number(falseAnswersCount.textContent) + 1;
  constructor() {
    this._init();
    this._timer();
    this._getlocalStorage();
    highScore.textContent = `High score:${this._getHighScore(this.#allScores)}`;
    lastScore.textContent = `Last score:${this._getLastScore(this.#allScores)}`;
    resetBtn.onclick = this._resetBtnFn.bind(this);
    startBtn.onclick = this._startBtnFn.bind(this);
  }
  _startBtnFn() {
    startBtn.classList.add('hidden');
    main.classList.remove('hidden');
    timer.textContent = 10;
    timer.classList.remove('hidden');
    this._restartTestFn();
    clearInterval(this.#timerInterval);
    new App();
  }
  _init() {
    this.#selectedCountry = this.#countriesAndCapitals
      .at(this.#randomNum)
      .split(':')
      .at(0);
    this.#selectedCountryCap = this.#countriesAndCapitals
      .at(this.#randomNum)
      .split(': ')
      .at(1);
    question.textContent = `${this.#qNum}/20:${this.#selectedCountry}?`;
    this._other3Caps();
  }
  _randomNumGenerator() {
    return Math.floor(Math.random() * 200);
  }
  _other3Caps() {
    this.#capsArr.push(this.#selectedCountryCap);
    this._choosingOtherCaps();
    this._sortCaps(this.#capsArr);
  }
  _choosingOtherCaps() {
    while (this.#capsArr.length < 4) {
      const newCap = this.#countriesAndCapitals
        .at(this._randomNumGenerator())
        .split(': ')
        .at(1);
      if (!this.#capsArr.includes(newCap)) this.#capsArr.push(newCap);
    }
  }
  _sortCaps(arr) {
    arr.sort().forEach((c) => {
      const option = document.createElement('li');
      option.classList.add('option');
      option.textContent = c;
      options.appendChild(option);
    });
    Array.from(options.children).forEach((op) =>
      op.addEventListener('click', this._clickFn.bind(this)),
    );
  }

  //
  _clickFn(e) {
    if (answer.textContent === '') {
      if (e.target.textContent === this.#selectedCountryCap)
        this._rightAnswer(e.target);
      if (e.target.textContent !== this.#selectedCountryCap)
        this._wrongAnswer();
    }
    nextBtn.classList.remove('hidden');
    resetBtn.classList.remove('hidden');
    nextBtn.onclick = this._nextBtnFn.bind(this);
  }
  _rightAnswer(trueAnswer) {
    Array.from(options.children).forEach(
      (c) => (c.style.backgroundColor = 'red'),
    );
    trueAnswer.style.backgroundColor = 'green';
    answer.textContent = 'You got it right🎉';
    trueAnswersCount.textContent++;
    clearInterval(this.#timerInterval);
    if (
      +trueAnswersCount.textContent + Number(falseAnswersCount.textContent) ===
      20
    )
      this._quizEnd();
  }
  _wrongAnswer() {
    Array.from(options.children).forEach((c) => {
      if (c.textContent === this.#selectedCountryCap) {
        c.style.backgroundColor = 'green';
      } else {
        c.style.backgroundColor = 'red';
        answer.textContent = 'You got it Wrong😱';
      }
    });
    falseAnswersCount.textContent++;
    clearInterval(this.#timerInterval);
    if (
      +trueAnswersCount.textContent + Number(falseAnswersCount.textContent) ===
      20
    )
      this._quizEnd();
  }
  _noAnswer() {
    Array.from(options.children).forEach(
      (c) => (c.style.backgroundColor = 'red'),
    );
    Array.from(options.children).forEach((c) => {
      if (c.textContent === this.#selectedCountryCap) {
        c.style.backgroundColor = 'green';
      }
    });
    falseAnswersCount.textContent++;
    nextBtn.classList.remove('hidden');
    resetBtn.classList.remove('hidden');
    nextBtn.onclick = this._nextBtnFn.bind(this);
    if (
      +trueAnswersCount.textContent + Number(falseAnswersCount.textContent) ===
      20
    )
      this._quizEnd();
  }
  _nextBtnFn() {
    if (nextBtn.textContent !== 'Restart Test') {
      options.innerHTML = '';
      this.#capsArr = [];
      answer.textContent = '';
      nextBtn.classList.add('hidden');
      this.#qNum++;
      timer.textContent = 10;
      new App();
    }
    if (nextBtn.textContent === 'Restart Test') {
      this._restartTestFn();
      new App();
    }
  }
  _restartTestFn() {
    options.innerHTML = '';
    this.#capsArr = [];
    answer.textContent = '';
    nextBtn.classList.add('hidden');
    timer.textContent = 10;
    trueAnswersCount.textContent = 0;
    falseAnswersCount.textContent = 0;
    nextBtn.textContent = 'Next ⏭️';
  }
  _timer() {
    this.#timerInterval = setInterval(() => {
      timer.textContent -= 1;
      timer.classList.toggle('red-timer');
      this._timeGettingZero();
    }, 1000);
  }
  _timeGettingZero() {
    if (timer.textContent < 1) {
      clearInterval(this.#timerInterval);
      timer.textContent = 0;
      answer.textContent = 'You ran out of time🥱';
      this._noAnswer();
    }
  }
  _quizEnd() {
    const score =
      (+trueAnswersCount.textContent * 100) /
      (+trueAnswersCount.textContent + +falseAnswersCount.textContent);
    answer.textContent = `Your score is ${score}%`;
    this.#allScores.push(score);
    answer.style.color = 'rgb(35, 107, 138)';
    nextBtn.textContent = 'Restart Test';
    this._setLocalstorage();
  }
  _setLocalstorage() {
    localStorage.setItem('Scores', JSON.stringify(this.#allScores));
  }
  _getlocalStorage() {
    const data = JSON.parse(localStorage.getItem('Scores'));
    if (!data) return;
    this.#allScores = data;
  }
  _clearScores() {
    localStorage.clear();
  }
  _getHighScore(arr) {
    if (arr.length === 0) return 0;
    if (arr.length !== 0) return Math.max(...arr);
  }
  _getLastScore(arr) {
    if (arr.length === 0) return 0;
    if (arr.length !== 0) return arr.at(-1);
  }
  _resetBtnFn() {
    this._clearScores();
    this._restartTestFn();
    new App();
  }
}

const newApp = new App();
