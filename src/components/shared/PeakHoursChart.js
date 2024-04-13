import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const PeakHoursChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const sampleData = [
      20, 15, 0, 1, 2, 0, 0, 10, 12, 20, 50, 0,
      20, 22, 25, 10, 0, 40, 10, 70, 20, 10, 30, 50
    ];

    // Filter data and prepare categories
    const filteredData = sampleData.filter(users => users > 0);
    const categories = [];
    for (let i = 0; i < sampleData.length; i++) {
      if (sampleData[i] > 0) {
        categories.push(`${i % 12 === 0 ? 12 : i % 12}${i < 12 ? 'am' : 'pm'}`);
      }
    }

    console.log('categories:', categories);
    console.log('filteredData:', filteredData);

    // Chart options
    const chartOptions = {
      chart: {
        type: 'bar',
        height: 300,
        toolbar: { show: false }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '50%',
          dataLabels: { position: 'top' }
        }
      },
      dataLabels: {
        enabled: true,
        offsetY: -20,
        style: { fontSize: '13px', colors: ['#ffffff'], fontFamily: 'Public Sans' }
      },
      colors: ['#7367f0'],
      xaxis: {
        categories: categories,
        labels: { style: { fontSize: '13px', colors: '#333', fontFamily: 'Public Sans' } }
      }
    };

    // Render chart if necessary data is available
    if (chartRef.current && categories.length > 0 && filteredData.length > 0) {
      const apexChart = new ApexCharts(chartRef.current, chartOptions);
      apexChart.render();

      return () => {
        apexChart.destroy();
      };
    }
  }, []); // Empty dependency array ensures this effect runs only once

  return <div ref={chartRef} />;
};

export default PeakHoursChart;
