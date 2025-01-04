import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span>
        <a
          href="https://www.linkedin.com/in/jorgechirinosalferez"
          target={"_blank"}
        >
          {" "}
          <i className=" bx bxl-linkedin-square" />
        </a>
      </span>
      <span>
        <a href="" target={"_blank"}>
          {" "}
          <i className="bx bxl-facebook-square" />
        </a>
      </span>
      <span>
        <a
          href="https://github.com/jorgeanciel/pokedex-react"
          target={"_blank"}
        >
          {" "}
          <i className="bx bxl-github" />
        </a>
      </span>
    </div>
  );
};

export default Footer;
