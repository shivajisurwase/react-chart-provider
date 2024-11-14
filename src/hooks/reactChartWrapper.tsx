import React from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';
import HighchartsStock from 'highcharts/modules/stock';
import HighchartsReact from 'highcharts-react-official';

if (typeof Highcharts === 'object' && Highcharts) {
  HighchartsStock(Highcharts);
}

interface ChartsWrapperProps {
  options: any;
  highcharts?: typeof Highcharts;
  constructorType?: string;
}

const ReactChartWrapper: React.FC<ChartsWrapperProps> = ({ options, highcharts, constructorType = 'stockChart' }) => {
  return <HighchartsReact highcharts={highcharts || Highcharts} options={options} constructorType={constructorType} />;
};

ReactChartWrapper.propTypes = {
  options: PropTypes.object.isRequired,
  highcharts: PropTypes.any,
  constructorType: PropTypes.string,
};

export default ReactChartWrapper;
