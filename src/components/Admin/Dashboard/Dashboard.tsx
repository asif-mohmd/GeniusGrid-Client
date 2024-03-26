import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function Dashboard() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart>();

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        if (chartInstance.current) {
          // Destroy previous chart instance
          chartInstance.current.destroy();
        }
        chartInstance.current = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
    }
    // Cleanup function to destroy the chart instance when component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="mx-auto max-w-2xl"> {/* Adjust max width to your desired size */}
      <div className='md:m-10' style={{ width: '100%', height: '500px' }}>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
}

export default Dashboard;
