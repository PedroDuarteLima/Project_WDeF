import { StyleSheet } from "react-native";

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  container2: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },

  button__home: {
    marginRight: 20,
  },

  bg: {
    backgroundColor: "#817d7d",
  },

  login__msg: (text = "none") => ({
    fontWeight: "900",
    fontSize: 22,
    color: "red",
    marginTop: 5,
    marginBottom: 15,
    display: text,
  }),

  login__form: {
    width: "80%",
  },

  login__input: {
    backgroundColor: "#FFF",
    fontSize: 19,
    padding: 7,
    marginBottom: 15,
  },

  login__button: {
    padding: 12,
    backgroundColor: "#9f0602",
    alignSelf: "center",
    borderRadius: 5,
  },

  buttonText: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#FFF",
  },

  login__icon: {
    marginBottom: 10,
  },

  area__tab: {
    backgroundColor: "#333",
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },

  area__menu: {
    flexDirection: "row",
    paddingTop: 40,
    paddingBottom: 10,
    width: "100%",
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
  },

  button__home2: {
    textAlign: "left",
  },

  area__title: {
    width: "80%",
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },

  button__logout: {
    textAlign: "right",
  },

  containerTop: {
    justifyContent: "flex-start",
  },
});

export { css };
