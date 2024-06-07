// Author.tsx
import { useParams } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import data from "../data/sample-data.json"; // Adjust the path as necessary

const Author = () => {
  const { name } = useParams<{ name: string }>();
  const author = data.data.AuthorWorklog.rows.find((a) => a.name === name);

  if (!author) {
    return <div>Author not found</div>;
  }

  const chartData = {
    labels: author.totalActivity.map((activity) => activity.name),
    datasets: [
      {
        label: "Activity Count",
        data: author.totalActivity.map((activity) => activity.value),
        backgroundColor: author.totalActivity.map((activity) => {
          const meta = data.data.AuthorWorklog.activityMeta.find(
            (m) => m.label === activity.name
          );
          return meta ? meta.fillColor : "#000";
        }),
      },
    ],
  };

  return (
    <div>
      <h1>{author.name}</h1>
      <h2>Activity Details</h2>
      <ul>
        {author.totalActivity.map((activity, index) => (
          <li key={index}>
            {activity.name}: {activity.value}
          </li>
        ))}
      </ul>
      <h2>Activity Chart</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default Author;
