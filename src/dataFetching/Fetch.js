import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    // padding: "10px",
  },
}));

export default function Fetch() {
  const classes = useStyles();
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("reacthooks");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const seachInputRef = useRef();

  useEffect(() => {
    getResults();
    // axios
    //   .get("http://hn.algolia.com/api/v1/search?query=reacthooks")
    //   .then((response) => {
    //     console.log(response.data.hits);
    //     setResults(response.data.hits);
    //   });
  }, []);

  const getResults = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://hn.algolia.com/api/v1/search?query=${query}`
      );
      setResults(response.data.hits);
      setError(null);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    getResults();
  };

  const handleClearSearch = (event) => {
    setQuery("");
    seachInputRef.current.focus();
  };

  return (
    <>
      <CssBaseline />
      <AppBar
        position="relative"
        color="primary"
        style={{ alignItems: "center" }}
      >
        <h2>Fetch Data</h2>
      </AppBar>
      <Container maxWidth="sm" style={{ marginTop: "5em" }}>
        <form onSubmit={handleSearch} className={classes.margin}>
          <Grid container>
            <Grid item sm={6} xs={12}>
              <TextField
                type="text"
                size="small"
                variant="outlined"
                onChange={(event) => {
                  setQuery(event.target.value);
                }}
                className={classes.margin}
                value={query}
                inputProps={{ ref: seachInputRef }}
                // ref={seachInputRef} //--> works with normal input
              />
            </Grid>
            <Grid container item sm={6} xs={12}>
              <Grid item xs={6}>
                <Button
                  color="primary"
                  type="submit"
                  className={classes.margin}
                  variant="outlined"
                  size="medium"
                >
                  Search
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  color="primary"
                  type="button"
                  variant="outlined"
                  size="medium"
                  className={classes.margin}
                  onClick={handleClearSearch}
                >
                  Clear
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
        {loading ? (
          <div>Loading . . .</div>
        ) : (
          <ul>
            {results.map((result) => (
              <li key={result.objectID}>
                <Link href={result.url} color="primary">
                  {result.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
        {error && <div>{error.message}</div>}
      </Container>
    </>
  );
}
