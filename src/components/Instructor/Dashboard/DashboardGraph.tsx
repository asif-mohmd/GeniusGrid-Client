import { defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { instructoraxios } from "../../../constraints/axiosInterceptors/instructorAxiosInterceptors";
import instructorEndpoints from "../../../constraints/endpoints/instructorEndpoints";
import { format } from "date-fns";
import { FaSpinner } from "react-icons/fa";

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.color = "black";

interface GraphDataPoint {
  revenue: number;
  date: string;
}

interface AccumulatedValue {
  [key: string]: { totalRevenue: number };
}

export const DashboardGraph = () => {
  const [graphData, setGraphData] = useState<GraphDataPoint[]>([]);

  useEffect(() => {
    async function fetchGraphData() {
      try {
        const response = await instructoraxios.get(
          instructorEndpoints.orderAnalysis
        );
        // Ensure that response.data is an array
        if (Array.isArray(response.data)) {
          setGraphData(response.data);
        } else if (response.data && Array.isArray(response.data.response)) {
          setGraphData(response.data.response);
        } else {
          console.error("Unexpected data format:", response.data);
        }
      } catch (err) {
        console.error("Error fetching course data:", err);
      }
    }

    fetchGraphData();
  }, []);


  // Group revenue data by month
  const monthlyData = graphData.reduce<AccumulatedValue>((acc, data) => {
    const monthKey = format(new Date(data.date), "MMM yyyy");
    if (!acc[monthKey]) {
      acc[monthKey] = { totalRevenue: 0 };
    }
    acc[monthKey].totalRevenue += data.revenue;
    return acc;
  }, {});

  const labels = Object.keys(monthlyData);
  const revenues = Object.values(monthlyData).map((data) => data.totalRevenue);


  return (
    <>
      <div className="h-screen w-full flex flex-col items-center pt-8 bg-slate-50">
        <div className="bg-white rounded-lg shadow-lg p-4 w-full sm:w-4/5 h-80">
          {graphData.length > 0 ? (
            <Line
              data={{
                labels: labels,
                datasets: [
                  {
                    label: "Revenue",
                    data: revenues,
                    backgroundColor: "#064FF0",
                    borderColor: "#064FF0",
                  },
                ],
              }}
              options={{
                elements: {
                  line: {
                    tension: 0.5,
                  },
                },
                plugins: {
                  title: {
                    text: "Monthly Revenue",
                  },
                },
              }}
            />
          ) : (
            <p>
              {graphData.length === 0
                ? "No data available"
                : <div className="flex justify-center items-center min-h-[200px]">
                <FaSpinner className="animate-spin text-3xl text-blue-500" />
              </div>}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default DashboardGraph;
