import "../index.css";
import { useEffect, useState, useContext } from "react";
import i18n from "../i18";
import { Context } from "../components/Context";

// {i18n.gettext("bePartOfTeam")}

export default function JoinAsADoctor() {
  useContext(Context);
  return <h1>Hello World</h1>;
}
