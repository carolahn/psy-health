import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import PsiForm from "../psi-page/psi-perfil";
import { MainContainer, MainWrapper } from "./styled";

const SchedulingPage = () => {
  const { id } = useParams();
  const history = useHistory();
  // const dispatch = useDispatch();

  // const allPsiFromSearch = useSelector((state) => state.search.psychologists);
  // const allPsiFromLogin = useSelector((state) => state.login.psiList);
  const login = useSelector((state) => state.login);
  const allAppointments = useSelector((state) => state.appointments.allAppointments);

  const oneUser = useSelector((state) => state.appointments.psiInfo);
  // const [oneUser, setOneUser] = useState({});
  // let data = {};
  useEffect(() => {
    if (
      JSON.stringify(allAppointments) === "{}" ||
      JSON.stringify(login) === "{}" ||
      JSON.stringify(oneUser) === "{}"
    ) {
      console.log("vazio");
      console.log("allAppointments", allAppointments);
      console.log("login", login);
      console.log("oneUser", oneUser);
    }
  }, [oneUser]);

  // useEffect(() => {
  //   setOneUser({ ...data });
  // }, []);

  // let oneUser = {};
  // if (JSON.stringify(allPsiFromSearch) !== "[]") {
  //   oneUser = allPsiFromSearch.filter((item) => item.id == id)[0];
  //   console.log("oneUser from Search", oneUser);
  // } else if (JSON.stringify(allPsiFromLogin) !== "[]") {
  //   oneUser = allPsiFromLogin.filter((item) => item.id == id)[0];
  //   console.log("oneUser from Login", oneUser);
  // }

  // useEffect(() => {
  //   if (JSON.stringify(allPsiFromSearch) !== "[]") {
  //     const data = allPsiFromSearch.filter((item) => item.id == id)[0];
  //     setOneUser({ ...data });
  //     console.log("oneUser from Search", oneUser);
  //   } else if (JSON.stringify(allPsiFromLogin) !== "[]") {
  //     const data = allPsiFromLogin.filter((item) => item.id == id)[0];
  //     setOneUser({ ...data });
  //     console.log("oneUser from Login", oneUser);
  //   }
  // }, []);

  // console.log("oneUser from Search", oneUser);
  // console.log("allAppointments", allAppointments);
  // console.log("login", login);
  return (
    <MainContainer className="scheduling-page">
      <MainWrapper>
        {JSON.stringify(allAppointments) !== "{}" ||
        JSON.stringify(login) !== "{}" ||
        JSON.stringify(oneUser) !== "{}" ? (
          <PsiForm
            oneUser={oneUser}
            login={login}
            allAppointments={allAppointments}
            isEditable={false}
          />
        ) : (
          ""
        )}
      </MainWrapper>
    </MainContainer>
  );
};

export default SchedulingPage;
