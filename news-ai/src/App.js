import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";
import useStyles from "./styles";

const alanKey =
  "7db1211d5ebd703a25bb49633c7c816e2e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const classes = useStyles();
  const [newsArticles, setNewsArticles] = useState([]);
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
        }
      },
    });
  }, []);
  return (
    <div>
      <div className={classes.logoContainer}>
        <img
          src="https://miro.medium.com/max/1000/1*CLXr0JGZTZTrjPN5JGg5pQ.png"
          alt="logo"
          className={classes.alanLogo}
        />
      </div>
      <NewsCards articles={newsArticles} />
    </div>
  );
};

export default App;
