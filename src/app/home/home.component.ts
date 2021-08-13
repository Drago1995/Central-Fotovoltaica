import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  

  constructor(private http: HttpClient) { }

  type = 'bar';
  options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      yAxes: [{
        ticks: {
          max: 100,
          min: 0
        }
      }]
    }
  };
  data: any;
  barchart: any;


  ngOnInit() {
    
    //web api call
    this.http.get('http://localhost/chartjs.php').subscribe(data => {
      this.barchart = data;


      this.data = {
        labels: this.barchart[0], //months
        datasets: [{
          label: "Angular 11",
          data: this.barchart[1][0],
          backgroundColor: "#f38b4a",
        }, {
          label: "Angular 12",
          data: this.barchart[1][1],
          backgroundColor: "#6970d5",
        }]
      };


    });
  } 


   /* ngOnInit() {
     gethour();
     getDataMegas();
   } */

}

var today = new Date();

var day = today.getDate();
var month = today.getMonth() + 1;
var year = today.getFullYear();
var current_date = year + '/' + month + '/' + day;

if (day < 10) {
  day = parseInt('0' + day);
} if (month < 10) {
  month = parseInt('0' + month);
}

console.log(current_date);


current_date = year + '-' + month + '-' + day;

const id1 = '1';
const id2 = '2';
const id3 = '3';
const id4 = '4';
const id5 = '5';
const id6 = '6';
const id7 = '7';
const id8 = '8';
const id9 = '9';
const id10 = '10';
const id11 = '11';
const id12 = '12';
const id13 = '13';
const id14 = '14';
const id15 = '15';
const id16 = '16';
const id17 = '17';
const id18 = '18';
const id19 = '19';
const id20 = '20';
const id21 = '21';

const accessToken = 'fIj6SZP7pmcoqqVm40wnX4yPxyreYEBlY8Q833AnBK5RJZvrSRhPQhpwhViepWo56WKoUj9DSa9Kp3kOxJg0nnJcRRNza1BMMHpcXMUAugU6-QiWn347hpaIvwKkceqp3iThUOV0JmzGdvrymntwfajQFAKDG-nbU6cb5sNhmvdCgIWTwrylmn_WF5LH7EIyXaYLdqTA6UrzMjiZPd58EaFzCAYRE2nqZIopX5ZOtXJkdrHmIHZMLCw3lFHA4K3quako7qZpsHqKLTGiG8X0hRaitRJWxpjOgtAzoASqn-yBAVqSMJASexaItqblyaXDDjtnf04e-GDE7aL2QxA6FgrQL41yo1d90QILTp99R7RYAnybBbjegB98Ny8jgYwHKNelGyJEj5VlElIGyETc-szQ9hjOMTy8NRnPOjzyPDYEoNGMxCCxF68n6IbdsuGyItatoJT5UPUy5QPlggm_M0AjmqyLUoeckP4ZgECpJf521i6OgTepDQzLwQZf9JmS_aujDL_U7rBp-pAxqWnhR8oY7zbCZiPJn_8UPm47Jzmniae41se95S6D1x0RvHWDIWY-nAbV3fwUzdzGA5TB9C20D2BVF531MBdTey538nMwFrQvNMZegs5dE2rPH7CUwycr3oI0lcxS7qJfGeMDzOiK_acDRWgYtC0co3m7l5G9kJozRmiKWIWwRR063CKZ';

const periodicity = 'periodicity=0';



const apiURL = 'https://monitor.iusasol.mx/v2.1/api/Reports/ISOL/Farm/Meter/Profiles?id=' + id1 + '&date=' + current_date + '&' + periodicity;
const apiURL1 = 'https://monitor.iusasol.mx/v2.1/api/Reports/ISOL/Farm/Meter/Profiles?id=' + id1 + '&date=' + current_date + '&' + periodicity;
const apiURL2 = 'https://monitor.iusasol.mx/v2.1/api/Reports/ISOL/Farm/Meter/Profiles?id=' + id2 + '&date=' + current_date + '&' + periodicity;
const apiURL3 = 'https://monitor.iusasol.mx/v2.1/api/Reports/ISOL/Farm/Meter/Profiles?id=' + id3 + '&date=' + current_date + '&' + periodicity;
const apiURL4 = 'https://monitor.iusasol.mx/v2.1/api/Reports/ISOL/Farm/Meter/Profiles?id=' + id4 + '&date=' + current_date + '&' + periodicity;
const apiURL5 = 'https://monitor.iusasol.mx/v2.1/api/Reports/ISOL/Farm/Meter/Profiles?id=' + id5 + '&date=' + current_date + '&' + periodicity;
const apiURL6 = 'https://monitor.iusasol.mx/v2.1/api/Reports/ISOL/Farm/Meter/Profiles?id=' + id6 + '&date=' + current_date + '&' + periodicity;
const apiURL7 = 'https://monitor.iusasol.mx/v2.1/api/Reports/ISOL/Farm/Meter/Profiles?id=' + id7 + '&date=' + current_date + '&' + periodicity;
const apiURL8 = 'https://monitor.iusasol.mx/v2.1/api/Reports/ISOL/Farm/Meter/Profiles?id=' + id8 + '&date=' + current_date + '&' + periodicity;
const apiURL9 = 'https://monitor.iusasol.mx/v2.1/api/Reports/ISOL/Farm/Meter/Profiles?id=' + id9 + '&date=' + current_date + '&' + periodicity;
const apiURL10 = 'https://monitor.iusasol.mx/v2.1/api/Reports/ISOL/Farm/Meter/Profiles?id=' + id10 + '&date=' + current_date + '&' + periodicity;
const apiURL11 = 'https://monitor.iusasol.mx/v2.1/api/Reports/ISOL/Farm/Meter/Profiles?id=' + id11 + '&date=' + current_date + '&' + periodicity;
const apiURL12 = 'https://monitor.iusasol.mx/v2.1/api/Reports/ISOL/Farm/Meter/Profiles?id=' + id12 + '&date=' + current_date + '&' + periodicity;
const apiURL13 = 'https://monitor.iusasol.mx/v2.1/api/Reports/ISOL/Farm/Meter/Profiles?id=' + id13 + '&date=' + current_date + '&' + periodicity;
const apiURL14 = 'https://monitor.iusasol.mx/v2.1/api/Reports/ISOL/Farm/Meter/Profiles?id=' + id14 + '&date=' + current_date + '&' + periodicity;
const apiURL15 = 'https://monitor.iusasol.mx/v2.1/api/Reports/ISOL/Farm/Meter/Profiles?id=' + id15 + '&date=' + current_date + '&' + periodicity;
const apiURL16 = 'https://monitor.iusasol.mx/v2.1/api/Reports/ISOL/Farm/Meter/Profiles?id=' + id16 + '&date=' + current_date + '&' + periodicity;
const apiURL17 = 'https://monitor.iusasol.mx/v2.1/api/Reports/ISOL/Farm/Meter/Profiles?id=' + id17 + '&date=' + current_date + '&' + periodicity;
const apiURL18 = 'https://monitor.iusasol.mx/v2.1/api/Reports/ISOL/Farm/Meter/Profiles?id=' + id18 + '&date=' + current_date + '&' + periodicity;
const apiURL19 = 'https://monitor.iusasol.mx/v2.1/api/Reports/ISOL/Farm/Meter/Profiles?id=' + id19 + '&date=' + current_date + '&' + periodicity;
const apiURL20 = 'https://monitor.iusasol.mx/v2.1/api/Reports/ISOL/Farm/Meter/Profiles?id=' + id20 + '&date=' + current_date + '&' + periodicity;
const apiURL21 = 'https://monitor.iusasol.mx/v2.1/api/Reports/ISOL/Farm/Meter/Profiles?id=' + id21 + '&date=' + current_date + '&' + periodicity;


const xlabels = [];

const y_mega1 = [];
const y_mega2 = [];
const y_mega3 = [];
const y_mega4 = [];
const y_mega5 = [];
const y_mega6 = [];
const y_mega7 = [];
const y_mega8 = [];
const y_mega9 = [];
const y_mega10 = [];
const y_mega11 = [];
const y_mega12 = [];
const y_mega13 = [];
const y_mega14 = [];
const y_mega15 = [];
const y_mega16 = [];
const y_mega17 = [];
const y_mega18 = [];
const y_mega19 = [];
const y_mega20 = [];
const y_mega21 = [];

/* const apiURL = 'https://monitor.iusasol.mx/v2.1/api/Farm/Meter/Profiles?id=' + idMeter + '&date=' + current_date + '&' + periodicity; */

/* const apiURL = 'https://monitor.iusasol.mx/v2.1/api/Reports/ISOL/Farm/Meter/Profiles?id=' + idMeter + '&date=' + current_date + '&' + periodicity; */

async function gethour() {

  try {
    const response = await axios.get(apiURL, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*',
        "cache-control": "no-cache",
        "content-type": "application/json; charset=utf-8",
        "expires": "-1",
        "pragma": "no-cache"
      }

    });

    const data = response.data;

    //horas del día
    for (let i = 0; i <= 288; i++) {
      const mega_horas = data.profiles[i].time;
      /* console.log(mega_horas); */
      xlabels.push(mega_horas);
    }
  } catch (error) {
    console.error(error);
  }
}


async function getDataMegas() {
  try {
    const response = await axios.get(apiURL1, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*',
        "cache-control": "no-cache",
        "content-type": "application/json; charset=utf-8",
        "expires": "-1",
        "pragma": "no-cache"
      }

    });
    /* console.log('Headers => ', response.headers); */
    const data = response.data;
    console.log('Data M1=>', data);
    //datos mega 1
    for (let i = 0; i <= 288; i++) {
      const kWh = data.profiles[i].channels[0];
      /* console.log(kWh); */
      y_mega1.push(parseFloat(kWh));
    }
  } catch (error) {
    console.error(error);
  }


  try {
    const response = await axios.get(apiURL2, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*',
        "cache-control": "no-cache",
        "content-type": "application/json; charset=utf-8",
        "expires": "-1",
        "pragma": "no-cache"
      }
    });
    /* console.log('Headers => ', response.headers); */
    const data = response.data;
    /* console.log('Data=>', data); */
    //datos mega 1
    for (let i = 0; i <= 288; i++) {
      const kWh = data.profiles[i].channels[0];
      /* console.log(kWh); */
      y_mega2.push(parseFloat(kWh));
    }
  } catch (error) {
    console.error(error);
  }


  try {
    const response = await axios.get(apiURL3, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*',
        "cache-control": "no-cache",
        "content-type": "application/json; charset=utf-8",
        "expires": "-1",
        "pragma": "no-cache"
      }
    });
    /* console.log('Headers => ', response.headers); */
    const data = response.data;
    /* console.log('Data=>', data); */
    //datos mega 1
    for (let i = 0; i <= 288; i++) {
      const kWh = data.profiles[i].channels[0];
      /* console.log(kWh); */
      y_mega3.push(parseFloat(kWh));
    }
  } catch (error) {
    console.error(error);
  }

  try {
    const response = await axios.get(apiURL4, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*',
        "cache-control": "no-cache",
        "content-type": "application/json; charset=utf-8",
        "expires": "-1",
        "pragma": "no-cache"
      }
    });
    /* console.log('Headers => ', response.headers); */
    const data = response.data;
    /* console.log('Data=>', data); */
    //datos mega 1
    for (let i = 0; i <= 288; i++) {
      const kWh = data.profiles[i].channels[0];
      /* console.log(kWh); */
      y_mega4.push(parseFloat(kWh));
    }
  } catch (error) {
    console.error(error);
  }


  try {
    const response = await axios.get(apiURL5, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*',
        "cache-control": "no-cache",
        "content-type": "application/json; charset=utf-8",
        "expires": "-1",
        "pragma": "no-cache"
      }
    });
    /* console.log('Headers => ', response.headers); */
    const data = response.data;
    /* console.log('Data=>', data); */
    //datos mega 1
    for (let i = 0; i <= 288; i++) {
      const kWh = data.profiles[i].channels[0];
      /* console.log(kWh); */
      y_mega5.push(parseFloat(kWh));
    }
  } catch (error) {
    console.error(error);
  }

  try {
    const response = await axios.get(apiURL6, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*',
        "cache-control": "no-cache",
        "content-type": "application/json; charset=utf-8",
        "expires": "-1",
        "pragma": "no-cache"
      }
    });
    /* console.log('Headers => ', response.headers); */
    const data = response.data;
    /* console.log('Data=>', data); */
    //datos mega 1
    for (let i = 0; i <= 288; i++) {
      const kWh = data.profiles[i].channels[0];
      /* console.log(kWh); */
      y_mega6.push(parseFloat(kWh));
    }
  } catch (error) {
    console.error(error);
  }


}




/* async function chartIt() {
  await getDataMegas();

  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [
        {
          data: y_mega1,
          label: 'Mega 1',
          borderColor: '#FE7575',
          backgroundColor: '#FE7575',
          fill: false,
          borderWidth: 2,
          pointRadius: 1,


          yAxisID: 'left-y-axis'
        },

        {
          data: y_mega2,
          label: 'Mega 2',
          borderColor: '#FEC243',
          backgroundColor: '#FEC243',
          fill: false,
          borderWidth: 2,
          pointRadius: 1,

        },
        {
          data: y_mega3,
          label: 'Mega 3',
          borderColor: '#FEEB43',
          backgroundColor: '#FEEB43',
          fill: false,
          borderWidth: 2,
          pointRadius: 1,

        },
        {
          data: y_mega4,
          label: 'Mega 4',
          borderColor: '#DEFE43',
          backgroundColor: '#DEFE43',
          fill: false,
          borderWidth: 2,
          pointRadius: 1,

        },
        {
          data: y_mega5,
          label: 'Mega 5',
          borderColor: '#FCF802',
          backgroundColor: '#FCF802',
          fill: false,
          borderWidth: 2,
          pointRadius: 1,

        },
        {
          data: y_mega6,
          label: 'Mega 6',
          borderColor: '#7EFE43',
          backgroundColor: '#7EFE43',
          fill: false,
          borderWidth: 2,
          pointRadius: 1,

        },
        {
          data: y_mega7,
          label: 'Mega 7',
          borderColor: '#0AFA16',
          backgroundColor: '#0AFA16',
          fill: false,
          borderWidth: 2,
          pointRadius: 1,

        },
        {
          data: y_mega8,
          label: 'Mega 8',
          borderColor: '#0AFA7A',
          backgroundColor: '#0AFA7A',
          fill: false,
          borderWidth: 2,
          pointRadius: 1,

        },
        {
          data: y_mega9,
          label: 'Mega 9',
          borderColor: '#0AFAB6',
          backgroundColor: '#0AFAB6',
          fill: false,
          borderWidth: 2,
          pointRadius: 1,

        },
        {
          data: y_mega10,
          label: 'Mega 10',
          borderColor: '#0AEEFA',
          backgroundColor: '#0AEEFA',
          fill: false,
          borderWidth: 2,
          pointRadius: 1,

        },
        {
          data: y_mega11,
          label: 'Mega 11',
          borderColor: '#0AA6FA',
          backgroundColor: '#0AA6FA',
          fill: false,
          borderWidth: 2,
          pointRadius: 1,

        },
        {
          data: y_mega12,
          label: 'Mega 12',
          borderColor: '#0A7AFA',
          backgroundColor: '#0A7AFA',
          fill: false,
          borderWidth: 2,
          pointRadius: 1,

        },
        {
          data: y_mega13,
          label: 'Mega 13',
          borderColor: '#0A32FA',
          backgroundColor: '#0A32FA',
          fill: false,
          borderWidth: 2,
          pointRadius: 1,

        },
        {
          data: y_mega14,
          label: 'Mega 14',
          borderColor: '#720AFA',
          backgroundColor: '#720AFA',
          fill: false,
          borderWidth: 2,
          pointRadius: 1,

        },
        {
          data: y_mega15,
          label: 'Mega 15',
          borderColor: '#C20AFA',
          backgroundColor: '#C20AFA',
          fill: false,
          borderWidth: 2,
          pointRadius: 1,

        },
        {
          data: y_mega16,
          label: 'Mega 16',
          borderColor: '#FA0AFA',
          backgroundColor: '#FA0AFA',
          fill: false,
          borderWidth: 2,
          pointRadius: 1,

        },
        {
          data: y_mega17,
          label: 'Mega 17',
          borderColor: '#FA0A7E',
          backgroundColor: '#FA0A7E',
          fill: false,
          borderWidth: 2,
          pointRadius: 1,

        },
        {
          data: y_mega18,
          label: 'Mega 18',
          borderColor: '#FA0A52',
          backgroundColor: '#FA0A52',
          fill: false,
          borderWidth: 2,
          pointRadius: 1,

        },
        {
          data: y_mega19,
          label: 'Mega 19',
          borderColor: '#FA0A0E',
          backgroundColor: '#FA0A0E',
          fill: false,
          borderWidth: 2,
          pointRadius: 1,

        },
        {
          data: y_mega20,
          label: 'Mega 20',
          borderColor: '#5B5656',
          backgroundColor: '#5B5656',
          fill: false,
          borderWidth: 2,
          pointRadius: 1,

        },
        {
          data: y_mega21,
          label: 'Mega 21',
          borderColor: '#000000',
          backgroundColor: '#000000',
          fill: false,
          borderWidth: 2,
          pointRadius: 1,

        }

      ],
      labels: xlabels
    },
    options: {
      scales: {
        yAxes: [{
          id: 'left-y-axis',
          type: 'linear',
          position: 'left',
          ticks: {
            callback: function (value, index, values) {
              return value + ' KWh';
            }
          }
        }]
      }
    }
  });
} */