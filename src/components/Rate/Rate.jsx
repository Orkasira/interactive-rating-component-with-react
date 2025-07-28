import "./Rate.css";
import star from "../../assets/star.png";

function Rate({ number, setNumber, setSubmit }) {
  const items = [1, 2, 3, 4, 5];

  const handleClick = (item) => {
    setNumber(item);
    console.log(item);
  };

  const handleSubmit = () => {
    if (number !== null) {
      setSubmit(true);
    } else {
      alert("გთხოვ აირჩიე შეფასება სანამ Submit-ს დააჭერ.");
    }
  };

  return (
    <>
      <section>
        <div className="circle">
          <img src={star} />
        </div>
        <h1 className="title">How did we do?</h1>
        <p className="para">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="btns">
          {items.map((item, index) => (
            <div
              key={index}
              className="btn"
              style={
                number == item
                  ? { backgroundColor: "#FC7614", color: "white" }
                  : {}
              }
              onClick={() => handleClick(item)}
            >
              {item}
            </div>
          ))}
        </div>
        <button className="submit" onClick={handleSubmit}>
          SUBMIT
        </button>
      </section>
    </>
  );
}

export default Rate;
