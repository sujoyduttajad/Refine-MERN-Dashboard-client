import { ApexOptions } from 'apexcharts';
import { getMonthNames, getMonthShortNames } from 'utils/functions';

export const TotalRevenueOptions: ApexOptions = {
  chart: {
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  colors: ['#475BE8', '#9F45E8'],
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
      text: 'Net Profit/Loss in $ (thousands)',
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

// --------------- CUSTOMER COLUMN CHART --------------
export const ColumnBarData: ApexOptions = {
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false // hide the download dropdown menu
    }
  },
  colors: ['#475BE8'],
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
    categories: getMonthShortNames(),
  },
  yaxis: {
    title: {
      text: 'Customers'
    }
  },
  grid: {
    show: false,
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

// --------------- AREA CHART --------------
export const PropertiesPerMonth: ApexOptions = {
  chart: {
    type: 'area',
    height: 350,
    zoom: {
      enabled: false
    },
    toolbar: {
      autoSelected: "pan",
      show: false // hide the download dropdown menu
    }
  },
  colors: ['#475BE8', '#9F45E8'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  markers: {
    size: 6,
  },
  xaxis: {
    categories: getMonthNames(),
  },
  yaxis: {
    title: {
      text: 'No of properties',
    },
  },
  fill: {
    type: "gradient",
    // gradient: {
    //   shadeIntensity: 1,
    //   opacityFrom: 0.3,
    //   opacityTo: 0.9,
    //   stops: [0, 90, 100]
    // }
  },
  grid: {
    borderColor: "#555",
    yaxis: {
      lines: {
        show: false
      }
    },
    xaxis: {
      lines: {
        show: false
      }
    }
  },
  legend: {
    horizontalAlign: 'left'
  },
  tooltip: {
    y: {
      formatter(val: number) {
        return `${val}`;
      },
    },
  },
};