import { ApexOptions } from 'apexcharts';
import { getMonthNames } from 'utils/functions';

export const TotalRevenueSeries = [
  {
    name: 'Last Month',
    data: [183, 124, 115, 85],
  },
  {
    name: 'Running Month',
    data: [95, 84, 72, 44],
  },
];

function updateRevenueSeries() {
  const currentMonth = new Date().getMonth();
  const randomValue = Math.floor(Math.random() * 100);

  TotalRevenueSeries.forEach((series) => {
    const lastIndex = series.data.length - 1;
    if (series.data[lastIndex] && lastIndex === currentMonth) {
      series.data[lastIndex] += randomValue;
    } else {
      series.data.push();
    }
  });
}
updateRevenueSeries();

export const TotalRevenueOptions: ApexOptions = {
  chart: {
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  colors: ['#475BE8', '#CFC8FF'],
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
      columnWidth: '55%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  stroke: {
    colors: ['transparent'],
    width: 4,
  },
  xaxis: {
    categories: getMonthNames(),
  },
  yaxis: {
    title: {
      text: '$ (thousands )',
    },
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
  },
  tooltip: {
    y: {
      formatter(val: number) {
        return `$ ${val} thousands`;
      },
    },
  },
};

export const ColumnBarSeries = [{
  name: 'Customers',
  data: [44, 55, 57, 56, 61]
}];

export const ColumnBarData: ApexOptions = {
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false // hide the download dropdown menu
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: [ 'Nov','Dec', 'Jan', 'Feb', 'Mar' ],
  },
  yaxis: {
    title: {
      text: 'Customers'
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val: number) {
        return val + " people"
      }
    }
  }
};
