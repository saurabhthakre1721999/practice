import Header from "./header";
import Footer from "./footer";

const Home = () => {
  const para = () => {
    var a = 0;
    a++;
    console.log("like", { a });
  };
  const key = (g) => {
    console.log(g.target.value);
  };
  return (
    <div>
      <Header />
      <ul>
        <li>home </li>
        <li>about</li>
        <li>para</li>
        <li>copy</li>
      </ul>
      <Footer />
      <button onClick={para}>like </button>
      <input type="search" onChange={key} />
    </div>
  );
};
export default Home;
