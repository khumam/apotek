$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: 'Senin',
            iphone: 2666,
            ipad: null,
            itouch: 2647
        }, {
            period: 'Senin',
            iphone: 2778,
            ipad: 2294,
            itouch: 2441
        }, {
            period: 'Senin',
            iphone: 4912,
            ipad: 1969,
            itouch: 2501
        }, {
            period: 'Senin',
            iphone: 3767,
            ipad: 3597,
            itouch: 5689
        }, {
            period: 'Senin',
            iphone: 6810,
            ipad: 1914,
            itouch: 2293
        }, {
            period: 'Senin',
            iphone: 5670,
            ipad: 4293,
            itouch: 1881
        }, {
            period: 'Senin',
            iphone: 4820,
            ipad: 3795,
            itouch: 1588
        }, {
            period: '2011 Q4',
            iphone: 15073,
            ipad: 5967,
            itouch: 5175
        }, {
            period: '2012 Q1',
            iphone: 10687,
            ipad: 4460,
            itouch: 2028
        }, {
            period: '2012 Q2',
            iphone: 8432,
            ipad: 5713,
            itouch: 1791
        }],
        xkey: 'period',
        ykeys: ['iphone', 'ipad', 'itouch'],
        labels: ['iPhone', 'iPad', 'iPod Touch'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    new Morris.Area({
        element: 'morris-penjualan',
        data: [{
            period: 'Senin Q1',
            Penjualan: 2666,
            Pengeluaran: 2111
        }, {
            period: 'Selasa Q2',
            Penjualan: 2778,
            Pengeluaran: 1213
        }, {
            period: 'Rabu Q3',
            Penjualan: 4912,
            Pengeluaran: 1003
        }, {
            period: 'Kamis Q4',
            Penjualan: 3767,
            Pengeluaran: 2311
        }, {
            period: 'Jumat Q5',
            Penjualan: 6810,
            Pengeluaran: 4312
        }, {
            period: 'Sabtu Q6',
            Penjualan: 5670,
            Pengeluaran: 3244
        }, {
            period: 'Minggu Q7',
            Penjualan: 4820,
            Pengeluaran: 2211
        }],
        xkey: 'period',
        ykeys: ['Penjualan','Pengeluaran'],
        labels: ['penjualan','Pengeluaran'],
        pointSize: 1,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });
    
});
