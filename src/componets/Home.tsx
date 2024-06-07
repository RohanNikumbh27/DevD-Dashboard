// Home.tsx

import data from "../data/sample-data.json"; // Adjust the path as necessary
import Author from "./Author";

const Home = () => {
  const authors = data.data.AuthorWorklog.rows;

  return (
    <center>
      <h1>Authors List</h1>
      {/* <ul>
        {authors.map((author, index) => (
          <li key={index}>
            <Link to={ <Author/>}>{author.name}</Link>
          </li>
        ))}
      </ul> */}

      <Author />
    </center>
  );
};

export default Home;
