import { StyleSheet } from "react-native";

export default StyleSheet.create({
  home: {
    flex: 1,
    position: "relative",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#D4AEAE"
  },
  homeButton: {
    backgroundColor: "#e91e63",
    height: 200,
    width: 220,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },
  scrollContainer: {
    overflow: "hidden",
    position: "relative"
  },
  Content: {
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#ededed",
    alignContent: "space-between"
  },

  buttonText: {
    color: "#fff",
    fontSize: 20
  },
  Card: {
    alignItems: "stretch"
  },
  Text: {
    color: "grey"
  },
  title: {
    fontWeight: "bold",
    color: "grey",
    flex: 2
  },
  type: {
    flexDirection: "row"
  },
  Type: {
    alignSelf: "flex-end",
    backgroundColor: "#D4AEAE",
    color: "white",
    width: 70,
    height: 30,
    borderRadius: 5,
    padding: 5,
    textAlign: "center"
  },
  hour: {
    flexDirection: "row"
  },
  deleteButton: {
    alignSelf: "flex-end",
    backgroundColor: "#e91e63",
    width: 50,
    height: 35,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  formContainer: {
    flex: 1,
    paddingTop: 40,
    paddingRight: 40,
    paddingLeft: 40,
    backgroundColor: "#D4AEAE"
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    marginBottom: 15
  },
  red: {
    color: "red"
  }
});
