new Morris.Line({

    element: 'morris-penjualan',

    data: [
      { period: '21 Nov', p: 312, pn: 123},
      { period: '22 Nov', p: 123, pn: 212},
      { period: '23 Nov', p: 432, pn: 153},
      { period: '24 Nov', p: 652, pn: 543},
      { period: '25 Nov', p: 132, pn: 235},
      { period: '26 Nov', p: 315, pn: 111},
      { period: '27 Nov', p: 143, pn: 222}
    ],

    xkey: 'period',
    ykeys: ['p', 'pn'],
    labels: ['Penjualan', 'Pengeluaran'],
    xLabelFormat: function (d) {
        var weekdays = new Array(7);
        weekdays[0] = "SUN";
        weekdays[1] = "MON";
        weekdays[2] = "TUE";
        weekdays[3] = "WED";
        weekdays[4] = "THU";
        weekdays[5] = "FRI";
        weekdays[6] = "SAT";
    
        return weekdays[d.getDay()] + '-' + 
               ("0" + (d.getMonth() + 1)).slice(-2) + '-' + 
               ("0" + (d.getDate())).slice(-2);
      },
    PointSize: 1,
    hideHover: 'auto',
    resize: true
  });